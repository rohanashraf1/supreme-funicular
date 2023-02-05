import React from "react";
import { Avatar, Heading, VStack } from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";
import profile from "../images/profile.png";
const greeting = "Hi, I am Rohan!";
const bio1 = "A frontend developer";
const bio2 = "This is my portfolio project for the course Advanced React";

const LandingSection = () => (
  <FullScreenSection
    justifyContent="center"
    alignItems="center"
    isDarkBackground
    backgroundColor="#2A4365"
  >
    <VStack>
      <Avatar size="2x1" name='pete' src={profile} />
      <Heading as="h4" size="sm">{greeting}</Heading>
      <br />
      <Heading>{bio1}</Heading>
      <Heading size="md">{bio2}</Heading>
    </VStack>
  </FullScreenSection>
  
);

export default LandingSection;
