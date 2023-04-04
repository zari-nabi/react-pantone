import styled from "styled-components";
import theme from "../../theme";

const bgColor = theme.colors.lightBackground;
const borderRadius = theme.borders.sm;
const shadow = theme.boxShadow.strong;

export const LoginBaseContainer = styled.div`
  justify-content: center;
  align-items: center;
  display: flex;
 height: 100vh;
`;
export const LoginContainer = styled.div`
  justify-content: center;
  align-items: center;
  display: flex;
  flex-direction:column;
  min-height: 100%h;
  width: 40%;
  padding: 3rem 2rem;
  background-color : ${bgColor};
  border-radius:${borderRadius};
  margin: auto;
  box-shadow:${shadow}
`;

export const SubContainer = styled.div`
align-items: center;
display: flex;
margin:1rem;
justify-content:space-around;
width:50%;
margin-bottom:2rem;
`;

export const Paragraph = styled.p`
font-size:small;
margin:0;
`