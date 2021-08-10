import React, {Component} from 'react';
import  {Col, Container, Nav,Row,Tab} from "react-bootstrap";

import Design from "../assets/Design.jpg";
import Team from "../assets/Team.jpg"
import Programming from "../assets/Programming.png"
import Frameworks from "../assets/Frameworks.jpeg"
import Libraries from "../assets/Libraries.png"


class About extends Component {
    render() {
        return (
            <Container>
                <Tab.Container id="ledt-tabs-example" defaultActiveKey="first">
                    <Row>
                        <Col sm={3}>
                            <Nav variant="pills" className="flex-column mt-2">
                                <Nav.Item>
                                    <Nav.Link eventKey="first"> Design
                                    </Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="second"> Team
                                    </Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="third"> Programming
                                    </Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="four"> Frameworks
                                    </Nav.Link>
                                </Nav.Item>

                                <Nav.Item>
                                    <Nav.Link eventKey="five"> Libraries
                                    </Nav.Link>
                                </Nav.Item>

                            </Nav>
                        </Col>
                        <Col sm={9}>
                            <Tab.Content className="mt-3">
                                <Tab.Pane eventKey="first">
                                    <img
                                        src={Design} alt="Space image"
                                    />
                                    <p> gvh bhi hu    g g ggggg ggggi  rolsru hr e ro ohrrgoiihsoig l  a seou ggsrrghseoo hg uhe h o iui hhs  h  ghoghlahguhgol lzo se euo  oo eho ro resrrolhs</p>
                                </Tab.Pane>
                                <Tab.Pane eventKey="second">
                                    <img
                                        src={Team} alt="Space image"
                                    />
                                    <p> gvh bhi hu    g g ggggg ggggi  rolsru hr e ro ohrrgoiihsoig l  a seou ggsrrghseoo hg uhe h o iui hhs  h  ghoghlahguhgol lzo se euo  oo eho ro resrrolhs</p>
                                </Tab.Pane>
                                <Tab.Pane eventKey="third">
                                    <img
                                        src={Programming} alt="Space image"
                                    />
                                    <p> gvh bhi hu    g g ggggg ggggi  rolsru hr e ro ohrrgoiihsoig l  a seou ggsrrghseoo hg uhe h o iui hhs  h  ghoghlahguhgol lzo se euo  oo eho ro resrrolhs</p>
                                </Tab.Pane>
                                <Tab.Pane eventKey="four">
                                    <img
                                        src={Frameworks} alt="Space image"
                                    />
                                    <p> gvh bhi hu    g g ggggg ggggi  rolsru hr e ro ohrrgoiihsoig l  a seou ggsrrghseoo hg uhe h o iui hhs  h  ghoghlahguhgol lzo se euo  oo eho ro resrrolhs</p>
                                </Tab.Pane>
                                <Tab.Pane eventKey="five">
                                    <img
                                        src={Libraries} alt="Space image"
                                    />
                                    <p> gvh bhi hu    g g ggggg ggggi  rolsru hr e ro ohrrgoiihsoig l  a seou ggsrrghseoo hg uhe h o iui hhs  h  ghoghlahguhgol lzo se euo  oo eho ro resrrolhs</p>
                                </Tab.Pane>
                            </Tab.Content>
                        </Col>
                    </Row>
                </Tab.Container>
            </Container>
        );
    }
}

export default About;