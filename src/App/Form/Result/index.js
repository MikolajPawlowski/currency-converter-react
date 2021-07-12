import { StyledResult } from "./styled.js";

export const Result = ({ result, currency }) => (
    <StyledResult>
        {result !== undefined && (
            <>
                {result.sourceAmount.toFixed(2)}&nbsp;PLN&nbsp;=
                {" "}
                <strong>
                    {result.targetAmount.toFixed(4)}&nbsp;{result.currency}
                </strong>
            </>
        )}
    </StyledResult>
);