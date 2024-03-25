import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import { Col, Container, Row } from "react-bootstrap";

// import css
import classes from "./Footer.module.css";

const Footer = () => {
  return (
    <Fragment>
      <section className={classes["footer-section"]}>
        <Container fluid="lg">
          <Row>
            <Col xs="12">
              <div className={classes["footer-block"]}>
                <div className={classes["logo-box"]}>
                  <Link to="/">pawanbhatt</Link>
                </div>
                <ul className={classes["link-item"]}>
                  <li>
                    <Link to="/">Home</Link>
                  </li>
                  <li>
                    <Link to="/contact">Contact Us</Link>
                  </li>
                </ul>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </Fragment>
  );
};

export default Footer;
