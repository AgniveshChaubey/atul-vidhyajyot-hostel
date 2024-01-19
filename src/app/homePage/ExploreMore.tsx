import { FaSquareArrowUpRight } from "react-icons/fa6";
import { Container, Row, Card, CardBody, Col, Button } from "reactstrap";
// @ts-ignore
import Fade from "react-reveal/Fade";
import Link from "next/link";
import { homeData } from "@/data/homeData";

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
            <h4 className="display-3 text-info">{homeData.explore.title}</h4>
          </div>
        </div>
        <Row className="row-grid align-items-center">
          {homeData.explore.links.map((link, i) => (
            <Col lg="6" key={i}>
              <Fade bottom duration={2000}>
                <Card
                  className="shadow-lg--hover shadow mt-4"
                  style={{ borderRadius: "20px" }}
                >
                  <CardBody
                    className="bg-gradient-info"
                    style={{ borderRadius: "20px" }}
                  >
                    <Link href={link === "Home" ? "/" : link.toLowerCase()}>
                      <div className="d-flex px-3 justify-content-center ">
                        <div className="">
                          <h4 className="text-white">
                            {" "}
                            <strong className="mr-2">{link}</strong>{" "}
                            <FaSquareArrowUpRight />
                          </h4>
                        </div>
                      </div>
                    </Link>
                  </CardBody>
                </Card>
              </Fade>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default ExploreMore;
