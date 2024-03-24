import { requiredValue, minValue, maxValue, emailValue } from "./Ruls";

const Validator = (value, validation) => {
  console.log("validator =>", value, validation);

  let validationResult = [];

  for (const validator of validation) {
    if (validator.value === requiredValue) {
      value.trim().length === 0 && validationResult.push(false);
    }
    if (validator.value === minValue) {
      value.trim().length < validator.min && validationResult.push(false);
    }
    if (validator.value === maxValue) {
      value.trim().length > validator.max && validationResult.push(false);
    }
    if (validator.value === emailValue) {
      !value.trim().inclouds("@") && validationResult.push(false);
    }
  }

  if (validationResult.length) {
    return false;
  } else {
    return true;
  }
};

export default Validator;
