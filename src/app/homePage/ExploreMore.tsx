import { FaSquareArrowUpRight } from "react-icons/fa6";
import { Container, Row, Card, CardBody, Col } from "reactstrap";
import Link from "next/link";
import { homeData } from "@/data/homeData";

const ExploreMore = () => {
  return (
    <section className="section section-lg pt-0">
      <Container>
        <div className="display-6 text-info pt-5 mb-3 fw-bold">
          {homeData.explore.title}
        </div>
        <Row className="row-grid align-items-center">
          {homeData.explore.links.map((link, i) => (
            <Col lg="6" md="6" key={i} className="mt-2 col col-sm-6">
              <Card
                className="shadow-lg--hover shadow"
                style={{ borderRadius: "20px" }}
              >
                <CardBody
                  className="bg-gradient-info custom-card-body"
                  style={{ borderRadius: "20px" }}
                >
                  <Link href={link === "Home" ? "/" : link.toLowerCase()}>
                    <div className="d-flex px-3 justify-content-center">
                      <div className="fw-bold text-white">
                        {link} <FaSquareArrowUpRight />
                      </div>
                    </div>
                  </Link>
                </CardBody>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default ExploreMore;
