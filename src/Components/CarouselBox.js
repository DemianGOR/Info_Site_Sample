import React, {Component} from 'react';
import Carousel from "react-bootstrap/Carousel"
import Space from "../assets/Space.jpg"
import Space2 from "../assets/Space2.jpg"

class CarouselBox extends Component {
    render() {
        return (
           <Carousel>
               <Carousel.Item>
                   <img

                       className="d-block w-100 "
                       style={{height: "500px"}}
                       src={Space}
                       alt="Space image"

                       />
                   <Carousel.Caption>
                       <h2>Space Image</h2>
                       <p> Space Space Space Space Space Space Space</p>
                   </Carousel.Caption>
               </Carousel.Item>
               <Carousel.Item>
                   <img

                       className="d-block w-100 "
                       style={{height:"500px"}}
                       src={Space2}
                       alt="Space image"

                   />
                   <Carousel.Caption>
                       <h2>Space2 Image</h2>
                       <p> Space Space Space Space Space Space Space</p>
                   </Carousel.Caption>
               </Carousel.Item>
           </Carousel>
        );
    }
}

export default CarouselBox;