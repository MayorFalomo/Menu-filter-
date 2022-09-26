import React, { useState } from 'react'
import "./Menu.css"
import FoodCard from "./FoodCard"

const Menu = ({selectedCategory}) => {

    const [foods, setFoods] = useState([
        {
            img: "https://react-projects-5-menu.netlify.app/images/item-1.jpeg",
            foodName: "ButterMilk Pancakes",
            price: "$15",
            description: "I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed",
            category: "BreakFast"
        },
        {
             img: "https://react-projects-5-menu.netlify.app/images/item-2.jpeg",
            foodName: "Diner Double",
            price: "$15",
            description: "vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats",
            category: "BreakFast"
        },
        {
             img: "https://react-projects-5-menu.netlify.app/images/item-3.jpeg",
            foodName: "Godzilla Milkshake",
            price: "$15",
            description: "ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral.",
            category: "Shakes"
        },
        {
             img: "https://react-projects-5-menu.netlify.app/images/item-4.jpeg",
            foodName: "Country Delight",
            price: "$15",
            description: "Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut,",
            category: "BreakFast"
        },        
        {
             img: "https://react-projects-5-menu.netlify.app/images/item-5.jpeg",
            foodName: "Egg Attack",
            price: "$15",
            description: "franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90's pop-up",
            category: "Lunch"
        },        
        {
             img: "https://react-projects-5-menu.netlify.app/images/item-6.jpeg",
            foodName: "Oreo Dream",
            price: "$15",
            description: "Portland chicharrones ethical edison bulb, palo santo craft beer chia heirloom iPhone everyday",
            category: "Shakes"
        },        
        {
             img: "https://react-projects-5-menu.netlify.app/images/item-7.jpeg",
            foodName: "Bacon Overflow",
            price: "$15",
            description: "carry jianbing normcore freegan. Viral single-origin coffee live-edge, pork belly cloud bread iceland put a bird",
            category: "BreakFast"
        },        
        {
             img: "https://react-projects-5-menu.netlify.app/images/item-8.jpeg",
            foodName: "American Classic",
            price: "$15",
            description: "on it tumblr kickstarter thundercats migas everyday carry squid palo santo leggings. Food truck truffaut",
            category: "Lunch"
        },        
        {
             img: "https://react-projects-5-menu.netlify.app/images/item-9.jpeg",
            foodName: "Quarantine Buddy",
            price: "$15",
            description: "skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.",
            category: "Shakes"
        },        
 
    ])

  return (
      <div className='menuItems'>
          {foods.filter((food) => {
              if (selectedCategory === "All") {
                  return food;
              }
              else if (food.category.toLowerCase().includes(selectedCategory.toLowerCase())
              ) {
                  return food;
              }
          }).map((data, index) => {
              return (
                  <FoodCard key={index} data={data} setFoods={setFoods} />
              );
          })
          }
    </div>
  )
}

export default Menu