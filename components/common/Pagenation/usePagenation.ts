import { useMemo } from "react";

type Prop = {
  totalCount: number;
  pageSize: number;
  siblingCount: number;
  currentPage: number;
};

const range = (start: number, end: number): number[] => {
  const length = end - start + 1;
  return Array.from({ length }, (_, index) => index + start);
};

const usePagenation = ({
  totalCount,
  pageSize,
  siblingCount = 1,
  currentPage,
}: Prop) => {
  const pagenationRange = useMemo(() => {
    const totalPageCount = Math.ceil(totalCount / pageSize);
    const totalPageNumbers = siblingCount + 5;

    if (totalPageNumbers >= totalPageCount) {
      return range(1, totalPageCount);
    }

    const leftSiblingIndex = Math.max(currentPage - siblingCount, 1);
    const rightSiblingIndex = Math.min(
      currentPage + siblingCount,
      totalPageCount
    );

    return range(leftSiblingIndex, rightSiblingIndex);
  }, [currentPage, pageSize, siblingCount, totalCount]);

  return { pagenationRange };
};

export default usePagenation;
