import { motion, Variants } from "framer-motion";
import { FC, useMemo } from "react";
import styled from "styled-components";

const Title = styled(motion.div)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: ${({ theme }) => theme.text};

  div {
    display: flex;
    flex-direction: row;
  }

  h1 {
    font-family: "Kaushan Script";
    font-size: ${({ theme }) => theme.fontBig};
    text-shadow: 1px 1px 1px ${({ theme }) => theme.body};

    @media (max-width: 64em) {
      font-size: calc(5rem + 7vw);
    }

    @media (max-width: 48em) {
      font-size: ${({ theme }) => theme.fontxxl};
    }
  }

  h2 {
    font-family: "Sirin Stencil";
    font-size: ${({ theme }) => theme.fontlg};
    text-shadow: 1px 1px 1px ${({ theme }) => theme.body};
    font-weight: 300;
    text-transform: capitalize;

    @media (max-width: 30em) {
      font-size: ${({ theme }) => theme.fontmd};
      margin-top: 0.5rem;
    }
  }
`;

const containerVariants: Variants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,

    transition: {
      delayChildren: 4.5,
      staggerChildren: 0.3,
    },
  },
};

const itemVariants: Variants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
  },
};

interface IMainTitleProps {
  title: string;
  subtitle?: string;
}

export const MainTitle: FC<IMainTitleProps> = ({ title, subtitle }) => {
  const titleArray = useMemo(() => title.split(""), [title]);

  return (
    <Title variants={containerVariants} initial="hidden" animate="visible">
      <div>
        {titleArray.map((letter, i) => (
          <motion.h1
            key={letter + i}
            variants={itemVariants}
            data-scroll
            data-scroll-delay={0.3 * (i + 1) * 0.1}
            data-scroll-speed="4"
          >
            {letter}
          </motion.h1>
        ))}
      </div>
      {subtitle && (
        <motion.h2
          variants={itemVariants}
          data-scroll
          data-scroll-delay="0.04"
          data-scroll-speed="2"
        >
          {subtitle}
        </motion.h2>
      )}
    </Title>
  );
};
