import { LoadingText, StyledSpinner, Wrapper } from "./styled";

const Loading = () => (
    <Wrapper>
        <LoadingText>
            Please wait, projects are being loaded...
        </LoadingText>
        <StyledSpinner />
    </Wrapper>
);

export default Loading;