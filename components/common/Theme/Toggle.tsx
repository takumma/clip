import styled from "styled-components";

type Prop = {
  onChange: () => void;
  checked: boolean;
};

const Toggle = ({ onChange, checked }: Prop) => {
  return (
    <ToggleWrapper>
      <ToggleTrack
        type={"checkbox"}
        checked={checked}
        onChange={onChange}
        id="toggle"
      />
      <ToggleThumb htmlFor="toggle" />
    </ToggleWrapper>
  );
};

const ToggleWrapper = styled.div`
  position: relative;
`;

const ToggleThumb = styled.label`
  position: absolute;
  top: 0;
  left: 0;
  width: 40px;
  height: 24px;
  border-radius: 15px;
  background: ${({ theme }) => theme.secondaryTextColor};
  cursor: pointer;
  &::after {
    content: "";
    display: block;
    border-radius: 50%;
    width: 18px;
    height: 18px;
    margin: 3px;
    background: ${({ theme }) => theme.backgroundColor};
    transition: 0.2s;
  }
`;

const ToggleTrack = styled.input`
  opacity: 0;
  z-index: 1;
  border-radius: 15px;
  width: 40px;
  height: 24px;
  margin: 0;
  &:checked + ${ToggleThumb} {
    background: ${({ theme }) => theme.primaryColor};
    &::after {
      content: "";
      display: block;
      border-radius: 50%;
      width: 18px;
      height: 18px;
      margin-left: 19px;
      transition: 0.2s;
    }
  }
`;

export default Toggle;
