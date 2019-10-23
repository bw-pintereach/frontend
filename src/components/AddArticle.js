import React from "react";
import { withFormik, Form, Field } from "formik";
import * as Yup from "yup";
import Navigation from "./Navigation";
import axiosWithAuth from "../data/axiosWithAuth";
import { Col } from "reactstrap";

const AddArticle = props => {
  const { touched, errors } = props;

  return (
    <Col>
      <Navigation />
      <h1>Add Article</h1>
      <Form>
        <Field type="text" name="id" placeholder="ID" />
        {touched.id && errors.id && <p className="error">{errors.id}</p>}

        <Field type="text" name="title" placeholder="Title" />
        {touched.title && errors.title && (
          <p className="error">{errors.title}</p>
        )}

        <Field type="text" name="link" placeholder="Link" />

        <Field type="text" name="image" placeholder="Image" />

        <Field type="text" name="category" placeholder="Category" />

        <Field type="text" name="summary" placeholder="Summary" />

        <button type="submit">Submit</button>
      </Form>
    </Col>
  );
};

const FormikAddArticle = withFormik({
  mapPropsToValues({ id, title, link, image, category, summary }) {
    return {
      id: id || "",
      title: title || "",
      link: link || "",
      image: image || "",
      category: category || "",
      summary: summary || ""
    };
  },

  handleSubmit(values, { resetForm, setErrors, setSubmitting, setStatus }) {
    axiosWithAuth()
      .post(
        "https://cors-anywhere.herokuapp.com/https://pintreachbackend.herokuapp.com/api/articles/",
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
  },

  validationSchema: Yup.object().shape({
    id: Yup.string().required("Please enter an ID."),
    title: Yup.string().required("Please enter a title.")
  })
})(AddArticle);

export default FormikAddArticle;
