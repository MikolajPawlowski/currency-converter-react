import { useState, useEffect } from "react";

export const useCurrentDate = () => { 
    const [currentDate, setCurrentDate] = useState(new Date());
    
    useEffect(() => {
        setInterval(() => {
            setCurrentDate(new Date());
        }, 1000);

        return () => {
            clearInterval(setCurrentDate);
        };
    }, []);

    return currentDate;
};