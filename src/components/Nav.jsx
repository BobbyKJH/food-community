import { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./Nav.module.css";

export default function Nav() {
  return (
    <div className={styles.body}>
      {/* 박스 */}
      <div className={styles.nav}>
        <hr className={styles.line} />
        {/* 제목 */}
        <div className={styles.titleNav}>
          <hr />
          <Link className={styles.titleLink} to="/">
            나만의 음식찾기
          </Link>
          <hr />
        </div>

        <hr className={styles.line} />

        {/* fix 타이틀 */}
        <div className={styles.subNav}>
          <Link className={styles.contentLink} to="/">
            먹거리 찾기
          </Link>
          <Link className={styles.contentLink} to="/">
            먹거리 추천
          </Link>
          <Link className={styles.contentLink} to="/">
            게시판
          </Link>
          <Link className={styles.contentLink} to="/">
            1
          </Link>
        </div>

        <hr className={styles.line} />

        {/* 로그인 */}
        <div className={styles.findNav}>
          <Link to="/signin" className={styles.findLink}>
            로그인
          </Link>
          <hr />
          <Link to="/" className={styles.findLink}>
            회원가입
          </Link>
        </div>

        <hr className={styles.line} />
      </div>
    </div>
  );
}
