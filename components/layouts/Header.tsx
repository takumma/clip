import styled from "styled-components";
import ThemeToggle from "../common/Theme/ThemeToggle";
import Logo from "./Logo";

const Header = () => {
  return (
    <HeaderWrapper>
      <ThemeToggle />
      <LogoWrapper>
        <Logo />
        <Title>takummaの書いた記事まとめ</Title>
      </LogoWrapper>
    </HeaderWrapper>
  );
};

const HeaderWrapper = styled.div`
  margin: 48px auto 0;
`;

const LogoWrapper = styled.div`
  text-align: center;
`;

const Title = styled.p`
  color: ${({ theme }) => theme.secondaryTextColor};
`;

export default Header;
