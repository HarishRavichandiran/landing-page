import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';
import Header from './components/Header.js';
import Hero from './components/Hero.js';
import Services from './components/Services.js';
import Contact from './components/Contact.js';
import Footer from "./components/Footer.js";
import ImageCaption from './components/ImageCaption.js';

const App = () => {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Container>
        <Services />
        <ImageCaption />
      </Container>
      <Contact />
      <Footer />
    </div>
  );
};

export default App;