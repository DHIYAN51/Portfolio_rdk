import React from "react";
import { Button } from "@chakra-ui/button";
import { useColorMode } from "@chakra-ui/color-mode";
import { Image } from "@chakra-ui/image";
import { Circle, Stack, Flex, Box, Text } from "@chakra-ui/layout";
import { useMediaQuery } from "@chakra-ui/media-query";
const Header = () => {
  const { colorMode } = useColorMode();
  const isDark = colorMode === "dark";

  const [isNotSmallerScreen] = useMediaQuery("(min-width:600px)");
  return (
    <Stack>
      {isNotSmallerScreen && (
        <Circle
          position="absolute"
          bg="blue.100"
          opacity="0.1"
          w="300px"
          h="300px"
          alignSelf="flex-end"
        />
      )}

      <Flex
        direction={isNotSmallerScreen ? "row" : "column"}
        spacing="200px"
        p={isNotSmallerScreen ? "32" : "0"}
        alignSelf="flex-start"
      >
        <Box mt={isNotSmallerScreen ? "0" : "16"} alignSelf="flex-start">
          <Text fontSize="5xl" fontWeight="semibold">
            Hi, I am
          </Text>
          <Text
            fontSize="7xl"
            fontWeight="bold"
            bgGradient="linear(to-r, cyan.400,blue.500,purple.600)"
            bgClip="text"
          >
            Dhiyaneshkannan R
          </Text>
          <Text color={isDark ? "gray.200" : "gray.500"}>
            Certified Full-Stack MERN Developer
          </Text>
          <Text color={isDark ? "gray.200" : "gray.500"}>
            Associate Software Engineer @Indus Net Technologies
          </Text>
          <Button mt={8} colorScheme="blue">
            Hire Me
          </Button>
        </Box>
        <Image
          mt={isNotSmallerScreen ? "0" : "12"}
          mb={isNotSmallerScreen ? "0" : "12"}
          alignSelf="center"
          borderRadius="full"
          zIndex={1}
          backgroundColor="transparent"
          boxShadow="lg"
          boxSize="300px"
          src="https://media-exp1.licdn.com/dms/image/C4E03AQHj8egth1Glng/profile-displayphoto-shrink_400_400/0/1650795019937?e=1672272000&v=beta&t=nLkxkZPn4bOVYcNGorm8MYCztDsPt7WZKQZQ3vQyPR8"
          alt="picture"
        />
      </Flex>
    </Stack>
  );
};

export default Header;
