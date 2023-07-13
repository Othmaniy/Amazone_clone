import React from 'react'
import "./Home.css"
import Product from './Product';
function Home() {
  return (
    <>
        <div className='home'>
            <img 
            className='home_image'
            src="https://m.media-amazon.com/images/I/51RPiINhM7L._SX1500_.jpg" alt="banner_image" 
            />
          <div className='home_row'>
            <Product 
            id="12345"
            title="HP 2022 Stream 14 HD BrightView Laptop, Intel Celeron N4120, 4GB RAM, 64GB SSD, Intel HD Graphics, 720p Webcam, 1 Year Office 365, Gold, Win 11, 32GB Snowbell USB Card"
            price={500}
            rating ={5}
            image ="https://m.media-amazon.com/images/I/61ZmZnBrFqL._AC_UY327_FMwebp_QL65_.jpg"
            />
            <Product  
            id="78910"
            title="Apple iPad (9th Generation): with A13 Bionic chip, 10.2-inch Retina Display, 64GB, Wi-Fi, 12MP front/8MP Back Camera, Touch ID, All-Day Battery Life – Space Gray"
            price={259}
            rating ={4}
            image ="https://m.media-amazon.com/images/I/61NGnpjoRDL.__AC_SY445_SX342_QL70_FMwebp_.jpg"
            
            
            
            />
          </div>

          <div className='home_row'>
            <Product 
            id="09876"
            title="Upgrade Meat Chopper, Heat Resistant Meat Masher for Hamburger Meat, Ground Beef Smasher, Nylon Hamburger Chopper Utensil, Ground Meat Chopper, Non Stick Mix Chopper, Mix and Chop, Potato Masher Tool"
            price={118}
            rating ={5}
            image ="https://m.media-amazon.com/images/I/61B6wplBsVL._AC_UL480_FMwebp_QL65_.jpg"
            />
            <Product 
            id="896532"
            title="Large Washable Pee Pads for Dogs 65x48,Reusable Dog Pads,Non Slip Dog Mats with Great Urine Absorption,Pet Dog Supplies, Puppy Pee Pads Training Pads for Whelping, Potty, Training, Playpen, Crate"
            price={112}
            rating ={4}
            image ="https://m.media-amazon.com/images/I/81sSwumKyKL._AC_UL480_FMwebp_QL65_.jpg"
            
            />
            <Product 
            id="76543"
            title="Amazon Essentials Women's Short-Sleeve Scoop Neck Swing Dress (Available in Plus Size)"
            price={400}
            rating ={3}
            image ="https://m.media-amazon.com/images/I/61Ngg8FGFWS._MCnd_AC_UL480_FMwebp_QL65_.jpg"
            
            
            
            />
          </div>

          <div className='home_row'>
            <Product 
            id="145678"
            title="Smart Watch Answer/Make Calls, 1.85” HD Fitness Tracker Watch Heart Rate Sleep Monitor, Activity Tracker Smartwatch Pedometer, 112 Sports Modes, IP68 Waterproof Smart Watches for Men Women Android IOS"
            price={500}
            rating ={2}
            image ="https://m.media-amazon.com/images/I/71LOPOgSaYL._AC_UY327_FMwebp_QL65_.jpg"
            />
          </div>

          <div className='home_row'>
            <Product 
            id="09876"
            title="VIZIO 40-inch D-Series Full HD 1080p Smart TV with AMD FreeSync, Apple AirPlay and Chromecast Built-in, Alexa Compatibility, D40f-J09, 2022 Model"
            price={118}
            rating ={4}
            image ="https://m.media-amazon.com/images/I/81YMd8mWQ+L._AC_UL480_FMwebp_QL65_.jpg"
            />
            <Product 
            id="896532"
            title="Bowflex SelectTech 552 Adjustable Dumbbells"
            price={313}
            rating ={4}
            image ="https://m.media-amazon.com/images/I/71+pOdQ7iKL._AC_UL480_QL65_.jpg"
            
            />
            <Product 
            id="76543"
            title="Pearhead Newborn Baby Handprint Or Footprint Clean-Touch Ink Pad Kit, No Mess Baby Safe Print Kit, Newborn Keepsake, Black, 2 Impression Cards, Small Size"
            price={70}
            rating ={3}
            image ="https://m.media-amazon.com/images/I/61t66wWbwSL._AC_SY200_.jpg"
            
            
            
            />
          </div>
          <div className='home_row'>
            <Product 
            id="12345"
            title="Tenmiro 65.6ft Led Strip Lights, Ultra Long RGB 5050 Color Changing LED Light Strips Kit with 44 Keys Ir Remote Led Lights for Bedroom, Kitchen, Home Decoration"
            price={259}
            rating ={5}
            image ="https://m.media-amazon.com/images/I/81fL9GHVU0L.__AC_SY445_SX342_QL70_FMwebp_.jpg"
            />
            <Product  
            id="78910"
            title="BCS Ceramic Pinch Bowls Set of 6, Small Bowls for Dipping - Cooking Prep & Charcuterie Board Bowls, Soy Sauce Dish, Multicolor Handmade Decorative Serving Dishes (3.2'' - 3 oz)"
            price={130}
            rating ={3}
            image ="https://m.media-amazon.com/images/I/91Z35UA5m7L._AC_UL480_FMwebp_QL65_.jpg"
            
            
            
            />
          </div>
        </div>
    </>
  )
}

export default Home;