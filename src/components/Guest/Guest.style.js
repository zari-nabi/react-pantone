import styled from "styled-components";
import theme from "../../theme";

const color = theme.colors.darkGray;

export const GuestContainer = styled.div`
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    height:100vh;
`;

export const SubContainer = styled.div`
   margin:0.5rem 0;
`;

export const Title = styled.h1`
    color:${props=>props.color ? props.color : color};
`;

export const Paragraph = styled.p`
`;