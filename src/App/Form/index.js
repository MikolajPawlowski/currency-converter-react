import { useState } from "react";
import { currencies } from "../currencies";
import { Result } from "./Result";
import { Clock } from "./Clock";
import { StyledForm, Header, Fieldset, Legend, Field, Select, LabelText, Button, Paragraph, Label } from "./styled.js";

export const Form = ({ calculateResult, result }) => {
    const [currency, setCurrency] = useState(currencies[0].short);
    const [amount, setAmount] = useState("");

    const onSubmit = (event) => {
        event.preventDefault();
        calculateResult(currency, amount);
    }

    return (
        <StyledForm onSubmit={onSubmit}>
            <Header>
                Konwerter kursów walutowych
            </Header>
            <Clock />
            <Fieldset>
                <Legend>
                    Konwerter walut
                </Legend>
                <Paragraph>
                    <strong>
                        Pola oznaczone * muszą być wypełnione,&nbsp;
                    </strong>
                    kursy z dnia 14.06.2021
                </Paragraph>
                <Paragraph>
                    <Label>
                        <LabelText>
                            Kwota w PLN*:
                        </LabelText>
                        <Field
                            value={amount}
                            onChange={({ target }) => setAmount(target.value)}
                            required type="number"
                            min="1"
                            step="0.01"
                            placeholder="Podaj wymaganą kwotę"
                        />
                    </Label>
                </Paragraph>
                <Paragraph>
                    <Label>
                        <LabelText>
                            Konwertuję walutę na:
                        </LabelText>
                        <Select
                            value={currency}
                            onChange={({ target }) => setCurrency(target.value)}
                        >
                            {currencies.map((currency => (
                                <option
                                    key={currency.short}
                                    value={currency.short}
                                >
                                    {currency.name}
                                </option>
                            )))}
                        </Select>
                    </Label>
                </Paragraph>
                <Paragraph>
                    <Button>Hit me</Button>
                </Paragraph>

                <Result result={result} />
            </Fieldset>
        </StyledForm>
    );
};

export default Form;