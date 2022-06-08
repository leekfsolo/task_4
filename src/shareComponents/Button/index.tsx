import React, { FC, ReactNode } from "react";

import styles from "./Button.module.scss";

interface Props {
  children: ReactNode;
  type: "button" | "submit";
  variant?: string;
  id?: string;
}

const Button: FC<Props> = (props: Props) => {
  const { children, type = "button", variant = "", id = "" } = props;
  const isTypeButton = type === "button";
  const className = `${styles.button} ${styles[variant]}`;

  return (
    <>
      {isTypeButton ? (
        <button type="button" className={className} id={id}>
          {children}
        </button>
      ) : (
        <button type="submit" className={className} id={id}>
          {children}
        </button>
      )}
    </>
  );
};

export default Button;
