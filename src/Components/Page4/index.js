import React from "react";
import { Button, Card, Col, Row } from "react-bootstrap";
import Image from "../Logos/done.png";
export default function Page4() {
  return (
    <Row>
      <Col></Col>
      <Col>
        <Card className="mb-0 shadow-none" border="muted" text="center">
          <Card.Body>
            <img src={Image} alt="completed" height="70px" />
            <h4>Congratulations, Eren!</h4>
            <p>You have completed onboarding, you can start using Eden!</p>
            <Button variant="primary">Launch Eden</Button>
          </Card.Body>
        </Card>
      </Col>
      <Col></Col>
    </Row>
  );
}
