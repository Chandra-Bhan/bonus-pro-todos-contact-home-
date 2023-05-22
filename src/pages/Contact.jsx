import React from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";

const SignupSchema = Yup.object().shape({
  firstName: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  lastName: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  email: Yup.string().email("Invalid email").required("Required"),
  phone: Yup.number().required("Required"),
});

const Contact = () => {
  const localStoreData = localStorage.getItem("contact")
    ? JSON.parse(localStorage.getItem("contact"))
    : [];

  const handleSubmission = (result) => {
    const { firstName, lastName, email, phone } = result;
    const tempData = {
      firstName: firstName,
      lastName: lastName,
      email: email,
      phone: phone,
    };
    localStorage.setItem(
      "contact",
      JSON.stringify([...localStoreData, tempData])
    );
    alert(
      "Thank you for contacting us. We will get back to you as soon as possible."
    );
  };

  return (
    <div
      style={{
        width: "600px",
        margin: "auto",
        marginTop: "7rem",
        borderRadius: "1rem",
      }}
      className="border p-5 bg-secondary"
    >
      <h1
        className="h1 text-warning text-uppercase bg-danger p-2"
        style={{ borderRadius: "10px" }}
      >
        Contact
      </h1>
      <Formik
        initialValues={{
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
        }}
        validationSchema={SignupSchema}
        onSubmit={(values) => {
          handleSubmission(values);
          values.firstName = "";
          values.lastName = "";
          values.email = "";
          values.phone = "";
          //   console.log(values);
        }}
      >
        {({ errors, touched }) => (
          <Form>
            <Field
              name="firstName"
              className="form-control mt-3"
              placeholder="First Name"
            />
            {errors.firstName && touched.firstName ? (
              <div className="alert alert-danger p-1">{errors.firstName}</div>
            ) : (
              <div></div>
            )}
            <Field
              name="lastName"
              className="form-control mt-3"
              placeholder="Last Name"
            />
            {errors.lastName && touched.lastName ? (
              <div className="alert alert-danger p-1">{errors.lastName}</div>
            ) : (
              <div></div>
            )}
            <Field
              name="email"
              type="email"
              className="form-control mt-3"
              placeholder="Email Address"
            />
            {errors.email && touched.email ? (
              <div className="alert alert-danger p-1">{errors.email}</div>
            ) : (
              <div></div>
            )}
            <Field
              name="phone"
              className="form-control mt-3"
              placeholder="Mobile Number"
            />
            {errors.phone && touched.phone ? (
              <div className="alert alert-danger p-1">{errors.phone}</div>
            ) : (
              <div></div>
            )}
            <button className="btn btn-success p-3 mt-3" type="submit">
              Submit
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};
export default Contact;
