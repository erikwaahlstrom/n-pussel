import styled from "@emotion/styled";

export const HeaderOne = styled.h1`
  text-align: center;
  color: ${({ correct }) => (correct ? "#007b69" : "#0b1354")};
`;

export default HeaderOne;
