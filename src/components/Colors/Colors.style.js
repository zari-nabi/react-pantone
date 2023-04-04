import styled from "styled-components";
import theme from "../../theme";

const color= theme.colors.darkGray;
const borderColor= theme.colors.mediumGray;
const borderRadius = theme.borders.sm;

export const ColorInfoContainer= styled.li`
display:flex;
justify-content: space-between; 
align-items: center;
border-bottom: 1px solid ${props => props.bgColor || borderColor } ;
padding:1rem;
`;

export const SubContainer=styled.div`
display:flex;
flex:1;
justify-content: flex-start; 
`;

export const Item = styled.label`
color:${color};
padding:0 1rem 0 1rem  ;
`;

export const Box = styled.span`
width:2rem;
height:2rem;
background-color: ${props => props.bgColor};
border-radius: ${borderRadius};
`;
