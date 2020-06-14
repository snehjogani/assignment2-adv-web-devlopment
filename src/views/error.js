import React, { Component, Fragment } from "react";
import { Row, Card, CardTitle, Button, CardBody } from "reactstrap";
import { Colxx } from "../common/CustomBootstrap";

class Error extends Component {
  render() {
    return (
      <Fragment>
        <main>
          <div className="container">
            <Row className="h-100">
              <Colxx xxs="12" md="10" className="mx-auto my-auto">
                <Card className="auth-card">
                  <CardBody>
                    <div className="form-side">
                      <CardTitle className="mb-4">
                        {"Ooops... looks like an error occurred!"}
                      </CardTitle>
                      <p className="mb-0 text-muted text-small mb-0">
                        {"Error code"}
                      </p>
                      <p className="display-1 font-weight-bold mb-5">404</p>
                      <Button
                        href="/app"
                        color="primary"
                        className="btn-shadow"
                        size="md"
                      >
                        {"Go Back Home"}
                      </Button>
                    </div>
                  </CardBody>
                </Card>
              </Colxx>
            </Row>
          </div>
        </main>
      </Fragment>
    );
  }
}
export default Error;
