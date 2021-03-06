import React, { useEffect, useState } from 'react';
import { withFormik, Form, Field } from 'formik';
import * as Yup from 'yup';
import Navigation from './Navigation';
import axiosWithAuth from '../data/axiosWithAuth';
import { Col } from 'reactstrap';

const AddArticle = props => {
  const { touched, errors } = props;
  const [newID, setNewID] = useState();

  props.initialValues.id = newID;

  useEffect(() => {
    axiosWithAuth()
      .get(
        'https://cors-anywhere.herokuapp.com/https://pintreachbackend.herokuapp.com/api/articles/'
      )
      .then(result => {
        console.log('result', result.data);
        const arrayID = result.data.map(article => article.id);
        const largestID = arrayID.reduce((prev, curr) => {
          return curr > prev ? curr : prev;
        });
        console.log(largestID);
        console.log(largestID + 1);
        setNewID(largestID + 1);
      })
      .catch(error => {
        console.log('error', error);
      });
  }, [newID]);

  return (
    <Col>
      <Navigation />
      <h1>Add Article</h1>
      <Form>
        <Field className="hideID" type="text" name="id" placeholder="ID" />
        {/* {touched.id && errors.id && <p className="error">{errors.id}</p>} */}

        <Field type="text" name="title" placeholder="Title" />
        {touched.title && errors.title && (
          <p className="error">{errors.title}</p>
        )}

        <Field type="text" name="link" placeholder="Link" />

        <Field type="text" name="image" placeholder="Image" />

        <Field type="text" name="category" placeholder="Category" />

        <Field type="text" name="summary" placeholder="Summary" />

        <button
          type="submit"
          onClick={() => setNewID(props.initialValues.id + 1)}
        >
          Submit
        </button>
      </Form>
    </Col>
  );
};

const FormikAddArticle = withFormik({
  mapPropsToValues({ id, title, link, image, category, summary }) {
    console.log(id);
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
        alert('Article Successfully Added');
      })
      .catch(err => {
        console.log(err);
        setSubmitting(false);
      });
  },

  validationSchema: Yup.object().shape({
    // id: Yup.string().required("Please enter an ID."),
    title: Yup.string().required('Please enter a title.')
  })
})(AddArticle);

export default FormikAddArticle;
