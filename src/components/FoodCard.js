import React from 'react'
import "./FoodCard.css"

const FoodCard = ({ data}) => {
    

    return (
      <div className='mainContent'>
          <div className='imagery'><img src={data.img} alt="img" /></div>
          <div className='flexCard'>
          <div className='flexItem'>
          <h4 className='foodName'>{data.foodName}</h4>
              <span className='foodPrice'>{data.price}</span>
              </div>
              <p className='description'>{data.description}</p>
        </div>
    </div>
  )
}

export default FoodCard