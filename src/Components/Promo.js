import React from 'react';

import Container from 'react-bootstrap/Container'
import Figure from 'react-bootstrap/Figure'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import '../App.css'
class Picture extends React.Component {
  render() {
    return (

<Container>
<Row>
  <Col xs={6} md={4}>
  <Figure>
  <Figure.Image
    width={350}
    height={300}
    alt="171x180"
    src="https://i.ibb.co/dB8dtfS/client2.jpg"
  />
  <Figure.Caption>
   Knotless Braids
  </Figure.Caption>
</Figure>
    {/* <Image src="https://i.ibb.co/dB8dtfS/client2.jpg" rounded /> */}
  </Col>
  <Col xs={6} md={4}>
  <Figure>
  <Figure.Image
    width={350}
    height={300}
    alt="171x180"
    src="https://i.ibb.co/yfq757w/client1.jpg"
  />
  <Figure.Caption>
   Faux Locs
  </Figure.Caption>
</Figure>
    {/* <Image src="https://i.ibb.co/yfq757w/client1.jpg" rounded /> */}
  </Col>
  <Col xs={6} md={4}>
  <Figure>
  <Figure.Image
    width={350}
    height={300}
    alt="171x180"
    src="https://i.ibb.co/crF3VXJ/client3.jpg"
  />
  <Figure.Caption>
    Butterfly Locs
  </Figure.Caption>
</Figure>
    {/* <Image src="https://i.ibb.co/crF3VXJ/client3.jpg" rounded /> */}
  </Col>
</Row>

</Container>
    );
  }
}

export default Picture;