import React from 'react';
import { Carousel, Container, Row } from 'react-bootstrap';
import './Home.css';
import bannerone from '../../images/banners/banner1_1280x500.jpg'
import bannertwo from '../../images/banners/banner2_1280x500.jpg'
import bannerthree from '../../images/banners/banner3_1280x500.jpg'
import useServices from '../../hooks/useServices';
import Service from '../Service/Service';
const Home = () => {
  const [services, setServices] = useServices()
  return (
    <div id='home'>
      <section className='banner'>
        <Container fluid>
          <Carousel variant="light">
            <Carousel.Item>
              <img
                className="d-block banner-img"
                width='100%'
                height={500}
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
                height={500}
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
                height={500}
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

      <section id="services">
      <Container>
          <div className='main-container'>
            <h3 className='text-center mt-5 mb-3'>Available Packages</h3>
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
    </div>
  );
};

export default Home;