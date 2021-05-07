import styled from "styled-components";
import { FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";
export const SidebarContainer = styled.aside`
  position: fixed;
  z-index: 999;
  width: 100%;
  height: 100%;
  background: #000000;
  display: flex;
  flex-direction: column;
  top: 0;
  right: 0;
  transition: 0.3s ease-in-out;
  opacity: ${({ isOpen }) => (isOpen ? "100%" : "0")};
  top: ${({ isOpen }) => (isOpen ? "0" : "-100%")};
  color: white;
  hr {
    display: block;
    height: 1px;
    border: 0;
    width: 30px;
    border-top: 1px solid white;
    margin: 1em 0;
    padding: 0;
  }
`;

export const CloseIcon = styled(FaTimes)`
  color: #fff;
`;

export const Icon = styled.div`
  position: absolute;
  top: 1.2rem;
  right: 1.5rem;
  background: transparent;
  font-size: 2rem;
  cursor: pointer;
  outline: none;
`;
export const SidebarLink = styled(Link)`
  text-decoration: none;
  color: white;
  font-size: 2rem;
  font-family: "Circular Spotify Tx T Bold", Helvetica, Arial, sans-serif;

  &:hover {
    color: #1ed760;
  }
`;
export const SidebarMenu = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 400px;
  li {
    .opacity {
      color: #ebebeb;
      font-family: "Circular Spotify Tx T ", Helvetica, Arial, sans-serif;
      font-size: 1.5rem;

      &:hover {
        color: #1ed760;
      }
    }
  }
`;
export const SidebarWrapper = styled.div`
  padding: 2rem;
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: space-between;
`;
export const Logo = styled.img`
  width: 25%;
  cursor: pointer;
`;
