import React, { useEffect, useState } from "react";
import Diagram from "../Diagram/Diagram";
import moment from "moment";
import DatePicker from "react-datepicker";
import en from "date-fns/locale/en-US";

import "react-datepicker/dist/react-datepicker.css";

const UserData = ({ data }) => {
  const title = data.userName && `${data.userName.first_name} ${data.userName.last_name}`;
  const [toDate, setToDate] = useState(Math.floor(new Date() / 86400000) * 86400000);
  const [fromDate, setFromDate] = useState(toDate - 6 * 86400000);
  const [period, setPeriod] = useState({ start: fromDate, end: toDate });
  const [userActiveData, setUserActiveData] = useState({});

  useEffect(() => {
    const date = [];
    const clicks = [];
    const views = [];

    for (let i = 0; i <= period.end / 86400000 - period.start / 86400000; i++) {
      date.push(moment(period.start + i * 86400000).format("YYYY-MM-DD"));
    }

    data.active &&
      date.forEach((el) => {
        const activeData = data.active.filter((item) => item.date === el);
        clicks.push(!!activeData.length ? activeData[0].clicks : 0);
        views.push(!!activeData.length ? activeData[0].page_views : 0);
      });
    setUserActiveData({ date, clicks, views });
  }, [data.active, period]);

  const submitHandler = (e) => {
    e.preventDefault();

    setPeriod({ start: fromDate, end: toDate });
  };

  return (
    <div className="diagram-wrapper">
      <div className="container">
        <h2 className="component--title">{title}</h2>

        <form className="period-selector" onSubmit={submitHandler}>
          <p className="period-selector--text">{`Selected period `}</p>

          <p className="period-selector--text">{`from: `}</p>
          <DatePicker
            name="fromDate"
            className="date-picer"
            selected={fromDate}
            locale={en}
            dateFormat="yyyy-MM-dd"
            onChange={(date) => setFromDate(date.valueOf())}
          />
          <p className="period-selector--text">{`to: `}</p>
          <DatePicker
            name="toDate"
            className="date-picer"
            selected={toDate}
            locale={en}
            dateFormat="yyyy-MM-dd"
            onChange={(date) => setToDate(date.valueOf())}
          />
          <input type="submit" className="period-btn" value="Find" />
        </form>
        <Diagram title="Clicks" data={{ xAxisData: userActiveData.date, yAxisData: userActiveData.clicks }} />
        <Diagram title="Veiws" data={{ xAxisData: userActiveData.date, yAxisData: userActiveData.views }} />
      </div>
    </div>
  );
};

export default UserData;
