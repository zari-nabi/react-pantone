import styled from "styled-components";
import theme from "../../theme";

const primaryColor = theme.colors.primary;
const color = theme.colors.lightGray;
const borderRadius = theme.borders.md;

export const PrimaryButton = styled.button`
    background-color: ${primaryColor};
    border-radius: ${borderRadius};
    padding: 0.3rem 1rem;
    font-size:${props => props.size ? props.size : 'small'};
    color:${color};
    border:none;
    &:hover{
      transform: scale(1.02);
    }
`;