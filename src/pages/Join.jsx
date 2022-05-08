import styles from "./Join.module.css";
import Nav from "../components/Nav";
import SignIn from "../components/SignIn";

export default function Join() {
  return (
    <>
      <Nav />
      <div className={styles.join}>
        <SignIn />
      </div>
    </>
  );
}
