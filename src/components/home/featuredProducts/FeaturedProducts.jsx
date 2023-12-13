import React from "react";
import { Container, Image } from "react-bootstrap";
import "./FeaturedProducts.css";
import newArrivals from "./../../../assets/images/newarrivals.png";
import bestsellers from "./../../../assets/images/bestsellers.png";
import winterwear from "./../../../assets/images/winterwear.png";
import officialcollaborations from "./../../../assets/images/officialcollaborations.png";
import customization from "./../../../assets/images/customization.png";
import combos from "./../../../assets/images/combos.gif";
import couponoffers from "./../../../assets/images/couponoffers.png";
import vote from "./../../../assets/images/vote.png";
import plussize from "./../../../assets/images/plussize.png";
import lastsizeleft from "./../../../assets/images/lastsizeleft.png";

const featuredProducts = {
  "New Arrivals": newArrivals,
  Bestsellers: bestsellers,
  Winterwear: winterwear,
  "Official Collaborations": officialcollaborations,
  Customization: customization,
  Combos: combos,
  "Coupon Offers": couponoffers,
  "Vote for Designs": vote,
  "Plus Size": plussize,
  "Last Sizes Left": lastsizeleft,
};

//   const featuredProducts = [
//     {'New Arrivals': './src/assets/images/newarrivals.png'},
//     {'Bestsellers': './src/assets/images/bestsellers.png'},
//     {'Winterwear': './src/assets/images/winterwear.png'},
//     {'Official Collaborations': './src/assets/images/officialcollaborations.png'},
//     {'Customization': './src/assets/images/customization.png'},
//     {'Combos': './src/assets/images/combos.gif'},
//     {'Coupon Offers': './src/assets/images/couponoffers.png'},
//     {'Vote for Designs': './src/assets/images/vote.png'},
//     {'Plus Size': './src/assets/images/plussize.png'},
//     {'Last Sizes Left': './src/assets/images/lastsizeleft.png'}
// ]

const FeaturedProducts = () => {
  return (
    <div className="features-wrapper">
      <div className="features-container">
        <ul className="features-list">
          {Object.entries(featuredProducts).map(([key, value]) => (
            <li className="featured-product" key={key}>
              <div className="slider-inner">
                <Image src={value} alt={key} className="slider-image" />
                <p>{key}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default FeaturedProducts;
