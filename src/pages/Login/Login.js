import React, { useContext, useEffect } from 'react';
import Container from '../../components/Container';
import { Login } from '../../components/Login';
import { BaseContext } from '../../context';
import { removeFromLocalStorage } from '../../services/manageLocalStorage';

//=============================
/**
 * The LoginPage component displays the Login component.
 * @param {object} props - The properties passed to the component.
 * @returns {JSX.Element} The Login component.
 */
//==============================
function LoginPage(props) {
    const { setToken } = useContext(BaseContext);

    useEffect(()=>{
        removeFromLocalStorage("token");
        setToken(null);
    },[]);

    return (
        <Container>
            <Login/>
        </Container>
    );
}

export default LoginPage;