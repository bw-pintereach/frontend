import React, { useState } from 'react';
import { axiosWithAuth } from "../data/axiosAuth";


const initialArticle = {
    title: "",
    summary: "",
    link: "",
    imagine: img,
    category: "", 
};


const ArticleList = ({ articles, updateArticles }) => {
    console.log(articles);
    const [edit, setEdit] = useState(false);
    const [articleToEdit, setArticleToEdit] = useState(initialArticle);


const editArticle = article => {
    setEdit(true);
    setArticleToEdit(color);
};
const saveEdit = e => {
    e.preventDefault();
};


}