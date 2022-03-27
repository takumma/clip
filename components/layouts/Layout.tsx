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
  margin: 0 auto;
`;

export default Layout;
