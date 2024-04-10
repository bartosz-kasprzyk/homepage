import styled, { keyframes } from "styled-components";
import { ReactComponent as Spinner } from "../../../../../images/icon-spinner.svg"

const rotate = keyframes`
  from {
    transform: rotate(0deg);
}
  to {
    transform: rotate(360deg);
}
`;

export const Wrapper = styled.div`
    display: grid;
    grid-template-rows: auto auto;
    justify-content: center;
    align-items: center;
`;

export const LoadingText = styled.span`
    margin-top: 88px;
    text-align: center;
    font-size: 20px;
    line-height: 28px;
`;

export const StyledSpinner = styled(Spinner)`
    margin-top: 48px;
    animation: ${rotate} 1s linear infinite;
    align-self: center;
    justify-self: center;

    @media (max-width: ${({ theme }) => theme.breakpoint.phone}) {
      width: 35px;
      height: 35px;
      margin: 24px;
    }
`;