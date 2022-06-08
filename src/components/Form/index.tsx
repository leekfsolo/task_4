import React, { FormEvent, useState } from "react";
import Button from "../../shareComponents/Button";
import Input from "../../shareComponents/Input";

import styles from "./Form.module.scss";

const Form = () => {
  const [isEditing, setIsEditing] = useState<boolean>(false);

  const submitFormHandler = (e: FormEvent) => {
    e.preventDefault();
  };

  return (
    <form id={styles.detailsForm} noValidate onSubmit={submitFormHandler}>
      <div className={styles.grid}>
        <div className={styles.grid__block}>
          <label>
            <div className={styles["field-label"]}>Name*</div>

            {isEditing ? (
              <Input type="text" name="name" defaultValue="John Wick" />
            ) : (
              <div className={styles["field-value"]}>John Wick</div>
            )}

            <div className={styles["field-error"]} id="nameRequired">
              Name is required.
            </div>
          </label>
        </div>

        <div className={styles.grid__block}>
          <label>
            <div className={styles["field-label"]}>E-mail Address*</div>

            {isEditing ? (
              <Input
                type="email"
                name="email"
                defaultValue="donottake@mydog.com"
              />
            ) : (
              <div className={styles["field-value"]}>donottake@mydog.com</div>
            )}

            <div className={styles["field-error"]} id="emailRequired">
              E-mail Address is required.
            </div>

            <div className={styles["field-error"]} id="emailInvalid">
              E-mail Address is invalid.
            </div>
          </label>
        </div>

        <div className={styles.grid__block}>
          <label>
            <div className={styles["field-label"]}>Contact Number*</div>

            {isEditing ? (
              <Input type="tel" name="contact" defaultValue="0123456789" />
            ) : (
              <div className={styles["field-value"]}>0123456789</div>
            )}

            <div className={styles["field-error"]} id="contactRequired">
              Contact Number is required.
            </div>

            <div className={styles["field-error"]} id="contactInvalid">
              Contact Number should consist of 8 to 12 digits only.
            </div>
          </label>
        </div>

        <div className={styles.grid__block}>
          <label>
            <div className={styles["field-label"]}>Gender*</div>

            {isEditing ? (
              <Input select name="gender" defaultValue="1" />
            ) : (
              <div className={styles["field-value"]}>Male</div>
            )}

            <div className={styles["field-error"]} id="genderRequired">
              Gender is required.
            </div>
          </label>
        </div>

        <div className={`${styles.grid__block} ${styles["full--"]}`}>
          <label>
            <div className={styles["field-label"]}>Notes*</div>

            {isEditing ? (
              <Input
                name="notes"
                multiline
                defaultValue="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
              />
            ) : (
              <div className={styles["field-value"]}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </div>
            )}

            <div className={styles["field-error"]} id="notesRequired">
              Notes is required.
            </div>
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
