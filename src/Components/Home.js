import React from 'react';
import Carousel from 'react-bootstrap/Carousel'
import Image from 'react-bootstrap/Image'
import HBK5 from '../Images/HBK5.JPG'
import HBK10 from '../Images/HBK10.JPG'
import HBK6 from '../Images/HBK6.JPG'
import '../App.css'
import Promo from '../Components/Promo'
import banner from '../Images/banner.png'


const Home = () =>{
return(
    <div className="container is-fluid">
    <div className="notification is-primary">

    <Carousel>
  <Carousel.Item interval={1000}>
    <img
      className="d-block w-100"
      src={HBK5}
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item interval={1000}>
    <img
      className="d-block w-100"
      src={HBK10}
      alt="Third slide"
    />
    <Carousel.Caption>
      <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={HBK6}
      alt="Third slide"
    />
    <Carousel.Caption>
      <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>

  </div>

  {/* <h2 className="title is-2">Featured Favorites</h2> */}
  <h2 className="subtitle is-2 featured">FEATURED FAVORITES</h2>

  <Promo/>
  <br></br>

  <Image src={banner} width="100%" fluid />
  
</div>
)
}




export default Home;