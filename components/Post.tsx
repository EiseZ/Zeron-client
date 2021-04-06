import { useQuery } from "@apollo/client";
import PropTypes from "prop-types";
import React from "react";
import { USER_BY_ID_QUERY } from "../queries/queries";
import styles from "../styles/Post.module.css"
import DeleteButton from "./DeleteButton";

export default function Post(props) {
  if(props.username) {
    if(props.onProfile) {
      return (
        <div className={styles.div}>
          <h3 className={styles.title}>{props.title}</h3>
          <p className={styles.body}>{props.body}</p>
          <h5 className={styles.username}>{props.username}</h5>
          <p className={styles.createdAt}>Posted at: {props.createdAt.substring(0, 10)}</p>
          <DeleteButton postID={props.postID}/>
        </div>
      );
    } else {
      return (
        <div className={styles.div}>
          <h3 className={styles.title}>{props.title}</h3>
          <p className={styles.body}>{props.body}</p>
          <h5 className={styles.username}>{props.username}</h5>
          <p className={styles.createdAt}>Posted at: {props.createdAt.substring(0, 10)}</p>
        </div>
      );
    } 
  }

  if(props.userID) {
    const { loading, error, data } = useQuery(USER_BY_ID_QUERY, {variables: { id: props.userID }});
    
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error! {error.message}</p>;
    if(props.onProfile) {
      return (
       <div className={styles.div}>
         <h3 className={styles.title}>{props.title}</h3>
         <p className={styles.body}>{props.body}</p>
         <h5 className={styles.username}>{data.userById.username}</h5>
         <p className={styles.createdAt}>Posted at: {props.createdAt.substring(0, 10)}</p>
         <DeleteButton postID={props.postID}/>
       </div>
      );
    } else {
      return (
       <div className={styles.div}>
         <h3 className={styles.title}>{props.title}</h3>
         <p className={styles.body}>{props.body}</p>
         <h5 className={styles.username}>{data.userById.username}</h5>
        <p className={styles.createdAt}>Posted at: {props.createdAt.substring(0, 10)}</p>
       </div>
      );
    }
   
  }
  return(<p>Error</p>);
}

Post.propTypes = {
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  username: PropTypes.string,
  postID: PropTypes.number.isRequired,
  userID: PropTypes.number,
  onProfile: PropTypes.bool,
  createdAt: PropTypes.string.isRequired,
}