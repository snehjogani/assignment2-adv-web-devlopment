import React, { Component } from "react";
import { Row, Card, CardTitle, CardBody } from "reactstrap";
import { NavLink } from "react-router-dom";
import { Colxx } from "../../../common/CustomBootstrap";
import LoginForm from "../components/LoginForm";

class Login extends Component {
  constructor(props) {
    super(props)
    this.state = {
      email: '',
      password: '',
    }
  }

  onSubmit = (values) => {
    const { loading, history, loginUsers } = this.props
    if (!loading) {
      if (values.email !== "" && values.password !== "") {
        // loginUser(values, history);
        console.log({ values })
      }
    }
  }

  render() {
    const initialValues = this.state;
    return (
      <Row className="h-100">
        <Colxx xxs="12" sm="10" lg="8" xl="6" className="mx-auto my-auto">
          <Card>
            <CardBody>
              <CardTitle className="mb-3 d-flex justify-content-center align-items-center">
                <strong>{"Login"}</strong>
              </CardTitle>

              <LoginForm initialValues={initialValues} onSubmit={this.onSubmit} />

              <div className="d-flex justify-content-between align-items-center">
                <NavLink to={`/user/forgot-password`}>
                  {"Forgot Password"}
                </NavLink>
                <span>
                  {"Don't have an account? Sign Up "}
                  <NavLink to={`/user/register`}>
                    {"Here"}
                  </NavLink>
                </span>
              </div>
            </CardBody>
          </Card>
        </Colxx>
      </Row>
    );
  }
}

export default Login
