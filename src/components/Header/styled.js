import styled, { keyframes } from "styled-components";
import { ReactComponent as Message } from "../../images/Message.svg";

export const HeaderSection = styled.section`
    max-width: 1216px;
    display: flex;
    gap: 66px;
    position: relative;

    @media(max-width: ${({ theme }) => theme.breakpoint.phone}) {
        flex-direction: column;
        gap: 0;
    }
`;

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

export const HeaderImage = styled.img`
    width: 384px;
    height: 384px;
    border-radius: 50%;
    animation: ${fadeIn} 0.5s cubic-bezier(0.4, 0, 0.2, 1);

    @media(max-width: ${({ theme }) => theme.breakpoint.phone}) { 
        width: 256px;
        height: 256px;
    }

    @media(max-width: ${({ theme }) => theme.breakpoint.phonePortrait}) { 
        width: 128px;
        height: 128px;
    }
`;

export const HeaderContent = styled.div`
    padding-top: 64px;

    @media(max-width: ${({ theme }) => theme.breakpoint.phone}) {
        padding-top: 32px;
    }

    @media(max-width: ${({ theme }) => theme.breakpoint.phonePortrait}) { 
        padding-top: 16px;
    }
`;

export const HeaderIntro = styled.div`
    padding: 0;
    font-size: 12px;
    font-weight: 700;
    color: ${({ theme }) => theme.text};
`;

export const HeaderName = styled.div`
    padding: 12px 0;
    font-size: 38px;
    font-weight: 900;
    color: ${({ theme }) => theme.header};

    @media(max-width: ${({ theme }) => theme.breakpoint.phone}) { 
        font-size: 30px;
        padding: 8px 0;
    }

    @media(max-width: ${({ theme }) => theme.breakpoint.phonePortrait}) { 
        font-size: 22px;
        padding: 8px 0;
    }
`;

export const HeaderDescription = styled.div`
    padding: 23px 0 32px 0;
    font-size: 20px;
    font-weight: 400;
    color: ${({ theme }) => theme.text};
    line-height: 28px;

    @media(max-width: ${({ theme }) => theme.breakpoint.phone}) { 
        font-size: 18px;
        line-height: 26px;
        padding: 8px 0 24px 0;
    }

    @media(max-width: ${({ theme }) => theme.breakpoint.phonePortrait}) { 
        font-size: 17px;
        line-height: 24px;
    }
`;

export const HeaderButton = styled.button`
    cursor: pointer;
    text-decoration: none;
    width: 154px;
    font-weight: 600;
    padding: 12px 16px;
    display: grid;
    grid-template-columns: auto auto;
    grid-gap: 16px;
    align-items: center;
    justify-content: left;
    border-radius: 4px;
    border: 1px solid #D1D5DA4D;
    color: ${({ theme }) => theme.color.white.light};
    background-color: ${({ theme }) => theme.accent.dark};
    outline: 3px solid transparent;
    transition: outline 0.3s;

    &:hover {
        outline: 3px solid ${({ theme }) => theme.highlight};
    }

    &:active {
        box-shadow: 0px 2px 0px 0px #14462033 inset;
    }

    @media(max-width: ${({ theme }) => theme.breakpoint.phone}) { 
        width: 146px;
    }

    @media(max-width: ${({ theme }) => theme.breakpoint.phonePortrait}) { 
        width: 138px;
    }
`;

export const HeaderButtonIcon = styled(Message)`
    @media(max-width: ${({ theme }) => theme.breakpoint.phone}) {
        width: 22px;
        height: 22px;
    }

    @media(max-width: ${({ theme }) => theme.breakpoint.phonePortrait}) {
        width: 20px;
        height: 20px;
    }
`;

export const HeaderButtonText = styled.div`
    font-size: 20px;

    @media(max-width: ${({ theme }) => theme.breakpoint.phone}) { 
        font-size: 18px;
    }
`;