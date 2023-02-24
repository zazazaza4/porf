import { FC } from "react";
import styled from "styled-components";

import MainVideo from "../assets/code.mp4";

const VideoContainer = styled.section`
  width: 100%;
  height: 100vh;
  position: relative;

  video {
    height: 100vh;
    width: 100%;
    object-fit: cover;

    @media (max-width: 48em) {
      object-position: center 10%;
    }

    @media (max-width: 30em) {
      object-position: center 50%;
    }
  }
`;

const DarkOverlay = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 1;

  background-color: ${({ theme }) => `rgba(${theme.bodyRgba}, 0.8)`};
`;

export const CoverVideo: FC = () => {
  return (
    <VideoContainer>
      <DarkOverlay />
      <video src={MainVideo} autoPlay muted loop />
    </VideoContainer>
  );
};
