import styled from "styled-components";

export const Section = styled.section`
  background-color: #2941ab;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  color: #1ed760;
  font-family: "Circular Spotify Tx T Bold", Helvetica, Arial, sans-serif;

  background-image: url("https://www-growth.scdn.co/static/home/bursts-mobile.svg");
  background-repeat: no-repeat;
  background-position: top -500px right 250px;
  background-size: 80%;
  height: 100vh;

  img {
    position: absolute;
    top: 20%;
    right: 0;
    width: 10%;
  }

  @media screen and (max-width: 768px) {
    background-image: url("https://www-growth.scdn.co/static/home/bursts-mobile.svg");
    background-repeat: no-repeat;
    background-position: top 0px right -170px;
    background-size: 135%;
    height: 100vh;
    img {
      display: none;
    }
  }
`;

export const HeroDiv = styled.div`
  text-align: center;

  h1 {
    font-size: 10rem;
    letter-spacing: -6px;
    margin-top: -20px;
    font-weight: 800;
  }

  @media screen and (max-width: 768px) {
    h1 {
      font-size: 6.5rem;
    }
  }

  @media only screen and (min-width: 1080px) {
    h1 {
    }
    br {
      display: none;
    }
  }
  @media only screen and (max-width: 1080px) {
    h1 {
      font-size: 6.5rem;
    }
  }

  p {
    margin-bottom: 2rem;
  }
`;
export const Title = styled.div`
  display: flex;
  flex-direction: column;

  @media only screen and (min-width: 1080px) {
    width: 1000px;

    .t1 {
      align-self: flex-start;
    }

    .t2 {
      align-self: flex-end;
    }
  }
`;
