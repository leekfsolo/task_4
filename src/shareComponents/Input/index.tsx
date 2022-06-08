import React, { FC, HTMLInputTypeAttribute } from "react";

import styles from "./Input.module.scss";

interface Props {
  type?: HTMLInputTypeAttribute;
  defaultValue: string;
  name: string;
  multiline?: boolean;
  select?: boolean;
}

const Input: FC<Props> = (props: Props) => {
  const {
    type = "text",
    defaultValue = "",
    name = "",
    multiline = false,
    select = false,
  } = props;

  return (
    <>
      {multiline ? (
        <textarea
          name={name}
          className={styles.field}
          id={name}
          defaultValue={defaultValue}
          rows={3}
        />
      ) : select ? (
        <select
          className={styles.field}
          name={name}
          id={name}
          defaultValue={defaultValue}
        >
          <option value="">- Select -</option>
          <option value="1">Male</option>
          <option value="2">Female</option>
          <option value="3">Others</option>
          <option value="4">I do not wish to say</option>
        </select>
      ) : (
        <input
          name={name}
          className={styles.field}
          id={name}
          defaultValue={defaultValue}
          type={type}
        />
      )}
    </>
  );
};

export default Input;
