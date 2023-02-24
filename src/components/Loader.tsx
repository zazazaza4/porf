import { motion, Variants } from "framer-motion";
import { FC } from "react";
import styled from "styled-components";
import { Logo } from "./Logo";

const Container = styled(motion.div)`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;

  touch-action: none;
  overflow: hidden;

  width: 100vw;
  height: 100vh;

  z-index: 6;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  background-color: ${({ theme }) => theme.body};
  color: ${({ theme }) => theme.text};

  svg {
    width: 10vw;
    height: auto;
    overflow: visible;
    stroke-linejoin: round;
    stroke-linecap: round;

    g {
      path {
        stroke: ${({ theme }) => theme.text};
      }
    }
  }
`;

const Text = styled(motion.span)`
  font-size: ${({ theme }) => theme.fontxl};
  color: ${({ theme }) => theme.text};
  padding-top: 0.5rem;
`;

const textVariants: Variants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,

    transition: {
      duration: 1,
      yoyo: Infinity,
      ease: "easeInOut",
    },
  },
};

export const Loader: FC = () => {
  return (
    <Container
      initial={{
        y: 0,
        opacity: 1,
      }}
      exit={{
        y: "100%",
        opacity: 0,
      }}
      transition={{
        duration: 2,
      }}
    >
      <Logo delay={0} />
      <Text variants={textVariants} initial="hidden" animate="visible">
        Yaroslav Osmukha
      </Text>
    </Container>
  );
};
