import React, { useState } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { register } from "../redux/apiCalls";
import { mobile } from "../responsive";

const Register = () => {
  const navigate = useNavigate();
  const [firstname,setFirstname] = useState("");
  const [lastname,setLastname] = useState("");
  const [username,setUsername] = useState("");
  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");
  const [confirmpassword,setConfirmPassword] = useState("");

  const dispatch = useDispatch();
  const registerEvent=(event)=>{
    event.preventDefault();
    register(dispatch,{firstname,lastname,username,email,password,confirmpassword});
  };
  return (
    <Container>
      <Wrapper>
        <Title>CREATE AN ACCOUNT</Title>
        <Form>
          <Input placeholder="First Name" name="firstname" onChange={(e)=>setFirstname(e.target.value)}  />
          <Input placeholder="Last Name" name="lastname" onChange={(e)=>setLastname(e.target.value)}/>
          <Input placeholder="Username" name="username"onChange={(e)=>setUsername(e.target.value)} />
          <Input placeholder="Email" name="email" type="email" onChange={(e)=>setEmail(e.target.value)}/>
          <Input placeholder="Password" name="password" type="password" onChange={(e)=>setPassword(e.target.value)} />
          <Input placeholder="Confirm Password" name="confirmpassword" type="password" onChange={(e)=>setConfirmPassword(e.target.value)} />
          <Agreement>
            By creating an account, I consent to the processing of my personal
            data in accordance with the PRIVACY POLICY
          </Agreement>
          <Button onClick={registerEvent}>CREATE</Button>
        </Form>
      </Wrapper>
    </Container>
  );
};
const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("https://images.pexels.com/photos/6984661/pexels-photo-6984661.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940")
      center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 40%;
  padding: 20px;
  background-color: white;
  ${mobile({ width: "75%" })}
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
`;

const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 20px 10px 0px 0px;
  padding: 10px;
`;

const Agreement = styled.span`
  font-size: 12px;
  margin: 20px 0px;
`;

const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: teal;
  color: white;
  cursor: pointer;
  ${mobile({ width: "70%" })}
`;
export default Register;