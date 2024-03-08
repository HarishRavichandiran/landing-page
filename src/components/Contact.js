import React from 'react';
import { Container, Form, Button } from 'react-bootstrap';

const Contact = () => {
  return (
    <section id="contact" className="py-5 bg-light">
      <Container>
        <div className="row">
          <div className="col-md-8 col-lg-6 mx-auto">
            <h2 className="text-center mb-5">Contact Us</h2>
            <Form>
              <Form.Group className="mb-3" controlId="formName">
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" placeholder="Enter your name" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter your email" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formMessage">
                <Form.Label>Message</Form.Label>
                <Form.Control as="textarea" rows={3} />
              </Form.Group>
              <Button variant="primary" type="submit" className="d-block mx-auto">
                Submit
              </Button>
            </Form>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Contact;
