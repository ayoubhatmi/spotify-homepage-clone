import styled from "styled-components";
import { Link } from "react-router-dom";

export const Footer = styled.footer`
  background-color: black;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 5rem;
  padding-bottom: 0.5rem;
  color: #919496;

  img {
    width: 20%;
    margin-bottom: 2rem;
    cursor: pointer;
    @media screen and (max-width: 768px) {
      width: 30%;
    }
  }
`;

export const Container = styled.div`
  font-family: "Circular Spotify Tx T Bold", Helvetica, Arial, sans-serif;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  max-width: 1100px;
  font-size: 0.85rem;
  padding-left: 3rem;

  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

export const List = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;
  li {
    margin-top: 1rem;
    margin-bottom: 1rem;
  }
`;

export const L = styled(Link)`
  text-decoration: none;
  color: white;
  &:hover {
    color: #1ed760;
  }
`;

export const Title = styled.p`
  font-size: 0.75rem;
`;

export const ListConatiner = styled.div`
  display: flex;
  justify-content: space-between;
  width: 500px;
  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

export const BottomList = styled.ul`
  list-style: none;
  display: flex;
  align-self: flex-start;
  justify-content: space-between;
  flex-wrap: wrap;
  margin-right: 5rem;
  li {
    margin-right: 1rem;
  }
  @media screen and (max-width: 768px) {
    max-width: 60%;
  }
`;
export const BottomContainer = styled.div`
  font-family: "Circular Spotify Tx T ", Helvetica, Arial, sans-serif;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  max-width: 1100px;
  font-size: 0.7rem;
  padding: 1rem;

  p {
    justify-self: flex-end;
  }
`;
export const BL = styled(Link)`
  text-decoration: none;
  color: #919496;
  &:hover {
    color: #1ed760;
  }
`;
