import styles from "./Join.module.css";
import Nav from "../components/Nav";
import SignUp from "../components/SignUp";

export default function Join() {
  return (
    <>
      <Nav />
      <div className={styles.join}>
        <SignUp />
      </div>
    </>
  );
}
