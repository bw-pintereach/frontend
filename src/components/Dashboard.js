import React, { useState, useEffect } from "react";
import Navigation from "./Navigation";
import axiosWithAuth from "../data/axiosWithAuth";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlusCircle } from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";
import { Row, Col, Container } from "reactstrap";
import Article from "./Article";
import { Link } from "react-router-dom";
import CategorySidebar from "./CategorySidebar";

const dummyArray = [
  {
    id: 1,
    title: "Pokemon electronic game",
    summary:
      "Pokémon, electronic game series from Nintendo that debuted in Japan in 1995 and later became wildly popular in the United States. The series, originally produced for the company’s Game Boy line of handheld consoles, was introduced in 1998 to the United States with two titles, known to fans as Red and Blue.",
    link: "https://www.britannica.com/topic/Pokemon-electronic-game",
    image: "https://cdn.britannica.com/s:700x450/70/122270-004-0564DF2A.jpg",
    user_id: 1,
    category: "Mobile Game"
  },
  {
    id: 2,
    title: "Dota 2",
    summary:
      "Dota 2 is a multiplayer online battle arena video game developed and published by Valve Corporation. The game is a sequel to Defense of the Ancients, which was a community-created mod for Blizzard Entertainment's Warcraft III: Reign of Chaos and its expansion pack, The Frozen Throne",
    link: "https://en.wikipedia.org/wiki/Dota_2",
    image:
      "https://dotesports-media.nyc3.cdn.digitaloceanspaces.com/wp-content/uploads/2019/02/24144435/0_vbw4wQW_Xq2_3eOo.jpg",
    user_id: 2,
    category: "Computer Game"
  },
  {
    id: 3,
    title: "Dota 2",
    summary:
      "Dota 2 is a multiplayer online battle arena video game developed and published by Valve Corporation. The game is a sequel to Defense of the Ancients, which was a community-created mod for Blizzard Entertainment's Warcraft III: Reign of Chaos and its expansion pack, The Frozen Throne",
    link: "https://en.wikipedia.org/wiki/Dota_2",
    image:
      "https://dotesports-media.nyc3.cdn.digitaloceanspaces.com/wp-content/uploads/2019/02/24144435/0_vbw4wQW_Xq2_3eOo.jpg",
    user_id: 3,
    category: "Computer Game"
  },
  {
    id: 4,
    title: "Pokemon electronic game",
    summary:
      "Pokémon, electronic game series from Nintendo that debuted in Japan in 1995 and later became wildly popular in the United States. The series, originally produced for the company’s Game Boy line of handheld consoles, was introduced in 1998 to the United States with two titles, known to fans as Red and Blue.",
    link: "https://www.britannica.com/topic/Pokemon-electronic-game",
    image: "https://cdn.britannica.com/s:700x450/70/122270-004-0564DF2A.jpg",
    user_id: 4,
    category: "Mobile Game"
  }
];

const Dashboard = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    axiosWithAuth()
      .get("https://pintreachbackend.herokuapp.com/api/articles/")
      .then(result => {
        console.log("result", result);
        // setArticles(result.data);
      })
      .catch(error => {
        console.log("error", error);
      });
  }, []);

  const [category, setCategory] = useState("all");

  function handleCategoryClick(category) {
    console.log("click");
    console.log(category);
    setCategory(category);
  }

  console.log("category", category);

  return (
    <Col>
      <Navigation />
      <h1>Dashboard</h1>
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
              if (article.category === category || category === "all") {
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
