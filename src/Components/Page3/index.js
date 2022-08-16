import React, { useState } from "react";
import { Button, Col, Row } from "react-bootstrap";
import { Card } from "react-bootstrap";
import Image1 from "../Logos/personal.png";
import Image2 from "../Logos/team.png";

export default function Page3({ changeStep }) {
  // eslint-disable-next-line no-unused-vars
  const [data, setData] = useState({
    fullName: "",
    displayName: "",
  });
  function submitData() {
    localStorage.setItem("fullName", data.fullName);
    localStorage.setItem("displayName", data.displayName);
    console.log(localStorage.getItem("fullName"));
    console.log(localStorage.getItem("displayName"));
    changeStep();
  }
  return (
    <Row>
      <Col></Col>
      <Col>
        <Card className="mb-0 shadow-none" border="muted" text="center">
          <Card.Body>
            <h4>How are you planning to use Eden</h4>
            <p>We'll streamline your setup experience accordingly.</p>
            <Row className="md-6">
              <Col></Col>
              <Col>
                <Card>
                  <Card.Body>
                    <Row>
                      <Col>
                        <img
                          src={Image1}
                          alt="my workspace"
                          height="30px"
                          width="30px"
                        />
                      </Col>
                      <Col></Col>
                      <Col></Col>
                    </Row>
                    <Row>
                      <h5>For myself</h5>
                    </Row>

                    <Row>
                      <p>Write better.Think more clearly.Stay organized.</p>
                    </Row>
                  </Card.Body>
                </Card>
              </Col>
              <Col>
                <Card>
                  <Row>
                    <Col>
                      <img src={Image2} alt="team" height="30px" width="30px" />
                    </Col>
                    <Col></Col>
                    <Col></Col>
                  </Row>
                  <Row>
                    <h5>With my team</h5>
                  </Row>

                  <Row>
                    <p>wikis,docs,tasks & projects. All in one place.</p>
                  </Row>
                </Card>
              </Col>
              <Col></Col>
            </Row>
            <Button varient="primary" onClick={submitData} className="mt-2">
              Create WorkSpace
            </Button>
          </Card.Body>
        </Card>
      </Col>
      <Col></Col>
    </Row>
  );
}
