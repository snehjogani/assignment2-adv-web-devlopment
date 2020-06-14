import React, { Component } from "react"
import { Label, FormGroup, Button } from "reactstrap"
import { Formik, Form, Field } from "formik"

class ProfileForm extends Component {
  validateName = (value, label) => {
    let error
    if (!value) {
      error = "Please fill out your " + label
    } else if (!/^[a-z ,.'-]+$/i.test(value)) {
      error = "Invalid " + label
    }
    return error
  }

  validateMobile = (value) => {
    let error
    if (value && !/^(\+\d{1,3}[- ]?)?\d{10}$/.test(value)) {
      error = "Invalid mobile number"
    }
    return error
  }

  render() {
    const { onSubmit, initialValues, loading } = this.props
    return (
      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        validateOnBlur
      >
        {({ errors, touched, values, setFieldValue, setFieldTouched }) => (
          <Form className="av-tooltip tooltip-label-bottom">
            <FormGroup className="form-group has-float-label">
              <Label>
                {"Email*"}
              </Label>
              <Field
                className="form-control"
                name="email"
                disabled
              />
            </FormGroup>

            <FormGroup className="form-group has-float-label">
              <Label>
                {"First Name*"}
              </Label>
              <Field
                className="form-control"
                name="firstName"
                validate={e => this.validateName(e, "first name")}
              />
              {errors.firstName && touched.firstName && (
                <div className="invalid-feedback d-block">
                  {errors.firstName}
                </div>
              )}
            </FormGroup>

            <FormGroup className="form-group has-float-label">
              <Label>
                {"Last Name*"}
              </Label>
              <Field
                className="form-control"
                name="lastName"
                validate={e => this.validateName(e, "last name")}
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
                validate={this.validateMobile}
              />
              {errors.mobile && touched.mobile && (
                <div className="invalid-feedback d-block">
                  {errors.mobile}
                </div>
              )}
            </FormGroup>
            <div className="d-flex justify-content-start align-items-center mb-2">
              <Button
                color="primary"
                className="mt-2 px-4"
                disabled={loading}>
                {loading
                  ? <span className="spinner-border spinner-border-sm" style={{ marginBottom: '2px' }}></span>
                  : null}
                <span className="label ml-2">{loading ? "Saving..." : "Save Changes"}</span>
              </Button>
            </div>
          </Form>
        )}
      </Formik>
    );
  }
}

export default ProfileForm
