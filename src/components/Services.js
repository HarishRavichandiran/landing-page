// components/Services.js
import React from 'react';
import { Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const Services = () => {
  return (
    <section id="services" className="py-5 bg-light">
      <Container>
        <h2 className="text-center mb-5">Fully Responsive</h2>
        <div className="row">
          <div className="col-12 col-md-4">
            <div className="card border-0">
              <div className="card-body">
                <h5 className="card-title">This theme will look great on any device</h5>
                <h6 className="card-subtitle mb-3">No matter the size!</h6>
                <p className="card-text">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam id
                  felis et ipsum bibendum ultrices.
                </p>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-4">
            <div className="card border-0">
              <div className="card-body">
                <h5 className="card-title">Bootstrap 5 Ready</h5>
                <h6 className="card-subtitle mb-3">
                  Featuring the latest build of the new Bootstrap 5 framework!
                </h6>
                <p className="card-text">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam id
                  felis et ipsum bibendum ultrices.
                </p>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-4">
            <div className="card border-0">
              <div className="card-body">
                <h5 className="card-title">Easy to Use</h5>
                <h6 className="card-subtitle mb-3">
                  Ready to use with your own content, or customize the source files!
                </h6>
                <p className="card-text">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam id
                  felis et ipsum bibendum ultrices.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Services;