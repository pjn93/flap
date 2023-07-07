import { Flex, Box, FormControl, FormLabel, Input, Spacer, Checkbox, Stack, Button, Heading, useColorModeValue, } from '@chakra-ui/react';
import {Link, useNavigate} from 'react-router-dom';
import axios from 'axios';
import React, {useState} from 'react';
import { GoogleLogin } from 'react-google-login';
 
  
  export default function LogIn() {
    const responseGoogle = (response) => {
      console.log(response);
    }
    const navigate = useNavigate();

    const [logindata, setLogindata] = useState({
      email: "",
      password: ""
    })

    

    const handleChange = (e) => {          
      const { name, value } = e.target
      setLogindata({ ...logindata, [name]: value })
    }
  
    const handleSubmit = async (e) => {
         e.preventDefault();
         const configs = {
          "content-Type": "multiple/form-data",
        };
         const  formdata = {
          email: logindata.email,
          password: logindata.password
        }
        
        // console.log(formdata)
        const api = await axios.post(`http://localhost:9000/api/login?email=${logindata.email}&password=${logindata.password}`,formdata, configs)
        if(api.data.status === 200) {
          sessionStorage.setItem('token', api.data.token)
          sessionStorage.setItem('uid', api.data.user.uid)
          sessionStorage.setItem('email', api.data.user.email)
          sessionStorage.setItem("name", api.data.user.name)
          alert(api.data.response)
          // router.push('/layout/dashboard')
            navigate("/viewevent");   
        }
        else
        alert(api.data.response)
    }

    return (
      <Flex

        minH={'100vh'}
        align={'center'}
        justify={'center'}
        bg={useColorModeValue('gray.50', 'gray.800')}>
        <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
          <Stack align={'center'} mt={-10}>
            <Heading fontSize={'4xl'}>Sign in to your account</Heading>
          </Stack>
          <Box
            rounded={'lg'}
            bg={useColorModeValue('white', 'gray.700')}
            boxShadow={'lg'}
            p={8}>
            <Stack spacing={4}>
          
              <FormControl id="email">
                <FormLabel htmlFor='email'>Email</FormLabel>
                <Input type="email" onChange={handleChange} value={logindata.email} id='email' name='email' isRequired/>
              </FormControl>
              
             
              <FormControl id="password">
                <FormLabel htmlFor='password'>Password</FormLabel>
                <Input type="password" id='password' name='password' onChange={handleChange} value={logindata.password}/>
              </FormControl>
            
              <Stack spacing={10}>
                <Stack
                  direction={{ base: 'column', sm: 'row' }}
                  align={'start'}
                  justify={'space-between'}>
                  <Checkbox>Remember me</Checkbox>
                  <Link color={'blue.400'}>Forgot password?</Link>
                </Stack>
                <Button
                  bg={'blue.400'}
                  color={'white'}
                  _hover={{
                    bg: 'blue.500',
                  }}
                  onClick={handleSubmit}>
                  Log In
                </Button>
                  <GoogleLogin
    clientId="658977310896-knrl3gka66fldh83dao2rhgbblmd4un9.apps.googleusercontent.com"
    buttonText="Login"
    onSuccess={responseGoogle}
    onFailure={responseGoogle}
    cookiePolicy={'single_host_origin'}
  />,
  document.getElementById('googleButton')
                <Flex>
  <Box p='4'>
  <p>If you don't have an account</p>

  </Box>
  <Spacer />
  <Box p='4'>
  <Link to='/signup'><Button
                w={20}
                  bg={'blue.400'}
                  color={'white'}
                  _hover={{
                    bg: 'blue.500',
                  }}>
                  Sign Up
                </Button></Link>
  
  </Box>
</Flex>
              </Stack>
            </Stack>
          </Box>
        </Stack>
      </Flex>
    );
  }