import React from 'react';
import { Carousel, Container } from 'react-bootstrap';
import './Home.css';
const Home = () => {
  return (
    <div id='home'>
      <section className='banner'>
        <Container fluid>
          <Carousel>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://images.unsplash.com/photo-1501901609772-df0848060b33?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MXwxMjI2MzE0fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
                alt="First slide"
              />
              <Carousel.Caption>
                <h3>First slide label</h3>
                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="holder.js/800x400?text=Second slide&bg=282c34"
                alt="Second slide"
              />

              <Carousel.Caption>
                <h3>Second slide label</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="holder.js/800x400?text=Third slide&bg=20232a"
                alt="Third slide"
              />

              <Carousel.Caption>
                <h3>Third slide label</h3>
                <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </Container>
      </section>
    </div>
  );
};

export default Home;