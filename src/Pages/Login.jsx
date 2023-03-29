import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../redux/apiCalls";
import {mobile} from "../responsive";

const Login=()=>{
  const[username,setUsername] = useState("");
  const[password,setPassword] = useState("")

  const dispatch = useDispatch();
  const loginEvent=(event)=>{
    event.preventDefault();
    login(dispatch,{username,password});
  };
  

  const {isFetching,error} = useSelector((state)=>state.user);
  return(
    <Container>
      <Wrapper>
        <Title>SIGN IN</Title>
        <Form>
        <Input placeholder="Enter your username" name="username" type="text" onChange={(e)=>setUsername(e.target.value)} />
        <Input placeholder="Enter your password" name="password" type="password" onChange={(e)=>setPassword(e.target.value)} />
        <Button onClick={loginEvent}>SIGN IN</Button>
        {error && <Error>Something went wrong</Error>}
        <Help>
        <Link to="/register" style={{textDecoration: "none",color: "black"}}><TitleHelp>CREATE A NEW ACCOUNT</TitleHelp></Link>
          <TitleHelp style={{textDecoration: "none"}}>FORGOT PASSWORD?</TitleHelp>          
        </Help>
        </Form>
      </Wrapper>
    </Container>
  );
}
const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
    rgba(255, 255, 255, 0.3),
    rgba(255, 255, 255, 0.3)
  ),
  url("https://images.pexels.com/photos/6984650/pexels-photo-6984650.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940")
    center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 25%;
  padding: 20px;
  margin-right: 20%;
  ${mobile({ width: "75%" })}
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 10px 0;
  padding: 10px;
`;
const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: teal;
  color: white;
  cursor: pointer;
  margin-bottom: 10px;
`;
const Error = styled.h5`
  color: red;
  margin: -2% 0 2% 0;
  font-weight: 300;
`;
const Help = styled.div`
  display: flex;
  flex-direction: row;
  margin: -2% 0 0 0;
`;
const TitleHelp = styled.h6`
  margin: 0.75px 0px 0px 2px;
  padding-right: 40px;
  font-size: 10px;
  cursor: pointer;
  font-weight: 500;
`;

export default Login;