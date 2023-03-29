import React from 'react';
import styled from 'styled-components';
import { mobile } from "../responsive";
import { Link } from 'react-router-dom';

const CategoryItem = ({item}) => {
  return (
    <Container>
      <Link to={`/products/${item.cat}`}>
      <Image src = {item.img} />
      <Information>
        <Title>{item.title}</Title>
        <Button>SHOP NOW</Button>
      </Information>
      </Link> 
    </Container>
  );
};
const Container = styled.div`
  flex : 1;
  margin: 3px;
  height: 90vh;
  position: relative;
  ${mobile({ width: "200%"})}
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  filter: brightness(0.60);
  ${mobile({ height: "150vh" })}
`;

const Information = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

`;
const Title = styled.h1`
  color:white;
  margin-bottom: 20px;
  font-weight : 6c00;
`;

const Button = styled.button`
  border:none;
  padding: 10px;
  background-color: white;
  color: #505050;
  cursor: pointer;
  font-weight: 600;
  &:hover{
    box-shadow: 0px 30px 18px -8px rgba(0, 0, 0, 0.1);
    transform: scale(1.1, 1.1);
    color: black;
  }
`;
export default CategoryItem;
