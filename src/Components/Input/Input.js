import React, { useReducer } from "react";
import "./Input.css";
import Validator from "./../Validators/Validator";

const inputReducer = (state, action) => {
  switch (action.type) {
    case "CHANGE": {
      return {
        ...state,
        value: action.value,
        isValid: Validator(action.value, action.validation),
      };
    }
    default: {
      return state;
    }
  }
};

export default function Input(props) {
  const [mainInput, dispatch] = useReducer(inputReducer, {
    value: "",
    isValid: false,
  });

  const onChangeHandler = (e) => {
    console.log(e.target.value);
    dispatch({
      type: "CHANGE",
      value: e.target.value,
      validation: props.validation,
      isValid: true,
    });
  };

  const element =
    props.element === "input" ? (
      <input
        type={props.type}
        className={`${props.className} ${
          mainInput.value ? "success" : "error"
        }`}
        placeholder={props.placeholder}
        value={mainInput.value}
        onChange={onChangeHandler}
      />
    ) : (
      <textarea
        className={props.className}
        placeholder={props.placeholder}
        value={mainInput.value}
        onChange={onChangeHandler}
      />
    );

  return <div>{element}</div>;
}
