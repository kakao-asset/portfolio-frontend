import ReactDatePicker from "react-datepicker";
import { useState } from "react";
import DatePicker from "react-datepicker";
import LineChart from "./mainpage/maincomponent/chart/LineChart";

export default function TestPage(params) {
    const [startDate, setStartDate] = useState(new Date());

    return(
        <>
        <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} />
        <LineChart></LineChart>
        </>
    );
};
