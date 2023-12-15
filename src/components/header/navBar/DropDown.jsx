import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const DropDown = () => {
  const [categories, setCartegories] = useState([]);
  useEffect(() => {
    fetchingCartegories();
  }, []);

  const fetchingCartegories = async () => {
    try {
      const response = await axios.get(
        "https://academics.newtonschool.co/api/v1/ecommerce/clothes/categories",
        {
          headers: {
            projectId: "4stjj1sb1x5a",
          },
        }
      );
      console.log("categories", response.data.data);
      setCartegories(response.data.data);
    } catch (error) {
      console.log(error);
    }
  };
//   const handleCategoryClick = async (e)=>{
//     const categoryName = e.target.value
//   }
  return (
    <div className="categories-dropdown-wrapper">
      <div className="categories-dropdown-container">
        {categories.map((category) => {
          return (
            <div key={category}>
              <Link to={`/${category}`}  className="categories-dropdown-link" >{category}</Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default DropDown;
