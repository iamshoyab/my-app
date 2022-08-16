import React, { useState } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import { Card } from "react-bootstrap";
export default function Page1({ changeStep }) {
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
            <h4>Welcome! First things first...</h4>
            <p>You can always change them later.</p>
            <Form.Group>
              <p className="mt-0 mb-0">Full Name</p>
              <input
                type="text"
                value={data.fullname}
                name="name"
                placeholder="Steve Jobs"
                onChange={(e) => {
                  setData({ ...data, fullName: e.target.value });
                  console.log(data);
                }}
              />
              <p className="mt-0 mb-0"> Display Name</p>
              <input
                type="text"
                value={data.displayName}
                name="name"
                placeholder="Steve"
                onChange={(e) => {
                  setData({ ...data, displayName: e.target.value });
                  console.log(data);
                }}
              />
            </Form.Group>
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
