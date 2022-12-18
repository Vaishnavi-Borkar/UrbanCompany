import { HStack, Box, Spacer, Select, Input, Flex, Image, Text, VStack, Button } from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import {
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    RadioGroup,
    Radio,
    Stack,


} from '@chakra-ui/react';
import React from "react";
import { useDisclosure } from '@chakra-ui/react';
import { Link, NavLink } from "react-router-dom";
import products from "../Data/products";
import serviceproduct from "../Data/serviceproduct";
const boxShadow = {
    width: "70%", height: "150px", margin: "auto", backgroundColor: "white", marginTop: "-30px",
    boxShadow: "rgba(0 ,0, 0, 0.1) 0px 4px 6px -1px ,rgba(0 ,0, 0, 0.06) 0px 2px 4px -1px"
}
const boxShadow2 = {
    width: "80%", height: "200px", margin: "auto", backgroundColor: "white", marginTop: "-30px",
    boxShadow: "rgba(0 ,0, 0, 0.1) 0px 4px 6px -1px ,rgba(0 ,0, 0, 0.06) 0px 2px 4px -1px"
}
const styleimg = {

    background:
        'url(https://images.newindianexpress.com/uploads/user/imagelibrary/2021/6/2/w1200X800/Urban_Company.jpeg) center/cover no-repeat',
    width: "100%", height: "500px",

}
const lastbox = {
    alignItems: "center", justifyContent: "center", m: "auto", mt: "80px", w: "90%", h: "200px", boxShadow: "rgba(0 ,0, 0, 0.1) 0px 4px 6px -1px ,rgba(0 ,0, 0, 0.06) 0px 2px 4px -1px"
}
const care = [
    { src: "https://img.icons8.com/3d-fluency/512/hair-brush.png", title: 'Salon for Women', path: "/product" },
    { src: 'https://img.icons8.com/3d-fluency/512/communicate-skin-type-7.png', title: 'Hair,Skin & Nail', path: "/product" },
    { src: 'https://img.icons8.com/3d-fluency/512/stones.png', title: "Women's Therapist", path: "/product" },
    { src: "https://img.icons8.com/3d-fluency/512/barber-chair.png", title: "Salon for Men", path: "/product" },
    { src: "https://img.icons8.com/3d-fluency/512/christmas-candle.png", title: "Men's Therapist", path: "/product" },

]

