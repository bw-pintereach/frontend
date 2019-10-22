import React from 'react';
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,
  Col,
  Row
} from 'reactstrap';

const Article = ({ id, title, summary, link, image, user_id, category }) => {
  return (
    <>
      <Col xl="4" md="6" className="mt-4">
        <Card body>
          <CardImg src={`${image}`} alt="" />
          <CardTitle className="display-4">
            <a href={`${link}`}>{title}</a>
          </CardTitle>
          <CardText>{summary}</CardText>
          <CardSubtitle className="text-info">{category}</CardSubtitle>
          <Row className="mt-5">
            <Button className="col-4 btn-sm">Edit</Button>
            <div className="col-4 btn-sm" />
            <Button color="danger" className="col-4 btn-sm">Delete</Button>
          </Row>
        </Card>
      </Col>
    </>
  );
};

export default Article;
