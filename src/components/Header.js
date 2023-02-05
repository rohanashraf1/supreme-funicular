import React, { useEffect, useRef} from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faLinkedin,
  faFacebook,
  faStackOverflow,
} from "@fortawesome/free-brands-svg-icons";
import { Box, color, HStack } from "@chakra-ui/react";
import { transform } from "framer-motion";


const Header = () => {
  const [show, setShow] = React.useState(true);
  const [scrolly, setScrolly] = React.useState(0);

  const handleScroll = () => {
    if (window.scrollY > scrolly) {
      setShow(false); 
    } else {
      setShow(true);  
    }
    console.log(setShow);
    setScrolly(window.scrollY); 
  };

  useEffect(()=>{
    window.addEventListener('scroll', handleScroll);
  return () => {
    window.removeEventListener('scroll', handleScroll);
  };},[scrolly]);
  
  const handleClick = (anchor) => () => {
    const id = `${anchor}-section`;
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <Box
      position={"fixed"}
      top={0}
      left={0}
      right={0}
      translateY={0}
      transitionProperty="transform"
      transitionDuration=".3s"
      transitionTimingFunction="ease-in-out"
      backgroundColor="#18181b"
      className={show ? null:"lol"}
      zIndex={1}
    >
      <Box color="white" maxWidth="1280px" margin="0 auto">
        <HStack
          px={16}
          py={4}
          justifyContent="space-between"
          alignItems="center"
        >
          <nav>
            <HStack spacing={8} >
              <a href="mailto: hello@example.com"><FontAwesomeIcon icon={faEnvelope} size="2x" /></a>
              <a href="https://github.com"><FontAwesomeIcon icon={faGithub} size="2x" /></a>
              <a href="https://www.linkedin.com"><FontAwesomeIcon icon={faLinkedin} size="2x" /></a>
              <a href="https://web.facebook.com/"><FontAwesomeIcon icon={faFacebook} size="2x" /></a>
              <a href="https://stackoverflow.com"><FontAwesomeIcon icon={faStackOverflow} size="2x" /></a>
            </HStack>
          </nav>
          <nav>
            <HStack spacing={8}>
              <a onClick={handleClick("projects")}>Projects</a>
              <a onClick={handleClick("contactme")}>Contact Me</a>
            </HStack>
          </nav>
        </HStack>
      </Box>
    </Box>
  );
};

export default Header;
