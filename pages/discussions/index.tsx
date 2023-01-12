import { Post } from "../../src/components/Post";
import { useEffect, useState } from "react";
import { getPosts } from "../../src/service/api";
import { IPost } from "../../src/interfaces/IPost";

export default function Discussion() {
  const [posts, setPosts] = useState<IPost[]>([]);
  const { username, id } = { username: "John Smith", id: "1" };

  useEffect(() => {
    fetchPosts();
  }, []);

  async function fetchPosts() {
    const { status, posts } = await getPosts();

    if (status === 200) return setPosts(posts);
  }

  function liked(post: IPost) {
    return post.interest.some((user) => user.userId === id);
  }

  return (
    <>
      {posts.map((post) => (
        <Post
          key={post.id}
          id={post.id}
          username={post.user.username}
          text={post.text}
          createdAt={post.createdAt}
          interest={post.interest}
          replies={post.replies}
          interested={liked(post)}
        />
      ))}
    </>
  );
}
