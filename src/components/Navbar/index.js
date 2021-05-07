import React from "react";
import {
  Nav,
  Logo,
  L,
  NavMenu,
  MenuItem,
  NavConatainer,
  MobileIcon,
} from "./NavbarElements";
import { FaBars } from "react-icons/fa";
import logo from "../../images/spotify-logo.svg";
const Navbar = ({ toggle }) => {
  return (
    <header>
      <Nav>
        <NavConatainer>
          <Logo src={logo}></Logo>
          <MobileIcon onClick={toggle}>
            <FaBars />
          </MobileIcon>
          <NavMenu>
            <MenuItem>
              <L>Premium</L>
            </MenuItem>
            <MenuItem>
              <L>Support</L>
            </MenuItem>
            <MenuItem>
              <L>Download</L>
            </MenuItem>{" "}
            |
            <MenuItem>
              <L className="opacity">Sign up</L>
            </MenuItem>
            <MenuItem>
              <L className="opacity">Log in</L>
            </MenuItem>
          </NavMenu>
        </NavConatainer>
      </Nav>
    </header>
  );
};

export default Navbar;
