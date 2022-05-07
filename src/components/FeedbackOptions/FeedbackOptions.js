import React from "react";
import s from './FeedbackOptions.module.css';
import PropTypes from "prop-types";

const FeedbackOptions = ({ options, onLeaveFeedback }) => { 
    return (
      <ul className={s.list}>
        {options.map(option => (
          <li key={option} className={s.item}>
             <button name={option} type="button" onClick={() => onLeaveFeedback(option)} className={s.button}>{option}</button>
          </li>
        ))}
        
      </ul>
    )
};

export default FeedbackOptions;

FeedbackOptions.propTypes = { 
  options: PropTypes.object.isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
}