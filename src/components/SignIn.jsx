import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import styles from "./SignIn.module.css";

export default function SignIn() {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const focusId = useRef();
  const focusPassword = useRef();

  // input ID
  const ID = (e) => {
    setId(e.target.value);
  };

  // input Password
  const PW = (e) => {
    setPassword(e.target.value);
  };

  const onSubmitChange = (e) => {
    e.preventDefault();
  };

  useEffect(() => {
    focusId.current.focus();
  }, []);
  return (
    <form className={styles.box} onSubmit={onSubmitChange}>
      <h1 className={styles.title}>로그인</h1>
      <hr />

      {/* 아이디 비밀번호 입력 칸 */}
      <div className={styles.input}>
        <input
          type="text"
          className={styles.emptyBox}
          value={id}
          ref={focusId}
          onChange={ID}
          placeholder="아이디를 입력해주세요."
          required
        />
        <input
          type="password"
          ref={focusPassword}
          className={styles.emptyBox}
          value={password}
          onChange={PW}
          placeholder="비밀번호를 입력해주세요."
          required
        />
      </div>

      {/* 로그인 버튼 */}
      <button className={styles.btn} onSubmit={onSubmitChange}>
        로그인
      </button>

      {/* 회원가입 버튼 */}
      <Link to="/" className={styles.membership}>
        회원가입
      </Link>

      <hr />

      {/* 아이디 비밀번호 찾기 버튼 */}
      <div className={styles.findMembership}>
        <Link to="/" className={styles.find}>
          아이디 찾기
        </Link>

        <Link to="/" className={styles.find}>
          비밀번호 찾기
        </Link>
      </div>
    </form>
  );
}
