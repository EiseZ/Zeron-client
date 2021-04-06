import { useQuery } from "@apollo/client";
import { PROFILE_QUERY } from "../queries/queries";
import Post from "../components/Post";
import styles from "../styles/Profile.module.css";
import Navbar from "../components/Navbar";
import User from "../components/User";
import { useReducer, useState } from "react";
import DisableRefresh from "../components/DisableRefresh";

export default function Profile() {
  const { loading, error, data } = useQuery(PROFILE_QUERY);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error! {error.message}</p>;


  if (data.profile.error) {
    if(data.profile.error === "Not logged in.") {
      if (typeof window !== "undefined") {
        window.location.replace("login");
      }
    }
    return "An error occured";
  }

  const posts = [];
  data.profile.posts.forEach(post => {
      posts.unshift(<Post key={post.id} title={post.title} body={post.body} onProfile={true} postID={post.id} username={data.profile.user.username} createdAt={post.createdAt.toString()}/>);
  });
  console.log(posts);

  return (
    <>
    <Navbar items={["About", "Feed", "Profile"]}/>
    <User username={data.profile.user.username} createdAt={data.profile.user.createdAt}/>
    <div className={styles.postBox}>
      {posts}
    </div>
    </>
  );
}