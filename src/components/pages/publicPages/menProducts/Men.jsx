import React, { useEffect, useState } from "react";
import { useBaseApi } from "../../../contextApi/BaseDomainContext";
import axios from "axios";
import ProductCard from "../../../productcard/ProductCard";
import { RingLoader } from "react-spinners";

const Men = () => {
  const [mensProducts, setMensProducts] = useState([]);
  useEffect(() => {
    fetchingMensProducts();
  }, []);
  const baseURL = useBaseApi();
  const fetchingMensProducts = async () => {
    try {
      const response = await axios.get(
        `${baseURL}/api/v1/ecommerce/clothes/products?filter={"gender":"Men"}&limit=1000`,
        {
          headers: {
            projectId: "4stjj1sb1x5a",
          },
        }
      );
      console.log(response);
      if(response.status === 200)
      {
        setMensProducts(response.data.data)
      }
    } catch (error) {}
  };

  if(mensProducts.length===0)
  {
    return <div style={{display:'flex', justifyContent:'center', alignItems:'center'}}>
    <RingLoader
      color={'#FEC001'}
      aria-label="Loading Spinner"
      data-testid="loader"
      size={100}
    />
  </div>
  }
  return <div>
    <ProductCard products={mensProducts}/>
  </div>;
};

export default Men;
