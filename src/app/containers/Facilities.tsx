import { facilities } from "../../data/portfolio";
import { Container, Row } from "reactstrap";
import FacilityCard from "@/app/components/FacilityCard";

const Facilities = () => {
  return (
    facilities && (
      <section className="section section-lg pt-0">
        <Container>
          <div className="d-flex p-4">
            <div>
              <div className="icon icon-lg icon-shape bg-gradient-white shadow rounded-circle text-info">
                <i className="ni ni-laptop text-info" />
              </div>
            </div>
            <div className="pl-4">
              <h4 className="display-3 text-info">Facilities</h4>
            </div>
          </div>
          <Row className="row-grid align-items-center">
            {facilities.map((facility, i) => {
              return <FacilityCard key={i} facility={facility} />;
            })}
          </Row>
        </Container>
      </section>
    )
  );
};

export default Facilities;
