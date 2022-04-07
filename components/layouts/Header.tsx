import styled from "styled-components";
import ThemeToggle from "../common/Theme/ThemeToggle";
import Logo from "./Logo";

const Header = () => {
  return (
    <>
      <ToggleWrapper>
        <ThemeToggle />
      </ToggleWrapper>
      <LogoWrapper>
        <Logo />
        <Title>takummaの書いた記事まとめ</Title>
      </LogoWrapper>
    </>
  );
};

const ToggleWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const LogoWrapper = styled.div`
  text-align: center;
`;

const Title = styled.p`
  color: ${({ theme }) => theme.secondaryTextColor};
`;

export default Header;
