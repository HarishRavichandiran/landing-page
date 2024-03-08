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
      Updated For Bootstrap 5
Newly improved, and full of great utility classes, Bootstrap 5 is leading the way in mobile responsive web development! All of the themes on Start Bootstrap are now using Bootstrap 5!
      </p>
    </Col>

    <Col md={6}>
      <img src="https://cdn.images.express.co.uk/img/dynamic/59/940x/iPhone-14-Plus-review-UK-1678916.jpg" alt="..." className="img-fluid rounded" />
    </Col>
    <Col md={6} className="text-center">
      <p className="text-md-end">
      Fully Responsive Design
When you use a theme created by Start Bootstrap, you know that the theme will look great on any device, whether it's a phone, tablet, or desktop the page will behave responsively!
      </p>
    </Col>

    <Col md={6}>
      <img src="https://images.ctfassets.net/16nm6vz43ids/6wiOV6XmGn9zstxBjyXl0M/968f924d03ebea33c420be95046de61f/Hidden_laptop_features_you_should_use_now.jpg" alt="..." className="img-fluid rounded" />
    </Col>
    <Col md={6} className="text-center">
      <p className="text-md-end">
      Easy to Use & Customize
Landing Page is just HTML and CSS with a splash of SCSS for users who demand some deeper customization options. Out of the box, just add your content and images, and your new landing page will be ready to go!
      </p>
    </Col>
  </Row>
  
  );
};

export default ImageCaption;