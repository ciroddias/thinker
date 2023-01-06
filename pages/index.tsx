import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import { ThemeTest } from "./styles";
import { Post } from "../src/components/Post";
import { useEffect, useState } from "react";
import { getPosts } from "../src/service/api";
import { IPost } from "../src/interfaces/IPost";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
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
