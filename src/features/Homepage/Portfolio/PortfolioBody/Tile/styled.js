import styled from "styled-components";

export const TileWrapper = styled.div`
    padding: 56px;
    background: ${({ theme }) => theme.section};
    box-shadow: 0px 16px 58px 0px #090A3308;
    box-shadow: 0px -2px 50px 0px #090A3305;
    border: 6px solid ${({ theme }) => theme.color.iron};
    border-radius: 4px;
    transition: 0.3s;

    &:hover {
        border: 6px solid ${({ theme }) => theme.projectHighlight};
    }

    @media(max-width: ${({ theme }) => theme.breakpoint.phone}) { 
        padding: 24px;
    }
`

export const Title = styled.a`
    font-size: 24px;
    font-weight: 700;
    color: ${({ theme }) => theme.projectHeader};
    text-decoration: none;
    transition: 0.3s;

    &:hover {
        color: ${({ theme }) => theme.accent.light};
    }

    @media(max-width: ${({ theme }) => theme.breakpoint.phone}) { 
        font-size: 16px;
    }
`;

export const Body = styled.div`
    font-size: 18px;
    font-weight: 400;

    @media(max-width: ${({ theme }) => theme.breakpoint.phone}) { 
        font-size: 14px;
    }
`;

export const Description = styled.div`
    padding: 24px 0; 
    color: ${({ theme }) => theme.text};
`;

export const Links = styled.div`
    display: grid;
    grid-template-columns: auto 1fr;
    grid-gap: 8px;
    color: ${({ theme }) => theme.text};
`;

export const Text = styled.p`
    font-size: 18px;
    font-weight: 400;
    margin: 0;
    align-self: baseline;

    @media(max-width: ${({ theme }) => theme.breakpoint.phone}) { 
        font-size: 14px;
    }
`;

export const StyledLink = styled.a`
    font-size: 18px;
    font-weight: 400;
    color: ${({ theme }) => theme.accent.dark};
    align-self: baseline;
    text-decoration: none;
    border-bottom: 1px solid ${({ theme }) => theme.projectHighlight};
    transition: 0.3s;

    &:hover {
        color: ${({ theme }) => theme.accent.light};
    }

    @media(max-width: ${({ theme }) => theme.breakpoint.phone}) { 
        font-size: 14px;
    }
`;