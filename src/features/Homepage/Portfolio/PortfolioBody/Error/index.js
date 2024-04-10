import { ErrorSubtitle, ErrorTitle, StyledDanger, Wrapper } from "./styled";

const Error = () => (
    <Wrapper>
        <StyledDanger />

        <ErrorTitle>
            Ooops! Something went wrong...
        </ErrorTitle>

        <ErrorSubtitle>
            Sorry, failed to load Github projects. <br />You can check them directly on Github.
        </ErrorSubtitle>
    </Wrapper>
);

export default Error;