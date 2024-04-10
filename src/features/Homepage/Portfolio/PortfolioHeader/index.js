import { PortfolioIcon, PortfolioSubtitle, PortfolioTitle, Wrapper } from "./styled";


const PortfolioHeader = () => (
    <Wrapper>
        <PortfolioIcon />
        <PortfolioTitle>
            Portfolio
        </PortfolioTitle>
        <PortfolioSubtitle>
            My recent projects
        </PortfolioSubtitle>
    </Wrapper>
);

export default PortfolioHeader;