import { useEffect, useState } from "react";
import type { AdvertType } from "./types";
import { getLatestAdverts } from "./service";
import Page from "../../components/layout/page";
import { Link } from "react-router";
import Button from "../../components/ui/button";

function EmptyList() {
  return (
    <div>
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
        {ads.length ? (
          ads.map((ad) => (
            <li key={ad.id}>
              <Link to={`/ads/${ad.id}`}>{ad.name}</Link>
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
