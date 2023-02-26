import { FC, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import styled from "styled-components";

import data from "../data.json";
import { useLocomotiveScroll } from "react-locomotive-scroll";

const NavContainer = styled(motion.div)<{ open: boolean }>`
  width: 100vw;
  z-index: 3;

  position: absolute;
  top: ${({ open, theme }) => (open ? "0" : `-${theme.navHeight}`)};

  display: flex;
  justify-content: center;
  align-items: center;

  transition: top 0.3s ease;
  user-select: none;

  cursor: grab;
  &:active {
    cursor: grabbing;
  }

  @media (max-width: 40em) {
    top: ${({ open }) => (open ? "0" : `calc(-50vh - 4rem)`)};
  }
`;

const MenuItems = styled(motion.ul)`
  position: relative;
  height: ${({ theme }) => theme.navHeight};
  background-color: ${({ theme }) => theme.body};
  color: ${({ theme }) => theme.text};
  list-style: none;

  display: flex;
  justify-content: space-around;
  align-items: center;

  width: 100%;
  padding: 0 10rem;

  @media (max-width: 40em) {
    flex-direction: column;
    height: 50vh;
    padding: 2rem 0;
  }
`;

const MenuItem = styled(motion.li)`
  text-decoration: uppercase;
  color: ${({ theme }) => theme.text};
  position: relative;

  &::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 0;
    transition: width 0.5s ease;
    height: 0.5px;
    background-color: ${({ theme }) => theme.text};
  }

  &.active::after,
  &:hover::after {
    width: 100%;
  }

  @media (max-width: 40em) {
    flex-direction: column;
    padding: 0.5rem 0;
  }
`;

const MenuBtn = styled.li`
  background-color: ${({ theme }) => `rgba(${theme.textRgba}, 0.7)`};
  list-style-type: none;
  color: ${({ theme }) => theme.body};
  width: 15rem;
  height: 2.2rem;

  clip-path: polygon(0 0, 100% 0, 80% 100%, 20% 100%);

  position: absolute;
  top: 100%;
  left: 50%;
  transform: translate(-50%);

  display: flex;
  justify-content: center;
  align-items: center;

  font-size: ${({ theme }) => theme.fontmd};
  font-weight: 600;
  text-transform: uppercase;

  cursor: pointer;

  @media (max-width: 40em) {
    width: 10rem;
    height: 2rem;
  }
`;

export const NavBar: FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const { scroll } = useLocomotiveScroll();

  const handleScroll = (id: string) => {
    let elem = document.getElementById(id);

    scroll.scrollTo(elem, {
      offset: "0",
      duration: "2000",
      easing: [0.25, 0.0, 0.35, 1.0],
    });
  };

  return (
    <NavContainer
      open={isOpen}
      initial={{ y: "-100" }}
      animate={{ y: 0 }}
      transition={{ duration: 2, delay: 3.6 }}
    >
      <MenuItems
        drag="y"
        dragConstraints={{ bottom: 70, top: 0 }}
        dragElastic={0.05}
        dragSnapToOrigin
      >
        {data.menu.map(({ id, name, route }) => (
          <MenuItem
            onClick={() => handleScroll(route)}
            whileHover={{ scale: 1.1, y: -5 }}
            whileTap={{ scale: 0.9, y: 0 }}
            key={id}
          >
            <Link to={`/#${route}`}>{name}</Link>
          </MenuItem>
        ))}
        <MenuBtn onClick={() => setIsOpen((prev) => !prev)}>Menu</MenuBtn>
      </MenuItems>
    </NavContainer>
  );
};
