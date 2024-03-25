import React, { Fragment } from "react";

// css
import classes from "./Input.module.css";

const Input = (props) => {
  const {
    type,
    placeholder,
    label,
    labelId,
    value,
    onChange,
    errorValue,
    maxLength,
    inputRef,
  } = props;

  return (
    <Fragment>
      <div className={classes["form-group"]}>
        <label htmlFor={labelId}>{label}</label>
        <input
          ref={inputRef}
          type={type}
          placeholder={placeholder}
          id={labelId}
          value={value}
          onChange={onChange}
          maxLength={maxLength}
        />
        {errorValue && <p className={classes.error}>{errorValue}</p>}
      </div>
    </Fragment>
  );
};

export default Input;
