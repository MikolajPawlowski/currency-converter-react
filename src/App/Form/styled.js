import styled from "styled-components";

export const StyledForm = styled.form`
    max-width: 700px;
    margin: 0 auto;
`;

export const Header = styled.h1`
    text-align: center;
    color: ${({ theme }) => theme.colors.swissCoffee};
    text-shadow: 2px 2px 2px ${({ theme }) => theme.colors.darkGrey};
`;

export const Fieldset = styled.fieldset`
    background-color: ${({ theme }) => theme.colors.lightGrey};
    border: 2px solid ${({ theme }) => theme.colors.grey};
    padding: 10px;
    border-radius: 40px;
    margin: 20px;
    box-shadow: -1px 1px 2px 0px ${({ theme }) => theme.colors.beige};
`;

export const Legend = styled.legend`
    background-color: ${({ theme }) => theme.colors.teal};
    padding: 10px;
    border: 2px solid ${({ theme }) => theme.colors.grey};
    border-radius: 30px;
    font-size: 20px;
    box-shadow: -1px 1px 2px 0px ${({ theme }) => theme.colors.beige};
    color: ${({ theme }) => theme.colors.beige};
`;

export const Field = styled.input`
    border: 1px solid ${({ theme }) => theme.colors.grey};
    padding: 10px;
    max-width: 300px;
    width: 100%;
    border-radius: 40px;

    &:required {
        border-color: 2px solid ${({ theme }) => theme.colors.black};
    }

    &:invalid {
        background-color: ${({ theme }) => theme.colors.grey};
    }
`;

export const Select = styled.select`
    border: 1px solid ${({ theme }) => theme.colors.grey};
    padding: 10px;
    max-width: 300px;
    width: 100%;
    border-radius: 40px;
`;

export const Label = styled.label`
    margin: 10px 5px;
    text-align: left;
`;

export const LabelText = styled.span`
    width: 100%;
    max-width: 200px;
    display: inline-block;
    margin-right: 5px;
`;

export const Button = styled.button`
    width: 100%;
    border: none;
    background-color: ${({ theme }) => theme.colors.teal};
    color: ${({ theme }) => theme.colors.beige};
    padding: 10px;
    border-radius: 5px;
    margin: 10px 0;
    font-size: 26px;

    &:hover {
        background-color: ${({ theme }) => theme.colors.tealHover};
    }

    &:active {
        background-color: ${({ theme }) => theme.colors.tealActive};
    }
`;

export const Paragraph = styled.p`
    color: ${({ theme }) => theme.colors.beige};
`;

export const Loading = styled.p`
    color: ${({ theme }) => theme.colors.darkGreen};
    font-size: 20px;
    text-align: center;
    text-shadow: 1px 1px ${({ theme }) => theme.colors.darkGreen};
`;

export const Failed = styled.p`
    color: ${({ theme }) => theme.colors.red};
    font-size: 20px;
    text-align: center;
    text-shadow: 1px 1px ${({ theme }) => theme.colors.red};
`;