import styled from "styled-components";
import ThemeToggle from "../common/Theme/ThemeToggle";
import Logo from "./Logo";

const Header = () => {
  return (
    <Wrapper>
      <ToggleWrapper>
        <ThemeToggle />
      </ToggleWrapper>
      <LogoWrapper>
        <Logo />
        <Title>takummaの書いた記事まとめ</Title>
      </LogoWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  padding: 32px;
`;

const ToggleWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-bottom: 16px;
`;

const LogoWrapper = styled.div`
  text-align: center;
`;

const Title = styled.p`
  color: ${({ theme }) => theme.secondaryTextColor};
`;

export default Header;
