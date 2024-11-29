import classes from "./Product.module.css"
import axios from "axios"
import { useEffect, useState } from "react"
import ProductCard from "./ProductCard"

const Product = () => {
const [product, setProduct] = useState([]);
useEffect(()=>{
    axios
    .get("https://fakestoreapi.com/products")
    .then((res)=>{
        console.log(res)
        setProduct(res.data);
    }).catch((err)=>{
        console.log(err)
    });
}, []);

  return (
   <div className={classes.product_container}>
{
product.map((singleProduct, i)=>{
    return <ProductCard product ={singleProduct} key ={i} />
})
}
</div>
)
}

export default Product