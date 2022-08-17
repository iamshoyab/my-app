import React, { useState } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import { Card } from "react-bootstrap";
export default function Page2({ changeStep }) {
  const [data, setData] = useState({
    workspaceName: "",
    workspaceURL: "",
  });
  function submitData() {
    localStorage.setItem("workspaceName", data.workspaceName);
    localStorage.setItem("workspaceURL", data.workspaceURL);
    console.log(localStorage.getItem("workspaceName"));
    console.log(localStorage.getItem("workspaceURL"));
    changeStep();
  }
  return (
    <Row>
      <Col></Col>
      <Col>
        <Card className="mb-0 shadow-none" border="muted" text="center">
          <Card.Body>
            <h4>Let's set up a home for all your work</h4>
            <p className="text-muted">
              You can always create another workspace later.
            </p>
            <Form.Group>
              <p className="mt-0 mb-0 text-muted">WorkSpace Name</p>
              <Form.Control
                type="text"
                value={data.workspaceName}
                name="name"
                placeholder="Eden"
                onChange={(e) => {
                  setData({ ...data, workspaceName: e.target.value });
                  console.log(data);
                }}
              />
              <p className="mt-0 mb-0 text-muted">WorkSpace URL</p>

              <Form.Control
                type="text"
                value={data.workspaceURL}
                name="name"
                placeholder="www.eden.com/"
                onChange={(e) => {
                  setData({ ...data, workspaceURL: e.target.value });
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
