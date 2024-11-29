import React from 'react'
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import classes from "./carousel.module.css";
import {img} from "./images/data"
const CarouselEffect = () => {
  return (
    <div>

<Carousel 
        autoPlay={true} // Enables auto-playing of images
        infiniteLoop={true} // Enables continuous looping through images
        showIndicators={false} // Hides the small indicator dots under the carousel
        showThumbs={false} // Hides the thumbnail previews of the images
         showStatus={false} // Hides the status information (like image number)
>
  {
    img.map((imageItemLink)=>{
      return <img src={imageItemLink} />
    })
  }
  </Carousel>
  <div className={classes.hero_img}> </div>

    </div>
  )
}

export default CarouselEffect