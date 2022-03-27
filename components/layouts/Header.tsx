import styled from "styled-components";
import Logo from "./Logo";

const Header = () => {
  return (
    <HeaderWrapper>
      <Logo />
      <Title>takummaの書いた記事まとめ</Title>
    </HeaderWrapper>
  );
};

const HeaderWrapper = styled.div`
  margin: 64px auto 0;
  text-align: center;
`;

const Title = styled.p`
  color: ${({ theme }) => theme.secondaryTextColor};
`;

export default Header;
