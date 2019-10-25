import React, { useState, useEffect } from "react";
import Navigation from "./Navigation";
import axiosWithAuth from "../data/axiosWithAuth";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlusCircle } from "@fortawesome/free-solid-svg-icons";
import { Row, Col } from "reactstrap";
import Article from "./Article";
import { Link } from "react-router-dom";
import CategorySidebar from "./CategorySidebar";

const Dashboard = () => {
  const [articles, setArticles] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [categories, setCategories] = useState(["all"]);

  function getCategories(articles) {
    const categories = articles.map(article => {
      if (article.category.trim() !== "") {
        return article.category;
      }

      return "Uncategorized";
    });

    console.log("getCategories(articles) categories", categories);

    const uniqueCategories = Array.from(new Set(categories)).sort();

    return uniqueCategories;
  }

  useEffect(() => {
    axiosWithAuth()
      .get(
        "https://cors-anywhere.herokuapp.com/https://pintreachbackend.herokuapp.com/api/articles/"
      )
      .then(result => {
        console.log("result.data", result.data);

        const articles = result.data;

        const categories = getCategories(articles);

        setCategories(categories);
        setArticles(articles);
      })
      .catch(error => {
        console.log("error", error);
      });
  }, []);

  function updateDelete(articlesArray, id) {
    const newArray = articlesArray.filter(article => article.id !== id);
    setArticles(newArray);
  }

  function handleCategoryClick(selectedCategory) {
    console.log("handleCategoryClick() selectedCategory", selectedCategory);
    if (selectedCategory === "Uncategorized") {
      setSelectedCategory("");
    } else {
      setSelectedCategory(selectedCategory);
    }
  }

  function handleDelete(id) {
    axiosWithAuth()
      .delete(
        `https://cors-anywhere.herokuapp.com/https://pintreachbackend.herokuapp.com/api/articles/${id}`
      )
      .then(res => {
        console.log(res);
        console.log("deleted");
        updateDelete(articles, id);
      })
      .catch(err => {
        console.log(err);
        console.log(id);
        console.log("bummer");
      });
  }

  console.log("selectedCategory", selectedCategory);

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
            categories={categories}
            selectedCategory={selectedCategory}
            handleCategoryClick={handleCategoryClick}
          />
        </Col>
        <Col>
          <Row>
            {articles.map(article => {
              if (
                article.category.trim() === selectedCategory ||
                selectedCategory === "all"
              ) {
                return (
                  <React.Fragment key={article.id}>
                    <Article
                      id={article.id}
                      title={article.title}
                      summary={article.summary}
                      link={article.link}
                      image={article.image}
                      category={article.category}
                      handleDelete={handleDelete}
                    />
                  </React.Fragment>
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
