import React from 'react'
import {Icon} from "@chakra-ui/icon"
import {HStack} from "@chakra-ui/layout"
import {FaFacebook, FaLinkedin, FaInstagram, FaGithub} from "react-icons/fa";
const Social = () => {
  return (
   <HStack spacing={24}>
  
    <Icon as={FaLinkedin} boxSize={50}  onClick={() =>
            window.open(
              "https://www.linkedin.com/in/dhiyanesh-kannan-a99968238/"
            )
          }/>
    <Icon as={FaGithub}  boxSize={50}  onClick={() => window.open("https://github.com/DHIYAN51")}/>
    <Icon as={FaFacebook} boxSize={50}/>
    <Icon as={FaInstagram} boxSize={50}/>
   
   </HStack>
  )
}

export default Social