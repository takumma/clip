import styled from "styled-components";
import LeftArrow from "./Arrows/LeftArrow";
import RightArrow from "./Arrows/RightArrow";
import usePagenation from "./usePagenation";

type Prop = {
  onPageChange: (v: number) => void;
  totalCount: number;
  siblingCount: number;
  currentPage: number;
  pageSize: number;
};

const Pagenation = ({
  onPageChange,
  totalCount,
  siblingCount,
  currentPage,
  pageSize,
}: Prop) => {
  const { pagenationRange } = usePagenation({
    totalCount,
    siblingCount,
    currentPage,
    pageSize,
  });

  const onNext = () => {
    onPageChange(currentPage + 1);
  };

  const onPrev = () => {
    onPageChange(currentPage - 1);
  };

  const lastPage = pagenationRange[-1];

  if (currentPage === 0 || pagenationRange.length < 2) return null;

  return (
    <PagenationWrapper>
      <ArrowWrapper onClick={() => onPrev()}>
        <LeftArrow />
      </ArrowWrapper>
      <ArrowWrapper onClick={() => onNext()}>
        <RightArrow />
      </ArrowWrapper>
    </PagenationWrapper>
  );
};

const PagenationWrapper = styled.ul`
  list-style: none;
`;

const ArrowWrapper = styled.li``;

export default Pagenation;
