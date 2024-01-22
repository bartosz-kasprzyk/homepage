import styled from "styled-components";

export const TileWrapper = styled.div`
    padding: 56px;
    background: ${({ theme }) => theme.section};
    box-shadow: 0px 16px 58px 0px #090A3308;
    box-shadow: 0px -2px 50px 0px #090A3305;
    border: 6px solid #D1D5DA4D;
    border-radius: 4px;
    transition: border 0.3s;

    &:hover {
        border: 6px solid ${({ theme }) => theme.highlight};
    }
`

export const Title = styled.div`
    font-size: 24px;
    font-weight: 700;
    color: ${({ theme }) => theme.projectHeader};
`;

export const Body = styled.div`
    font-size: 18px;
    font-weight: 400;
`;

export const Description = styled.div`
    padding: 24px 0; 
    color: ${({ theme }) => theme.text};
`;

export const Links = styled.div`
    color: ${({ theme }) => theme.text};
`;

export const StyledLink = styled.a`
    font-size: 18px;
    font-weight: 400;
    color: ${({ theme }) => theme.accent.dark};
`;