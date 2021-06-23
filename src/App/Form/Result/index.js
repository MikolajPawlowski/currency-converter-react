import "./style.css";

export const Result = ({ result, currency }) => (
    <p className="result">
        {result !== undefined && (
            <>
                {result.sourceAmount.toFixed(2)}&nbsp;PLN&nbsp;=
                {" "}
                <strong>
                    {result.targetAmount.toFixed(currency === "Bitcoin" ? 2 : 6)}&nbsp;{result.currency}
                </strong>
            </>
        )}
    </p>
);