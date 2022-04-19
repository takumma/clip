import { useEffect, useState } from "react";
import { Article } from "../types/article";
import usePagenation from "./usePagenation";

export const useArticles = (articles: Article[]) => {
  const [currentArticles, setCurrentArticles] = useState<Article[]>([]);
  const [currentPage, setCurrentPage] = useState(1);

  const onSetCurrentPage = (v: number) => {
    if (v < 1) return;

    setCurrentPage(v);
  };

  const PAGE_SIZE = 10;

  const { pagenationRange } = usePagenation({
    totalCount: articles.length,
    pageSize: PAGE_SIZE,
  });

  useEffect(() => {
    const startPageIndex = (currentPage - 1) * PAGE_SIZE;
    const endPageIndex = startPageIndex + PAGE_SIZE;
    const newArticles = articles.slice(startPageIndex, endPageIndex);
    setCurrentArticles(newArticles);
  }, [articles, currentPage]);

  return { currentArticles, currentPage, pagenationRange, onSetCurrentPage };
};
