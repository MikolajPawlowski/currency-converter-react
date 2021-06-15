import { useState } from "react";
import { currencies } from "../currencies";
import { Result } from "./Result";
import "./style.css";

export const Form = ({ calculateResult, result }) => {
    const [currency, setCurrency] = useState(currencies[0].short);
    const [amount, setAmount] = useState("");

    const onSubmit = (event) => {
        event.preventDefault();
        calculateResult(currency, amount);
    }

    return (
        <form className="form" onSubmit={onSubmit}>
            <h1 className="form__header">
                Konwerter kursów walutowych
            </h1>
            <fieldset className="form__fieldset">
                <legend className="form__legend">
                    Konwerter walut
                </legend>
                <p className="form__paragraph">
                    <strong>
                        Pola oznaczone * muszą być wypełnione,&nbsp;
                    </strong>
                    kursy z dnia 14.06.2021
                </p>
                <p className="form__paragraph">
                    <label className="form__label">
                        <span className="form__labelText">
                            Kwota w PLN*:
                        </span>
                        <input
                            value={amount}
                            onChange={({ target }) => setAmount(target.value)}
                            className="form__field"
                            required type="number"
                            min="1"
                            step="0.01"
                            placeholder="Podaj wymaganą kwotę"
                        />
                    </label>
                </p>
                <p className="form__paragraph">
                    <label className="form__label">
                        <span className="form__labelText">
                            Konwertuję walutę na:
                        </span>
                        <select
                            className="form__field"
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
                        </select>
                    </label>
                </p>
                <p>
                    <button className="form__button">Hit me</button>
                </p>

                <Result result={result} />
            </fieldset>
        </form>
    );
};

export default Form;