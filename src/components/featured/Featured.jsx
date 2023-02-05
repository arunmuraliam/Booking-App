import React from 'react'
import "./featured.css"

const Featured = () => {
  return (
    <div className='featured'>
        <div className="featuredItem">
            <img src="https://r-xx.bstatic.com/xdata/images/region/250x250/49646.jpg?k=b7f38878b9164ee38e0b99c4d4646dbea76b7bf4add8464b1aa75e4c9d0efc6e&o=" alt="" className="featuredImage" />
            <div className="featuredTitles">
                <h1>Dublin</h1>
                <h1>123 properties</h1>
            </div>
        </div>
        <div className="featuredItem">
            <img src="https://r-xx.bstatic.com/xdata/images/region/250x250/49646.jpg?k=b7f38878b9164ee38e0b99c4d4646dbea76b7bf4add8464b1aa75e4c9d0efc6e&o=" alt="" className="featuredImage" />
            <div className="featuredTitles">
                <h1>Austin</h1>
                <h1>123 properties</h1>
            </div>
        </div>
        <div className="featuredItem">
            <img src="https://r-xx.bstatic.com/xdata/images/region/250x250/49646.jpg?k=b7f38878b9164ee38e0b99c4d4646dbea76b7bf4add8464b1aa75e4c9d0efc6e&o=" alt="" className="featuredImage" />
            <div className="featuredTitles">
                <h1>Reno</h1>
                <h1>123 properties</h1>
            </div>
        </div>
    </div>
  )
}

export default Featured