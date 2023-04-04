import styled from "styled-components";
import theme from "../../theme";

const color= theme.colors.darkGray;

const bgColor = theme.colors.lightBackground;
const borderRadius = theme.borders.sm;
const Shadow = theme.boxShadow.strong;

export const UserInfoContainer = styled.li`
display:flex;
justify-content: space-between; 
align-items: center;
border-bottom: 1px solid #DDD;
padding:1rem 0 1rem 0 ;
`;

export const SubContainer=styled.div`
display:flex;
flex:1;
justify-content: flex-start;
align-items: center;
`;

export const Item = styled.label`
flex:1;
color:${color};
padding-left:1rem;
`;

export const AvatarContainer = styled.img`
width:4rem;
height:4rem;
border-radius: 50%;
`;

export const AvatarLargeContainer = styled.img`
width:8rem;
height:8rem;
border-radius: 50%;
margin:1rem;
`;

export const UserFormContainer = styled.div`
  justify-content: flex-start;
  align-items: center;
  display: flex;
  width: 100%;
  padding: 3rem 2rem;
  background-color : ${bgColor};
  border-radius:${borderRadius};
  margin:1rem 0;
`;

export const SubFormContainer = styled.div`
  justify-content: space-around;
  align-items: center;
  display: flex;
  width: 60%;
 
`;


