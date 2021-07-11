import { useState, useEffect } from "react";

export const useApiRatesData = () => {
    let [ratesData, setRatesData] = useState({
        state: "loading",
    });

    useEffect(() => {
        const apiURL = "https://api.exchangerate.host/latest";

        const fetchData = async () => {
            try {
                const response = await fetch(apiURL);

                if (!response.ok) {
                    throw new Error(response.statusText);
                }

                const { rates, date } = await response.json();

                setRatesData({
                    state: "success",
                    rates,
                    date,
                });

            } catch {
                setRatesData({
                    state: "error"
                });
            }
        };

        setTimeout(fetchData, 3000);
    }, []);

    return ratesData;
};