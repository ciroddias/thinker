import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import { ThemeTest } from "./styles";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <ThemeTest>
      <h1>thinker</h1>
    </ThemeTest>
  );
}
