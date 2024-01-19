import { Card, Col, Row, Container } from "reactstrap";
import Link from "next/link";
import { quickLinks, urlString } from "@/data/hostelData";

const Footer = ({ value }: any) => {
  return (
    <>
      <Card
        className={`section-lg bg-gradient-${
          value === "yes" ? "white" : "info"
        } shadow-lg border-0`}
      >
        <Container>
          <div className="p-2">
            <Row className={`text-${value === "yes" ? "info" : "white"}`}>
              <Col className="order-lg-2" lg="4"></Col>
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
                          className={`text-${
                            value === "yes" ? "info" : "white"
                          }`}
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
      <Col className="d-flex justify-content-center mt-2 mb-2">
        Made with 💖 by&nbsp;
        <Link
          href={"https://github.com/agniveshchaubey"}
          className="font-weight-bold"
          target="_blank"
        >
          Agnivesh Chaubey
        </Link>
      </Col>
    </>
  );
};

export default Footer;
