import styled from "styled-components";

export const PortfolioWrapper = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 32px;
    padding-top: 24px;

    @media(max-width: ${({ theme }) => theme.breakpoint.tablet}) {
        grid-template-columns: 1fr;
        grid-gap: 16px;
    }
`;