import styled from "styled-components";
import { Article } from "../../../types/article";
import ArticleItem from "./ArticleItem";

type Prop = {
  articles: Article[];
};

const ArticleList = ({ articles }: Prop) => {
  return (
    <>
      {articles.map((article, i) => (
        <ItemWrapper key={i}>
          <ArticleItem article={article} />
        </ItemWrapper>
      ))}
    </>
  );
};

const ItemWrapper = styled.div`
  margin: 16px 0;
`;

export default ArticleList;
