import styled from "styled-components";
import { ReactComponent as Ellipse } from "./Ellipse.svg";

export const Segment = styled.section`
    background: ${({ theme }) => theme.section};
    padding: 32px;
    margin: 72px auto;
    box-shadow: 0px 16px 58px 0px ${({ theme }) => theme.color.violet.one};
    box-shadow: 0px -2px 50px 0px ${({ theme }) => theme.color.violet.two};
    border-radius: 4px;

    @media(max-width: ${({ theme }) => theme.breakpoint.tablet}) {
        padding: 16px;
        margin: 48px auto 50px auto;
    }
`;

export const Header = styled.header`
    padding-bottom: 13px;
    font-size: 30px;
    font-weight: 900;
    color: ${({ theme }) => theme.header};

    @media(max-width: ${({ theme }) => theme.breakpoint.tablet}) { 
        font-size: 18px;
        padding-bottom: 12px;
    }
`;

export const Body = styled.div`
    border-top: 1px solid ${({ theme }) => theme.color.gray};
`;

export const StyledList = styled.ul`
    margin-left: -40px;
    margin-top: -15px;
    list-style: none;
    display: grid;
    grid-template-columns: auto auto auto;
    column-gap: 115px;
    row-gap: 8px;
    padding-top: 32px;
    line-height: 25px;

    @media(max-width: ${({ theme }) => theme.breakpoint.tablet}) {
        grid-template-columns: auto auto;
        padding-top: 28px;
        line-height: 21px;
    }

    @media(max-width: ${({ theme }) => theme.breakpoint.phone}) {
        grid-template-columns: auto;
        padding-top: 25px;
        line-height: 17px;
    }
`;

export const ListItem = styled.li`

`;

export const Bullet = styled(Ellipse)`
    color: ${({ theme }) => theme.accent.dark};

    @media(max-width: ${({ theme }) => theme.breakpoint.tablet}) {
        width: 6px;
        height: 6px;
    }
`;

export const Content = styled.span`
    padding-left: 16px;
    font-size: 18px;
    font-weight: 400;
    color: ${({ theme }) => theme.text};

    @media(max-width: ${({ theme }) => theme.breakpoint.tablet}) { 
        font-size: 14px;
        padding-left: 8px;
    }
`;
