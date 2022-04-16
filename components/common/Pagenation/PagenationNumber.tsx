import styled, { css } from "styled-components";

type Prop = {
  num: number;
  isCurrent: boolean;
  onClick: () => void;
};

type WrapperProp = {
  isCurrent: boolean;
};

const PagenationNumber = ({ num, isCurrent, onClick }: Prop) => (
  <Wrapper isCurrent={isCurrent} onClick={onClick}>
    {num}
  </Wrapper>
);

const Wrapper = styled.span<WrapperProp>`
  display: block;
  width: 24px;
  height: 24px;
  text-align: center;
  cursor: pointer;
  ${({ isCurrent }) =>
    isCurrent &&
    css`
      border-radius: 50%;
      background-color: ${({ theme }) => theme.primaryColor};
      color: ${({ theme }) => theme.backgroundColor};
    `}
`;

export default PagenationNumber;
