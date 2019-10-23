import React, { useEffect } from 'react';
import axiosWithAuth from '../data/axiosWithAuth';
import {
  Card,
  CardImg,
  CardText,
  CardTitle,
  CardSubtitle,
  Button,
  Col,
  Row
} from 'reactstrap';

const Article = ({ id, title, summary, link, image, category, handleDelete }) => {
  
  // const handleDelete = () => {
  //   axiosWithAuth()
  //     .delete(
  //       `https://cors-anywhere.herokuapp.com/https://pintreachbackend.herokuapp.com/api/articles/${id}`
  //     )
  //     .then(res => {
  //       console.log(res);
  //       console.log('deleted');
  //     })
  //     .catch(err => {
  //       console.log(err);
  //       console.log(id);
  //       console.log('bummer');
  //     });
  // };

  return (
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
            <Button onClick={() => handleDelete(id)} color="danger" className="col-4 btn-sm">
              Delete
            </Button>
          </Row>
        </Card>
      </Col>
  );
};

export default Article;
