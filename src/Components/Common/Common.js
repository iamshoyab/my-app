import React, { useState } from "react";
import { Card, Col, ProgressBar, Row } from "react-bootstrap";
import Page1 from "../Page1";
import Page2 from "../Page2";
import Page3 from "../Page3";
import Page4 from "../Page4";
export default function Common() {
  const [step, setStep] = useState(1);
  function changeStep() {
    if (step < 4) {
      setStep(step + 1);
    }
    console.log(step);
  }
  return (
    <>
      <Card.Body>
        <Row>
          <Col></Col>
          <Col>
            <ProgressBar
              now={step !== 4 ? step * 25 - 10 : 100}
              style={{ height: 10, color: "purple" }}
            />
          </Col>
          <Col></Col>
        </Row>
        <Row></Row>
        <Row>
          {step === 1 && <Page1 changeStep={changeStep} />}
          {step === 2 && <Page2 changeStep={changeStep} />}
          {step === 3 && <Page3 changeStep={changeStep} />}
          {step === 4 && <Page4 changeStep={changeStep} />}
        </Row>
      </Card.Body>
    </>
  );
}
