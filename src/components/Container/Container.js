import React from 'react';
import { ContainerStyle } from "./Container.style";

/**
 * React Container component.
 *
 * @param {Object} props - The component props.
 * @param {ReactNode} props.children - The content to be displayed inside the button.
 * @returns {ReactNode} The rendered React component.
 */
const Container=({ children })=> {
    return (
        <ContainerStyle>
            {children}
        </ContainerStyle>
    );
}

export default Container;