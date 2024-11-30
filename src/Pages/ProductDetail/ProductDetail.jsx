
import LayOut from '../../Components/LayOut/LayOut'
import classes from "./ProductDetail.module.css";
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { productUrl } from '../../API/EndPoints';
import ProductCard from '../../Components/Product/ProductCard';

const ProductDetail = () => {
  const {productId} = useParams()
  const [product, setProduct] = useState({});
  // console.log(productId);
  useEffect(()=>{
    axios.get(`${productUrl}/products/${productId}`)
    .then((res)=>{
  // console.log(res)
      setProduct(res.data)
    }).catch((err)=>{
    console.log(err)
  })
  },[])
  return (
    <LayOut>
      { 
        <ProductCard product={product}/>
        }

    </LayOut>
    
  )
}

export default ProductDetail