import { motion } from "framer-motion";
import { HTMLAttributes } from "react";
import styled from "styled-components";

const Item = styled(motion.div)<{ width: string }>`
  width: ${({ width }) => width};
  margin: auto;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  img {
    width: 100%;
    height: auto;
    cursor: pointer;
    z-index: 4;
  }

  h1 {
    display: inline-block;
    width: fit-content;
    font-weight: 500;
    text-align: center;
    cursor: pointer;
  }

  @media (max-width: 30em) {
    width: 15rem;
  }
`;

interface IProductProps extends HTMLAttributes<HTMLDivElement> {
  img: string;
  link?: string;
  title?: string;
  width?: string;
}

export const Product = ({
  img,
  title = "",
  link = "",
  width = "30rem",
}: IProductProps) => {
  function redirectToUrl(url: string) {
    if (url) {
      window.open(url, "_blank");
    }
  }

  return (
    <Item
      width={width}
      initial={{ filter: "grayscale(100%)" }}
      whileInView={{ filter: "grayscale(0%)" }}
      transition={{ duration: 0.5 }}
      viewport={{ once: false, amount: "all" }}
    >
      <img
        onClick={() => redirectToUrl(link)}
        width="400"
        height="600"
        src={img}
        alt={title}
      />
      {title && <h1>{title}</h1>}
    </Item>
  );
};
