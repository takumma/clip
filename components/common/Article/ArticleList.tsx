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
        <ItemWrapper key={i}>
          <ArticleItem article={article} />
        </ItemWrapper>
      ))}
    </ArticleListWrapper>
  );
};

const ArticleListWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: flex-start;
`;

const ItemWrapper = styled.div`
  margin: 16px;
`;

export default ArticleList;
