import styled from "styled-components";

export const Button = styled.button`
  background: ${({ primary }) => (primary ? "#1ed760" : "#000")};
  color: ${({ fontcolor }) => (fontcolor ? "#2941AB" : "#fff")};
  border-radius: 50px;
  padding: 15px 33px;
  font-size: 1rem;
  font-weight: 600;
  border: none;
  outline: none;
  cursor: pointer;
  width: 250px;
  margin: 2rem;
  &:hover {
    transform: scale(1.1, 1.1);
    -webkit-transform: scale(1.1, 1.1);
    -moz-transform: scale(1.1, 1.1);
  }
`;
