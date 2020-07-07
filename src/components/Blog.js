import React, { useState } from 'react';
import Header from './Header';
import { Link, useHistory, useLocation } from 'react-router-dom';
import Pagination from 'react-js-pagination';
import { Container, Row, Col, Card, CardImg, CardBody, CardText, CardTitle } from 'reactstrap';

export default function Blog(props) {
  const [ activePage, setActivePage] = useState(1);
  const history = useHistory();
  const location = useLocation();
  const pageURL = new URLSearchParams(location.search);
  const page = pageURL.get('p') ? pageURL.get('p') : 1;
  const listBlogs = props.blogs.slice((page - 1)*5, page*5);
  function handlePageChange(pageNumber) {
    setActivePage(pageNumber);
    history.replace(`/blog/?p=${pageNumber}`);
  }
  
  return(
    <div>
      <Header />
      <Container>
        <Row className='justify-content-center'>
          <Col sm="8">
            {listBlogs.map(( ele, ind) => {
              return(
                <Link to={`/blog/${ind + (page - 1)*5}`} key={ind} >
                  <Card >
                    <CardImg top width='100%' src={`https://picsum.photos/700/300/?random=${ind + (page - 1)*5}`} alt='img'/>
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
             })}
          </Col>
        </Row>
        <Pagination
          hideFirstLastPages
          activePage={activePage}
          itemsCountPerPage={5}
          totalItemsCount={20}
          onChange={handlePageChange.bind(this)}
        />
      </Container>
    </div>
  )
}