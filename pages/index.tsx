import type { NextPage } from "next";
import styled from "styled-components";
import ArticleList from "../components/common/Article/ArticleList";
import Pagenation from "../components/common/Pagenation/Pagenation";
import articles from "../.contents/articles.json";
import { useArticles } from "../hooks/useArticles";

const Home: NextPage = () => {
  const { currentArticles, currentPage, pagenationRange, setCurrentPage } =
    useArticles(articles);

  return (
    <>
      <Wrapper>
        {currentArticles && <ArticleList articles={currentArticles} />}
      </Wrapper>
      <PagenationWrapper>
        <Pagenation
          onPageChange={(v) => {
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
