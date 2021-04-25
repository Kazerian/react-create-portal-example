import React, { useState } from "react";

import Button from "../UI/Button/Button";
import Card from "../UI/Card/Card";
import ErrorModal from "../UI/ErrorModal/ErrorModal";

import styles from "./AddUsers.module.css";

const AddUsers = props => {
  const [userName, setUsername] = useState("");
  const [age, setAge] = useState("");
  const [error, setError] = useState(null);

  const enteredNameHandler = evt => {
    setUsername(evt.target.value);
  };

  const enteredAgeHandler = evt => {
    setAge(evt.target.value);
  };
  const submitHandler = evt => {
    evt.preventDefault();
    if (userName.trim().length === 0 || age.trim().length === 0) {
      setError({ title: "Invalid input", message: "enter a valid name/age" });
      return;
    }
    if (+age <= 0) {
      setError({
        title: "Invalid age",
        message: "Age cannot be 0 or a -ve value"
      });
      return;
    }
    const userData = {
      userName,
      age: +age
    };

    props.onUserAdd(userData);

    setUsername("");
    setAge("");
  };

  const errorModalClickHandler = () => {
    setError(null);
  };

  return (
    <>
      <Card className={styles.input}>
        <form onSubmit={submitHandler}>
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            value={userName}
            onChange={enteredNameHandler}
          />
          <label htmlFor="age">Age (Years)</label>
          <input
            type="number"
            id="age"
            step="1"
            value={age}
            onChange={enteredAgeHandler}
          />
          <Button type="submit">Add User</Button>
        </form>
      </Card>
      {error && (
        <ErrorModal
          title={error.title}
          content={error.message}
          onConfirm={errorModalClickHandler}
        />
      )}
    </>
  );
};

export default AddUsers;
