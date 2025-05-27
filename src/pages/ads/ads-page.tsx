import "./ads-page.css";
import { useEffect, useState } from "react";
import type { AdvertType } from "./types";
import { getLatestAdverts } from "./service";
import Page from "../../components/layout/page";
import { Link } from "react-router";
import Button from "../../components/ui/button";
import AdCard from "./ad-card";

function EmptyList() {
  return (
    <div className="ads-page-empty">
      <p>There are no adverts posted yet.</p>
      <p>Be the first one!</p>
      <Button>CREATE AD</Button>
    </div>
  );
}

function AdsPage() {
  const [ads, setAds] = useState<AdvertType[]>([]);

  useEffect(() => {
    async function getAds() {
      const ads = await getLatestAdverts();
      console.log(ads);
      setAds(ads);
    }
    getAds();
  }, []);

  return (
    <Page title="">
      <section className="ads-page">
        {/* show-products en la practica de frontend */}
        {ads.length ? (
          ads.map((ad) => (
            <li key={ad.id}>
              <Link to={`/ads/${ad.id}`}>
                <AdCard advert={ad} />
              </Link>
            </li>
          ))
        ) : (
          <EmptyList />
        )}
      </section>
    </Page>
  );
}

export default AdsPage;
