import React, { Component } from "react";
import { Card, CardTitle, Row, CardBody, Container } from "reactstrap";
import ProfileForm from '../components/ProfileForm'
import { Colxx } from "../../../common/CustomBootstrap";

class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = { firstName: "John", lastName: "Doe", mobile: "1234567890", email: "johndoe@example.com" };
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
    // changeProfile(user.id, data);
  }

  render() {
    const initialValues = this.state;
    return (
      <Row className="h-100">
        <Colxx>
          <Card className="h-100 w-100">
            <CardBody>
              <CardTitle className="mb-4 text-left text-primary">
                <strong>
                  {"Profile"}
                </strong>
              </CardTitle>
              <ProfileForm initialValues={initialValues} onSubmit={this.onSubmit} />
            </CardBody>
          </Card>
        </Colxx>
      </Row>
    );
  }
}

export default Profile;
