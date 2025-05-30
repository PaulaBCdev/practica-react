import "./ads-page.css";
import { lazy, useEffect, useState, type ChangeEvent } from "react";
import type { FiltersType, AdvertType } from "./types";
import { getLatestAdverts, getTags } from "./service";
import Page from "../../components/layout/page";
import Button from "../../components/ui/button";
import FormField from "../../components/ui/form-field";

const AdsList = lazy(() => import("./ads-list"));

interface Props {
  areFilters: boolean;
}

function EmptyList({ areFilters }: Props) {
  return areFilters ? (
    <div className="no-filter-matches">
      There are no ads matching your search.
    </div>
  ) : (
    <div className="ads-page-empty">
      <p>There are no adverts posted yet.</p>
      <p>Be the first one!</p>
      <Button>CREATE AD</Button>
    </div>
  );
}

function AdvertsPage() {
  const [ads, setAds] = useState<AdvertType[]>([]);
  const [showingAds, setShowingAds] = useState<AdvertType[]>([]);

  //FILTERS STATES

  const [appliedFilters, setAppliedFilters] = useState<FiltersType>({});

  const [nameInput, setNameInput] = useState("");

  const [selectedSaleInput, setSelectedSaleInput] = useState("");

  const [priceInput, setPriceInput] = useState("0");
  const [maxPrice, setMaxPrice] = useState("5000");

  const [tags, setTags] = useState([]);
  const [selectedTags, setSelectedTags] = useState<string[]>([]);

  useEffect(() => {
    async function getAds() {
      const ads = await getLatestAdverts();
      setAds(ads);
      setShowingAds(ads);

      //price filter
      let maxPrice = 0;
      ads.forEach((ad) => {
        if (ad.price > maxPrice) {
          maxPrice = ad.price;
        }
      });
      setPriceInput(maxPrice.toString());
      setMaxPrice(maxPrice.toString());

      //tags filter
      const tags = await getTags();
      setTags(tags);
    }
    getAds();
  }, []);

  const handleChangeName = (event: ChangeEvent<HTMLInputElement>) => {
    setNameInput(event.target.value);
  };

  const handleChangeSale = (event: ChangeEvent<HTMLInputElement>) => {
    setSelectedSaleInput(event.target.value);
  };

  const handleChangePrice = (event: ChangeEvent<HTMLInputElement>) => {
    setPriceInput(event.target.value);
  };

  function handleCheckTags(event: ChangeEvent<HTMLInputElement>) {
    if (event.target.checked) {
      setSelectedTags([...selectedTags, event.target.value]);
    } else {
      const newSelected = [...selectedTags].filter(
        (tag) => tag !== event.target.value,
      );
      setSelectedTags(newSelected);
    }
  }

  const handleApplyFilters = () => {
    const newFilters: FiltersType = {};
    if (nameInput) {
      newFilters.name = nameInput;
    }
    if (selectedSaleInput) {
      if (selectedSaleInput === "sell") {
        newFilters.sale = true;
      } else {
        newFilters.sale = false;
      }
    }
    if (priceInput) {
      newFilters.price = [0, parseInt(priceInput)];
    }
    if (selectedTags) {
      newFilters.tags = selectedTags;
    }
    setAppliedFilters(newFilters);
  };

  const handleDeleteFilters = () => {
    setAppliedFilters({});
  };

  useEffect(() => {
    const applyFilters = () => {
      const filteredAds = ads.filter((ad) => {
        const nameMatches = !!appliedFilters.name
          ? ad.name.toLowerCase().startsWith(appliedFilters.name.toLowerCase())
          : true;
        const priceMatches = !!appliedFilters.price
          ? appliedFilters.price[0] <= ad.price &&
            ad.price <= appliedFilters.price[1]
          : true;
        const saleMatches =
          appliedFilters.sale !== undefined
            ? ad.sale === appliedFilters.sale
            : true;
        let tagsMatches = true;
        !!appliedFilters.tags?.length &&
          appliedFilters.tags.forEach((tag) => {
            if (!ad.tags.includes(tag)) tagsMatches = false;
          });

        return nameMatches && priceMatches && saleMatches && tagsMatches;
      });
      setShowingAds(filteredAds);
    };
    applyFilters();
  }, [appliedFilters]);

  const isFiltering =
    appliedFilters.name !== undefined ||
    appliedFilters.price !== undefined ||
    appliedFilters.sale !== undefined ||
    appliedFilters.tags !== undefined;

  return (
    <Page title="">
      <section className="ads-filter">
        <FormField
          label="Name"
          type="text"
          name="name"
          value={nameInput}
          onChange={handleChangeName}
        />

        <div className="sale-filter">
          <div>
            <label htmlFor="sell">Sell</label>
            <input
              type="radio"
              id="sell"
              name="sale"
              value="sell"
              checked={selectedSaleInput === "sell"}
              onChange={handleChangeSale}
            />
          </div>
          <div>
            <label htmlFor="buy">Buy</label>
            <input
              type="radio"
              id="buy"
              name="sale"
              value="buy"
              checked={selectedSaleInput === "buy"}
              onChange={handleChangeSale}
            />
          </div>
        </div>

        <div className="price-filter">
          <input
            type="range"
            min="0"
            max={maxPrice}
            value={priceInput}
            className="slider"
            id="price-slider"
            onChange={handleChangePrice}
          />
          <label htmlFor="price-slider">Price range: 0 - {priceInput}</label>
        </div>

        <div className="tags-filter">
          {tags.map((tag) => {
            return (
              <div className="tag" key={tag}>
                <input
                  type="checkbox"
                  name={tag}
                  id={tag}
                  value={tag}
                  checked={selectedTags.includes(tag)}
                  onChange={handleCheckTags}
                />
                <label htmlFor={tag}>{tag}</label>
              </div>
            );
          })}
        </div>

        <Button className="apply-filters-btn" onClick={handleApplyFilters}>
          APPLY FILTERS
        </Button>
        <Button className="delete-filters-btn" onClick={handleDeleteFilters}>
          DELETE FILTERS
        </Button>
      </section>
      <section className="ads-page">
        {!showingAds.length ? (
          <EmptyList areFilters={isFiltering} />
        ) : (
          <AdsList list={showingAds} />
        )}
      </section>
    </Page>
  );
}

export default AdvertsPage;
