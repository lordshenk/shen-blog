import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col, Card, CardImg, CardBody, CardText, CardTitle } from 'reactstrap';
import Header from './Header';

export default function Home(props) {
  return(
    <div>
      <Header />
      <Container>
        <Row className='justify-content-center'>
          <Col sm="8">
            {props.blogs.map(( ele, ind) => {
              if(ind >= props.blogs.length - 4) {
                return(
                  <Link to={`/blog/${ind}`} key={ind} >
                    <Card >
                      <CardImg top width='100%' src={`https://picsum.photos/700/300/?random=${ind}`} alt='img'/>
                      <CardBody>
                        <CardTitle>
                          {ele.split(' ').slice(0, 10).join(' ')};
                        </CardTitle>
                        <CardText>
                          {ele}
                        </CardText>
                      </CardBody>
                    </Card>
                  </Link>)
              }
              return undefined;
             })}
          </Col>
        </Row>
      </Container>
    </div>
  )
}