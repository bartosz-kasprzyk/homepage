import styled from "styled-components";
import { ReactComponent as Brightness } from "./Brightness.svg";

export const SwitchSection = styled.div`
    width: 159px;
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
`;

export const SwitchButton = styled.button`
    border-radius: 50%;
    background-color: gray;

    ${({ moveToRight }) =>
        moveToRight &&
        css`
      transform: translateX(20px);
    `}
`;

export const IconBackground = styled.div`
    border-radius: 50%;
    background: ${({ theme }) => theme.color.slateGray};
`;

export const Icon = styled(Brightness)`
    color: ${({ theme }) => theme.color.white.dark};
`;