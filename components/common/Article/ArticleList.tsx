import styled from "styled-components";
import { Article } from "../../../types/article";
import ArticleItem from "./ArticleItem";

type Prop = {
  articles: Article[];
};

const ArticleList = ({ articles }: Prop) => {
  return (
    <ArticleListWrapper>
      {articles.map((article, i) => (
        <ArticleItem key={i} article={article} />
      ))}
    </ArticleListWrapper>
  );
};

const ArticleListWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: flex-start;
  ::after {
    display: block;
    content: "";
    width: 368px;
  }
`;

export default ArticleList;
