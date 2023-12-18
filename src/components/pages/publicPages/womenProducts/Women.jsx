import React, { useEffect, useState } from "react";
import { useBaseApi } from "../../../contextApi/BaseDomainContext";
import axios from "axios";
import ProductCard from "../../../productcard/ProductCard";


const Women = () => {
    const[womensProducts, setWomensProducts]= useState([]);
    useEffect(() => {
        fetchingWomensProducts();
      }, []);
      const baseURL = useBaseApi();
      const fetchingWomensProducts = async () => {
        try {
          const response = await axios.get(
            `${baseURL}/api/v1/ecommerce/clothes/products?filter={"gender":"Women"}&limit=1000`,
            {
              headers: {
                projectId: "4stjj1sb1x5a",
              },
            }
          );
          console.log(response);
          if(response.status === 200)
          {
            setWomensProducts(response.data.data)
          }
        } catch (error) {}
    }
  return (
    <div>
    <ProductCard products={womensProducts}/>
  </div>
  )
}

export default Women;

 
