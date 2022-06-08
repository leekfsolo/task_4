import React, { useState } from "react";
import Button from "../../shareComponents/Button";

import styles from "./Form.module.scss";

const Form = () => {
  const [isEditing, setIsEditing] = useState<boolean>(false);

  return (
    <form id={styles.detailsForm} noValidate>
      <div className={styles.grid}>
        <div className={styles.grid__block}>
          <label>
            <div className={styles["field-label"]}>Name*</div>

            {isEditing ? (
              <input
                type="text"
                className="field"
                name="name"
                defaultValue="John Wick"
                id="name"
              />
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
              <input
                type="email"
                className="field"
                name="email"
                defaultValue="donottake@mydog.com"
                id="email"
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
              <input
                type="tel"
                className="field"
                name="contact"
                defaultValue="0123456789"
                id="contact"
              />
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
              <select className="field" name="gender" id="gender">
                <option value="">- Select -</option>
                <option value="1" defaultValue={1}>
                  Male
                </option>
                <option value="2">Female</option>
                <option value="3">Others</option>
                <option value="4">I do not wish to say</option>
              </select>
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
              <textarea
                name="notes"
                className="field"
                style={{ display: "none" }}
                id="notes"
                defaultValue="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum."
              ></textarea>
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
          {isEditing ? (
            <Button type="submit" id="submit">
              SAVE
            </Button>
          ) : (
            <Button type="button" id="edit" variant="secondary--">
              EDIT
            </Button>
          )}
        </div>
      </div>
    </form>
  );
};

export default Form;
