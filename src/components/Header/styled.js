import styled from "styled-components";
import { ReactComponent as Message } from "./Message.svg";

export const HeaderSection = styled.section`
    width: 1089px;
    display: flex;
    gap: 66px;
    position: relative;
    align-items: center;
    justify-content: left;
`;

export const HeaderImage = styled.img`
    border-radius: 50%;
    width: 384px;
    height: 384px;
`;

export const HeaderContent = styled.div`

`;

export const HeaderIntro = styled.div`
    padding: 0;
    font-size: 12px;
    font-weight: 700;
    color: ${({ theme }) => theme.color.slateGray};
`;

export const HeaderName = styled.div`
    padding: 12px 0;
    font-size: 38px;
    font-weight: 900;
    color: ${({ theme }) => theme.color.black.dark};
`;

export const HeaderDescription = styled.div`
    padding: 23px 0 32px 0;
    font-size: 20px;
    font-weight: 400;
    color: ${({ theme }) => theme.color.slateGray};
`;

export const HeaderButton = styled.a`
    text-decoration: none;
    width: 154px;
    font-weight: 600;
    padding: 12px 16px;
    display: grid;
    grid-template-columns: auto auto;
    grid-gap: 16px;
    align-items: center;
    justify-content: left;
    border: 1px solid ${({ theme }) => theme.color.iron};
    border-radius: 4px;
    color: ${({ theme }) => theme.color.white.light};
    background-color: ${({ theme }) => theme.color.scienceBlue};
    transition: background-color 0.3s;

    &:hover {
        background-color: ${({ theme }) => theme.color.dodgerBlue};
    }
`;

export const HeaderButtonIcon = styled(Message)`
    @media(max-width: ${({ theme }) => theme.breakpoint.mobile}) {
        width: 20px;
        height: 20px;
    }
`;

export const HeaderButtonText = styled.div`
    font-size: 20px;
`;