import type { NextPage } from "next";
import { useEffect, useState } from "react";
import styled from "styled-components";
import ArticleList from "../components/common/Article/ArticleList";
import Pagenation from "../components/common/Pagenation/Pagenation";
import usePagenation from "../components/common/Pagenation/usePagenation";
import { Article } from "../types/article";
import articles from "../.contents/articles.json";

const Home: NextPage = () => {
  const [trimedArticles, setTrimedArticles] = useState<Article[]>();
  const [currentPage, setCurrentPage] = useState(1);

  const PAGE_SIZE = 10;

  const { pagenationRange } = usePagenation({
    totalCount: articles.length,
    pageSize: PAGE_SIZE,
  });

  useEffect(() => {
    const startPageIndex = (currentPage - 1) * PAGE_SIZE;
    const endPageIndex = startPageIndex + PAGE_SIZE;
    const showArticles = (articles as Article[]).slice(
      startPageIndex,
      endPageIndex
    );
    setTrimedArticles(showArticles);
  }, [currentPage]);

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
          pagenationRange={pagenationRange}
          currentPage={currentPage}
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
