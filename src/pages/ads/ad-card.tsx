import Photo from "../../components/ui/photo";
import SellBuyTag from "../../components/ui/sell-buy-tag";
import type { AdvertType } from "./types";

interface AdCardProps {
  advert: AdvertType;
}

const AdCard = ({ advert }: AdCardProps) => {
  const { name, sale, price, tags, photo } = advert;
  return (
    <article className="card">
      <div className="img-container">
        <Photo src={photo} />
      </div>

      <SellBuyTag sale={sale} />
    </article>
  );
};

export default AdCard;
