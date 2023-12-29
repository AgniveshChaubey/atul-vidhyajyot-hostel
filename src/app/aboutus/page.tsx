"use client";
import { useEffect } from "react";
import { Container, Row, Col } from "reactstrap";
import Footer from "../components/Footer";

const AboutUs = () => {
  useEffect(() => {
    document.documentElement.scrollTop = 0;
    document.scrollingElement!.scrollTop = 0;
  });

  return (
    <main>
      <div className="position-relative">
        <section className="section section-lg section-shaped pb-250">
          <div className="shape shape-style-1 bg-gradient-info">
            <span />
            <span />
            <span />
            <span />
            <span />
            <span />
            <span />
            <span />
            <span />
          </div>
          <Container className="py-lg-md d-flex">
            <div className="col px-0">
              <Row>
                <Col lg="12">
                  <div className="d-flex p-4">
                    <div>
                      <div className="icon icon-md icon-shape bg-gradient-white shadow rounded-circle text-info">
                        <i className="ni ni-laptop text-info" />
                      </div>
                    </div>
                    <div className="pl-4">
                      <h2 className="display-3 text-white">About Us</h2>
                      <h5 className="display-3 text-white">
                        <u>About Hostel</u>
                      </h5>
                      <h5 className="lead text-white">
                        Welcome to Atul vidyajyot Hostel!
                      </h5>
                      <p
                        className="text-white"
                        style={{ textAlign: "justify" }}
                      >
                        Vidyanagar is a university town near Anand, and
                        thousands of students from around India flood the
                        educational capital of Gujarat to attend some of the
                        most renowned universities. Atul Vidhyajyot Hostel was
                        established in 1995 and completed it's silver jubiliee
                        in 2022. It provides modern accommodations and an
                        environment for its students to grow spiritually and
                        academically.
                      </p>
                      <br />
                      <p
                        className="text-white"
                        style={{ textAlign: "justify" }}
                      >
                        This all-boys hostel provides free accommodation for
                        students and delicious food in a beautiful campus with
                        lush greenery and tall trees. Rector overlook its
                        administration and strictly remind students to follow
                        basic moral disciplines. Students start their day off
                        with a morning bath befor 7:30 AM and are encouraged to
                        attend daily prayer (prarthna) in the evening. Special
                        cultural programs are held ocassionally while
                        maintaining the discipline of hostel. Recreational
                        facilities provide students with an opportunity to stay
                        fit and healthy while continuing their education.
                      </p>
                      <h5 className="display-3 text-white mt-5">
                        <u>About Kaka (Owner)</u>
                      </h5>
                    </div>
                  </div>
                </Col>
              </Row>
            </div>
          </Container>
          <div className="separator separator-bottom separator-skew">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
              version="1.1"
              viewBox="0 0 2560 100"
              x="0"
              y="0"
            >
              <polygon className="fill-white" points="2560 0 2560 100 0 100" />
            </svg>
          </div>
        </section>
      </div>
      <Footer value={"yes"} />
    </main>
  );
};

export default AboutUs;
