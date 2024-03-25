import React, { Fragment } from "react";
import { NavLink, Link } from "react-router-dom";
import { Col, Container, Row } from "react-bootstrap";

// import css
import classes from "./Header.module.css";

const Header = () => {
  return (
    <Fragment>
      <section className={classes["header-section"]}>
        <Container fluid="lg">
          <Row>
            <Col xs="12">
              <div className={classes["header-block"]}>
                <div className={classes["logo-box"]}>
                  <Link to="/">pawanbhatt</Link>
                </div>
                <ul className={classes["link-item"]}>
                  <li>
                    <NavLink
                      to="/"
                      className={({ isActive }) =>
                        isActive ? classes["active-class"] : ""
                      }
                    >
                      Home
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/contact"
                      className={({ isActive }) =>
                        isActive ? classes["active-class"] : ""
                      }
                    >
                      Contact Us
                    </NavLink>
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

export default Header;
