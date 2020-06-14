import React, { Component } from "react";
import { Label, FormGroup, Button } from "reactstrap";
import { Formik, Form, Field } from "formik";

class ProfileForm extends Component {
  validateEmail = (value) => {
    let error;
    if (!value) {
      error = "Please enter your email address";
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
      error = "Invalid email address";
    }
    return error;
  }

  onValidate = (values) => {
    const errors = {};
    if (!values.firstName) {
      errors.firstName = "Please fill out first name"
    }
    if (!values.lastName) {
      errors.lastName = "Please fill out last name";
    }
    if (!values.email) {
      errors.email = this.validateEmail(values.email);
    }

    return errors;
  }

  render() {
    const { onSubmit, initialValues } = this.props
    return (
      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        validateOnBlur
        validate={this.onValidate}
      >
        {({ errors, touched, values, setFieldValue, setFieldTouched }) => (
          <Form className="av-tooltip tooltip-label-bottom">
            <FormGroup className="form-group has-float-label">
              <Label>
                {"Email"}
              </Label>
              <Field
                className="form-control"
                name="email"
                disabled
              />
              {errors.email && touched.email && (
                <div className="invalid-feedback d-block">
                  {errors.email}
                </div>
              )}
            </FormGroup>

            <FormGroup className="form-group has-float-label">
              <Label>
                {"First Name"}
              </Label>
              <Field
                className="form-control"
                name="firstName"
              />
              {errors.firstName && touched.firstName && (
                <div className="invalid-feedback d-block">
                  {errors.firstName}
                </div>
              )}
            </FormGroup>

            <FormGroup className="form-group has-float-label">
              <Label>
                {"Last Name"}
              </Label>
              <Field
                className="form-control"
                name="lastName"
              />
              {errors.lastName && touched.lastName && (
                <div className="invalid-feedback d-block">
                  {errors.lastName}
                </div>
              )}
            </FormGroup>

            <FormGroup className="form-group has-float-label">
              <Label>
                {"Mobile #"}
              </Label>
              <Field
                className="form-control"
                name="mobile"
              />
              {errors.mobile && touched.mobile && (
                <div className="invalid-feedback d-block">
                  {errors.mobile}
                </div>
              )}
            </FormGroup>
            {/* <div className="d-flex justify-content-center align-items-center"> */}
            <Button
              color="primary"
              className={`btn-shadow btn-multiple-state ${this.props.loading ? "show-spinner" : ""}`}
            >
              <span className="spinner d-inline-block">
                <span className="bounce1" />
                <span className="bounce2" />
                <span className="bounce3" />
              </span>
              <span className="label">{"Save Changes"}</span>
            </Button>
            {/* </div> */}
          </Form>
        )}
      </Formik>
    );
  }
}

export default ProfileForm
