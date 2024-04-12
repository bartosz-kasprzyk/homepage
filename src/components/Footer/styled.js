import styled from "styled-components";

export const FooterSection = styled.section`
    max-width: 691px;
    padding-top: 120px;

    @media(max-width: ${({ theme }) => theme.breakpoint.phone}) { 
        padding-top: 48px;
    }
`;

export const FooterIntro = styled.p`
    font-size: 12px;
    font-weight: 700;
    padding-bottom: 24px;
    margin: 0;
    color: ${({ theme }) => theme.text};

    @media(max-width: ${({ theme }) => theme.breakpoint.phone}) { 
        padding-bottom: 12px;
    }
`;

export const FooterContact = styled.a`
    text-decoration: none;
    font-size: 32px;
    font-weight: 900;
    color: ${({ theme }) => theme.header};
    transition: color 0.3s;

    &:hover {
        color: ${({ theme }) => theme.accent.dark};
    }

    @media(max-width: ${({ theme }) => theme.breakpoint.phone}) { 
        font-size: 18px;
    }
`;

export const FooterDescription = styled.p`
    font-size: 18px;
    font-weight: 400;
    padding: 24px 0 56px 0; 
    margin: 0;
    color: ${({ theme }) => theme.header};
    line-height: 25px;

    @media(max-width: ${({ theme }) => theme.breakpoint.phone}) { 
        font-size: 14px;
        line-height: 17px;
        padding: 12px 0 40px 0; 
    }
`;

export const FooterIcons = styled.div`
    display: flex;
    gap: 24px;

    @media(max-width: ${({ theme }) => theme.breakpoint.phone}) { 
        gap: 16px;
    }
`;

export const FooterIcon = (Icon) => styled(Icon)`
    @media(max-width: ${({ theme }) => theme.breakpoint.phone}) {
        width: 32px;
        height: 32px;
    }
`;

export const FooterLink = styled.a`
    color: ${({ theme }) => theme.icon};
    transition: color 0.3s;

    &:hover {
        color: ${({ theme }) => theme.accent.dark};
    }
`;
