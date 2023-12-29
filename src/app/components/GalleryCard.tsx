import { Card, CardBody, CardFooter } from "reactstrap";
// @ts-ignore
import Fade from "react-reveal/Fade";
import Image from "next/image";

const GalleryCard = ({ info }: any) => {
  return (
    <Fade left duration={2000}>
      <Card className="card-lift--hover shadow mt-4">
        <CardBody>
          <h1>{info.id}</h1>
          <Image href={info.link} alt="Image"></Image>
        </CardBody>
        <CardFooter>{info.desc}</CardFooter>
      </Card>
    </Fade>
  );
};

export default GalleryCard;
