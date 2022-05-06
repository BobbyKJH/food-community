import styles from "./MemberShip.module.css";
import Nav from "../components/Nav";
import SignIn from "../components/SignIn";

export default function MemberShip() {
  return (
    <>
      <Nav />
      <div className={styles.signIn}>
        <SignIn />
      </div>
    </>
  );
}
