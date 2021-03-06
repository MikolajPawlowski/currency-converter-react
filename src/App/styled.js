import styled from "styled-components"

export const Container = styled.div`
    flex-basis: 800px;
    margin: 20px;
    padding: 30px;
    border-radius: 15px;
    box-shadow: -2px -1px 2px 0px ${({ theme }) => theme.colors.beige};
`;