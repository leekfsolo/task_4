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
  text?: string;
  multiline?: boolean;
  select?: boolean;
  setInputValue: Dispatch<inputAction>;
}

const Input: FC<Props> = (props: Props) => {
  const {
    type = "text",
    value = "",
    name = inputActionType.NAME,
    text,
    multiline = false,
    select = false,
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
          className={styles.field}
          id={name}
          defaultValue={value}
          rows={3}
          onChange={editInputValue}
        />
      ) : select ? (
        <select
          className={styles.field}
          name={name}
          id={name}
          defaultValue={value}
          onChange={editInputValue}
        >
          <option value="">- Select -</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Others">Others</option>
          <option value="I do not wish to say">I do not wish to say</option>
        </select>
      ) : (
        <input
          name={name}
          className={styles.field}
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
