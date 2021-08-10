import React, {Component} from 'react';
import CarouselBox from "../Components/CarouselBox";
import {Container} from "react-bootstrap";
import Product from "../Components/Product";
class Home extends Component {
    render() {
        return (
            <>
                <CarouselBox/>;
                <Product/>
            </>

        );
    }
}

export default Home;