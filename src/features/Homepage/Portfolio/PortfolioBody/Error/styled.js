import styled from "styled-components";
import { ReactComponent as Danger } from "../../../../../images/Danger.svg"

export const Wrapper = styled.div`
    display: grid;
    grid-template-rows: auto auto;
    justify-content: center;
    align-items: center;
`;

export const StyledDanger = styled(Danger)`
    margin-top: 88px;
    align-self: center;
    justify-self: center;

    @media (max-width: ${({ theme }) => theme.breakpoint.phone}) {
      width: 35px;
      height: 35px;
      margin: 24px;
    }
`;

export const ErrorTitle = styled.span`
    margin-top: 16px;
    text-align: center;
    font-size: 24px;
    font-weight: 700;
    line-height: 29px;
`;

export const ErrorSubtitle = styled.span`
    margin-top: 32px;
    text-align: center;
    font-size: 20px;
    line-height: 28px;
`;