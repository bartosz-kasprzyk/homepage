import styled from "styled-components";

export const Container = styled.section`
    width: 95%;
    max-width: 1216px;
    margin: 119px auto;

    @media(max-width: ${({ theme }) => theme.breakpoint.tablet}) { 
        margin: 34px 16px;
    }
`