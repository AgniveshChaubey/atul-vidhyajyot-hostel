import { FaSquareArrowUpRight } from "react-icons/fa6";
import { Container, Row, Card, CardBody, Col } from "reactstrap";
import Link from "next/link";
import { homeData } from "@/data/homeData";

const ExploreMore = () => {
  return (
    <section className="section section-lg pt-0">
      <Container>
        <div className="display-3 text-info pt-5 pb-3">
          {homeData.explore.title}
        </div>
        <Row className="row-grid align-items-center row-height">
          {homeData.explore.links.map((link, i) => (
            <Col lg="6" key={i} className="mt-2">
              <Card
                className="shadow-lg--hover shadow"
                style={{ borderRadius: "20px" }}
              >
                <CardBody
                  className="bg-gradient-info card-body"
                  style={{ borderRadius: "20px" }}
                >
                  <Link href={link === "Home" ? "/" : link.toLowerCase()}>
                    <div className="d-flex px-3 justify-content-center ">
                      <div className="">
                        <strong className="mr-2 text-white">{link}</strong>
                        <FaSquareArrowUpRight color={"white"} />
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
