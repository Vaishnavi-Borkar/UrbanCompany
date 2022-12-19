import { Box, HStack, Spacer, Flex, Input, InputGroup, InputLeftAddon } from "@chakra-ui/react";
import Footer from "../Components/Footer";

function Register() {
    return (
        <>
            <Flex style={{ height: "80px", justifyContent: "center", alignItems: "center" }}>

                <img style={{ width: "200px", height: "80px" }} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFbyulT-JGYWgijetJaAu1NoGDPpB29uP7yQ&usqp=CAU" alt="logo" />
                <Spacer />
                <HStack>
                    <Box style={{ padding: "1px 20px 1px 10px" }}>Book a service</Box>
                    <Box style={{ padding: "1px 20px 1px 10px" }}>About us</Box>
                </HStack>

            </Flex>
            <Box style={{ width: "100%", height: "500px", backgroundColor: "#eff8ff ", }}>
                <HStack>
                    <Box style={{ width: "50%", height: "500px", margin: "10px 80px" }}>
                        <h1>Earn More.Earn Respect.</h1>
                        <h1>Safety Ensured.</h1>
                        <h3>
                            join 30,000+ partners across India, Australia,
                            Singapore and UAE.
                        </h3>
                    </Box>
                    <Box style={{ width: "50%", height: "500px", margin: "10px 80px" }}>
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWo1slrsHvrLjn75oFjmRrXqahu3NJITH0gw&usqp=CAU" alt="image" style={{ width: "100%", height: "500px" }} />
                    </Box>
                </HStack>
            </Box>
            <Box style={{ width: "70%", height: "180px", backgroundColor: "#437eff ", borderRadius: "20px", position: "absolute", top: "450px", left: "150px" }}>
                <Box>
                    <h2>Start earning straight away.Share your details and we will reach out with next step.</h2>
                </Box>
                <HStack style={{ alignItems: "center", justifyContent: "center", marginTop: "50px" }}>
                    <input placeholder="Name" style={{ padding: "10px 35px 10px 5px", borderRadius: "10px" }} />
                    <select style={{ padding: "10px 10px 10px 5px", borderRadius: "10px" }}>
                        <option>+91</option>
                        <option>+1</option>
                        <option>+65</option>
                    </select>
                    <input placeholder="Your phone number" style={{ padding: "10px 20px 10px 5px", borderRadius: "10px" }} />
                    <input placeholder="What do you do ?" style={{ padding: "10px 20px 10px 5px", borderRadius: "10px" }} />
                    <button style={{ padding: "10px 15px 10px 5px", borderRadius: "5px", backgroundColor: "white", color: "#437eff " }}>Get in touch</button>
                </HStack>
            </Box>
            <Box style={{ marginTop: "100px" }}>
                <h1>Join Urban Company to change your life</h1>
                <h2>Urban Company is app-based marketplace that empowers Professional like you to become your own boss</h2>
            </Box>
            <HStack style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                <Box style={{ padding: "10px 40px" }}>
                    <h1 style={{ color: "#018b2e" }}>30,000+</h1>
                    <p>Partners already on board</p>
                </Box>
                <Box style={{ padding: "10px 40px" }}>
                    <h1 style={{ color: "#018b2e" }}>₹ 566Cr</h1>
                    <p>Paid out to partners in 2019</p>
                </Box>
                <Box style={{ padding: "10px 40px" }}>
                    <h1 style={{ color: "#018b2e" }}>750,000+</h1>
                    <p>Service delivered each month</p>
                </Box>
            </HStack>
            <Box>
                <Box>
                    <h1>Wondering  who can join ?</h1>
                    <h3>If you have one year of related experience in any of this field ,you can join Urban Company</h3>
                </Box>
                <HStack style={{ display: "flex", alignItems: "center", justifyContent: "center", marginTop: "50px" }}>
                    <Box style={{ padding: "10px 40px" }}>
                        <img style={{ width: "80px", height: "80px", borderRadius: "50%" }} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1vjK5CP_7YnsPGuas4YRs7Wg8ZtXHBbcn4w&usqp=CAU" alt="salon" />
                        <p>Salon</p>
                    </Box>
                    <Box style={{ padding: "10px 40px" }}>
                        <img style={{ width: "80px", height: "80px", borderRadius: "50%" }} src="data:image/png;base64,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" alt="cleaning" />
                        <p>Cleaning</p>
                    </Box>
                </HStack>
            </Box>
            <Footer />
        </>

    )
}
export default Register;