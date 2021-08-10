import React, {Component} from 'react';
import {CardDeck, Card, Container, Button} from "react-bootstrap";
import Design from "../assets/Design.jpg";
import "../Pages/Login.css"

class Product extends Component {
    render() {
        return (
            <Container >
                <h2 className="text-center m-4">Types of the Design</h2>
                <CardDeck>
                    <Card>
                        <Card.Img
                            variant="top"
                            src={Design} alt="Space image"
                        />
                        <Card.Body>
                            <Card.Title>
                                Space in the mountains
                            </Card.Title>
                            <Card.Title>
                                ftgvgygvgyuhbhghy uh h gyh vbhb h b bhu bhu hbhu bh hbh hhhbh ubh uhh uh uj nbgyu jb tyu
                            </Card.Title>
                            <Button variant="primary">About Space</Button>
                        </Card.Body>
                    </Card>
                    <Card>
                        <Card.Img
                            variant="top"
                            src={Design} alt="Space image"
                        />
                        <Card.Body>
                            <Card.Title>
                                Space in the mountains
                            </Card.Title>
                            <Card.Title>
                                ftgvgygvgyuhbhghy uh h gyh vbhb h b bhu bhu hbhu bh hbh hhhbh ubh uhh uh uj nbgyu jb tyu
                            </Card.Title>
                            <Button variant="primary">About Space</Button>
                        </Card.Body>
                    </Card>
                    <Card>
                        <Card.Img
                            variant="top"
                            src={Design} alt="Space image"
                        />
                        <Card.Body>
                            <Card.Title>
                                Space in the mountains
                            </Card.Title>
                            <Card.Title>
                                ftgvgygvgyuhbhghy uh h gyh vbhb h b bhu bhu hbhu bh hbh hhhbh ubh uhh uh uj nbgyu jb tyu
                            </Card.Title>
                            <Button href="https://www.youtube.com/results?search_query=%D1%81%D1%81%D1%8B%D0%BB%D0%BA%D0%B8+%D0%B2+react" variant="primary">About Space</Button>
                        </Card.Body>
                    </Card>
                </CardDeck>
            </Container>
        );
    }
}

export default Product;