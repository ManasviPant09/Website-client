import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components';
import Announcements from '../Components/Announcements';
import Announcements1 from '../Components/Announcements1';
import Footer from '../Components/Footer';
import Navbar from '../Components/Navbar';
import Newsletter from '../Components/Newsletter';
import Products from '../Components/Products';
import { mobile } from "../responsive";

const ProductList = () => {
  const location = useLocation();
  const category = location.pathname.split("/")[2];
  // console.log(category);
  const [filters,setFilters] = useState({});
  const [sort,setSort] = useState("newest");
  const handleFilters = (event)=>{
    const value = event.target.value;
    setFilters({
      ...filters,
      [event.target.name]: value,
    });
  };
  return (
    <Container>
        <Announcements />
        <Navbar />
        <Announcements1 />
        <Title>Wishlisted Products</Title>
        <FilterContainer>
        <Filter>
          <FilterText>Filter Products:</FilterText>
          <Select name = "color" onChange={handleFilters}>
            <Option>
              Color
            </Option>
            <Option>Beige</Option>
            <Option>Black</Option>
            <Option>Red</Option>
            <Option>Blue</Option>
            <Option>Yellow</Option>
            <Option>Green</Option>
          </Select>
          <Select name = "size" onChange={handleFilters}>
            <Option>
              Size
            </Option>
            <Option>XS</Option>
            <Option>S</Option>
            <Option>M</Option>
            <Option>L</Option>
            <Option>XL</Option>
            <Option>XXL</Option>
          </Select>
        </Filter>
        <Filter>
          <FilterText>Sort Products:</FilterText>
          <Select onChange={(e)=>setSort(e.target.value)}>
            <Option value="newest">Newest</Option>
            <Option value="asc">Price (asc)</Option>
            <Option value="dsc">Price (desc)</Option>
          </Select>
        </Filter>
      </FilterContainer>
      <Products cat={category} filters={filters} sort={sort}/>
      <Newsletter />
      <Footer />

      
    </Container>
  )
}

const Container = styled.div`
`;

const Title = styled.h1`
  margin-left: 20px;
  margin-top : 90px;
`;

const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Filter = styled.div`
  margin-left: 20px;
  margin-right: 20px;
  margin-bottom: 20px;
  ${mobile({ width: "0px 20px", display: "flex", flexDirection: "column" })}
`;

const FilterText = styled.span`
  font-size: 20px;
  font-weight: 600;
  margin-right: 20px;
  ${mobile({ marginRight: "0px" })}
`;

const Select = styled.select`
  padding: 10px;
  margin-right: 20px;
  ${mobile({ margin: "10px 0px" })}
`;

const Option = styled.option`
`;
export default ProductList;
