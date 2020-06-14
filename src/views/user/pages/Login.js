import React, { Component } from "react";
import { Row, Card, CardTitle, CardBody, Modal, ModalHeader, ModalBody } from "reactstrap";
import { NavLink } from "react-router-dom";

import { Colxx } from "../../../common/CustomBootstrap";
import LoginForm from "../components/LoginForm";

class Login extends Component {
  constructor(props) {
    super(props)
    this.state = {
      email: '',
      password: '',
      isOpen: false
    }
  }

  onSubmit = (values) => {
    const { loading, history, loginUsers } = this.props
    if (!loading) {
      if (values.email !== "" && values.password !== "") {
        // loginUser(values, history);
        console.log({ values })
        this.setState({
          message: 'Login API request is not yet implemented.',
          isOpen: true,
          loading: true,
        })
      }
    }
  }

  closeModal = () => {
    this.setState({
      isOpen: false,
      loading: false
    })
  }

  render() {
    const { email, password, message, isOpen, loading } = this.state;
    return (
      <Row style={{ height: '100vh', alignItems: 'center' }}>
        <Modal isOpen={isOpen} toggle={this.closeModal}>
          <ModalHeader toggle={this.closeModal}>{'Work In Progress'}</ModalHeader>
          <ModalBody>
            <div>
              {message}<br />{'Click '}
              <NavLink to="/app/dashboard">{'here'}</NavLink>
              {' to visit the App.'}
            </div>
          </ModalBody>
        </Modal>
        <Colxx xxs="12" sm="10" lg="8" xl="6" className="mx-auto mb-5">
          <div className="app-title">
            {"Taskatik"}
          </div>
          <Card>
            <CardBody>
              <CardTitle className="mb-3 d-flex justify-content-center align-items-center">
                <strong>{"Sign In"}</strong>
              </CardTitle>
              <LoginForm initialValues={{ email, password }} loading={loading} onSubmit={this.onSubmit} />
              <div className="d-flex justify-content-between align-items-center" style={{ fontSize: '11px' }}>
                <NavLink
                  to={`#`}
                  style={{ fontWeight: '500' }}
                  onClick={() => this.setState({ isOpen: true, message: 'Forgot Password page is not yet implemented.' })}>
                  {"Forgot Password"}
                </NavLink>
                <span>
                  {"Don't have an account? Sign Up "}
                  <NavLink
                    to={`#`}
                    style={{ fontWeight: '500' }}
                    onClick={() => this.setState({ isOpen: true, message: 'Sign Up page is not yet implemented.' })}>
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
