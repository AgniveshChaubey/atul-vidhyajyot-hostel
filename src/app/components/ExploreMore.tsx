import { FaSquareArrowUpRight } from "react-icons/fa6";
import { Container, Row, Card, CardBody, Col, Button } from "reactstrap";
import Fade from "react-reveal/Fade";
import Link from "next/link";

const ExploreMore = () => {
  return (
    <section className="section section-lg pt-0">
      <Container>
        <div className="d-flex p-4">
          <div>
            <div className="icon icon-lg icon-shape bg-gradient-white shadow rounded-circle text-info">
              <i className="ni ni-laptop text-info" />
            </div>
          </div>
          <div className="pl-4">
            <h4 className="display-3 text-info">Explore more...</h4>
          </div>
        </div>
        <Row className="row-grid align-items-center">
          <Col lg="6">
            <Fade bottom duration={2000}>
              <Card
                className="shadow-lg--hover shadow mt-4"
                style={{ borderRadius: "20px" }}
              >
                <CardBody
                  className="bg-gradient-info"
                  style={{ borderRadius: "20px" }}
                >
                  <Link href="admissionprocess">
                    <div className="d-flex px-3 justify-content-center ">
                      <div className="">
                        <h4 className="text-white">
                          {" "}
                          <strong className="mr-2">
                            Admission Process
                          </strong>{" "}
                          <FaSquareArrowUpRight />
                        </h4>
                      </div>
                    </div>
                  </Link>
                </CardBody>
              </Card>
            </Fade>
          </Col>
          <Col lg="6">
            <Fade bottom duration={2000}>
              <Card
                className="shadow-lg--hover shadow mt-4"
                style={{ borderRadius: "20px" }}
              >
                <CardBody
                  className="bg-gradient-info"
                  style={{ borderRadius: "20px" }}
                >
                  <Link href="/rules">
                    <div className="d-flex px-3 justify-content-center ">
                      <div className="">
                        <h4 className="text-white">
                          {" "}
                          <strong className="mr-2">
                            Rules and Regulations
                          </strong>{" "}
                          <FaSquareArrowUpRight />
                        </h4>
                      </div>
                    </div>
                  </Link>
                </CardBody>
              </Card>
            </Fade>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default ExploreMore;
