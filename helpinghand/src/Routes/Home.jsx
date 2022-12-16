import { HStack, Box, Spacer, Select, Input, Flex, Image } from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
const boxShadow = {
    width: "70%", height: "150px", margin: "auto", backgroundColor: "white", marginTop: "-30px",
    boxShadow: "rgba(0 ,0, 0, 0.1) 0px 4px 6px -1px ,rgba(0 ,0, 0, 0.06) 0px 2px 4px -1px"
}
const styleimg = {

    background:
        'url(https://img.freepik.com/premium-photo/young-man-cleaning-sofa-with-vacuum-cleaner-leaving-room-home_130111-3594.jpg?size=626&ext=jpg&ga=GA1.2.1668611951.1664289506) center/cover no-repeat',
    width: "100%", height: "500px",

}

const care = [
    { src: "https://img.icons8.com/3d-fluency/512/hair-brush.png", title: 'Salon for Women' },
    { src: 'https://img.icons8.com/3d-fluency/512/communicate-skin-type-7.png', title: 'Hair,Skin & Nail' },
    { src: 'https://img.icons8.com/3d-fluency/512/stones.png', title: "Women's Therapist" },
    { src: "https://img.icons8.com/3d-fluency/512/barber-chair.png", title: "Salon for Men" },
    { src: "https://img.icons8.com/3d-fluency/512/stones.png", title: "Men's Therapist" },

]

const home = [
    { img: "https://img.icons8.com/3d-fluency/512/3d-fluency-tools.png", title: "Appliance Repair" },
    { img: "https://img.icons8.com/3d-fluency/512/roller-brush.png", title: "Home Painting" },
    { img: "https://img.icons8.com/3d-fluency/512/broom.png", title: "Cleaning & Pest" },
    { img: "https://img.icons8.com/3d-fluency/512/plus.png", title: "Disinfection" },
    { img: "https://img.icons8.com/3d-fluency/512/home.png", title: "Home Repairs" },


]

const services = [
    { img: "", title: "" },
    { img: "", title: "" },
    { img: "", title: "" },
    { img: "", title: "" },
    { img: "", title: "" },
    { img: "", title: "" },

]
function Home() {
    return (
        <Box>
            <Navbar />
            <Box >
                <Box sx={styleimg} filter='auto' ></Box>
            </Box>

            <Box position="absolute" top="150px" left="150px" width="80%" height="300px" backgroundColor="tranperant" margin="auto">
                <Box  >
                    <h1>Home services, on demand.</h1>
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
                        <Box style={{ margin: "10px 50px" }}>
                            <img src={item.src} alt="picture" style={{ width: "50px", height: "50px" }} />
                            <p>{item.title}</p>
                        </Box>
                    ))}
                </HStack>
            </Box>
            <h1 style={{ marginTop: "40px" }}>Home Services</h1>
            <Box style={boxShadow}>

                <HStack style={{ marginTop: "150px" }}>
                    {home.map((item) => (
                        <Box style={{ margin: "10px 50px" }}>
                            <img src={item.img} alt="picture" style={{ width: "50px", height: "50px" }} />
                            <p>{item.title}</p>
                        </Box>
                    ))}
                </HStack>
            </Box>
            <Footer />
        </Box >

    )
}
export default Home;