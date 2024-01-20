import { Card, CardBody, Col } from "reactstrap";
// @ts-ignore
import Fade from "react-reveal/Fade";

const FacilityCard = ({ facility }: { facility: string }) => {
  return (
    <Col lg="6" md="6" className="mt-2">
      <Fade bottom duration={1500}>
        <Card className="shadow-lg--hover shadow">
          <CardBody className="custom-card-body">
            <div className="d-flex justify-content-center small">
              {facility}
            </div>
          </CardBody>
        </Card>
      </Fade>
    </Col>
  );
};

export default FacilityCard;
