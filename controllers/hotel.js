import Hotel from "../models/Hotel.js";
import Room from "../models/Room.js";

//CREATE
export const createHotel = async (req,res,next) => {
    const newHotel = new Hotel(req.body);
    
    try {
        const savedHotel = await newHotel.save();
        res.status(200).json(savedHotel)
    } catch (error) {
        next(error);
    }
}

//UPDATE

export const updateHotel = async (req,res,next) => {
    try {
        const updatedHotel = await Hotel.findByIdAndUpdate(
            req.params.id, 
            {$set : req.body},
            {new: true }
        );
        res.status(200).json(updatedHotel);
    } catch (error) {
        next(error);
    }
}

//DELETE

export const deleteHotel = async (req,res,next) => {
    try {
        await Hotel.findByIdAndDelete(
            req.params.id
        );
        res.status(200).json("Hotel has been deleted");
    } catch (error) {
        next(error);
    }
}

//GET

export const getHotel = async (req,res,next) => {
    try {
        const hotel = await Hotel.findById(
            req.params.id
        );
        res.status(200).json(hotel);
    } catch (error) {
        next(error);
    }
}

//GET ALL

export const getHotels = async (req,res,next) => {
    const { min, max,limit, ...others } = req.query;
    const limitValue = parseInt(req.query.limit);
    const minValue = parseInt(req.query.min);
    const maxValue = parseInt(req.query.max);
    console.log(others);
    try {
        const hotels = await Hotel.find({
            ...others, 
            cheapestPrice: {$gt: minValue || 1, $lt:maxValue || 999},
        }).limit(limitValue);
       // console.log(hotels);
        res.status(200).json(hotels);
    } catch (error) {
        next(error);
    }
}

export const countByCity = async (req,res,next) => {
    const cities = req.query.cities.split(",");

    try {
        const list = await Promise.all(cities.map( city => {
            return Hotel.countDocuments({city:city})
        }))
        res.status(200).json(list);
    } catch (error) {
        next(error);
    }
}

export const countByType = async (req,res,next) => {
    try {
        const hotelCount = await Hotel.countDocuments({type:"hotel"});
        const apartmentCount = await Hotel.countDocuments({type:"apartment"});
        const resortCount = await Hotel.countDocuments({type:"resort"});
        const villaCount = await Hotel.countDocuments({type:"villa"});
        const cabinCount = await Hotel.countDocuments({type:"cabin"});

        res.status(200).json([
            {type:"hotel", count:hotelCount},
            {type:"apartments", count:apartmentCount},
            {type:"resorts", count:resortCount},
            {type:"villas", count:villaCount},
            {type:"cabins", count:cabinCount},
        ]);
    } catch (error) {
        next(error);
    }
}

export const getHotelRooms = async (req, res, next) => {
    try {
        const hotel = await Hotel.findById(req.params.id);
        const list = await Promise.all(hotel.rooms.map( room => {
            return Room.findById(room);
        }));
        res.status(200).json(list)
    } catch (error) {
        next(error)
    }
}