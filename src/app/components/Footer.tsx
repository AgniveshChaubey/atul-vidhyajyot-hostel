import { Card, Col, Row, Container } from "reactstrap";
import Link from "next/link";
import { quickLinks, urlString } from "@/data/portfolio";

const Footer = () => {
  return (
    <Card className="section-lg bg-gradient-info shadow-lg border-0">
      <Container className="">
        <div className="p-2">
          <Row className="">
            <Col className="order-lg-2" lg="4">
              <img
                src={"avatar_url"}
                style={{ width: "200px" }}
                alt=""
                className="rounded-circle img-center img-fluid shadow shadow-lg--hover mb-4"
              />
            </Col>
            <Col lg="6" sm="6" className="order-lg-1">
              <h2 className="text-white">Contact us!</h2>
              <p className="text-white">Mobile No. +91 7621847331 (Siddhrajsinh Solanki)</p>
              <p className="text-white">Email: Siddharajsinhsolanki988@gmail.com</p>
            </Col>
            <Col lg="6" sm="6" className="order-lg-1">
              <h2 className="text-white justify-content-center">Quick Links</h2>
              <ul style={{ color: "white" }}>
                {quickLinks.map((each, i) => (
                  <li key={i}>
                    <Link href={`/${urlString(each)}`}>
                      {" "}
                      <a className="text-white">{each}</a>
                    </Link>
                  </li>
                ))}
              </ul>
            </Col>
          </Row>
        </div>
      </Container>
    </Card>
  );
};

export default Footer;
