import styled from "styled-components";
import { Article } from "../../../types/article";
import LinkIcon from "./LinkIcon";

type Prop = {
  article: Article;
};

const ArticleItem = ({ article }: Prop) => {
  return (
    <A href={article.url}>
      <Wrapper>
        <ArticleLinkIcon />
        <div>
          <Title>{article.title}</Title>
          <div>
            <ArticleMeta>
              <Site>{article.url.split("/")[2]}</Site>
              <span>{article.date}</span>
            </ArticleMeta>
          </div>
        </div>
      </Wrapper>
    </A>
  );
};

const A = styled.a`
  text-decoration: none;
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  transition: 0.25s;
  &:hover {
    opacity: 0.6;
  }
`;

const ArticleLinkIcon = styled(LinkIcon)`
  margin: 6px;
`;

const Site = styled.span``;

const ArticleMeta = styled.p`
  color: ${({ theme }) => theme.secondaryTextColor};
  font-size: 0.875rem;
`;

const Title = styled.h2`
  font-size: 1rem;
  font-weight: 700;
  display: -webkit-box;
  overflow: hidden;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
`;

export default ArticleItem;
