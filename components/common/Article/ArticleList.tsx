import styled from "styled-components";
import { Article } from "../../../types/article";
import ArticleItem from "./ArticleItem";

type Prop = {
  articles: Article[];
};

const ArticleList = ({ articles }: Prop) => {
  return (
    <Wrapper>
      {articles.map((article, i) => (
        <ArticleItem key={i} article={article} />
      ))}
    </Wrapper>
  );
};

const Wrapper = styled.div``;

export default ArticleList;
