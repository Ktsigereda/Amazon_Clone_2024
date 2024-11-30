import CurrencyFormat from "../CurrencyFormat/CurrencyFormat"
import classes from "./Product.module.css"
import { Rating } from "@mui/material"
import {Link} from 'react-router-dom'

const ProductCard = ({product, flex, renderDescription}) => {
  const {image, title, id, price, rating, description} = product;
  return (
    <div className={`${classes.card_container} ${flex?classes.product_flexed:''}`}>
        <Link to={`/products/${id}`}>
            <img src={image} alt =""/>
          </Link>
          <div>
              <h3>{title}</h3>
              {renderDescription && <div style ={{maxWidth:"750px"}}>{description} </div>  }
              <div className={classes.rating}>
                <Rating value={rating?.rate || 0} precision={0.1} readOnly />
                  <small>{rating?.count || 0}</small>
                </div>

              <div>
                  {/* price */}
                  <CurrencyFormat amount={price} />
              </div>
              <button className={classes.button}> add to cart</button>
          </div>

    </div>
  )
}

export default ProductCard