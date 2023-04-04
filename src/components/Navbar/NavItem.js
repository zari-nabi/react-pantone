import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { BaseContext } from '../../context';
import {  NavLinkContainer } from './Navbar.style';

// function NavItem(props) {
//     return (
//         <ul class="nav">
//             <li class="nav-item">
//                 <Link to='/home' className="nav-link active">Home</Link>
//             </li>
//             <li class="nav-item">
//                 <Link to='/users' className="nav-link">Users</Link>
//             </li>
//             <li class="nav-item">
//                 <Link to='/colors' className="nav-link">Colors</Link>
//             </li>
//         </ul>
//     );
// }
const NavItem = () => {
    const {customColor} = useContext(BaseContext);

    return (
        <>
            <NavLinkContainer to='/home' bgColor={customColor}>Home</NavLinkContainer>
            <NavLinkContainer to='/users' bgColor={customColor}>Users</NavLinkContainer>
            <NavLinkContainer to='/colors' bgColor={customColor}>Colors</NavLinkContainer>
        </>
    );
}
export default NavItem;

