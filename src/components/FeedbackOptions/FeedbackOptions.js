import React, { Component } from "react";
import s from './FeedbackOptions.module.css';

export default class FeedbackOptions extends Component { 
    render() {
    const { options, onLeaveFeedback } = this.props;
    
    return (
      <ul className={s.list}>
        {options.map(option => (
          <li key={option} className={s.item}>
             <button name={option} type="button" onClick={() => onLeaveFeedback(option)} className={s.button}>{option}</button>
          </li>
        ))}
        
      </ul>
    );
  };
};