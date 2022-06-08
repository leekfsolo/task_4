import React from "react";
import Form from "../components/Form";
import Container from "../shareComponents/Container";
import Header from "../shareComponents/Header";

import styles from "./App.module.scss";

const App = () => {
  return (
    <>
      <Header />

      <main className={styles.main}>
        <div className={styles.section}>
          <Container>
            <Form />
          </Container>
        </div>
      </main>
    </>
  );
};

export default App;
