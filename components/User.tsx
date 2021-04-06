import { useMutation } from "@apollo/client";
import PropTypes from "prop-types";
import { LOGOUT_MUT } from "../queries/queries";
import styles from "../styles/User.module.css";

export default function User(props) {
  const [logout, { loading, error, data }] = useMutation(LOGOUT_MUT);
  return (
    <div className={styles.border}>
      <div className={styles.div}>
      <h1 className={styles.username}>{props.username}</h1>
      <p className={styles.createdAt}>Registered at: {props.createdAt.substring(0, 10)}</p>
      <button className={styles.createPost} onClick={() => window.location.replace("createpost")}>Create post</button>
      <button className={styles.logout} onClick={() => {
        logout();
        window.location.replace("login");
      }}>Log out</button>
    </div>
    </div>
  )
}

User.propTypes = {
  username: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
}