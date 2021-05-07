import React from "react";
import logo from "../../images/spotify-logo.svg";

import {
  Footer,
  Container,
  ListConatiner,
  List,
  Title,
  L,
  BL,
  BottomContainer,
  BottomList,
} from "./FooterElements";

const FooterSection = () => {
  return (
    <Footer>
      <Container>
        <img src={logo} alt="" />
        <ListConatiner>
          <List>
            <Title>COMPANY</Title>
            <li>
              <L to="/">About</L>
            </li>
            <li>
              <L to="/">Jobs</L>
            </li>
            <li>
              <L to="/">For the Record</L>
            </li>
          </List>
          <List>
            <Title>COMMUNITIES</Title>
            <li>
              <L to="/">For Artists</L>
            </li>
            <li>
              <L to="/">Developers</L>
            </li>
            <li>
              <L to="/">Advertising</L>
            </li>
            <li>
              <L to="/">Investors</L>
            </li>
            <li>
              <L to="/">Vendors</L>
            </li>
          </List>
          <List>
            <Title>USEFUL LINKS</Title>
            <li>
              <L to="/">Support</L>
            </li>
            <li>
              <L to="/">Web Player</L>
            </li>
            <li>
              <L to="/">Free Mobile App</L>
            </li>
          </List>
        </ListConatiner>
      </Container>

      <BottomContainer>
        <BottomList>
          <li>
            <BL to="/">Legal</BL>
          </li>
          <li>
            <BL to="/">Privacy Center</BL>
          </li>
          <li>
            <BL to="/">Privacy Policy</BL>
          </li>
          <li>
            <BL to="/">Cookies</BL>
          </li>
          <li>
            <BL to="/">Additional CA Privacy Disclosures</BL>
          </li>
          <li>
            <BL to="/">About Ads</BL>
          </li>
        </BottomList>
        <p>© 2021 Spotify AB</p>
      </BottomContainer>
    </Footer>
  );
};

export default FooterSection;
