import React, { Component } from "react";
import s from './Statistics.module.css';

export default class Statistics extends Component {
    render() {
        const { good, neutral, bad, total, positivePercentage } = this.props;

        const statistics = [
        { key: "id-1", value: good, name: "Good" },
        { key: "id-2", value: neutral, name: "Neutral" },
        { key: "id-3", value: bad, name: "Bad" },
        { key: "id-4", value: total, name: "Total" },
        { key: "id-5", value: positivePercentage, name: "Positive feedback" },
    ];
    
    return (
        <ul className={s.list}>
            {statistics.map(({key, value, name}) => (
          <li key={key} className={s.item}>
              {name}: {" "}
              <span className={s.text}>
                  {value}
                  {name === "Positive feedback" && "%"}
              </span>
          </li>
      ))} 
        </ul>
     
    );
  };
};
