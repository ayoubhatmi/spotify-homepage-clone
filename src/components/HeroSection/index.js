import React from "react";
import { Section, HeroDiv, Title, Cercle } from "./HeroElements";
import { Button } from "../Button";
import cercle from "../../images/cercle.svg";

const HeroSection = () => {
  return (
    <>
      <Section>
        <img src={cercle} alt="" />
        <HeroDiv>
          <Title>
            <h1 className="t1">Listening is</h1>
            <h1 className="t2">everything</h1>
          </Title>

          <p>
            Millions of songs and podcasts. No credit card <br />
            needed.
          </p>
          <Button primary={true} fontcolor={true}>
            GET SPOTIFY FREE
          </Button>
        </HeroDiv>
      </Section>
    </>
  );
};

export default HeroSection;
