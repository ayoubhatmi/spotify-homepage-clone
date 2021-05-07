import styled from "styled-components";

export const CardDiv = styled.div`
  border-radius: 10px;
  text-align: start;
  padding: 1rem;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  width: 300px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  line-height: 1.4;
  margin: 3rem;
  ul {
    list-style: none;
  }
  hr {
    display: block;
    height: 1px;
    border: 0;
    border-top: 1px solid #ccc;
    margin: 1em 0;
    padding: 0;
  }
  h1 {
    font-size: 1.25rem;
  }
  p {
    font-size: 1.15rem;
    color: black;
  }
`;
export const Flag = styled.div`
  background-color: #2e77d0;
  padding: 5px;
  border-radius: 5px;
  width: fit-content;
  margin-bottom: 1rem;

  p {
    color: white;
    font-size: 1rem;
  }
`;
