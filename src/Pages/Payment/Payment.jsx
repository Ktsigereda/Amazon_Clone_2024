import React from 'react'
import LayOut from '../../Components/LayOut/LayOut'
import classes from "./Payment.module.css"
import { DataContext } from '../../Components/DataProvider/DataProvider'
import { useContext, useState } from 'react'
import ProductCard from "../../Components/Product/ProductCard"
import {useStripe, useElements, CardElement} from '@stripe/react-stripe-js';
import CurrencyFormat from '../../Components/CurrencyFormat/CurrencyFormat'


const Payment = () => {
const [{basket, user}] = useContext(DataContext);
// console.log(user);
const totalItem = basket?.reduce((amount, item) => {
    return item.amount + amount
    },0);
    const total = basket.reduce((amount, item) => {
    return item.price * item.amount + amount
  },0);

const [cardError, setCardError] = useState(null)
  const stripe = useStripe();
  const elements = useElements();
const handleChange =(e)=>{
  console.log(e);
  e?.error?.message? setCardError( e?.error?.message):setCardError("")
}

  return (
    <LayOut>
      {/* header */}
  <div className={classes.payment_header}>Checkout ({totalItem}) items</div>
  {/* payment method */}
  <section className={classes.payment}>
    {/* adderess */}
    
<div className={classes.flex}>
  <h3>Delivery Address</h3>
  <div>
  <div>{user?.email}</div>
      <div>123 Addisu Kera</div>
      <div>Addis Ababa, Ethiopia</div>
  </div>
</div>
<hr/>

{/* product */}
<div className={classes.flex}>
    <h3> Review Items and Delivery</h3>
    <div>
  {
basket?.map((item)=><ProductCard product={item} flex={true}/>)
  }
    </div>
</div>
<hr/>

{/* card form */}
<div className={classes.flex}>
  <h3>Payment Methods</h3>
  <div className={classes.payment_card_container}>
    <div className={classes.payment_details} >
      <form action=''>
        {/* error */}
        {cardError && (
          <small style={{color: "red"}}>{cardError}</small>
          )}
          {/* card */}
<CardElement onChange= {handleChange}/>
{/* price */}
<div className={classes.payment_price}>
  <div>
    <span style={{display: "flex", gap: "10px"}}>
      <p>Total Order  |</p> <CurrencyFormat amount={total}/>
    </span>
    </div>
    <button>Pay Now</button>
</div>
      </form>
    </div>
  </div>
</div>

  </section>
    </LayOut>
  
  )
}

export default Payment