import styled from "styled-components";
import theme from "../../theme";

const color = theme.colors.primary;
const bgColor = theme.colors.lightGray; 

export const SpinnerContainer = styled.div`
display:flex;
justify-content:center;
align-items:center;
width:100%;
height:100vh;
background-color:white;
opacity:0.7;
z-index:100;
margin:0;
position:fixed;
`;

export const SpinnerStyle = styled.div`
  border: 10px solid ${bgColor};
  border-top: 10px ${color} solid;
  border-radius: 50%;
  height: 5rem;
  width: 5rem;
  animation: spin 1.5s linear infinite;

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }

    100% {
      transform: rotate(360deg);
    }
  }
`;