import "./style.css";
import { useCurrentDate } from "./useCurrentDate";

export const Clock = () => {
    const currentDate = useCurrentDate();
    const dateString = currentDate.toLocaleDateString(
        undefined,
        {
            weekday: "long",
            day: "numeric",
            month: "long",
            year: "numeric",
            hour: "numeric",
            minute: "numeric",
            second: "numeric",
        }
    );

    return (
        <p className="clock">
            Dziś jest {dateString}
        </p>
    )
};