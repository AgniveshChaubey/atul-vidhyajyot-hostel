import { Card, CardBody, CardFooter } from "reactstrap";
// @ts-ignore
import Fade from "react-reveal/Fade";
import Image from "next/image";

const GalleryCard = ({ info }: any) => {
  return (
    <Fade left duration={2000}>
      <Card className="card-lift--hover shadow mt-4">
        <CardBody style={{ margin: "5px auto" }}>
          <Image src={info.src} alt="Image" height={450} width={450}></Image>
        </CardBody>
        <CardFooter style={{ margin: "0px auto" }}>{info.desc}</CardFooter>
      </Card>
    </Fade>
  );
};

export default GalleryCard;
