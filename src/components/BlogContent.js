import React from "react";
import { Container, Row, Col } from "reactstrap";
import { useParams } from "react-router";
import ScrollTopOnMount from "./ScrollTopOnMount";

export default function BlogContent(props) {
  const { id } = useParams();
  return (
    <Container>
      <ScrollTopOnMount />
      <Row className="justify-content-center my-5">
        <Col sm="8">
          <img
            width="100%"
            className="mb-5"
            src={`https://picsum.photos/700/300/?random=${id}`}
            alt="img"
          />
          <h1 className="text-dark mb-5">
            {props.blogs[id]
              .split(" ")
              .slice(0, 10)
              .join(" ")}
          </h1>
          <p>{props.blogs[id]}</p>
        </Col>
      </Row>
    </Container>
  );
}
BlogContent.defaultProps = {
  blogs: new Array(20).map(i => "Hello")
};
