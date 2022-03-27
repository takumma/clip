import type { NextPage } from "next";
import Head from "next/head";
import styled, { useTheme } from "styled-components";
import ArticleList from "../components/common/Article/ArticleList";
import { useToggleTheme } from "../styles/theme";
import { Article } from "../types/article";

const Home: NextPage = () => {
  const theme = useTheme();
  const { toggleTheme } = useToggleTheme();

  const articles: Article[] = [
    {
      title:
        "Zenn で書いた記事を Notion でアドベントカレンダーにする！Zenn で書いた記事を Notion でアドベントカレンダーにする！Zenn で書いた記事を Notion でアドベントカレンダーにする！",
      url: "https://zenn.dev/takumma/articles/notion-advent-calendar",
      date: "2020 / 10 / 3",
    },
    {
      title: "Zenn で書いた記事を Notion でアドベントカレンダーにする！",
      url: "https://zenn.dev/takumma/articles/notion-advent-calendar",
      date: "2020 / 10 / 3",
    },
  ];

  return (
    <div>
      <Head>
        <meta name="description" content="Generated by create next app" />
      </Head>
      <Wrapper>
        <button onClick={() => toggleTheme()}>change theme</button>
        <ArticleList articles={articles} />
      </Wrapper>
    </div>
  );
};

const Wrapper = styled.div`
  margin: 0 16px;
`;

export default Home;
