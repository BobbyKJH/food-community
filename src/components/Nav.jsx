import { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./Nav.module.css";

export default function Nav() {
  const [subNav, setSubNav] = useState("relative");

  const scroll = () => {
    setSubNav("fixed");
  };
  return (
    <div className={styles.Nav}>
      {/* 로그인 */}
      <div className={styles.find}>
        <Link to="/" className={styles.findLink}>
          로그인
        </Link>
        <hr />
        <Link to="/" className={styles.findLink}>
          회원가입
        </Link>
      </div>
      {/* 제목 */}
      <div className={styles.name}>
        <Link className={styles.titleLink} to="/">
          FOOD COMMUNITY
        </Link>
      </div>
      {/* fix 타이틀 */}
      <div className={styles.subNav} style={{ position: subNav }}>
        <Link className={styles.contentLink} to="/">
          게시판
        </Link>
        <Link className={styles.contentLink} to="/">
          1
        </Link>
        <Link className={styles.contentLink} to="/">
          1
        </Link>
        <Link className={styles.contentLink} to="/">
          1
        </Link>
      </div>
    </div>
  );
}
