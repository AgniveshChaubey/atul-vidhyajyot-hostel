import { Container, Row } from "reactstrap";
import FacilityCard from "@/app/components/FacilityCard";
import { homeData } from "@/data/homeData";

const Facilities = () => {
  return (
    <section className="section section-lg pt-0 pb-0">
      <Container>
        <div className="display-6 text-info pt-5 mb-3 fw-bold">
          {homeData.facilities.title}
        </div>
        <Row className="row-grid align-items-center">
          {homeData.facilities.facilityList.map((facility, i) => {
            return <FacilityCard key={i} facility={facility} />;
          })}
        </Row>
      </Container>
    </section>
  );
};

export default Facilities;
