import { FC } from "react";
import styled from "styled-components";

import data from "../data.json";

import { CoverVideo, Logo, MainTitle, NavBar } from "../components";

const Section = styled.section`
  position: relative;
  min-height: 100vh;
  width: 100%;
  height: 100vh;
  position: relative;
  overflow: hidden;
`;

const LogoContainer = styled.div`
  position: absolute;
  top: 1rem;
  left: 1rem;

  z-index: 2;

  @media (max-width: 30em) {
    top: 3%;
    left: 3%;
  }
`;

const TitleContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  z-index: 2;
`;

export const Home: FC = () => {
  return (
    <Section id="home">
      <NavBar />
      <CoverVideo />
      <LogoContainer>
        <Logo title="zazazaza4" />
      </LogoContainer>
      <TitleContainer>
        <MainTitle title={data.mainTitle} subtitle={data.subtitle} />
      </TitleContainer>
    </Section>
  );
};
