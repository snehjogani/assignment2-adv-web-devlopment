import React, { Component } from "react";
import { Label, Button, FormGroup } from "reactstrap";
import { Formik, Form, Field } from "formik";

class LoginForm extends Component {

  validateEmail = (value) => {
    let error;
    if (!value) {
      error = "Please enter your email address";
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
      error = "Invalid email address";
    }
    return error;
  }

  validatePassword = (value) => {
    let error;
    if (!value) {
      error = "Please enter your name";
    } else if (value.length < 4) {
      error = "Value must be longer than 2 characters";
    }
    return error;
  }

  render() {
    const { loading, initialValues, onSubmit } = this.props
    return <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validateOnBlur
    >
      {({ errors, touched }) => (
        <Form className="av-tooltip tooltip-label-bottom">
          <FormGroup>
            <Label>
              {"Email"}
            </Label>
            <Field
              className="form-control"
              name="email"
              validate={this.validateEmail}
            />
            {errors.email && touched.email && (
              <div className="invalid-feedback d-block">
                {errors.email}
              </div>
            )}
          </FormGroup>
          <FormGroup className="form-group has-float-label">
            <Label>
              {"Password"}
            </Label>
            <Field
              className="form-control"
              type="password"
              name="password"
              validate={this.validatePassword}
            />
            {errors.password && touched.password && (
              <div className="invalid-feedback d-block">
                {errors.password}
              </div>
            )}
          </FormGroup>
          <div className="mt-4 mb-3 d-flex justify-content-center align-items-center">
            <Button
              color="primary"
              className="mt-2 px-4"
              disabled={loading}>
              {loading
                ? <span className="spinner-border spinner-border-sm" style={{ marginBottom: '2px' }}></span>
                : null}
              <span className="label ml-2">{loading ? "Signing in..." : "Sign In"}</span>
            </Button>
          </div>
        </Form>
      )}
    </Formik>
  }
}

export default LoginForm