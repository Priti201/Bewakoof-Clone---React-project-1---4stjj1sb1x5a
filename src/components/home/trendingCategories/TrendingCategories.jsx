import React from "react";
import { Image } from "react-bootstrap";

import printedTshirt from "./../../../assets/images/printed-tshirt.webp";
import overSizedTshirt from "./../../../assets/images/oversized-tshirt.webp";
import shorts from "./../../../assets/images/shorts.jpg";
import joggers from "./../../../assets/images/joggers.webp";
import vests from "./../../../assets/images/vests.jpg";
import fullSleeveTshirt from "./../../../assets/images/full-sleeve-tshirts.jpg";

import printedTshirtWomen from "./../../../assets/images/printed-tshirt-women.webp";
import overSizedTshirtWomen from "./../../../assets/images/oversized-tshirt-women.webp";
import fashionTops from "./../../../assets/images/fashion-tops.webp";
import joggersWomen from "./../../../assets/images/joggers-women.webp";
import dresses from "./../../../assets/images/dresses.webp";
import boyfriendTshirts from "./../../../assets/images/boyfriend-tshirts.webp";

const TrendingCategories = () => {
  const trendingCategoriesMen = {
    printedTshirt,
    overSizedTshirt,
    shorts,
    joggers,
    vests,
    fullSleeveTshirt,
  };
  const trendingCategoriesWomen = {
    printedTshirtWomen,
    overSizedTshirtWomen,
    fashionTops,
    joggersWomen,
    dresses,
    boyfriendTshirts,
  };
  return (
    <div>
      <h5 className="trending-categories-title">TRENDING CATEGORIES</h5>
      <ul className="trending-categories-container">
        {Object.entries(trendingCategoriesMen).map(([key, value]) => (
          <li key={key}>
            <div>
              <Image
                src={value}
                alt={key}
                className="trending-categories-image"
                fluid
              />
            </div>
          </li>
        ))}
      </ul>
      <ul className="trending-categories-container">
        {Object.entries(trendingCategoriesWomen).map(([key, value]) => (
          <li key={key}>
            <div>
              <Image
                src={value}
                alt={key}
                className="trending-categories-image"
                fluid
              />
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TrendingCategories;
