import React from 'react'
import "./checkout.css"
import Subtotal from './Subtotal'
import CheckoutProduct from './CheckoutProduct'
import { useStateValue } from './StateProvider';

function Checkout() {
  const [{ basket }, dispatch] = useStateValue();
  return (

    <>
    <div className='checkout'>
        <div className='checkout_left'>
        <img className='checkout_image' src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg" alt="" />

        {/* <h2>hello</h2> */}
        <h3 className='checkouttitle'>Your Shopping Basket</h3>
        {basket.map((item) => (
          <CheckoutProduct
            id={item.id}
            title={item.title}
            image={item.image}
            price={item.price}
            rating={item.rating}
          />
        ))}

        </div>
        
        <div className='checkout_right'>
        <Subtotal />

        {/* <h2>hello</h2> */}
        

        </div>
        
    </div>
    
    
    </>
  )
}

export default Checkout