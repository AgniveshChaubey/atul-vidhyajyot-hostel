import { Card, Col, Row, Container } from "reactstrap";
import Link from "next/link";
import { quickLinks, urlString } from "@/data/hostelData";

const Footer = ({ value }: any) => {
  console.log(value);
  return (
    <Card
      className={`section-lg bg-gradient-${
        value === "yes" ? "white" : "info"
      } shadow-lg border-0`}
    >
      <Container>
        <div className="p-2">
          <Row className={`text-${value === "yes" ? "info" : "white"}`}>
            <Col className="order-lg-2" lg="4">
              <img
                src={"avatar_url"}
                style={{ width: "200px" }}
                alt=""
                className="rounded-circle img-center img-fluid shadow shadow-lg--hover mb-4"
              />
            </Col>
            <Col lg="6" sm="6" className="order-lg-1">
              <h2>Contact us!</h2>
              <p>Mobile No. +91 7621847331 (Siddhrajsinh Solanki)</p>
              <p>Email: Siddharajsinhsolanki988@gmail.com</p>
            </Col>
            <Col lg="6" sm="6" className="order-lg-1">
              <h2 className="justify-content-center">Quick Links</h2>
              <ul style={{ color: "white" }}>
                {quickLinks.map((each, i) => (
                  <li key={i}>
                    <Link href={`/${urlString(each)}`}>
                      <i
                        className={`text-${value === "yes" ? "info" : "white"}`}
                      >
                        {each}
                      </i>
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
