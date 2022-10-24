import React from "react";
import { IconButton } from "@chakra-ui/button";
import { VStack, Flex, Heading, Spacer } from "@chakra-ui/layout";
import {useColorMode} from "@chakra-ui/color-mode"
import {
  FaSun,
  FaMoon,
  FaInstagram,
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";
import Header from "./Components/Header";
import Social from "./Components/Social";

const App = () => {
  const {colorMode,toggleColorMode} = useColorMode();

  const isDark = colorMode==="dark";
  return (
    <VStack p="5">
      <Flex w="100%">
        <Heading ml="8" size="md" fontWeight="semibold" color="cyan.400">
          Dhiyanesh
        </Heading>
        <Spacer/>
        <IconButton
          ml={2}
          icon={<FaLinkedin />}
          isRound="true"
          onClick={() =>
            window.open(
              "https://www.linkedin.com/in/dhiyanesh-kannan-a99968238/"
            )
          }
        />
      
        <IconButton
          ml={2}
          icon={<FaGithub />}
          isRound="true"
          onClick={() => window.open("https://github.com/DHIYAN51")}
        />
        
        <IconButton
          ml={2}
          icon={<FaInstagram />}
          isRound="true"
          onClick={() =>
            window.open(
              "https://www.instagram.com/p/CjfEpgXpUjLknVAuDyjW8ibFxPjAupMAqAT85w0/?igshid=MDJmNzVkMjY%3D"
            )
          }
        />
    
        <IconButton
             ml={8}
          icon={isDark ? <FaSun /> : <FaMoon/>}
          isRound="true"
          onClick={toggleColorMode}
        />
        
      </Flex>
      <Header/>
      <Social/>
    </VStack>
  );
};

export default App;
