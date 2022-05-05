import React, { Component } from "react";
import s from './Notification.module.css'

export default class Notification extends Component { 
    render() {
    const { message } = this.props;

    return (
      <p className={s.text}>
          {message}
      </p>
    );
  };
};