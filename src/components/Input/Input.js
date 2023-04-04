import { InputContainer, InputStyle, LabelStyle } from "./Input.style"

/**
 * Renders an input field with an optional label.
 * @param {string} label - The label for the input field.
 * @param {function} onChange - The function to be called when the input value changes.
 * @param {...any} rest - Additional props to be passed to the input field.
 * @returns {JSX.Element} The input component.
 */

export const Input = ({label,onChange,...rest} ) => {
    return (
        <InputContainer>
        {label? <LabelStyle>{label}</LabelStyle>:null}
        <InputStyle
            {...rest}
            onChange={(event)=>onChange(event)}
        />
        </InputContainer>
    )
}