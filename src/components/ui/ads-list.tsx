import { Link } from "react-router";
import type { AdvertType } from "../../pages/ads/types";
import AdCard from "../../pages/ads/ad-card";

interface AdsListProps {
  list: AdvertType[];
}

const AdsList = ({ list }: AdsListProps) => {
  return list.map((ad) => (
    <li key={ad.id}>
      <Link to={`/ads/${ad.id}`}>
        <AdCard advert={ad} />
      </Link>
    </li>
  ));
};

export default AdsList;
