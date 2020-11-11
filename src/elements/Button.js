import styled from "@emotion/styled";

export const Button = styled.button`
  width: "100%";
  border: none;
  background-color: red;
  color: white;
  padding: 16px 32px;
  text-align: center;
  font-size: 16px;
  margin: 4px 2px;
  opacity: 1;
  transition: 0.3s;
  display: inline-block;
  text-decoration: none;
  cursor: pointer;
  &:hover {
    opacity: 0.6;
  }
`;

export default Button;
