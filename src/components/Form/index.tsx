import React, { FormEvent, useReducer, useState } from "react";
import Button from "../../shareComponents/Button";
import Input from "../../shareComponents/Input";

import styles from "./Form.module.scss";
import { inputActionType } from "./model/enum";
import { initInput } from "./model/model";
import { inputReducer } from "./model/reducer";

const Form = () => {
  const [isEditing, setIsEditing] = useState<boolean>(false);
  const [inputValue, setInputValue] = useReducer(inputReducer, initInput);

  const submitFormHandler = (e: FormEvent) => {
    e.preventDefault();
  };

  return (
    <form noValidate onSubmit={submitFormHandler}>
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
