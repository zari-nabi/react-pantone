import { DangerButton } from "../Button";
import { SpinnerContainer, SpinnerStyle } from "./Spinner.style";

export const Spinner = ({ loading }) => {

    return (
        <>
            {loading ?
                <SpinnerContainer>
                    <SpinnerStyle />
                </SpinnerContainer> :
                null}
        </>
    )
};
