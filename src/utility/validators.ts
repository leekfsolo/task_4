export const emptyInputValidator = (value: string) => value.trim() === "";

export const emailInputValidator = (value: string) => value.includes("@");

export const phoneDigitInputValidator = (value: string) => /^\d+$/.test(value);

export const phoneLengthInputValidator = (value: string) =>
  value.trim().length >= 8 && value.trim().length <= 12;
