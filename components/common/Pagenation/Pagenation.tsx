import styled, { css } from "styled-components";
import LeftArrow from "./Arrows/LeftArrow";
import RightArrow from "./Arrows/RightArrow";
import PagenationNumber from "./PagenationNumber";

type Prop = {
  onPageChange: (v: number) => void;
  currentPage: number;
  pagenationRange: number[];
};

const Pagenation = ({ onPageChange, currentPage, pagenationRange }: Prop) => {
  const onNext = () => {
    onPageChange(currentPage + 1);
  };

  const onPrev = () => {
    onPageChange(currentPage - 1);
  };

  const firstPage = pagenationRange[0];

  const lastPage = pagenationRange[-1];

  if (currentPage === 0 || pagenationRange.length < 2) return null;

  return (
    <PagenationWrapper>
      <ArrowWrapper
        disabled={currentPage === firstPage}
        onClick={() => onPrev()}
      >
        <LeftArrow />
      </ArrowWrapper>
      {pagenationRange.map((v, i) => (
        <PagenationNumberWrapper key={i}>
          <PagenationNumber
            onClick={() => onPageChange(v)}
            num={v}
            isCurrent={v === currentPage}
          />
        </PagenationNumberWrapper>
      ))}
      <ArrowWrapper
        disabled={currentPage === lastPage}
        onClick={() => onNext()}
      >
        <RightArrow />
      </ArrowWrapper>
    </PagenationWrapper>
  );
};

const PagenationWrapper = styled.ul`
  list-style: none;
  display: flex;
  align-items: center;
  padding: 0;
`;

const PagenationNumberWrapper = styled.li`
  margin: 0 4px;
`;

type ArrowWrapperType = {
  disabled: boolean;
};

const ArrowWrapper = styled.li<ArrowWrapperType>`
  margin: 0 12px;
  padding: 7px 5px;
  border-radius: 50%;
  cursor: pointer;
  ${(props) => (props.disabled ? ArrowDisabled : ArrowHover)}
`;

const ArrowDisabled = css`
  pointer-events: none;
  opacity: 0.5;
`;

const ArrowHover = css`
  :hover {
    transition: 0.25s;
    opacity: 0.6;
  }
`;

export default Pagenation;
