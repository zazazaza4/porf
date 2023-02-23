import { motion } from "framer-motion";
import { FC } from "react";
import { useLocomotiveScroll } from "react-locomotive-scroll";
import { Link } from "react-router-dom";
import styled from "styled-components";

import Logo from "../assets/svg/github.svg";

import data from "../data.json";

const Section = styled.section`
  min-height: 100vh;
  width: 100vw;
  margin: 5rem auto;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  background-color: ${({ theme }) => theme.body};
  color: ${({ theme }) => theme.text};

  position: relative;
`;

const LogoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  img {
    width: 10vw;
    height: auto;
  }

  h3 {
    font-size: ${({ theme }) => theme.fontxxl};
    font-family: "Kaushan Script";

    @media (max-width: 48em) {
      font-size: ${({ theme }) => theme.fontxl};
    }
  }
`;

const FooterContainer = styled(motion.footer)`
  width: 80vw;

  @media (max-width: 48em) {
    width: 90vw;
  }

  ul {
    list-style-type: none;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    margin: 2rem;
    margin-top: 4rem;
    border-top: 1px solid ${({ theme }) => theme.text};
    border-bottom: 1px solid ${({ theme }) => theme.text};

    @media (max-width: 48em) {
      justify-content: center;
    }
  }

  li {
    padding: 2rem;
    font-size: ${({ theme }) => theme.fontlg};
    text-transform: uppercase;
    cursor: pointer;
    transition: all 0.3s ease;

    &:hover {
      transform: scale(1.1);
    }

    @media (max-width: 48em) {
      padding: 1rem;
      font-size: ${({ theme }) => theme.fontmd};
    }
  }
`;

const Bottom = styled.div`
  padding: 0.5rem 0;
  margin: 0 4rem;
  line-height: 2;
  font-size: ${({ theme }) => theme.fontlg};

  display: flex;
  justify-content: space-between;
  align-items: center;

  a {
    text-decoration: underline;
  }

  @media (max-width: 64em) {
    width: 100%;
    margin: 0;
    flex-direction: column;
    justify-content: center;

    span {
      transform: none !important;
    }
  }

  @media (max-width: 48em) {
    font-size: ${({ theme }) => theme.fontmd};
  }
`;

export const Footer: FC = () => {
  const { scroll } = useLocomotiveScroll();

  const handleScroll = (id: string) => {
    let elem = document.getElementById(id);

    scroll.scrollTo(elem, {
      offset: "-100",
      duration: "2000",
      easing: [0.25, 0.0, 0.35, 1.0],
    });
  };

  return (
    <Section id="footer">
      <LogoContainer>
        <img data-scroll data-scroll-speed="2" src={Logo} alt="Wibe Studio" />
        <h3 data-scroll data-scroll-speed="-1">
          zazazaza4
        </h3>
      </LogoContainer>
      <FooterContainer
        initial={{ y: "-400px" }}
        whileInView={{ y: "0px" }}
        viewport={{ once: false }}
        transition={{ duration: 1.5 }}
      >
        <ul>
          {data.footerItems.map(({ id, name, route, blank }) => (
            <li key={id} onClick={() => handleScroll(route)}>
              <Link
                to={blank ? route : `/#${route}`}
                target={blank ? "_blank" : "_self"}
                replace={true}
              >
                {name}
              </Link>
            </li>
          ))}
        </ul>
        <Bottom>
          <span
            data-scroll
            data-scroll-speed="2"
            data-scroll-direction="horizontal"
          >
            &copy; {new Date().getFullYear()}. All Rights Reserved
          </span>
          <span
            data-scroll
            data-scroll-speed="-2"
            data-scroll-direction="horizontal"
          >
            Made with &hearts; by &nbsp;
            <Link to="https://github.com/zazazaza4/" target="_blank">
              me
            </Link>
          </span>
        </Bottom>
      </FooterContainer>
    </Section>
  );
};
