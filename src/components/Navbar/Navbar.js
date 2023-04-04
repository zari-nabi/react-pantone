import React, { useContext } from 'react';
import { BaseContext } from '../../context';
import { NavbarContainer } from './Navbar.style';
import NavItem from './NavItem';

function Navbar(props) {
    const {customColor} = useContext(BaseContext);
    return (
        <NavbarContainer bgColor={customColor}>
            <NavItem />
        </NavbarContainer>
    );
}

export default Navbar;