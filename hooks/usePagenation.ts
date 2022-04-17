import { useMemo } from "react";

type Prop = {
  totalCount: number;
  pageSize: number;
};

const range = (start: number, end: number): number[] => {
  const length = end - start + 1;
  return Array.from({ length }, (_, index) => index + start);
};

const usePagenation = ({ totalCount, pageSize }: Prop) => {
  const pagenationRange = useMemo(() => {
    const totalPageCount = Math.ceil(totalCount / pageSize);
    return range(1, totalPageCount);
  }, [pageSize, totalCount]);

  return { pagenationRange };
};

export default usePagenation;
