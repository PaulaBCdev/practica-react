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

      <div className="ad-info">
        <p className="ad-price">{price} EUR</p>
        <p className="ad-name">
          {name.charAt(0).toUpperCase() + name.slice(1).toLowerCase()}
        </p>
      </div>

      <div className="ad-tags">
        {tags.map((tag) => (
          <span key={tag} className="tag">
            {tag}
          </span>
        ))}
      </div>
    </article>
  );
};

export default AdCard;
