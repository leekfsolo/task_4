import React, {
  ChangeEvent,
  Dispatch,
  FC,
  HTMLInputTypeAttribute,
} from "react";
import { inputActionType } from "../../components/Form/model/enum";
import { InputElement } from "../../components/Form/model/model";
import { inputAction } from "../../components/Form/model/reducer";

import styles from "./Input.module.scss";

interface Props {
  type?: HTMLInputTypeAttribute;
  value?: string;
  name: inputActionType;
  text: string;
  multiline?: boolean;
  select?: boolean;
  options?: Array<string>;
  setInputValue: Dispatch<inputAction>;
}

const Input: FC<Props> = (props: Props) => {
  const {
    type = "text",
    value = "",
    name = inputActionType.NAME,
    text = "",
    multiline = false,
    select = false,
    options = ["Male", "Female", "Others", "I do not wish to say"],
    setInputValue,
  } = props;

  const editInputValue = (e: ChangeEvent<InputElement>) => {
    setInputValue({ type: name, payload: e.currentTarget.value });
  };

  return (
    <>
      {multiline ? (
        <textarea
          name={name}
          className={`${styles.field} ${text ? styles["invalid--"] : ""}`}
          id={name}
          defaultValue={value}
          rows={3}
          onChange={editInputValue}
        />
      ) : select ? (
        <select
          className={`${styles.field} ${text ? styles["invalid--"] : ""}`}
          name={name}
          id={name}
          defaultValue={value}
          onChange={editInputValue}
        >
          <option value="">- Select -</option>
          {options.map((option, idx) => (
            <option value={option} key={idx}>
              {option}
            </option>
          ))}
        </select>
      ) : (
        <input
          name={name}
          className={`${styles.field} ${text ? styles["invalid--"] : ""}`}
          id={name}
          defaultValue={value}
          type={type}
          onChange={editInputValue}
        />
      )}
      {text && <div className={styles["field-error"]}>{text}</div>}
    </>
  );
};

export default Input;
