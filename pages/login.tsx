import { useMutation } from "@apollo/client";
import { useState } from "react";
import Navbar from "../components/Navbar";
import { LOGIN_MUT } from "../queries/queries";
import styles from "../styles/Register.module.css";

export default function Login() {
  const [incorrectPassword, setIncorrectPassword] = useState(false);
  const [incorrectUser, setIncorrectUser] = useState(false);
  const [login, { loading, error, data }] = useMutation(LOGIN_MUT);
  const submitRegistration = async (event) => {
    event.preventDefault();
    await login({ variables: { username: event.target.username.value, password: event.target.password.value} }).then((data) => {
      console.log(data);
      if(!loading) {
      if(error) {
        console.log("Error " + error);
      } else if (data.data.login.error === "This user does not exits.") {
        setIncorrectUser(true);
        setIncorrectPassword(false);
      } else if (data.data.login.error === "Incorrect password.") {
        setIncorrectPassword(true);
        setIncorrectUser(false);
      } else {
        setIncorrectPassword(false);
        setIncorrectUser(false);
        if (typeof window !== "undefined") {
          window.location.replace("profile");
        }
      }
    }; 
    });
  };

  if(incorrectPassword) {
    return (
    <>
    <Navbar items={["About", "Feed"]}/>
    <h1 className={styles.h1}>Sign in</h1>
    <form className={styles.form} onSubmit={submitRegistration}>
      <input className={styles.input} type="text" name="username" id="username" placeholder="Username" required autoFocus minLength={3} autoComplete="name"/>
      <input className={styles.input} type="password" name="password" id="password" placeholder="Password" required minLength={6} autoComplete="password"/>
      <button className={styles.button} type="submit">Login</button>
    </form>
    <h3 className={styles.error}>Incorrect password, please try again.</h3>
    <p className={styles.p}>New here?<a className={styles.a} href="register">Sign up</a></p>
    </>
    );
  }
  if(incorrectUser) {
    return (
    <>
    <Navbar items={["About", "Feed"]}/>
    <h1 className={styles.h1}>Sign in</h1>
    <form className={styles.form} onSubmit={submitRegistration}>
      <input className={styles.input} type="text" name="username" id="username" placeholder="Username" required autoFocus minLength={3} autoComplete="name"/>
      <input className={styles.input} type="password" name="password" id="password" placeholder="Password" required minLength={6} autoComplete="password"/>
      <button className={styles.button} type="submit">Login</button>
    </form>
    <h3 className={styles.error}>This user doest not exist, please try again.</h3>
    <p className={styles.p}>New here?<a className={styles.a} href="register">Sign up</a></p>
    </>
    );
  }
  return (
    <>
    <Navbar items={["About", "Feed"]}/>
    <h1 className={styles.h1}>Sign in</h1>
    <form className={styles.form} onSubmit={submitRegistration}>
      <input className={styles.input} type="text" name="username" id="username" placeholder="Username" required autoFocus minLength={3} autoComplete="name"/>
      <input className={styles.input} type="password" name="password" id="password" placeholder="Password" required minLength={6} autoComplete="password"/>
      <button className={styles.button} type="submit">Login</button>
    </form>
    <p className={styles.p}>New here?<a className={styles.a} href="register">Sign up</a></p>
    </>
  );
}
