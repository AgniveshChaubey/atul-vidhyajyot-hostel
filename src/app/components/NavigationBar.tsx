"use client";
import { useState, useEffect, useRef } from "react";
// @ts-ignore
import Headroom from "headroom.js";
import {
  Navbar,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledCollapse,
  Container,
  Row,
  Col,
} from "reactstrap";
import { urlString } from "../../data/helperFunctions";
import { homeData } from "@/data/homeData";
import Link from "next/link";
import { Russo_One } from "next/font/google";
const russoOne = Russo_One({
  subsets: ["latin"],
  weight: "400",
});

const NavigationBar = () => {
  const buttonBRef = useRef(null);

  const [collapseClasses, setCollapseClasses] = useState("");
  const onExiting = () => setCollapseClasses("collapsing-out");

  const onExited = () => setCollapseClasses("");

  useEffect(() => {
    let headroom = new Headroom(document.getElementById("navbar-main")!);
    headroom.init();
  });

  const handleButtonClick = () => {
    if (window.innerWidth <= 767 && buttonBRef.current) {
      // @ts-ignore
      buttonBRef.current.click();
    }
  };

  return (
    <>
      <header className="header-global">
        <Navbar
          className="navbar-main navbar-transparent navbar-light headroom"
          expand="lg"
          id="navbar-main"
        >
          <Container className="d-flex justify-content-between">
            <Link href="/">
              <NavbarBrand href="/" className="mr-lg-5 mt-1">
                <h2
                  className={`text-white ${russoOne.className}`}
                  id="nav-title"
                >
                  Atul Vidhyajyot
                </h2>
              </NavbarBrand>
            </Link>
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
              <div className="navbar-collapse-header">
                <Row>
                  <Col className="collapse-brand" xs="6">
                    <h3
                      className={`text-black ${russoOne.className}`}
                      id="nav-title"
                    >
                      Atul Vidhyajyot
                    </h3>
                  </Col>
                  <Col className="collapse-close" xs="6">
                    <button
                      className="navbar-toggler"
                      id="navbar_global"
                      ref={buttonBRef}
                    >
                      {" "}
                      <span />
                      <span />
                    </button>
                  </Col>
                </Row>
              </div>
              <Nav className="align-items-lg-center ml-lg-auto" navbar>
                {homeData.explore.links.map((each, index) => (
                  <NavItem key={index}>
                    <Link
                      href={`/${urlString(each)}`}
                      onClick={handleButtonClick}
                    >
                      <NavLink
                        rel="noopener"
                        aria-label={`/${urlString(each)}`}
                        className="nav-link-icon"
                      >
                        {each}
                      </NavLink>
                    </Link>
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
