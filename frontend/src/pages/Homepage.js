import React from 'react'
import Login from '../componets/Authentication/Login';
import Signup from '../componets/Authentication/Signup';
import {useHistory} from 'react-router'
import { useEffect } from 'react';
import {
  Box,
  Container,
  Text,
  Tab,
  TabPanel,
  Tabs,
  TabList,
  TabPanels,
} from "@chakra-ui/react";

const Homepage = () => {

 const history = useHistory();

 useEffect(() => {
   const user = JSON.parse(localStorage.getItem("userInfo"));

   if (user) history.push("/chats");
 }, [history]);



  return (
    <Container maxW="xl" centerContent>
      <Box
        d="flex"
        justifyContent="center"
        p={3}
        bg={"white"}
        w="100%"
        m="40px 0 15px 0"
        borderRadius="lg"
        borderWidth="1px"
        textAlign="center"
      >
        <Text fontSize="4xl" fontFamily="work sans">
          Talk-A-Tive
        </Text>
      </Box>

      <Box
        bg="white"
        w="100%"
        p={4}
        borderRadius="lg"
        color="black"
        borderEndWidth="1px"
      >
        <Tabs variant="soft-rounded">
          <TabList mb="1em">
            <Tab width="50%">Login</Tab>
            <Tab width="50%">SignUp</Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <Login />
            </TabPanel>
            <TabPanel>
              <Signup />
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
    </Container>
  );
}

export default Homepage