import { FC } from "react";
import styled from "styled-components";

import { aboutImgs, speedImgs, linkImgs } from "../assets/images/about";

const Section = styled.section`
  position: relative;
  min-height: 100vh;
  width: 80vw;
  display: flex;

  margin: 0 auto;

  @media (max-width: 40em) {
    width: 90vw;
  }

  @media (max-width: 30em) {
    width: 100vw;
  }
`;

const Title = styled.h2`
  font-size: ${({ theme }) => theme.fontBig};
  font-family: "Kaushan Script";
  font-weight: 300;

  position: absolute;
  top: 1rem;
  left: 5%;
  z-index: 3;

  @media (max-width: 64em) {
    font-size: ${({ theme }) => `calc(${theme.fontBig} - 5vw)`};
    top: 0;
    left: 0;
  }

  @media (max-width: 48em) {
    font-size: ${({ theme }) => theme.fontxxxl};
  }
`;

const Left = styled.div`
  width: 50%;
  font-size: ${({ theme }) => theme.fontlg};
  font-weight: 300;
  position: relative;
  z-index: 3;
  margin-top: 20%;
  padding-bottom: 20%;

  @media (max-width: 64em) {
    width: 80%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) !important;

    margin: 0 auto;
    padding: 2rem;
    font-weight: 600;

    backdrop-filter: blur(2px);
    background-color: ${({ theme }) => `rgba(${theme.textRgba},0.4)`};
    border-radius: 20px;
  }

  @media (max-width: 48em) {
    font-size: ${({ theme }) => theme.fontmd};
  }

  @media (max-width: 30em) {
    font-size: ${({ theme }) => theme.fontsm};
    width: 70%;
  }
`;

const Right = styled.div`
  width: 50%;
  margin-top: 10%;

  position: relative;

  img {
    width: 100%;
    height: auto;
    border-radius: 20px;

    cursor: pointer;
  }

  .small-img-1 {
    position: absolute;
    width: 80%;
    right: 50%;
    bottom: 10%;
  }

  .small-img-2 {
    position: absolute;
    width: 70%;
    left: 50%;
    bottom: 40%;
  }

  @media (max-width: 64em) {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    img {
      height: 100vh;
      object-fit: cover;
    }

    .small-img-1 {
      width: 50%;
      height: auto;
      left: 5%;
      bottom: 10%;
    }

    .small-img-2 {
      width: 60%;
      height: auto;
      left: 60%;
      bottom: 20%;
    }
  }
`;

export const About: FC = () => {
  function handleClick(url: string) {
    window.open(url, "_blank");
  }

  return (
    <Section id="about">
      <Title
        data-scroll
        data-scroll-direction="horizontal"
        data-scroll-speed="-2"
      >
        About Me
      </Title>
      <Left data-scroll data-scroll-target="#about" data-scroll-sticky>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias officia
        quod sunt aut cum expedita minus odit dolores obcaecati, exercitationem,
        in natus illo maxime asperiores blanditiis, quidem facere consectetur
        cupiditate!
        <br />
        <br />
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias officia
        quod sunt aut cum expedita minus odit dolores obcaecati, exercitationem,
        in natus illo
        <br />
        <br />
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias officia
        quod sunt aut cum expedita minus odit dolores obcaecati, exercitationem,
        in natus illo We are always looking to make something that is easy for
        everyone.
      </Left>
      <Right>
        {aboutImgs.map((item, index) => (
          <img
            data-scroll
            data-scroll-speed={speedImgs[index]}
            className={`small-img-${index}`}
            onClick={() => handleClick(`${linkImgs[index]}`)}
            key={item}
            src={item}
            title={linkImgs[index]}
            alt="About Us"
          />
        ))}
      </Right>
    </Section>
  );
};
