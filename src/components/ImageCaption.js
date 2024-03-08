import React from 'react';
import { Row, Col } from 'react-bootstrap';

const ImageCaption = () => {
  return (
    <Row className="mt-4">
    <Col md={6}>
      <img src="https://www.forbes.com/advisor/wp-content/uploads/2023/07/computer-coding.jpg" alt="..." className="img-fluid rounded" />
    </Col>
    <Col md={6} className="text-center">
      <p className="text-md-end">
        This is the caption for an image of a cat sitting on a computer keyboard.
      </p>
    </Col>
  </Row>
  );
};

export default ImageCaption;