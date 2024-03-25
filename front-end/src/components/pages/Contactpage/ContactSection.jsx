import React, { Fragment } from "react";
import Form from "./Form";

import { Col, Container, Row } from "react-bootstrap";

// import css
import classes from "./ContactSection.module.css";

const ContactSection = () => {
  return (
    <Fragment>
      <section className={classes["contact-section"]}>
        <Container fluid="lg">
          <Row>
            <Col
              xs="12"
              lg={{ span: 8, offset: 2 }}
              xxl={{ span: 6, offset: 3 }}
            >
              <div className={classes["contact-form"]}>
                <h1>Contact Me</h1>
                <Form />
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </Fragment>
  );
};

export default ContactSection;
