import { HStack, Box, Image, Text, Spacer, VStack, Button } from "@chakra-ui/react";

import Services from "../Data/Services"

import serviceproduct from "../Data/serviceproduct";
const discount = [
    { img: "https://img.icons8.com/office/512/discount.png", title: "Save 15% on every order", tag: "Get Plus now" },
    { img: "https://img.icons8.com/office/512/discount.png", title: "Assured cashback on Paytm", tag: "Upto ₹500 off" },
    { img: "https://img.icons8.com/office/512/discount.png", title: "Mobikwik | ZIP (pay later)", tag: "Get 5% assured cashback" },
    { img: "https://img.icons8.com/office/512/discount.png", title: "5% Simpl cashback upto ₹750", tag: "Get Plus now" },
    { img: "https://img.icons8.com/office/512/discount.png", title: "Upto 200 cashback", tag: "On Amazon Pay" },

]
function Service() {
    return (
        <Box w={{ base: "60%", md: "70%", lg: "90%" }} h="500px" margin="auto" marginTop="80px">
            <HStack margin="auto">
                <Box>
                    <HStack>
                        <Image src="https://img.icons8.com/material-rounded/512/security-checked.png" alt="shield" w="20px" />
                        <Text fontSize='md' fontFamily="os_bold"
                        >UCSafe</Text>
                    </HStack>
                    <Text fontSize='4xl' fontFamily="os_bold" fontWeight="bold" >Home Services</Text>
                    <HStack>
                        <Image src="https://img.icons8.com/ios-glyphs/512/hand-drawn-star.png" alt="star" w="20px"
                        />
                        <Text>4.76</Text>
                        <Text>(978k)</Text>
                    </HStack>
                </Box>
                <Spacer />
                <HStack>

                    <Image w={{ sm: "60%", md: "80%", lg: "100%" }} h={{ sm: "100px", md: "300px", lg: "400px" }} src="https://m.economictimes.com/thumb/msid-83165321,width-1200,height-900,resizemode-4,imgsize-100236/urban-company-.jpg" alt="frontimg" />
                </HStack>
            </HStack>
            <hr style={{ marginTop: "80px" }} />
            <HStack >
                {serviceproduct.map((e) => (
                    <Box p="30px 20px">
                        < Image src={e.img} alt={e.title} w="80px" h="80px" borderRadius="10px" />
                        <Text>{e.title}</Text>
                    </Box>
                ))
                }
            </HStack >
            <hr />
            <HStack marginTop="50px">
                <Box w="65%"  >
                    <Box>
                        <Text fontSize='4xl' fontFamily="os_bold" fontWeight="bold">Bestseller Packages</Text>
                        {Services.map((e) => (
                            <HStack  >
                                <Box w="500px" h="150px" marginLeft="50px" >
                                    <Text display="flex" justifyContent="flex-start" fontSize='xl' fontWeight="bold" fontFamily="os_bold">{e.title}</Text>
                                    <HStack display="flex" justifyContent="flex-start">

                                        <Text color="gray">{e.price}</Text>
                                        <Text color="gray">{e.time}</Text>
                                    </HStack>
                                    <HStack>
                                        <Image src="https://img.icons8.com/ios-glyphs/512/hand-drawn-star.png" alt="star" w="20px"
                                        />
                                        <Text>4.76</Text>
                                        <Text>(978k)</Text>
                                    </HStack>

                                </Box>

                                <Image src={e.img} alt={e.title} w="100px" h="100px" borderRadius="15px" />
                                <Button color="blue">Add</Button>
                            </HStack>

                        ))}

                    </Box>

                </Box>
                <Box w="35%" >
                    {discount.map((e) => (

                        <HStack p="20px" >
                            <Box bg="#f5f5f5" w="350px" borderRadius="10px">
                                <Image src={e.img} alt={e.title} w="20px" marginBottom="-17px" />
                                {/* <VStack> */}
                                <Text fontSize='lg' fontFamily="os_bold" fontWeight="bold" >{e.title}</Text>
                                <Text fontSize='md' color="gray" >{e.tag}</Text>
                                {/* </VStack> */}
                            </Box>
                        </HStack>
                    ))}
                </Box>
            </HStack >

        </Box >
    )
}
export default Service;