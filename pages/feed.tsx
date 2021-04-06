import { useQuery } from "@apollo/client";
import Navbar from "../components/Navbar";
import Post from "../components/Post";
import { POSTS_QUERY } from "../queries/queries";
import styles from "../styles/Feed.module.css";

export default function Feed() {
  const { loading, error, data } = useQuery(POSTS_QUERY);

  if (loading) return 'Loading...';
  if (error) return `Error! ${error.message}`;

  const posts = [];
  data.posts.forEach(post => {
      console.log(post);
      posts.unshift(<Post key={post.id} title={post.title} body={post.body} onProfile={false} postID={post.id} userID={post.userID} createdAt={post.createdAt.toString()}/>);
  });

  return (
    <>
    <Navbar items={["About", "Feed", "Profile"]}/>
    <div className={styles.postBox}>
      {posts}
    </div>
    </>
  );
}
