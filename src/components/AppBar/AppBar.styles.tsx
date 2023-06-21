import styled from 'styled-components'
import {NavLink} from "react-router-dom";
import {Container} from "../CommonComponents/Container.styles";

export const LogoImg = styled.img`
 width: 30px;
  
  @media screen and  (min-width: 768px){
    width: 40px;
  }

  
`;

export const LogoLink = styled(NavLink)`
  display: flex;
  align-items: center;  
  gap: 15px;

  font-family: ${p => p.theme.fonts.titleFont};
  font-weight: 700;
  font-size: 24px;
  line-height: 1.5;
  
  color: ${(p) => p.theme.colors.titleText};
  
  @media screen and (min-width: 768px){
    font-size: 30px;
    
    gap: 20px;
  }
  
`

export const Name = styled.span`
  position: relative;
  color: ${p => p.theme.colors.secondaryText};

  font-size: 18px;
  line-height: 1.5;
  @media screen and (min-width: 768px){

    &:before{
      content: '';
      width: 1px;
      height: 100%;
      position: absolute;
      background-color: ${p => p.theme.colors.secondaryText};
      top: 0;
      right: -12px;
    }
  }
  
`;

export const Header = styled.header`
position: fixed;
  width: 100%;
  z-index: 100;
  top: 0;
  left: 0;
`;

export const HeaderContainer = styled(Container)`
display: flex;
  justify-content: space-between;
  align-items: center;
`

export const HeaderFlexbox = styled.div`
display: flex;
  gap: 8px;
  
  @media screen and (min-width: 768px){
    gap: 24px;
  }
`;

export const ExitBtn = styled.button`
  color: ${p => p.theme.colors.secondaryText};
  background-color: transparent;
  border: none;
  outline: none;
display: flex;
  align-items: center;
 & span{
   display: none;
 }
  
  transition: transform 250ms;
  
  &:hover, &:focus{
    transform: scale(1.2);
  }
  
  @media screen and (min-width: 768px){
    gap: 8px;
    & span{
      display: block;
    }
  }
`