import React, { FormEvent, useReducer, useState } from "react";
import { useInput } from "../../hooks/useInput";
import Button from "../../shareComponents/Button";
import Input from "../../shareComponents/Input";

import styles from "./Form.module.scss";
import { inputActionType } from "./model/enum";
import { initInput } from "./model/model";
import { inputReducer } from "./model/reducer";

const Form = () => {
  const [isEditing, setIsEditing] = useState<boolean>(false);
  const [inputValue, setInputValue] = useReducer(inputReducer, initInput);

  const { isValid: isNameValid, msg: nameMsg } = useInput({
    value: inputValue.name,
    type: inputActionType.NAME,
  });
  const { isValid: isEmailValid, msg: emailMsg } = useInput({
    value: inputValue.email,
    type: inputActionType.EMAIL,
  });
  const { isValid: isPhoneValid, msg: phoneMsg } = useInput({
    value: inputValue.phone,
    type: inputActionType.PHONE,
  });
  const { isValid: isGenderValid, msg: genderMsg } = useInput({
    value: inputValue.gender,
    type: inputActionType.GENDER,
  });
  const { isValid: isNotesValid, msg: notesMsg } = useInput({
    value: inputValue.notes,
    type: inputActionType.NOTES,
  });

  const isFormValid =
    isEmailValid &&
    isNameValid &&
    isPhoneValid &&
    isGenderValid &&
    isNotesValid;

  const submitFormHandler = (e: FormEvent) => {
    e.preventDefault();

    if (!isFormValid) return;

    setIsEditing(false);
  };

  return (
    <form noValidate onSubmit={submitFormHandler} id="detailsForm">
      <div className={styles.grid}>
        <div className={styles.grid__block}>
          <label>
            <div className={styles["field-label"]}>Name*</div>

            {isEditing ? (
              <Input
                type="text"
                name={inputActionType.NAME}
                value={inputValue.name}
                setInputValue={setInputValue}
              />
            ) : (
              <div className={styles["field-value"]}>{inputValue.name}</div>
            )}
          </label>
        </div>

        <div className={styles.grid__block}>
          <label>
            <div className={styles["field-label"]}>E-mail Address*</div>

            {isEditing ? (
              <Input
                type="email"
                name={inputActionType.EMAIL}
                value={inputValue.email}
                setInputValue={setInputValue}
              />
            ) : (
              <div className={styles["field-value"]}>{inputValue.email}</div>
            )}
          </label>
        </div>

        <div className={styles.grid__block}>
          <label>
            <div className={styles["field-label"]}>Contact Number*</div>

            {isEditing ? (
              <Input
                type="tel"
                name={inputActionType.PHONE}
                value={inputValue.phone}
                setInputValue={setInputValue}
              />
            ) : (
              <div className={styles["field-value"]}>{inputValue.phone}</div>
            )}
          </label>
        </div>

        <div className={styles.grid__block}>
          <label>
            <div className={styles["field-label"]}>Gender*</div>

            {isEditing ? (
              <Input
                select
                name={inputActionType.GENDER}
                value={inputValue.gender}
                setInputValue={setInputValue}
              />
            ) : (
              <div className={styles["field-value"]}>{inputValue.gender}</div>
            )}
          </label>
        </div>

        <div className={`${styles.grid__block} ${styles["full--"]}`}>
          <label>
            <div className={styles["field-label"]}>Notes*</div>

            {isEditing ? (
              <Input
                name={inputActionType.NOTES}
                multiline
                value={inputValue.notes}
                setInputValue={setInputValue}
              />
            ) : (
              <div className={styles["field-value"]}>{inputValue.notes}</div>
            )}
          </label>
        </div>

        <div
          className={`${styles.grid__block} ${styles["full--"]} ${styles["ta-c"]}`}
        >
          <Button isEditing={isEditing} setIsEditing={setIsEditing} />
        </div>
      </div>
    </form>
  );
};

export default Form;
