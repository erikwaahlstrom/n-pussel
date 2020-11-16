import styled from "@emotion/styled";

export const Boxelement = styled.div`
  background-color: ${({ state }) => (state ? "transparent" : "#A155B9")};
  height: 100px;
  width: 100px;
  color: #fff;
  text-align: center;
  vertical-align: middle;
  border: 1px solid #fff;
  cursor: pointer;
`;

export default Boxelement;
