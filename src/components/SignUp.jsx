import { useState, useEffect, useRef } from "react";
import styles from "./SignUp.module.css";

export default function SignUp() {
  // 아이디 입력
  const [makeId, setMakeId] = useState("");
  const [idError, setIdError] = useState("");
  const Id = (e) => {
    setMakeId(e.target.value);
    if (e.target.value.length < 8) {
      setIdError("8자리 이상 입력해주세요");
    } else {
      setIdError("");
    }
  };
  // 비밀번호 입력
  const [makePassword, setMakePassword] = useState("");
  const Password = (e) => {
    setMakePassword(e.target.value);
  };
  // 비밀번호 확인
  const [passwordError, setPasswordError] = useState("");
  const passwordError1 = () => {};

  return (
    <form className={styles.box}>
      <input
        className={styles.make}
        type="text"
        value={makeId}
        onChange={Id}
        minLength={8}
      />
      <p>{idError}</p>
      <input
        className={styles.make}
        type="password"
        value={makePassword}
        onChange={Password}
      />
    </form>
  );
}
