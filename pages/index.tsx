import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import { ThemeTest } from "./styles";
import { Post } from "../src/components/Post";
import { useEffect, useState } from "react";
import { getPosts } from "../src/service/api";

const inter = Inter({ subsets: ["latin"] });

interface IUser {
  username: string;
}

interface IReplies {
  user: IUser;
  agree: number;
  deviated: number;
  createdAt: Date;
}

interface IPost {
  id: string;
  user: IUser;
  text: string;
  replies: IReplies[];
  interest: number;
  createdAt: Date;
}

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
      <Post
        username="John Smith"
        text="Hello World"
        createdAt={new Date("01/09/2022")}
        interested
        interest={4839}
        replies={4209}
      />
      <Post
        username="John Smith"
        text="Hello World"
        createdAt={new Date("05/08/2022")}
        interested
        interest={1823}
        replies={3827}
      />
      <Post
        username="John Smith"
        text="Hello World"
        createdAt={new Date()}
        interested={false}
        interest={83274}
        replies={8948}
      />
      <Post
        username="John Smith"
        text="Hello World"
        createdAt={new Date()}
        interest={9358}
        interested
        replies={3948}
      />
    </>
  );
}
