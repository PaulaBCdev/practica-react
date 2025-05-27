import noPhoto from "../../assets/foto-not-available.png";

interface PhotoProps {
  src: string | null;
  alt?: string;
}

const Photo = ({ src, alt }: PhotoProps) => (
  <img src={src ?? noPhoto} alt={alt ?? "photo"} />
);

export default Photo;
