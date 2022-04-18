import React from 'react';
import { Carousel, Container, Row } from 'react-bootstrap';
import './Home.css';
import bannerone from '../../images/banners/banner-1.png';
import bannertwo from '../../images/banners/banner-2.png';
import bannerthree from '../../images/banners/banner-3.png';
import useServices from '../../hooks/useServices';
import Service from '../Service/Service';
import useReviews from '../../hooks/useReviews';
import Review from '../Review/Review';
const Home = () => {
  const [services] = useServices();
  const [reviews] = useReviews();
  return (
    <div id='home'>
      <section className='banner mt-2'>
        <Container fluid>
          <Carousel variant="light">
            <Carousel.Item>
              <img
                className="d-block banner-img"
                width='100%'
                height={550}
                src={bannerone}
                alt="First slide"
              />
              <Carousel.Caption className="captions" >
                <h5>Keep your memories safe</h5>
                <p>We are here to save your memories with high quality and best pictures.Pictures are told the mirrors of past</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block banner-img"
                width='100%'
                height={550}
                src={bannertwo}
                alt="Second slide"
              />
              <Carousel.Caption className="captions" >
                <h5>Sweet memories of Birthday</h5>
                <p>Do you want to keep sweet memories with your friends on your birthday? We are here to serve you.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block banner-img"
                width='100%'
                height={550}
                src={bannerthree}
                alt="Third slide"
              />
              <Carousel.Caption className="captions" >
                <h5>Make your business event Unique</h5>
                <p>We will make your business event memorable with hd photos and videos. So, What are your waiting for?</p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </Container>
      </section>

      <section id="services" className='services-section'>
      <Container>
          <div className='main-container'>
            <h2 className='text-center mt-5 mb-3'>Available Packages</h2>
            <div>
              <Row className='gy-5'>
                {
                  services.map(service => <Service
                  key ={service.id}
                  service = {service}
                  >
                  </Service>)
                }
              </Row>
            </div>
          </div>
        </Container>
      </section>

      <section className="testimonials" id="testimonials">
                <Container>
                  <div className='testimonial-container'>
                    <h2 className='mb-3'>Testimonials</h2>
                    <Row className='gy-5'>
                      {
                          reviews.map(review => <Review
                          key={review.id}
                          review ={review}
                          ></Review>)
                      }
                    </Row>
                  </div>
                </Container>
      </section>
    </div>
  );
};

export default Home;