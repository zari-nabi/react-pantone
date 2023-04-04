import { useContext } from "react";
import { BaseContext } from "../../context";
import { Button, DangerButton } from "../Button";
import { GuestContainer, Paragraph, SubContainer, Title } from "./Guest.style";

/**
 * A React component return HomePage content
 * @param {string} resourceName - The name of the resource.
 * @param {string} token - The token of logined user.
 * @param {function} props.handleLogin - The function to be called when login is clicked.
 * @param {function} props.handleReset - The function to be called to reset values.
 * @returns {JSX.Element} The wrapped component .
 */

export const Guest = ({handleLogin,handleReset,token})=>{
    const {customColor} = useContext(BaseContext);
    return(
        <GuestContainer>
            <Title color = {customColor}>Welcome</Title>
            <Paragraph>This website uses reqres mock APIs</Paragraph>
            <SubContainer>
                {token?
                <DangerButton onClick={handleReset}>Reset All</DangerButton>:
                <Button onClick={handleLogin}>Login</Button>
                }
            </SubContainer>
           
        </GuestContainer>
    );
}