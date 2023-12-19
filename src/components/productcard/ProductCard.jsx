import React from 'react'
import './ProductCard.css'
import Card from '../card/Card'
import { useLocation} from 'react-router-dom';
const ProductCard = ({products}) => {
    // console.log(data);
    // console.log('products' ,products)
    const param = useLocation();
    const title = param.pathname.replace("/","")
    // console.log(title);
    console.log(products);
    if(products.length === 0)
    {
      return<div>no result found</div>
    }
  return (

    <>
      <h3 className='search-title'>Search result for : {title}&nbsp;<span>{products.length}</span></h3>
    <div className='product-container'>
        {
            products?.map((product)=>(
               <Card product={product} key={product._id}/>
            ))
        }
    </div>
    </>
  )
}

export default ProductCard;