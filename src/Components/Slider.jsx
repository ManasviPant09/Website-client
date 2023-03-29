import React, { useState } from 'react';
import styled from 'styled-components';
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import { sliderItems } from '../data';
import { mobile } from "../responsive";

const Slider = () => {
    const [slideItem,setslideItem] = useState(0);
    const handleClick=(direction)=>{
        // console.log(direction);
        if(direction==="left"){
            setslideItem(slideItem > 0 ? slideItem - 1 : 2);
        }
        else{
            setslideItem(slideItem < 2 ? slideItem + 1 : 2);
        }
    };
    return (
    <Container>
        <ArrowLeft direction="left" onClick={()=>handleClick("left")}><ArrowLeftIcon style = {{color : 'black' , fontSize : '50'}}/>
        </ArrowLeft>
        <Wrapper slideItem={slideItem}>
          {sliderItems.map((item)=>(
            <Slide bg={item.bg} key={item.id}>
              <ImgContainer>
                <Image src={item.img} />
              </ImgContainer>
              <InfoContainer textcolor={item.textcolor} key={item.id}>
                <Title>{item.title}</Title>
                <Description><i>{item.desc}</i></Description>
                <Description1><i>{item.desc1}</i></Description1>
                <Button>SHOP NOW</Button>
              </InfoContainer>
            </Slide>
          ))}
        </Wrapper>
        <ArrowRight direction="right" onClick={()=>handleClick("right")}><ArrowRightIcon style = {{color : 'black' , fontSize : '50'}}/>
        </ArrowRight> 
    </Container>
  );
}
const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  position: relative;
  overflow: hidden;
  margin-top : 15px;
  background : linear-gradient(to right,white,#f7f8f3);
  ${mobile({ display:"none"})};
`;
const ArrowLeft = styled.div`
  width: 50px;
  height: 50px;
  background-color: #fff7f7;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  bottom: 0;
  left: ${(props) => props.direction === "left" && "10px"};
  margin: auto;
  cursor: pointer;
  opacity: 0.5;
  z-index: 2;
`;
const ArrowRight = styled.div`
  width: 50px;
  height: 50px;
  background-color: #fff7f7;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  bottom: 30px;
  right: ${(props) => props.direction === "right" && "10px"};
  margin: auto;
  cursor: pointer;
  opacity: 0.5;
  z-index: 2;
`;

const Wrapper = styled.div`
  height: 100%;
  display: flex;
  transition: all 1.5s ease;
  transform: translateX(${(props) => props.slideItem * -100}vw);
  ${mobile({ width: "100%"})};
`;

const Slide = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  background-color: ${(props) => props.bg};
`;

const ImgContainer = styled.div`
  height: 100%;
  flex: 1;
  
`;

const Image = styled.img`
  height: 90%;
`;

const InfoContainer = styled.div`
  flex: 1;
  margin-right: 100%;
  margin-bottom: 5%;
  color: ${(props) => props.textcolor};
`;

const Title = styled.h1`
  font-size: 70px;
`;

const Description = styled.p`
  margin: 5px 0px;
  font-size: 20px;
  font-weight: 500;
`;
const Description1 = styled.p`
  margin-top: 20px;
  font-size: 20px;
  font-weight: 700;
`;
const Button = styled.button`
  margin-top: 15px;
  padding: 10px;
  font-size: 20px;
  background-color: transparent;
  cursor: pointer;
  &:hover{
    box-shadow: 0px 30px 18px -8px rgba(0, 0, 0, 0.1);
    transform: scale(1.1, 1.1);
    color: black;
  }
`;

export default Slider;