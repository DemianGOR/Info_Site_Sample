import React, {Component} from 'react';
import {Button, Container, Form} from "react-bootstrap";

class Contacts extends Component {
    render() {
        return (
          <Container style={{width: "500px"}}>
              <h1 className="text-center">Contact us</h1>
              <Form>
                  <Form.Group controlId="formBasicEmail">
                      <Form.Label>Input your Email</Form.Label>
                      <Form.Control type="email" placeholder='Enter Email' />
                      <Form.Text> Send me something</Form.Text>
                  </Form.Group>
                  <Form.Group controlId="formBasicText">
                      <Form.Label> Input some text</Form.Label>
                      <Form.Control as="textarea" rows="3"/>
                  </Form.Group>
                  <Form.Group controlId="formBasicCheckBox">
                    <Form.Check  type="checkbox" label="Check me out"/>
                  </Form.Group>
                  <Button variant="primary" type="submit"> Submit</Button>
              </Form>
          </Container>
        );
    }
}

export default Contacts;