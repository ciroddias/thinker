import { Post } from "../../src/components/Post";
import { useEffect, useState } from "react";
import { getPosts } from "../../src/service/api";
import { IPost } from "../../src/interfaces/IPost";

export default function Discussion() {
  const [posts, setPosts] = useState<IPost[]>([]);

  useEffect(() => {
    const response = getPosts();

    if (response.status === 200) {
      const posts = response.data as unknown as IPost[];
      setPosts(posts);
    }
  }, []);

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
          interested={false}
        />
      ))}
    </>
  );
}
