import type { NextPage } from "next";
import { useEffect, useMemo, useState } from "react";
import styled from "styled-components";
import ArticleList from "../components/common/Article/ArticleList";
import Pagenation from "../components/common/Pagenation/Pagenation";
import { Article } from "../types/article";

const Home: NextPage = () => {
  const articles: Article[] = useMemo(
    () => [
      {
        title:
          "Zenn で書いた記事を Notion でアドベントカレンダーにする！Zenn で書いた記事を Notion でアドベントカレンダーにする！Zenn で書いた記事を Notion でアドベントカレンダーにする！",
        url: "https://zenn.dev/takumma/articles/notion-advent-calendar",
        date: "2020 / 10 / 1",
      },
      {
        title: "Zenn で書いた記事を Notion でアドベントカレンダーにする！",
        url: "https://zenn.dev/takumma/articles/notion-advent-calendar",
        date: "2020 / 10 / 2",
      },
      {
        title: "Zenn で書いた記事を Notion でアドベントカレンダーにする！",
        url: "https://zenn.dev/takumma/articles/notion-advent-calendar",
        date: "2020 / 10 / 3",
      },
      {
        title: "Zenn で書いた記事を Notion でアドベントカレンダーにする！",
        url: "https://zenn.dev/takumma/articles/notion-advent-calendar",
        date: "2020 / 10 / 4",
      },
      {
        title: "Zenn で書いた記事を Notion でアドベントカレンダーにする！",
        url: "https://zenn.dev/takumma/articles/notion-advent-calendar",
        date: "2020 / 10 / 5",
      },
      {
        title: "Zenn で書いた記事を Notion でアドベントカレンダーにする！",
        url: "https://zenn.dev/takumma/articles/notion-advent-calendar",
        date: "2020 / 10 / 6",
      },
      {
        title: "Zenn で書いた記事を Notion でアドベントカレンダーにする！",
        url: "https://zenn.dev/takumma/articles/notion-advent-calendar",
        date: "2020 / 10 / 7",
      },
      {
        title: "Zenn で書いた記事を Notion でアドベントカレンダーにする！",
        url: "https://zenn.dev/takumma/articles/notion-advent-calendar",
        date: "2020 / 10 / 8",
      },
      {
        title: "Zenn で書いた記事を Notion でアドベントカレンダーにする！",
        url: "https://zenn.dev/takumma/articles/notion-advent-calendar",
        date: "2020 / 10 / 9",
      },
      {
        title: "Zenn で書いた記事を Notion でアドベントカレンダーにする！",
        url: "https://zenn.dev/takumma/articles/notion-advent-calendar",
        date: "2020 / 10 / 10",
      },
      {
        title: "Zenn で書いた記事を Notion でアドベントカレンダーにする！",
        url: "https://zenn.dev/takumma/articles/notion-advent-calendar",
        date: "2020 / 10 / 11",
      },
      {
        title: "Zenn で書いた記事を Notion でアドベントカレンダーにする！",
        url: "https://zenn.dev/takumma/articles/notion-advent-calendar",
        date: "2020 / 10 / 12",
      },
      {
        title: "Zenn で書いた記事を Notion でアドベントカレンダーにする！",
        url: "https://zenn.dev/takumma/articles/notion-advent-calendar",
        date: "2020 / 10 / 13",
      },
      {
        title: "Zenn で書いた記事を Notion でアドベントカレンダーにする！",
        url: "https://zenn.dev/takumma/articles/notion-advent-calendar",
        date: "2020 / 10 / 14",
      },
      {
        title: "Zenn で書いた記事を Notion でアドベントカレンダーにする！",
        url: "https://zenn.dev/takumma/articles/notion-advent-calendar",
        date: "2020 / 10 / 15",
      },
      {
        title: "Zenn で書いた記事を Notion でアドベントカレンダーにする！",
        url: "https://zenn.dev/takumma/articles/notion-advent-calendar",
        date: "2020 / 10 / 16",
      },
      {
        title: "Zenn で書いた記事を Notion でアドベントカレンダーにする！",
        url: "https://zenn.dev/takumma/articles/notion-advent-calendar",
        date: "2020 / 10 / 17",
      },
      {
        title: "Zenn で書いた記事を Notion でアドベントカレンダーにする！",
        url: "https://zenn.dev/takumma/articles/notion-advent-calendar",
        date: "2020 / 10 / 18",
      },
      {
        title: "Zenn で書いた記事を Notion でアドベントカレンダーにする！",
        url: "https://zenn.dev/takumma/articles/notion-advent-calendar",
        date: "2020 / 10 / 19",
      },
      {
        title: "Zenn で書いた記事を Notion でアドベントカレンダーにする！",
        url: "https://zenn.dev/takumma/articles/notion-advent-calendar",
        date: "2020 / 10 / 20",
      },
      {
        title: "Zenn で書いた記事を Notion でアドベントカレンダーにする！",
        url: "https://zenn.dev/takumma/articles/notion-advent-calendar",
        date: "2020 / 10 / 3",
      },
      {
        title: "Zenn で書いた記事を Notion でアドベントカレンダーにする！",
        url: "https://zenn.dev/takumma/articles/notion-advent-calendar",
        date: "2020 / 10 / 3",
      },
      {
        title: "Zenn で書いた記事を Notion でアドベントカレンダーにする！",
        url: "https://zenn.dev/takumma/articles/notion-advent-calendar",
        date: "2020 / 10 / 3",
      },
      {
        title: "Zenn で書いた記事を Notion でアドベントカレンダーにする！",
        url: "https://zenn.dev/takumma/articles/notion-advent-calendar",
        date: "2020 / 10 / 3",
      },
      {
        title: "Zenn で書いた記事を Notion でアドベントカレンダーにする！",
        url: "https://zenn.dev/takumma/articles/notion-advent-calendar",
        date: "2020 / 10 / 3",
      },
      {
        title: "Zenn で書いた記事を Notion でアドベントカレンダーにする！",
        url: "https://zenn.dev/takumma/articles/notion-advent-calendar",
        date: "2020 / 10 / 3",
      },
      {
        title: "Zenn で書いた記事を Notion でアドベントカレンダーにする！",
        url: "https://zenn.dev/takumma/articles/notion-advent-calendar",
        date: "2020 / 10 / 3",
      },
      {
        title: "Zenn で書いた記事を Notion でアドベントカレンダーにする！",
        url: "https://zenn.dev/takumma/articles/notion-advent-calendar",
        date: "2020 / 10 / 3",
      },
      {
        title: "Zenn で書いた記事を Notion でアドベントカレンダーにする！",
        url: "https://zenn.dev/takumma/articles/notion-advent-calendar",
        date: "2020 / 10 / 3",
      },
      {
        title: "Zenn で書いた記事を Notion でアドベントカレンダーにする！",
        url: "https://zenn.dev/takumma/articles/notion-advent-calendar",
        date: "2020 / 10 / 3",
      },
      {
        title: "Zenn で書いた記事を Notion でアドベントカレンダーにする！",
        url: "https://zenn.dev/takumma/articles/notion-advent-calendar",
        date: "2020 / 10 / 3",
      },
      {
        title: "Zenn で書いた記事を Notion でアドベントカレンダーにする！",
        url: "https://zenn.dev/takumma/articles/notion-advent-calendar",
        date: "2020 / 10 / 3",
      },
      {
        title: "Zenn で書いた記事を Notion でアドベントカレンダーにする！",
        url: "https://zenn.dev/takumma/articles/notion-advent-calendar",
        date: "2020 / 10 / 3",
      },
    ],
    []
  );

  const [trimedArticles, setTrimedArticles] = useState<Article[]>();
  const [currentPage, setCurrentPage] = useState(1);

  const PAGE_SIZE = 10;

  useEffect(() => {
    const startPageIndex = (currentPage - 1) * PAGE_SIZE;
    const endPageIndex = startPageIndex + PAGE_SIZE;
    const showArticles = articles.slice(startPageIndex, endPageIndex);
    setTrimedArticles(showArticles);
  }, [articles, currentPage]);

  return (
    <>
      <Wrapper>
        {trimedArticles && <ArticleList articles={trimedArticles} />}
      </Wrapper>
      <PagenationWrapper>
        <Pagenation
          onPageChange={(v) => {
            console.log(v);
            if (v < 1) return;
            setCurrentPage(v);
          }}
          totalCount={articles.length}
          siblingCount={6}
          currentPage={currentPage}
          pageSize={PAGE_SIZE}
        />
      </PagenationWrapper>
    </>
  );
};

const Wrapper = styled.div`
  margin: 0 16px;
`;

const PagenationWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export default Home;
