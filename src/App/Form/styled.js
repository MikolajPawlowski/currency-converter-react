import styled from "styled-components";

export const StyledForm = styled.form`
    max-width: 700px;
    margin: 0 auto;
`;

export const Header = styled.h1`
    text-align: center;
    color: rgb(223, 206, 206);
    text-shadow: 2px 2px 2px rgb(80, 79, 79);
`;

export const Fieldset = styled.fieldset`
    background-color: rgba(0, 0, 0, 0.425);
    border: 2px solid #ccc;
    padding: 10px;
    border-radius: 40px;
    margin: 20px;
    box-shadow: -1px 1px 2px 0px beige;
`;

export const Legend = styled.legend`
    background-color: rgba(0, 128, 128, 0.507);
    padding: 10px;
    border: 2px solid beige;
    border-radius: 30px;
    font-size: 20px;
    box-shadow: -1px 1px 2px 0px beige;
    color: beige;
`;

export const Field = styled.input`
    border: 1px solid #ccc;
    padding: 10px;
    max-width: 300px;
    width: 100%;
    border-radius: 40px;

    &:required {
        border-color: 2px solid black;
    }

    &:invalid {
        background-color: hsl(9, 100%, 90%);
    }
`;

export const Select = styled.select`
    border: 1px solid #ccc;
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
    background-color: rgba(0, 128, 128, 0.507);
    color: beige;
    padding: 10px;
    border-radius: 5px;
    margin: 10px 0;
    font-size: 26px;

    &:hover {
        background-color: hsl(180, 100%, 33%);
    }

    &:active {
        background-color: hsl(180, 100%, 39%);
    }
`;

export const Paragraph = styled.p`
    color: beige;
`;