import React, { useState } from 'react'
import "./subtotal.css"
import CurrencyFormat from "react-currency-format"
import { useStateValue } from './StateProvider';
import { useNavigate } from 'react-router-dom';

function Subtotal() {
  const navigate=useNavigate();
  const [{ basket }, dispatch] = useStateValue();
  // const getBasketTotal =(basket)=>{
  //   const [amount,setamount] =useState(0);

  // }
  // correct code
  const getBasketTotal =(basket)=>
    basket?.reduce((amount,item)=>item.price + amount,0);
  
  return (
    <>
    <div className='sub_total'>
    <CurrencyFormat 
    renderText={(value)=>(
    <div>
      <p>subtotal({basket.length} items): <strong>{value}</strong></p>
      <small className='sub_gift'>
        <input type="checkbox" />This order contains a gift
      </small>
    </div>
    )}
    decimalScale={2}
    value={getBasketTotal(basket)}
    displayType='text'
    thousandSeparator={true}
    prefix={'$'} 
    />
    <button onClick={(e)=>navigate("/Payment")}>proceed to checkout</button>
      
    </div>
    
    
    
    </>
  )
}

export default Subtotal