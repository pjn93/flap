import { Flex, Box, FormControl, FormLabel, Input, Spacer, Stack, Button, Heading, useColorModeValue} from '@chakra-ui/react';
import axios from 'axios';
import {Link} from 'react-router-dom'
import React, {useState} from 'react';
  
export default function Signup() {
  const [uid, setUid] = useState("")
  const [name, setName] = useState("")
  const [password, setPassword] = useState("")
  const [email, setEmail] = useState("")
  let [sst, setSst] = useState()

async function postdata(){
  let newData = {
    "uid": uid,
    "name": name,
    "password": password,
    "email": email,
   
    
  }
  let response = await axios.post('http://localhost:9000/api/adduser', newData, {

    headers: {
      "Content-Type": "application/json"
    }
  });
  console.log(response.status);
  if (response.status === 200) {
    setSst("Data Inserted");
  } else {
    setSst("Try again!!!");
  }
}

    return (
      <Flex

        minH={'100vh'}
        align={'center'}
        justify={'center'}
        bg={useColorModeValue('gray.50', 'gray.800')}>
        <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
          <Stack align={'center'} mt={-10}>
            <Heading fontSize={'4xl'}>Sign up your account .....</Heading>
          </Stack>
          <Box
            rounded={'lg'}
            bg={useColorModeValue('white', 'gray.700')}
            boxShadow={'lg'}
            p={8}>
            <Stack spacing={4}>

            <Flex>
  <Box pt='4'>
  <FormControl id="uid">
                <FormLabel>User Id</FormLabel>
                <Input value={uid} onChange={(e) => setUid(e.target.value)} type="text" w={40}/>
              </FormControl>

  </Box>
  <Box pt='4' ml={10}>
  <FormControl id="name">
                <FormLabel>Name</FormLabel>
                <Input value={name} onChange={(e) => setName(e.target.value)} type="text" w={40}/>
              </FormControl>

  </Box>
  <Spacer />


</Flex>
         
              <FormControl id="email" isRequired>
                <FormLabel>Email</FormLabel>
                <Input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
              </FormControl>
             
              <FormControl id="password">
                <FormLabel>Password</FormLabel>
                <Input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
              </FormControl>
<p>{sst}</p>

<Stack>

                <Button onClick={() =>postdata()}
                  bg={'blue.400'}
                  color={'white'}
                  _hover={{
                    bg: 'blue.500',
                  }}>
                  Sign Up
                </Button>
              </Stack>
             
              <Flex>
  <Box p='4'>
  <p>If you already have an account</p>

  </Box>
  <Spacer />
  <Box p='4'>
  <Link to='/'><Button
                w={20}
                  bg={'blue.400'}
                  color={'white'}
                  _hover={{
                    bg: 'blue.500',
                  }}>
                  Log In
                </Button></Link>
  
  </Box>
</Flex>

            </Stack>
          </Box>
        </Stack>
      </Flex>
    );
  }
