import "./ads-page.css";
import { useEffect, useState, type ChangeEvent } from "react";
import type { AdvertType } from "./types";
import { getLatestAdverts } from "./service";
import Page from "../../components/layout/page";
import { Link } from "react-router";
import Button from "../../components/ui/button";
import AdCard from "./ad-card";
import Filters from "./filters";
import FormField from "../../components/ui/form-field";

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

  const [price, setPrice] = useState("0");
  const [maxPrice, setMaxPrice] = useState("5000");

  useEffect(() => {
    async function getAds() {
      const ads = await getLatestAdverts();
      console.log(ads);
      setAds(ads);

      //price input
      let maxPrice = 0;
      ads.forEach((ad) => {
        if (ad.price > maxPrice) {
          maxPrice = ad.price;
        }
      });
      setPrice(maxPrice.toString());
      setMaxPrice(maxPrice.toString());
    }
    getAds();
  }, []);

  const handleChangePrice = (event: ChangeEvent<HTMLInputElement>) => {
    setPrice(event.target.value);
  };

  return (
    <Page title="">
      <section className="ads-filter">
        <form>
          <FormField label="Name" type="text" />

          <div className="sale-filter">
            <div>
              <label htmlFor="sell">Sell</label>
              <input type="radio" id="sell" name="sale" />
            </div>
            <div>
              <label htmlFor="buy">Buy</label>
              <input type="radio" id="buy" name="sale" />
            </div>
          </div>

          <div className="price-filter">
            <input
              type="range"
              min="0"
              max={maxPrice}
              value={price}
              className="slider"
              id="price-slider"
              onChange={handleChangePrice}
            />
            <label htmlFor="price-slider">Price range: 0 - {price}</label>
          </div>
        </form>
      </section>
      <section className="ads-page">
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
