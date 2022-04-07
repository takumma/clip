import styled from "styled-components";
import Header from "./Header";

const Layout: React.FC = ({ children }) => {
  return (
    <Wrapper>
      <Header />
      {children}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  max-width: 780px;
  margin: 16px auto 0;
`;

export default Layout;
