import styled from "@emotion/styled";

export const Boxelement = styled.div`
  font-size: 18px;
  background-color: ${({ state }) => (state ? "transparent" : "#A155B9")};
  height: 100px;
  width: 100px;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid #fff;
  cursor: pointer;
`;

export default Boxelement;
