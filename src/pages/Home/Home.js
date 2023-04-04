import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router';
import Container from '../../components/Container';
import { Guest } from '../../components/Guest';
import { BaseContext } from '../../context';
import { getFromLocalStorage, removeFromLocalStorage } from '../../services/manageLocalStorage';

//=======================================
/**
 * The Home component displays the guest view of the application.
 * @param {object} props - The properties passed to the component.
 * @returns {JSX.Element} The Home component.
 */
//=========================================
function Home(props) {
    const navigate = useNavigate();
    const { setCustomColor,token,setToken } = useContext(BaseContext);

    const handleLogin = () => {
        navigate("/login");
    };
    const handleReset = () => {
        removeFromLocalStorage("token");
        setToken(null);
        setCustomColor(null);
    };

    return (
        <Container>
            <Guest
                handleLogin={handleLogin}
                handleReset={handleReset}
                token={token}
            />
        </Container>
    );
}

export default Home;