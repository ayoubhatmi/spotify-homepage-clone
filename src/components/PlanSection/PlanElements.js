import styled from "styled-components";
import { Link as LinkR } from "react-router-dom";

export const Section = styled.section`
  font-family: "Circular Spotify Tx T", Helvetica, Arial, sans-serif;

  padding: 4rem;
  text-align: center;
  h1 {
    font-size: 3rem;
  }
  p {
    font-size: 0.75rem;
    font-weight: lighter;
  }
  Link {
    color: grey;
  }
`;

export const Link = styled(LinkR)`
  color: grey;
`;
export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  justify-items: center;
`;
