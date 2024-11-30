import React, { useState, useEffect } from 'react'
import LayOut from '../../Components/LayOut/LayOut'
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { productUrl } from '../../API/EndPoints';
import classes from "./Results.module.css"
import ProductCard from '../../Components/Product/ProductCard';
const Results = () => {
  const [results, setResults] = useState([]);
  const {categoryName} = useParams()

  useEffect(()=>{
    axios.get(`${productUrl}/products/category/${categoryName}`)
    .then((res)=>{
  // console.log(res)
      setResults(res.data)
    }).catch((err)=>{
    console.log(err)
  })
  },[])
  
  return (
    <LayOut>

 <section>
        <h1 style={{ padding: "30px" }}>Results</h1>
        <p style={{ padding: "30px" }}>category/{categoryName}</p>
        <hr />
          <div className={classes.results_container}>
             {
               results?.map((product) => (
                <ProductCard key={product.id} product={product} 
                />
              ))
             }
          </div>
      </section>
    </LayOut>

  )
}

export default Results