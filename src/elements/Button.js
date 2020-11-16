import styled from "@emotion/styled";

export const Button = styled.button`
  font-family: "OpenSans";
  width: "100%";
  border: none;
  background-color: #f765a3;
  color: white;
  padding: 16px 32px;
  text-align: center;
  font-size: 16px;
  margin: 30px auto 0px auto;
  opacity: 1;
  transition: 0.3s;
  display: block;
  text-decoration: none;
  cursor: pointer;
  &:hover {
    opacity: 0.6;
  }
`;

export default Button;
