import styled from "styled-components";

export const StyledClock = styled.p`
    font-family: monospace;
    font-weight: lighter;
    text-align: right;
    font-size: 15px;
    color: ${({ theme }) => theme.colors.beige};
`;