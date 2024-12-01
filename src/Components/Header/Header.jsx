import React from 'react';
import classes from "./header.module.css"
import { BsSearch } from "react-icons/bs";
import { BiCart } from "react-icons/bi";
import { SlLocationPin } from "react-icons/sl";
import amazonLogo from "../../assets/icons/amazon_PNG11.png"
import LowerHeader from './LowerHeader';
import { Link} from "react-router-dom";
import { DataContext } from '../DataProvider/DataProvider';
import { useContext } from 'react';

const Header = () => {
const [{basket}, dispatch] = useContext(DataContext);
const totalItem = basket?.reduce((amount, item) => {
    return item.amount + amount
    },0);
console.log(basket.length)
return (
    <section className={classes.fixed}>

<section className={classes.header_container}>
    <div className={classes.logo_container}>
        <Link to='/'>
            <img src={amazonLogo}/>
        </Link>
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
        <input type='text'  placeholder='Search Amazon'/>
    <BsSearch size={25} />
</div>
    <div>
        {/*right side link */}
        <div className={classes.order_container}>
            <Link to='' className={classes.language}>
            <img src= "https://upload.wikimedia.org/wikipedia/commons/a/a9/Flag_of_the_United_States_%28DoS_ECA_Color_Standard%29.svg" alt="USA flag" />
    
            <select name='' id=''>
                <option value="">EN</option>
            </select>
            </Link>
            {/* three components*/}
            <Link to='/auth'>
                    <p>Sign In</p>
                    <span>Account & Lists</span>
            </Link>
            {/* orders*/}
            <Link to='/orders'>
                <p>Returns</p>
                <span>& Orders</span>
            </Link>
            {/* cart */}
            <Link to="/cart" className={classes.cart}>
            <BiCart size={35}      /> 
            <span>{totalItem}</span>
            </Link>
        </div>
    </div>
  </section>
  <LowerHeader />
    </section>
  
  );
}

export default Header;
