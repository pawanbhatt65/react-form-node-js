import React, { Fragment } from "react";
import { Col, Container, Row } from "react-bootstrap";

// css
import classes from "./HomeBox.module.css";

const HomeBox = () => {
  return (
    <Fragment>
      <section className={classes["home-box-section"]}>
        <Container fluid="lg">
          <Row>
            <Col
              xs="12"
              lg={{ span: 8, offset: 2 }}
              xxl={{ span: 6, offset: 3 }}
            >
              <div className={classes["home-box-block"]}>Hello There!</div>
            </Col>
          </Row>
        </Container>
      </section>
    </Fragment>
  );
};

export default HomeBox;
