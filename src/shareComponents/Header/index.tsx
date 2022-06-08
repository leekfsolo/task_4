import React from "react";

import Logo from "../../images/logo.png";
import Container from "../Container";
import styles from "./Header.module.scss";

const Header = () => {
  return (
    <header className={styles.header}>
      <Container>
        <img src={Logo} alt="" className={styles["header-logo"]} />
      </Container>
    </header>
  );
};

export default Header;
