import React from 'react';
import classes from "./header.module.css"
import { BsSearch } from "react-icons/bs";
import { BiCart } from "react-icons/bi";
import { SlLocationPin } from "react-icons/sl";
import amazonLogo from "../../assets/icons/amazon_PNG11.png"
import LowerHeader from './LowerHeader';

const Header = () => {
  return (
    <>

<section className={classes.header_container}>
    <div className={classes.logo_container}>
        {/*logo*/} 
        <a href=''>
            <img src={amazonLogo}/>
        </a>
         {/*delivevry*/}
        <div className={classes.delivery}>  
        <span>
          <SlLocationPin />
        </span>
        <div>
            <p> Delivered to</p>
            <span> Ethiopia</span>
        </div>
    </div>
    </div>

    
        {/*search*/}
<div className={classes.search}>
        <select name='' id=''> 
            <option value=""> All</option>
        </select>
        <input type='text'  placeholder='search product'/>
    <BsSearch size={25} />
</div>
 
    
    <div>
        {/*right side link */}
        <div className={classes.order_container}>
            <a href='' className={classes.language}>
         <img src="https://upload.wikimedia.org/wikipedia/commons/a/a9/Flag_of_the_United_States_%28DoS_ECA_Color_Standard%29.svg" alt="USA flag" />
            <select name='' id=''>
                <option value="">EN</option>
            </select>
            </a>
           
            {/* three components*/}
            <a href=''>
                    <p>Sign In</p>
                    <span>Account & Lists</span>
            </a>
            {/* orders*/}
            <a href='/orders'>
                <p>returns</p>
                <span>& Orders</span>
            </a>
            {/* cart */}
            <a href="/cart" className={classes.cart}>
           <BiCart size={35} />
            <span>0</span>
            </a>
        </div>
    </div>
  </section>
  <LowerHeader />
    </>
  
  );
}

export default Header;
