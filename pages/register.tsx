import { gql, useMutation, useQuery } from "@apollo/client";
import Navbar from "../components/Navbar";
import styles from "../styles/Register.module.css";

const REGISTER_MUT = gql`
mutation Register($username: String!, $password: String!) {
  registerUser(username: $username, password: $password) {
    id
    username
    createdAt
  }
}
`


export default function Register() {
  const [register, { loading, error, data }] = useMutation(REGISTER_MUT);
  const submitRegistration = async (event) => {
    event.preventDefault();
    const res = await register({ variables: { username: event.target.username.value, password: event.target.password.value} });
    if (typeof window !== "undefined") {
      window.location.replace("profile");
    }
  };

  return (
    <>
    <Navbar items={["About", "Feed"]}/>
    <h1 className={styles.h1}>Sign up</h1>
    <form className={styles.form} onSubmit={submitRegistration}>
      <input className={styles.input} type="text" name="username" id="username" placeholder="Username" required autoFocus minLength={3} autoComplete="name"/>
      <input className={styles.input} type="password" name="password" id="password" placeholder="Password" required minLength={6} autoComplete="password"/>
      <button className={styles.button} type="submit">Submit</button>
    </form>
    <p className={styles.p}>Already signed up?<a className={styles.a} href="login">Log in</a></p>
    </>
  );
}
