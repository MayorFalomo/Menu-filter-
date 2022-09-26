import React, {useState} from 'react'
import "./NavBar.css"
import Menu from './Menu'

const NavBar = () => {

  const [selectedCategory, setSelectedCategory] = useState("All")

  const handleClick = (params) => {
    setSelectedCategory(params);
  }

  return (
      <div className='container'>
      <nav>
        <div className='item'>
        <h1>Our Menu</h1>
          <div className="line"></div>
          </div>
        <ul>
          <li><button className='btnType' onClick={() => handleClick("All")}>All</button></li> 
          <li><button className='btnType' onClick={() => handleClick("Breakfast")}>BreakFast</button></li>
          <li><button className='btnType'  onClick={() => handleClick("Lunch")}>Lunch</button></li>
          <li><button className='btnType'  onClick={() => handleClick("Shakes")}>Shakes</button></li>
        </ul>
        </nav>
      <Menu selectedCategory={selectedCategory} />
      </div>

  )
}

export default NavBar