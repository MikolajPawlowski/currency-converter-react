import { StyledResult } from "./styled.js";

export const Result = ({ result, currency }) => (
    <StyledResult>
        {result !== undefined && (
            <>
                {result.sourceAmount.toFixed(2)}&nbsp;PLN&nbsp;=
                {" "}
                <strong>
                    {result.targetAmount.toFixed(currency === "Bitcoin" ? 2 : 6)}&nbsp;{result.currency}
                </strong>
            </>
        )}
    </StyledResult>
);