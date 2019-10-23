import React, { useEffect, useState } from 'react';
import { withFormik, Form, Field } from 'formik';
import * as Yup from 'yup';
import Navigation from './Navigation';
import axiosWithAuth from '../data/axiosWithAuth';

const AddArticle = () => {

  return (
    <div>
      <Navigation />
      <h1>Add Article</h1>
      <Form>
        <Field type="text" name="id" placeholder="ID" />
        <Field type="text" name="title" placeholder="Title" />
        <Field type="text" name="link" placeholder="Link" />
        <Field type="text" name="image" placeholder="Image" />
        <Field type="text" name="category" placeholder="Category" />
        <Field type="text" name="summary" placeholder="Summary" />
        <button type="submit">Submit</button>
      </Form>
    </div>
  );
};

const FormikAddArticle = withFormik({
  mapPropsToValues({ id, title, link, image, category, summary }) {
    return {
      id: id || '',
      title: title || '',
      link: link || '',
      image: image || '',
      category: category || '',
      summary: summary || ''
    };
  },

  handleSubmit(values, { resetForm, setErrors, setSubmitting, setStatus }) {
    axiosWithAuth()
      .post(
        'https://cors-anywhere.herokuapp.com/https://pintreachbackend.herokuapp.com/api/articles/',
        values
      )
      .then(res => {
        setStatus(res.data);
        resetForm();
        setSubmitting(false);
      })
      .catch(err => {
        console.log(err);
        setSubmitting(false);
      });
  }
})(AddArticle);

export default FormikAddArticle;
