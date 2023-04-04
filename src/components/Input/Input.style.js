import styled from "styled-components";
import theme from "../../theme";

const border = theme.borders.sm;
const borderColor = theme.colors.mediumGray;

export const InputStyle = styled.input`
	border: 1px solid ${borderColor};
	border-radius: ${border};
	padding:0 0.5rem;
	width: 100%;
    height:2rem;
`;

export const InputContainer = styled.div`
    display: grid;
    grid-template-columns: 2fr 5fr;
    grid-gap: 1rem;
    padding: 0.2rem 0;
`;

export const LabelStyle = styled.label`
`;