const home = [
    { img: "https://img.icons8.com/3d-fluency/512/3d-fluency-tools.png", title: "Appliance Repair", path: "/service" },
    { img: "https://img.icons8.com/3d-fluency/512/roller-brush.png", title: "Home Painting", path: "/service" },
    { img: "https://img.icons8.com/3d-fluency/512/broom.png", title: "Cleaning & Pest", path: "/service" },
    { img: "https://img.icons8.com/3d-fluency/512/plus.png", title: "Disinfection", path: "/service" },
    { img: "https://img.icons8.com/3d-fluency/512/home.png", title: "Home Repairs", path: "/service" },


]
const newcat = [

    { img: "data:image/jpeg;base64,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", title: "Expert Counselling" },
    { img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGNfvbbr6fKBHi-20sMNwFEx5C9ge7g7wL_A&usqp=CAU", title: "Furniture" },
    { img: "data:image/jpeg;base64,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", title: "Air Purifier" },
    { img: "data:image/jpeg;base64,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", title: "RO water purifier" }
]

function Home() {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [placement, setPlacement] = React.useState('right')
    return (
        <Box>
            <Navbar />
            <Box >
                <Box sx={styleimg} filter='auto' ></Box>
            </Box>

            <Box position="absolute" top="150px" left="150px" width="80%" height="300px" backgroundColor="tranperant" margin="auto">
                <Box  >
                    <Text fontSize='5xl'>Home services, on demand.</Text>
                    <Flex>
                        <Select placeholder='Current Location' padding='5px 20px 5px 5px'>
                            <option value='pune'>Pune</option>
                            <option value='Nagpur'>Nagpur</option>
                            <option value='Ranchi'>Ranchi</option>
                            <option value='Kochi'>Kochi</option>
                            <option value='Delhi'>Delhi</option>
                            <option value='Nashik'>Nashik</option>
                        </Select>

                        <Input placeholder="Search " />
                    </Flex>
                </Box>
            </Box>
            <Box className="shadow" style={boxShadow}>

                <HStack>
                    {care.map((item) => (

                        <Box style={{ margin: "10px 50px" }} onClick={onOpen}>

                            <Image src={item.src} alt="picture" style={{ width: "50px", height: "50px" }} />

                            <Text fontSize='sm' >{item.title}</Text>

                            <Drawer placement={placement} onClose={onClose} isOpen={isOpen}>
                                <DrawerOverlay />
                                <DrawerContent>
                                    <DrawerHeader borderBottomWidth='1px'>Basic Drawer</DrawerHeader>
                                    <DrawerBody>
                                        {products.map((e) => (


                                            <HStack mt="15px " >
                                                <Image src={e.img} alt={e.title} w="90px" h="90px" />
                                                <Link to="/product" fontSize='sm' >{e.title}</Link>
                                            </HStack>
                                        ))}
                                    </DrawerBody>
                                </DrawerContent>
                            </Drawer>

                        </Box>
                    ))}
                </HStack>
            </Box>
            <Text style={{ marginTop: "40px" }} fontSize='5xl'>Home Services</Text>
            <Box style={boxShadow}>

                <HStack style={{ marginTop: "150px" }}>
                    {home.map((item) => (
                        <Box style={{ margin: "10px 50px" }}>
                            <Image src={item.img} alt="picture" style={{ width: "50px", height: "50px" }} />
                            <Text fontSize='sm' >{item.title}</Text>
                            <Drawer placement={placement} onClose={onClose} isOpen={isOpen}>
                                <DrawerOverlay />
                                <DrawerContent>
                                    <DrawerHeader borderBottomWidth='1px'>Basic Drawer</DrawerHeader>
                                    <DrawerBody>
                                        {serviceproduct.map((e) => (


                                            <HStack mt="15px " >
                                                <Image src={e.img} alt={e.title} w="90px" h="90px" />
                                                <Link to="/service" fontSize='sm' >{e.title}</Link>
                                            </HStack>
                                        ))}
                                    </DrawerBody>
                                </DrawerContent>
                            </Drawer>
                        </Box>
                    ))}
                </HStack>
            </Box>
            <Text style={{ marginTop: "40px" }} fontSize='5xl'>New category launches</Text>
            <Box style={boxShadow2}>

                <HStack style={{ marginTop: "150px" }}>
                    {newcat.map((item) => (
                        <Box style={{ margin: "10px 50px" }}>
                            <Image src={item.img} alt="picture" style={{ width: "180px", height: "100px" }} />
                            <Text fontSize='sm'>{item.title}</Text>
                        </Box>
                    ))}
                </HStack>
            </Box>
            <HStack alignItems="center" justifyContent="center" m="auto" mt="80px" w="90%" h="200px" boxShadow="rgba(0 ,0, 0, 0.1) 0px 4px 6px -1px ,rgba(0 ,0, 0, 0.06) 0px 2px 4px -1px">
                <Image src="https://img.icons8.com/ios-filled/512/shield.png" alt="shield" w="80px" />
                <VStack>
                    <Text fontSize='3xl'>Urban Company insurance protection </Text>
                    <Text fontSize='lg' color="gray">Upto Rs 10,000 insurance cover with every service request.</Text>
                </VStack>
            </HStack>
            <HStack alignItems="center" justifyContent="center" m="auto" mt="80px" w="90%" h="200px" boxShadow="rgba(0 ,0, 0, 0.1) 0px 4px 6px -1px ,rgba(0 ,0, 0, 0.06) 0px 2px 4px -1px">
                <VStack mr="50px">
                    <Text fontSize='3xl'>Anti Discrimination Policy</Text>
                    <Text fontSize='lg'>Urban Comapny treats its community equally with respect and</Text>
                    <Text fontSize='lg'>without judgement or bias</Text>
                    <Button color="blue">Know More</Button>
                </VStack>
                <Image src="https://img.icons8.com/ios-filled/512/like.png" alt="heart" w="90px" ml="30px" />
            </HStack>
            <Link to="/modal">click me</Link>
            <Footer />
        </Box >

    )
}
export default Home;