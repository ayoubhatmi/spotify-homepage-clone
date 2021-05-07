import styled from "styled-components";
import { Link } from "react-router-dom";

export const Nav = styled.nav`
  background-color: black;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "Circular Spotify Tx T Bold", Helvetica, Arial, sans-serif;

  padding: 1.25rem;
  color: white;
  @media screen and (max-width: 768px) {
    padding: 0.75rem;
  }
`;
export const NavConatainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  max-width: 1100px;
`;
export const Logo = styled.img`
  width: 12%;
  justify-self: flex-start;
  cursor: pointer;
  @media screen and (max-width: 768px) {
    width: 20%;
  }
`;
export const NavMenu = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
  list-style: none;
  width: 500px;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;
export const MenuItem = styled.li`
  .opacity {
    color: #ebebeb;
  }
`;

export const L = styled(Link)`
  text-decoration: none;
  color: white;
  &:hover {
    color: #1ed760;
  }
`;
export const MobileIcon = styled.div`
  display: none;

  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-80%, 50%);
    font-size: 1.5rem;
    cursor: pointer;
  }
  @media only screen and (min-width: 600px) {
    transform: translate(-100%, 60%);
    font-size: 1.8rem;
  }
`;
