
import { Button } from "../Button";
import { editableResource } from "../HOC/editableResource";
import { Input } from "../Input";
import { LoginBaseContainer, LoginContainer, Paragraph, SubContainer } from "./Login.style";

/**
 * A higher-order component that provides login functionality to a given component.
 * @function
 * @param {string} resourceName - The name of the resource.
 * @param {string} endpoint - The endpoint to call for the login functionality.
 * @param {Object} Component - The component to be wrapped with the login functionality.
 * @returns {JSX.Element} The wrapped component with login functionality.
 */

export const Login = editableResource("login", "login", ({ login, onChangeLogin, onLogin, onResetLogin }) => {
    const { email, password } = login || {};

       /**
     * The function to be called when the input value changes.
     * @function
     * @param {Object} e - The event object.
     */
    const handleChange = (e) => {
        const { name, value } = e.target;
        onChangeLogin({ [name]: value });
    }

    return (
        // <LoginBaseContainer>

            <LoginContainer>
                <Input
                    name="email"
                    label="Email"
                    value={email}
                    required
                    type="text"
                    onChange={handleChange}
                />

                <Input
                    name="password"
                    label="Password"
                    value={password}
                    type="password"
                    onChange={handleChange}
                />
                <SubContainer>
                    <Button onClick={onLogin} size="medium">Login</Button>
                    <Button onClick={onResetLogin} size="medium">Reset</Button>
                </SubContainer>

                <Paragraph>accepted user for this mock Api is:</Paragraph>
                <Paragraph>email: eve.holt@reqres.in </Paragraph>
                <Paragraph>    password: cityslicka</Paragraph>

            </LoginContainer>
        // </LoginBaseContainer>
    );
});