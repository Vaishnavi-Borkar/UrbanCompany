import { useState } from "react";
import { Link } from "react-router-dom";
import { Box, VStack, Heading, Text, Input, FormControl, FormLabel, HStack, Checkbox, Button } from "@chakra-ui/react";
function Login() {
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const handleSubmit = (e) => {
        e.preventDefault();
        fetch("https://reqres.in/api/login", {
            method: "POST",
            headers: {
                "Context-Type": "application/json"
            },
            body: JSON.stringify({ email, password })
        })
            .then(res => res.json())

            .catch(err => {
                console.log(err)
            })
    }
    return (
        <Box w={['full', 'md']}
            p={[8, 10]}
            mt={[20, '10vh']}
            mx='auto'
            border={['none', '1px']}
            borderColor={['', 'gray.300']}
            borderRadius={10}>


            <VStack spacing={4} aline='flex-start' w='full'>
                <VStack>
                    <Heading>Login</Heading>
                    <Text>Enter Your e-mail and password to login</Text>
                </VStack>
                <FormControl onSubmit={handleSubmit}>
                    <FormLabel>E-mail Address</FormLabel>
                    <Input rounded='none' variant='filled' type="email" placeholder="email"
                        value={email}
                        onChange={e => setEmail(e.target.value)} />
                </FormControl>
                <FormControl>
                    <FormLabel>Password</FormLabel>
                    <Input rounded='none' variant='filled' value={password}
                        onChange={e => setPassword(e.target.value)}
                        data-testid="password-input"
                        type="password"
                        placeholder="password" />
                </FormControl>
                <HStack w='full' justify='space-between'>
                    <Checkbox>Remember me.</Checkbox>
                    <Button variant='link' colorScheme='blue'>Forget Password ?</Button>
                </HStack>
                <Button rounded='none' colorScheme='blue'>Login</Button>
                <Box>
                    <Link to="/">Go Back</Link>
                </Box>
            </VStack>


        </Box>
    );
}
export default Login;