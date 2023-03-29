import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { popularproducts } from '../data';
import Product from './Product';
import { mobile } from '../responsive';
import axios from "axios";

const Products = ({cat,filters,sort}) => {
  // console.log(cat,filters,sort);
  const [products,setProducts] = useState([]);
  const [filteredProducts,setFilteredProducts] = useState([]);

  useEffect(()=>{
    const getProducts = async ()=>{
      try{
        const res = await axios.get(cat ? `https://website-api-i932.onrender.com/api/products?category=${cat}`
        : "https://website-api-i932.onrender.com/api/products");
        setProducts(res.data);
      }
      catch(err){
      }
    };
    getProducts();
  },[cat]);

  useEffect(()=>{
    cat && setFilteredProducts(
      products.filter((item)=>
        Object.entries(filters).every(([key,value])=>
          item[key].includes(value)
        )
      )
    ); 
  },[products,cat,filters]);

  useEffect(() => {
    if (sort === "newest") {
      setFilteredProducts((prev) =>
        [...prev].sort((a, b) => a.createdAt - b.createdAt)
      );
    } else if (sort === "asc") {
      setFilteredProducts((prev) =>
        [...prev].sort((a, b) => a.price - b.price)
      );
    } else {
      setFilteredProducts((prev) =>
        [...prev].sort((a, b) => b.price - a.price)
      );
    }
  }, [sort]);
  return (
    <Container>
         {cat
        ? filteredProducts.map((item) => <Product item={item} key={item.id} />)
        : products
            .slice(0, 8)
            .map((item) => <Product item={item} key={item.id} />)}
    </Container>
  );
}
const Container = styled.div`
  padding: 10px; 
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  background-color:  whitesmoke;
  ${mobile({ width: "200%" })}
`;
export default Products;
