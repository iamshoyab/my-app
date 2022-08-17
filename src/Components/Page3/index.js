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
    <>
      <Row>
        <Col></Col>
        <Col xs={4}>
          <Card className="mb-0 shadow-none" border="muted" text="center">
            <Card.Body>
              <h4>How are you planning to use Eden</h4>
              <p className="text-muted">
                We'll streamline your setup experience accordingly.
              </p>
              <Row>
                <Col>
                  <Card text="center" style={{ height: "15rem" }}>
                    <Card.Body>
                      <img
                        src={Image1}
                        alt="my workspace"
                        height="30px"
                        width="30px"
                      />
                      <h5>For myself</h5>
                      <span className="text-muted">
                        Write better.Think more clearly.Stay organized.
                      </span>
                    </Card.Body>
                  </Card>
                </Col>
                <Col>
                  <Card text="center" style={{ height: "15rem" }}>
                    <Card.Body>
                      <img src={Image2} alt="team" height="30px" width="30px" />

                      <h5>With my team</h5>

                      <p className="text-muted">
                        wikis,docs,tasks & projects. All in one place.
                      </p>
                    </Card.Body>
                  </Card>
                </Col>
              </Row>
              <Button varient="primary" onClick={submitData} className="mt-2">
                Create WorkSpace
              </Button>
            </Card.Body>
          </Card>
        </Col>
        <Col></Col>
      </Row>
    </>
  );
}
