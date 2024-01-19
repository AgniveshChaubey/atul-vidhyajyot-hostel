import { Card, Col, Row, Container } from "reactstrap";
import Link from "next/link";
import { urlString } from "@/data/helperFunctions";
import { footerData } from "@/data/footerData";

const Footer = ({ value }: { value: string }) => {
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
                <h2>{footerData.contact.title}</h2>
                <p>{footerData.contact.mobile}</p>
                <p>{footerData.contact.email}</p>
              </Col>
              <Col lg="6" sm="6" className="order-lg-1">
                <h2 className="justify-content-center">
                  {footerData.quickLinks.title}
                </h2>
                <ul style={{ color: "white" }}>
                  {footerData.quickLinks.links.map((each, i) => (
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
