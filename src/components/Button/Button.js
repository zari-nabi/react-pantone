import theme from "../../theme";
import { PrimaryButton } from "./Button.style";

/**
 * React Button component.
 *
 * @param {Object} props - The component props.
 * @param {string} props.color - The background color of the button.
 * @param {function} props.onClick - The function to be called when the button is clicked.
 * @param {ReactNode} props.children - The content to be displayed inside the button.
 * @returns {ReactNode} The rendered React component.
 */

export const Button=({children,color,onClick,...props})=>(
    <PrimaryButton style={{backgroundColor:color? color : null}}
    onClick={(event)=>onClick(event)}
    {...props}
    >
        {children}
    </PrimaryButton>
);

//============================================
/**
 * Composition Component of Button
 */
export const DangerButton=(props)=>(
    <Button {...props} color={theme.colors.secondary}/>
 )