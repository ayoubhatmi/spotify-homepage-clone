import React from "react";
import Card from "../Card/Card";
import PremiumCard from "../Card/PremiumCard";

import { Section, Link, Container } from "./PlanElements";

const PlanSection = () => {
  const firstList = [
    "Play millions of songs and podcasts",
    "Discover new music",
    "Save your favourites and create playlist",
    "Enjoy playlists made just for you",
  ];
  const secondList = [
    "All benefits of Spotify Free",
    "Play in any order. Unlimited Skips",
    "Download and listen offline",
    "Music without audio ads",
  ];
  return (
    <Section>
      <h1>Pick your plan</h1>
      <Container>
        <Card
          title={"Spotify Free"}
          subtitle={"$0. No credit card needed, ever."}
          text={"1 account"}
          list={firstList}
          buttonText={"Get Free"}
        ></Card>
        <PremiumCard
          title={"Premium Individual"}
          subtitle={"$9.99/month after offer period"}
          text={"1 Premium account"}
          list={secondList}
          buttonText={"Get Premium"}
        ></PremiumCard>
      </Container>

      <p>
        <Link>Terms and conditions apply.</Link> 1 month free not available for
        users who have already tried Premium.
      </p>
    </Section>
  );
};

export default PlanSection;
