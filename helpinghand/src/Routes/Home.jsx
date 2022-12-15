import { HStack, Box, Spacer, Select, Input, Flex, Image } from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";
const styleimg = {

    background:
        'url(https://img.freepik.com/premium-photo/young-man-cleaning-sofa-with-vacuum-cleaner-leaving-room-home_130111-3594.jpg?size=626&ext=jpg&ga=GA1.2.1668611951.1664289506) center/cover no-repeat',
    width: "100%", height: "500px",

}
function Home() {
    return (
        <Box>
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
        </Box>

    )
}
export default Home;