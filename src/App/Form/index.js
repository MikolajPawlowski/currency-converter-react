import { useState } from "react";
import { Result } from "./Result";
import { Clock } from "./Clock";
import { useApiRatesData } from "./useApiRatesData";
import {
    StyledForm,
    Header,
    Fieldset,
    Legend,
    Field,
    Select,
    LabelText,
    Button,
    Paragraph,
    Label,
    Loading,
    Failed,
} from "./styled.js";

export const Form = () => {
    const [result, setResult] = useState();
    const ratesData = useApiRatesData();

    const calculateResult = (currency, amount) => {
        const rate = ratesData.rates[currency];

        setResult({
            sourceAmount: +amount,
            targetAmount: amount * rate,
            currency,
        });
    }

    const [currency, setCurrency] = useState("EUR");
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
            {ratesData.state === "loading"
                ? (
                    <Loading>
                        Momencik... <br /> Trwa proces ładowania kursów walutowych... <br /> <image src="https://miro.medium.com/max/1838/1*e_Loq49BI4WmN7o9ItTADg.gif" />
                    </Loading>
                )
                : (
                    ratesData.state === "error" ? (
                        <Failed>
                            Wygląda na to, że coś poszło nie tak. Upewnij się, że masz połączenie z internetem :)
                        </Failed>
                    ) : (
                        <>
                            <Clock />
                            <Fieldset>
                                <Legend>
                                    Konwerter walut
                                </Legend>
                                <Paragraph>
                                    <strong>
                                        Pola oznaczone * muszą być wypełnione,&nbsp;
                                    </strong>
                                </Paragraph>
                                <Paragraph>
                                    <Label>
                                        <LabelText>
                                            Kwota w PLN*:
                                        </LabelText>
                                        <Field
                                            value={amount}
                                            onChange={({ target }) => setAmount(target.value)}
                                            required
                                            type="number"
                                            step="0.01"
                                            placeholder="Podaj porządaną kwotę w zł"
                                        />
                                    </Label>
                                </Paragraph>
                                <Paragraph>
                                    <Label>
                                        <LabelText>
                                            Konwertuję walutę na:
                                        </LabelText>
                                        <Select
                                            as="select"
                                            value={currency}
                                            onChange={({ target }) => setCurrency(target.value)}
                                        >
                                            {Object.keys(ratesData.rates).map((currency => (
                                                <option
                                                    key={currency}
                                                    value={currency}
                                                >
                                                    {currency}
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
                        </>
                    )
                )}
        </StyledForm>
    );
};

export default Form;