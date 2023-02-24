import { Link } from "react-router-dom";
import styled from "styled-components";
import { motion, Variants } from "framer-motion";
import { FC } from "react";

const Container = styled.div`
  width: 100%;
  color: ${({ theme }) => theme.text};
  z-index: 2;

  a {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  svg {
    width: 4rem;
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

  @media (max-width: 48em) {
    svg {
      width: 10vw;
    }
  }
`;

const Text = styled(motion.span)`
  font-size: ${({ theme }) => theme.fontlg};
  color: ${({ theme }) => theme.text};
  padding-bottom: 0.5rem;
  text-align: center;

  @media (max-width: 48em) {
    font-size: ${({ theme }) => theme.fontmd};
  }

  @media (max-width: 30em) {
    font-size: ${({ theme }) => theme.fontxs};
  }
`;

const textVariants: Variants = {
  hidden: {
    opacity: 0,
    x: -100,
  },
  visible: {
    opacity: 1,
    x: -5,

    transition: {
      duration: 2,
      delay: 4.5,
      ease: "easeInOut",
    },
  },
};

const pathVariants: Variants = {
  hidden: {
    opacity: 0,
    pathLength: 0,
    strokeWidth: 1,
  },
  visible: {
    opacity: 1,
    pathLength: 1.1,
    strokeWidth: 0.5,
  },
};

interface ILogoProps {
  title?: string;
  delay?: number;
}

export const Logo: FC<ILogoProps> = ({ title = "", delay = 4.4 }) => {
  return (
    <Container>
      <Link to="https://github.com/zazazaza4/">
        <svg viewBox="0 0 16 16" width="32" height="32" fill="#fff">
          <motion.path
            variants={pathVariants}
            initial="hidden"
            animate="visible"
            transition={{
              duration: 2,
              delay,
              ease: "easeInOut",
            }}
            d="M8 0C3.582 0 0 3.582 0 8c0 3.535 2.29 6.533 5.47 7.59.4.074.546-.174.546-.388 0-.19-.007-.693-.01-1.36-2.226.483-2.695-1.077-2.695-1.077-.364-.926-.89-1.17-.89-1.17-.727-.496.055-.486.055-.486.805.057 1.23.828 1.23.828.717 1.23 1.878.874 2.335.666.072-.52.28-.874.508-1.07-1.78-.202-3.644-.895-3.644-3.975 0-.88.313-1.6.826-2.16-.083-.203-.36-1.023.078-2.13 0 0 .67-.217 2.2.82.638-.178 1.318-.267 2-.27.682.003 1.362.092 2 .27 1.53-1.037 2.2-.82 2.2-.82.44 1.107.164 1.927.08 2.13.515.56.825 1.28.825 2.16 0 3.086-1.868 3.77-3.655 3.965.287.248.54.733.54 1.48 0 1.07-.01 1.93-.01 2.19 0 .215.145.466.55.387A8.013 8.013 0 0 0 16 8c0-4.418-3.582-8-8-8z"
            fill="#fff"
            stroke="#fff"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <Text variants={textVariants} initial="hidden" animate="visible">
          {title}
        </Text>
      </Link>
    </Container>
  );
};
