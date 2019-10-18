import React from 'react';
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,
  Col
} from 'reactstrap';

const Article = ({ id, title, summary, link, image, user_id, category }) => {
  return (
    <>
      <Col sm="6">
        <Card body>
          <CardImg src={`${image}`} alt="" />
          <CardTitle className="display-3">
            <a href={`${link}`}>{title}</a>
          </CardTitle>
          <CardText>{summary}</CardText>
          <CardSubtitle>{category}</CardSubtitle>
        </Card>
      </Col>
    </>
  );
};

export default Article;
