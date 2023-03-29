import SearchIcon from '@mui/icons-material/Search';
import styled from 'styled-components';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import FavoriteBorderOutlined from '@mui/icons-material/FavoriteBorderOutlined';
import { Link } from 'react-router-dom';
import { mobile } from '../responsive';
import { useSelector } from 'react-redux';
import { Badge } from '@mui/material';

const Navbar = () => {
  const quantity = useSelector(state=>state.cart.quantity);
  return (
    <>
    <Container>
        <Wrapper>
            <Left>
                <Language>EN<ArrowDropDownIcon style = {{fontSize:'15px'}}/></Language>
                <SearchContainer>
                 <SearchIcon style={{color : 'gray'}}/>
                 <Input placeholder="Search" />                   
                </SearchContainer>
            </Left>
            <Center><Logo><i>REALDEAL</i></Logo></Center>
            <Right>
                <Link to="/register" style={{ textDecoration: "none",color: "black"}}><MenuItem1>REGISTER</MenuItem1></Link>
                <Link to="/login" style={{ textDecoration: "none",color: "black"}}><MenuItem2>SIGN IN</MenuItem2></Link>
                <Link to="/cart"><Badge badgeContent={quantity}><ShoppingCartIcon style={{color: "black"}} /></Badge></Link>
                <Link to="/cart"><FavoriteBorderOutlined style = {{fontSize:'22px',padding: "10px",color:"black"}}/></Link>
            </Right>
        </Wrapper>
    </Container>
    </>
  );
}
const Container = styled.div`
  height: 5vh;
  ${mobile({ height: "50px" })} 
  ${mobile({ width: "200%"})}
`
const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding-left : 7px;
  padding-right : 7px;
  ${mobile({ padding: "10px 0px" })}
  ${mobile({ paddingLeft: "7px",paddingRight : "7px" })}

`
const Left = styled.div`
  display: flex;
  align-items: center; 
  flex : 1;
  ${mobile({ marginRight : "200px" })}
`
const Language = styled.div`
  cursor : pointer;
  font-size : 15px;
`
const SearchContainer= styled.div`
  border : 1px solid lightgray;
  border-radius : 15px;
  display : flex;
  align-items: center;
  width : 50%;
  padding-left : 5px;
  margin-top : 2px;
  margin-left : 20px;
  input {
    border : none;
    height : 25px;
    width  : 30%;
    &:focus {
      outline: none;
    }
`;

const Input = styled.input`
  border: none;
  ${mobile({ width: "50px" })}
`;

const Center = styled.div`
  text-align : center;
  flex : 1;
  font-size : 40px;
  font-weight : 600;
  color: #463938;
`;

const Logo = styled.h4`
  font-weight: bold;
  ${mobile({ fontSize: "24px" })}
`;

const Right = styled.div`
  display: flex;
  align-items: center;
  justify-content : flex-end;
  flex : 1;
  ${mobile({ flex: 2, justifyContent: "center" })}
`;

const MenuItem1 = styled.div`
  margin-right : 25px;
  cursor: pointer;
  ${mobile({ fontSize: "12px", marginLeft: "10px" })}
`;
const MenuItem2 = styled.div`
  margin-right : 25px;
  cursor: pointer;
  ${mobile({ fontSize: "12px", marginLeft: "10px" })}
`;
export default Navbar;