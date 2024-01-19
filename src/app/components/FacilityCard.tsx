import { Card, CardBody, Col } from "reactstrap";
// @ts-ignore
import Fade from "react-reveal/Fade";

const FacilityCard = ({ facility }: { facility: string }) => {
  return (
    <Col lg="6" className="m-0 small-height">
      <Fade bottom duration={1500}>
        <Card className="shadow-lg--hover shadow mt-4">
          <CardBody className="small-body">
            <div className="pl-4">
              <h5 className="small-height">{facility}</h5>
            </div>
          </CardBody>
        </Card>
      </Fade>
    </Col>
  );
};

export default FacilityCard;
