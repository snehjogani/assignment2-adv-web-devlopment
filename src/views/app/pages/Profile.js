import React, { Component } from "react";
import { Card, CardTitle, Row, CardBody, Modal, ModalHeader, ModalBody } from "reactstrap";

import ProfileForm from '../components/ProfileForm';
import { Colxx } from "../../../common/CustomBootstrap";

class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "John",
      lastName: "Doe",
      mobile: "1234567890",
      email: "johndoe@example.com",
      isOpen: false,
      loading: false
    }
  }

  onSubmit = ({
    firstName,
    lastName,
    mobile,
  }) => {
    const data = {
      first_name: firstName,
      last_name: lastName,
      phone_no: mobile,
    };
    console.log(data)
    this.setState({ isOpen: true, loading: true })
    // changeProfile(user.id, data);
  }

  closeModal = () => {
    this.setState({
      isOpen: false,
      loading: false
    })
  }

  render() {
    const { isOpen, loading, ...initialValues } = this.state
    return (
      <Row style={{ height: 'calc(100vh - 2rem)' }}>
        <Modal isOpen={isOpen} toggle={this.closeModal}>
          <ModalHeader toggle={this.closeModal}>{'Work In Progress'}</ModalHeader>
          <ModalBody>
            {'User profile change API is not yet implemented'}
          </ModalBody>
        </Modal>
        <Colxx>
          <Card>
            <CardBody>
              <CardTitle className="mb-4 text-left text-primary">
                <strong>
                  {"Profile"}
                </strong>
              </CardTitle>
              <ProfileForm initialValues={initialValues} loading={loading} onSubmit={this.onSubmit} />
            </CardBody>
          </Card>
        </Colxx>
      </Row>
    );
  }
}

export default Profile;
