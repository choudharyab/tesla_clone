import React ,{useState} from 'react'
import Styled, { styled } from "styled-components";
import MenuIcon from "@material-ui/icons/Menu";
import CloseIcon from "@material-ui/icons/Close";
import {selectCars} from "../features/car/carSlice";
import { useSelector } from 'react-redux';
function Header() {
  const [burgerState , setBurgerState] = useState(false);
  const cars = useSelector(selectCars);

  const renderCarMenu = cars.map((car,index)=>{
    return <a key={index} href="#">{car}</a>
  })

  const renderSubMenu = cars.map((car,index)=>{
    return <li key={index}><a href="#">{car}</a></li>

  })
  return (
    <Container>
      <a>
        <img src="/images/logo.svg" alt="" />
      </a>

      <Menu>
        {renderCarMenu}
      </Menu>

      <RightMenu>
        <a href="#">Shop</a>
        <a href="#">Tesla Account</a>
        <CustomMenu onClick={()=> setBurgerState(true)} />
      </RightMenu>

      <BurgerNav show={burgerState}>
        <CloseWrapper>
        <CustomClose onClick={()=> setBurgerState(false)} />
        </CloseWrapper>
        {renderSubMenu}

        <li><a href="#">Existing Inventory</a></li>
        <li><a href="#">Used Inventory</a></li>
        <li><a href="#">Trade-in</a></li>
        <li><a href="#">Cybertrucj</a></li>
        <li><a href="#">Roadaster</a></li>
        
      </BurgerNav>

    </Container>
  )
}

export default Header

const Container = Styled.div`
  min-height : 60px;
  position : fixed;
  display : flex;
  align-items : center;
  justify-content : space-between;
  padding : 0px 20px;
  top : 0;
  left : 0 ;
  right : 0;
`

const Menu = Styled.div`
  display : flex;
  align-items : center;
  justify-content : center;
  flex : 1;

  a{
    font-weight : 600;
    text-transform : uppercase;
    padding : 0px 10px ;  //0 top bottom
    flex-wrap : nowrap;
  }

  @media (max-width : 768px){
    display: none;
  }
`

const RightMenu = Styled.div`
  display: flex;
  align-items : center;
  a{
    font-weight : 600;
    text-transform : uppercase;
    flex-wrap : nowrap;
    margin-right : 10px;
  }
`

const CustomMenu = Styled(MenuIcon)`
  cursor : pointer;
`

const BurgerNav = Styled.div`
  position : fixed;
  top : 0;
  bottom : 0;
  right:0;
  background : white;
  width : 300px;
  z-index : 16;
  list-style : none;
  padding : 20px;
  display : flex;
  flex-direction : column;
  text-align : start;
  transform : ${props => props.show ? 'translateX(0)' : 'translateX(100%)'};
  transition : transform 0.2s;
  li {
     padding : 15px 0;
     border-bottom : 1px solid rgba(0,0,0,.2);

     a {
      font-weight : 600;
     }
  }
`

const CustomClose = Styled(CloseIcon)`
  cursor : pointer;
`


const CloseWrapper = styled.div`
  display : flex;
  justify-content : flex-end;
`