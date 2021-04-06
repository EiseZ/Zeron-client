import { useMutation } from "@apollo/client";
import React from "react";
import Navbar from "../components/Navbar";
import { CREATE_POST_MUT } from "../queries/queries";
import styles from "../styles/CreatePost.module.css";

export default function CreatePost() {
  const [createPost, { loading, error, data }] = useMutation(CREATE_POST_MUT);
  const submitPost = async (event) => {
    event.preventDefault();
    await createPost({ variables: { title: event.target.title.value, body: event.target.body.value} });
    if (typeof window !== "undefined") {
      window.location.replace("profile");
    }
  };

  return (
    <>
    <Navbar items={["About", "Feed", "Profile"]}/>
    <h1 className={styles.h1}>Create post</h1>
    <form className={styles.form} onSubmit={submitPost}>
      <input className={styles.input} type="text" name="title" id="title" placeholder="Title" required autoFocus minLength={1} maxLength={150}/>
      <textarea className={styles.textarea} name="body" id="body" placeholder="Content" required minLength={1} maxLength={1000}/>
      <button className={styles.button} type="submit">Submit</button>
    </form>
    </>
  );
}