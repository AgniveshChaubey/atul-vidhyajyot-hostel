import { Card, CardBody, Col } from "reactstrap";
// @ts-ignore
import Fade from "react-reveal/Fade";

const FacilityCard = ({ facility }: { facility: string }) => {
  return (
    <Col lg="6" md="6" className="mt-2 col col-sm-6">
      <Fade bottom duration={1500}>
        <Card className="shadow-lg--hover shadow w-100">
          <CardBody className="custom-card-body">
            <div className="d-flex px-1 mx-3 justify-content-center small-mobile-font">
              {facility}
            </div>
          </CardBody>
        </Card>
      </Fade>
    </Col>
  );
};

export default FacilityCard;
