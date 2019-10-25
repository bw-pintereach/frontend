import React, { useState, useEffect } from 'react';
import Navigation from './Navigation';
import axiosWithAuth from '../data/axiosWithAuth';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons';
import { Row, Col } from 'reactstrap';
import Article from './Article';
import { Link } from 'react-router-dom';
import CategorySidebar from './CategorySidebar';
import {Login, Register} from './Register'

const Dashboard = () => {
  const [articles, setArticles] = useState([]);
  const [category, setCategory] = useState('all');

  useEffect(() => {
    axiosWithAuth()
      .get(
        'https://cors-anywhere.herokuapp.com/https://pintreachbackend.herokuapp.com/api/articles/'
      )
      .then(result => {
        console.log('result', result);
        setArticles(result.data);
      })
      .catch(error => {
        console.log('error', error);
      });
  }, []);

  function updateDelete(articlesArray, id) {
    console.log({ delete: { id, articlesArray } });
    const newArray = articlesArray.filter(article => article.id !== id);
    setArticles(newArray);
  }

  function handleCategoryClick(category) {
    console.log('click');
    console.log(category);
    setCategory(category);
  }

  function handleDelete(id) {
    axiosWithAuth()
      .delete(
        `https://cors-anywhere.herokuapp.com/https://pintreachbackend.herokuapp.com/api/articles/${id}`
      )
      .then(res => {
        console.log(res);
        console.log('deleted');
        updateDelete(articles, id);
      })
      .catch(err => {
        console.log(err);
        console.log(id);
        console.log('bummer');
      });
  }

  console.log('category', category);

  return (
    <Col>
      <Navigation />
      <h1>Welcome To Your Dashboard</h1>
      <Col>
        <Col md="12" className="text-left">
          <Link to="/add-article">
            <FontAwesomeIcon icon={faPlusCircle} /> Add Article
          </Link>
          <CategorySidebar
            category={category}
            handleCategoryClick={handleCategoryClick}
          />
        </Col>
        <Col>
          <Row>
            {articles.map(article => {
              if (article.category === category || category === 'all') {
                return (
                  <>
                    <Article
                      key={article.id}
                      id={article.id}
                      title={article.title}
                      summary={article.summary}
                      link={article.link}
                      image={article.image}
                      user_id={article.user_id}
                      category={article.category}
                      handleDelete={handleDelete}
                    />
                  </>
                );
              }
              return null;
            })}
          </Row>
        </Col>
      </Col>
    </Col>
  );
};

export default Dashboard;
