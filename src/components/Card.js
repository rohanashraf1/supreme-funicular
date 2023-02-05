import { Box, Heading, HStack, Image, Text, VStack } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Card = ({ title, description, imageSrc }) => {
 
  return (
    <Box color="black" bg="white" borderRadius='lg' maxW='550'>
      <VStack>
        <Box >
          <Image src={imageSrc} alt="a picture" borderRadius="lg"/>
        </Box>
        <Box p={5}>
          <Heading size="md">{title}</Heading>
          <Text py={2} color='gray.500' size="md">{description}</Text>
          <HStack size="xs">
            <button>See more <FontAwesomeIcon icon={faArrowRight}/></button>
          </HStack>
        </Box>
      </VStack>
    </Box>
  );
};

export default Card;
