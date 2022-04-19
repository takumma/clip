import { useMemo } from "react";
import { range } from "../utils/helpers";

type Prop = {
  totalCount: number;
  pageSize: number;
};

const usePagenation = ({ totalCount, pageSize }: Prop) => {
  const pagenationRange = useMemo(() => {
    const totalPageCount = Math.ceil(totalCount / pageSize);
    return range(1, totalPageCount);
  }, [pageSize, totalCount]);

  return { pagenationRange };
};

export default usePagenation;
