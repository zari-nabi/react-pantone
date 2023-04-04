import { useContext } from "react";
import styled from "styled-components";
import { BaseContext } from "../../context";
import { Item, ColorInfoContainer,Box, SubContainer} from "./Colors.style";

/**
 * React component that displays color information.
 *
 * @param {Object} props - The component props.
 * @param {Object} props.item - The item to display color information for.
 * @param {function} props.onClick - The function to be called when the component is clicked.
 * @returns {ReactNode} The rendered React component.
 */

export const ColorInfo = ({ item, onClick }) => {
    const { id, name, year, color } = item;
    const{customColor} = useContext(BaseContext);

    return (
        <ColorInfoContainer onClick={() => onClick(id,color)} bgColor={customColor}>
            <SubContainer>
            <Box bgColor={color}></Box>
            <Item> {name}  </Item>
            </SubContainer>
            <SubContainer>
            <Item>  {year} </Item>
            </SubContainer>
        </ColorInfoContainer>
    )
};
