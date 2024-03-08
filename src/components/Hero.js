import React from 'react';
import { Container } from 'react-bootstrap';

const Hero = () => {
  return (
    <section
      className="hero"
      style={{
        backgroundImage: `url(${"../assets/download.jpg"})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundColor: '#ADD8E6',
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        color: 'white',
      }}
    >
      <Container>
        <h1 style={{color: 'green',marginBottom:'3rem'}}>
          Generate more leads with a professional <br /> landing page!
        </h1>
        <form >
          <input type="email" placeholder="Enter your email" style={{borderRadius:'8px'}}/>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </Container>
    </section>
  );
};

export default Hero;