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
      >
        <Image
          className="img-responsive bg-white border border-dark rounded-2"
          src={info.src}
          alt="Image"
          height={450}
          width={450}
        />
      </CardBody>
      <CardFooter className="d-flex justify-content-center">{info.desc}</CardFooter>
    </Card>
  );
};

export default GalleryCard;
