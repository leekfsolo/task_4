import React, { FC, ReactNode } from "react";

import styles from "./Button.module.scss";

interface Props {
  children?: ReactNode;
  isEditing: boolean;
  setIsEditing: (isEditing: boolean) => void;
}

const Button: FC<Props> = (props: Props) => {
  const { isEditing, setIsEditing } = props;

  const className = `${styles.button} ${
    !isEditing ? styles["secondary--"] : ""
  }`;

  return (
    <>
      {isEditing ? (
        <button
          type="submit"
          className={className}
          id="submit"
          onClick={() => setIsEditing(false)}
        >
          SAVE
        </button>
      ) : (
        <button
          type="button"
          className={className}
          id="edit"
          onClick={() => setIsEditing(true)}
        >
          EDIT
        </button>
      )}
    </>
  );
};

export default Button;
