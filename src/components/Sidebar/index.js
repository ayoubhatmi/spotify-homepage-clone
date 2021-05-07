import React from "react";
import { FaBars } from "react-icons/fa";
import logo from "../../images/spotify-logo.svg";
import {
  SidebarContainer,
  Icon,
  CloseIcon,
  SidebarWrapper,
  SidebarMenu,
  SidebarLink,
  Logo,
} from "./SidebarElements";
const Sidebar = ({ toggle, isOpen }) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          <li>
            <SidebarLink to="/">Premium</SidebarLink>
          </li>
          <li>
            <SidebarLink to="/">Support</SidebarLink>
          </li>
          <li>
            <SidebarLink to="/">Download</SidebarLink>
          </li>
          <hr />

          <li>
            <SidebarLink className="opacity" to="/">
              Sign up
            </SidebarLink>
          </li>
          <li>
            <SidebarLink className="opacity" to="/">
              Log in
            </SidebarLink>
          </li>
        </SidebarMenu>
        <Logo src={logo}></Logo>
      </SidebarWrapper>
    </SidebarContainer>
  );
};

export default Sidebar;
