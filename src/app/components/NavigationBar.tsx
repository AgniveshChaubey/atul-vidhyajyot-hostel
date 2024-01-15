"use client";
import { useState, useEffect } from "react";
import { greetings } from "../../data/hostelData";
// @ts-ignore
import Headroom from "headroom.js";
import {
  UncontrolledCollapse,
  NavbarBrand,
  Navbar,
  NavLink,
  Nav,
  Container,
  Row,
  Col,
  NavItem,
} from "reactstrap";
import { quickLinks, urlString } from "../../data/hostelData";

const NavigationBar = () => {
  const [collapseClasses, setCollapseClasses] = useState("");
  const onExiting = () => setCollapseClasses("collapsing-out");

  const onExited = () => setCollapseClasses("");

  useEffect(() => {
    let headroom = new Headroom(document.getElementById("navbar-main")!);
    headroom.init();
  });

  return (
    <>
      <header className="header-global">
        <Navbar
          className="navbar-main navbar-transparent navbar-light headroom"
          expand="lg"
          id="navbar-main"
        >
          <Container>
            <button
              className="navbar-toggler"
              aria-label="navbar_toggle"
              id="navbar_global"
            >
              <span className="navbar-toggler-icon" />
            </button>
            <UncontrolledCollapse
              toggler="#navbar_global"
              navbar
              className={collapseClasses}
              onExiting={onExiting}
              onExited={onExited}
            >
              <NavbarBrand href="/" className="mr-lg-5 mt-1">
                <h2 className="text-white" id="nav-title">
                  {greetings.name}
                </h2>
              </NavbarBrand>
              <div className="navbar-collapse-header">
                <Row>
                  <Col className="collapse-brand" xs="6">
                    <h3 className="text-black" id="nav-title">
                      {greetings.name}
                    </h3>
                  </Col>
                  <Col className="collapse-close" xs="6">
                    <button
                      className="navbar-toggler"
                      id="navbar_global"
                    ></button>
                  </Col>
                </Row>
              </div>
              <Nav className="align-items-lg-center ml-lg-auto" navbar>
                {quickLinks.map((each, index) => (
                  <NavItem key={index}>
                    <NavLink
                      rel="noopener"
                      aria-label={`/${urlString(each)}`}
                      className="nav-link-icon"
                      href={`/${urlString(each)}`}
                    >
                      {each}
                    </NavLink>
                  </NavItem>
                ))}
              </Nav>
            </UncontrolledCollapse>
          </Container>
        </Navbar>
      </header>
    </>
  );
};
export default NavigationBar;
