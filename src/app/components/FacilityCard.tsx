import { Card, CardBody, Col } from "reactstrap";
// @ts-ignore
import Fade from "react-reveal/Fade";

const FacilityCard = ({ facility }: any) => {
  return (
    <Col lg="6">
      <Fade bottom duration={2000}>
        <Card className="shadow-lg--hover shadow mt-4">
          <CardBody>
            <div className="d-flex px-3">
              <div className="pl-4">
                <h3>{facility}</h3>
              </div>
            </div>
          </CardBody>
        </Card>
      </Fade>
    </Col>
  );
};

export default FacilityCard;
