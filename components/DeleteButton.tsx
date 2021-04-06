import { useMutation } from "@apollo/client";
import PropTypes from "prop-types";
import { DELETE_POST_MUT } from "../queries/queries";
import styles from "../styles/DeleteButton.module.css";
import Image from "next/image";

export default function DeleteButton(props) {
  const [deletePost, { loading, error, data }] = useMutation(DELETE_POST_MUT);
  return (
    <div className={styles.div}>
      <button className={styles.button} onClick={async () => {
        await deletePost({variables: {id: props.postID}});
        window.location.reload();
      }}><Image src="/delete.svg" width={30} height={30}/></button>
    </div>
  );
}

DeleteButton.PropTypes = {
  postID: PropTypes.number.isRequired,
}