import styled from "styled-components";
import { ReactComponent as Ellipse } from "./Ellipse.svg";

export const Segment = styled.section`
    width: 1216px;
    background: ${({ theme }) => theme.color.white.light};
    padding: 32px;
    margin: 72px auto;
    box-shadow: 0px 16px 58px 0px ${({ theme }) => theme.color.violet.one};
    box-shadow: 0px -2px 50px 0px ${({ theme }) => theme.color.violet.two};
    border-radius: 4px;
`;

export const Header = styled.header`
    padding-bottom: 13px;
    font-size: 30px;
    font-weight: 900;
    color: ${({ theme }) => theme.color.black.dark};
`;

export const Body = styled.div`
    padding-top: 32px;
    border-top: 1px solid ${({ theme }) => theme.color.gray};
`;

export const StyledList = styled.ul`
    margin-left: -40px;
    list-style: none;
    display: grid;
    grid-template-columns: auto auto auto;
    column-gap: 115px;
    row-gap: 8px;
`;

export const ListItem = styled.li`

`;

export const Bullet = styled(Ellipse)`
    @media(max-width: ${({ theme }) => theme.breakpoint.mobile}) {
        width: 6px;
        height: 6px;
    }
`;

export const Content = styled.span`
    padding-left: 16px;
    font-size: 18px;
    font-weight: 400;
    color: ${({ theme }) => theme.color.slateGray};
`;
