import { Card, CardBody, CardFooter } from "reactstrap";
import Image from "next/image";

const GalleryCard = ({ info }: any) => {
  return (
    <Card className="card-lift--hover shadow mt-4">
      <CardBody style={{ margin: "5px auto" }}>
        <Image src={info.src} alt="Image" height={450} width={450}></Image>
      </CardBody>
      <CardFooter style={{ margin: "0px auto" }}>{info.desc}</CardFooter>
    </Card>
  );
};

export default GalleryCard;
