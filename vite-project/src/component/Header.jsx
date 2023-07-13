import React from 'react'
import "./header.css"
import SearchIcon from '@mui/icons-material/Search';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import { Link } from 'react-router-dom';
import { useStateValue } from './StateProvider';
import { auth } from './Firebase';

function Header() {
  // we use state in this case basket to pull data from datalayer
  const [{ basket,user }, dispatch] = useStateValue();
  const handleAuthenticaton = () => {
    if (user) {
      auth.signOut();
    }
  };
  return (
    <>
    <div className='header'>
      <Link to = "/">
      <img 
        className='header_logo'
        src='https://www.thesun.co.uk/wp-content/uploads/2022/02/Amazon-Logo-1024x426-1.png?strip=all&w=960'
       
        />
      </Link>
    
        <div className='search'>
            <input className='searchinput' type="text" />
            <SearchIcon className='header_search_icon'/>
        </div>
        <div className='headernav'>
      <Link to ={!user && '/login'}  style={{ textDecoration:'none',color:'inherit' }}>
            <div onClick={handleAuthenticaton} className='option'>
                <span className='option_line1'> Hello {user?user.email:"Guest"} </span>
                <span className='option_line2'>  {user ?"Sign Out":"Sign In"} </span>
            </div>
       </Link>
    
       <Link to ='/orders'  style={{ textDecoration:'none',color:'inherit' }}>
            <div className='option'>
                <span className='option_line1'> returns  </span>
                <span className='option_line2'> orders </span>
            </div>

            </Link>
            <div className='option'>
                <span className='option_line1'> yours </span>
                <span className='option_line2'> prime </span>
            </div>
            <Link to="/checkout" className='lin' style={{ textDecoration:'none',color:'inherit' }}>
            <div className='option_basket'>
                <ShoppingBasketIcon />
                <span className='option_line2 basket_option_line2'>
                    {basket.length}
                </span>
            </div>
            
            </Link>
           

        </div>
    </div>
        

    </>
  )
}

export default Header