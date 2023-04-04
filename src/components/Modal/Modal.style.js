import styled from "styled-components";
import theme from "../../theme";

const bgColor = theme.colors.rgbDarkColor;
const forColor = theme.colors.lightBackground;
const borderRadius = theme.borders.lg;

export const ModalBackground = styled.div`
display:flex;
justify-content:center;
align-items:center;
width:100%;
height:100vh;
background-color:${bgColor};
z-index:10;
margin:0;
position:fixed;
left:0;
top:0;
oveflow:auto;
`;

export const ModalContainer = styled.div`
background-color:${forColor};
margin:10% auto;
width:60%;
padding:2rem;
border-radius:${borderRadius}
`;