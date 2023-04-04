
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import theme from "../../theme";

const navBgColor = theme.colors.lightBackground;
const color = theme.colors.darkGray;
const lightColor = theme.colors.lightGray;

export const NavbarContainer = styled.div`
  border-bottom: 1px solid #DDD;
  height: 4rem;
  margin: 0 auto;
  padding: 1rem 2rem;
  display: flex;
  align-items: center;  
  background-color: ${props=> props?.bgColor ? props?.bgColor : navBgColor};
  justify-content: flex-start;
  color:${props=> props?.bgColor ? lightColor : color};

  &>*:not(:last-child) {
    margin-right: 2rem;
  }
`;

export const NavLinkContainer = styled(NavLink)`
    color:${props=> props?.bgColor ? lightColor : color};
    text-decoration: none;
    &:hover{
        transform: scale(1.02);
      }
`;

