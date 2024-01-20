import { Card, CardBody, CardFooter } from "reactstrap";
import Image, { StaticImageData } from "next/image";

const GalleryCard = ({
  info,
}: {
  info: { src: StaticImageData; desc: string };
}) => {
  return (
    <Card className="card-lift--hover shadow mt-4">
      <CardBody
        className="pt-3 d-flex justify-content-center"
        style={{ margin: "" }}
      >
        <Image src={info.src} alt="Image" height={400} width={400}></Image>
      </CardBody>
      <CardFooter style={{ margin: "0px auto" }}>{info.desc}</CardFooter>
    </Card>
  );
};

export default GalleryCard;
