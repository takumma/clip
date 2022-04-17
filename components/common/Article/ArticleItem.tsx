import Image from "next/image";
import styled from "styled-components";
import { Article } from "../../../types/article";
import LinkIcon from "./LinkIcon";

type Prop = {
  article: Article;
};

const formatDate = (isoDate: string) => {
  const date = new Date(isoDate);
  return `${date.getFullYear()}/${date.getMonth() + 1}/${date.getDate()}`;
};

const getFaviconSrcFromOrigin = (hostname: string) => {
  return `https://www.google.com/s2/favicons?sz=32&domain_url=${hostname}`;
};

const ArticleItem = ({ article }: Prop) => {
  return (
    <Wrapper>
      <A href={article.link} target="_blank">
        <ArticleItemWrapper>
          <Title>{article.title}</Title>
          <ArticleMeta>
            <Image
              width={16}
              height={16}
              layout="fixed"
              src={getFaviconSrcFromOrigin(article.link)}
              alt={article.link}
            />
            <Site>{article.link.split("/")[2]}</Site>
            <time dateTime={article.isoDate}>
              {formatDate(article.isoDate)}
            </time>
          </ArticleMeta>
        </ArticleItemWrapper>
        <ArticleLinkIcon />
      </A>
    </Wrapper>
  );
};

const Wrapper = styled.article`
  width: 368px;
  padding: 16px;
`;

const A = styled.a`
  text-decoration: none;
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

const ArticleItemWrapper = styled.div`
  width: calc(100% - 32px);
`;

const Site = styled.span`
  margin: 0 24px 0 4px;
`;

const ArticleMeta = styled.p`
  margin: 8px 0;
  display: flex;
  align-items: center;
  color: ${({ theme }) => theme.secondaryTextColor};
  font-size: 0.875rem;
`;

const Title = styled.h2`
  margin: 0;
  font-size: 1rem;
  font-weight: 700;
  display: -webkit-box;
  overflow: hidden;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
`;

export default ArticleItem;
