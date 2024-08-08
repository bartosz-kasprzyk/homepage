import styled, { css } from "styled-components";
import { ReactComponent as Brightness } from "../../../images/Brightness.svg";

export const SwitchSection = styled.div`
    max-width: 160px;
    display: flex;
    gap: 12px;
    justify-content: center;
    align-items: center;
    position: absolute;
    right: 0;
    top: 0;
`;

export const SwitchText = styled.span`
    font-size: 12px;
    font-weight: 700;
    color: ${({ theme }) => theme.text};

    @media(max-width: ${({ theme }) => theme.breakpoint.phonePortrait}) { 
       display: none;
    }
`;

export const SwitchButton = styled.button`
    cursor: pointer;
    width: 48px;
    padding: 3px;
    background-color: ${({ theme }) => theme.switch.buttonBackground};
    border: 1px solid ${({ theme }) => theme.switch.iconBackground};
    border-radius: 50px;
    display: flex;
    align-items: center;
`;

export const IconBackground = styled.div`
    width: 20px;
    height: 20px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    background: ${({ theme }) => theme.switch.iconBackground};
    transition: transform 0.3s;

    ${({ moveToRight }) => moveToRight && css`
        transform: translateX(20px);
    `}
`;

export const Icon = styled(Brightness)`
    color: ${({ theme }) => theme.switch.iconColor};
`;