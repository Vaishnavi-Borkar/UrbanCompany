import { Text, Box, HStack, Grid, Image } from "@chakra-ui/react";


const line1 = ["About Us", "UC Impact", "Terms And Condition", "Privacy Policy", "Intrest-Based Advertising", "Anti Descrimination Policy",
    "Partner Welfare Policy"]
const line2 = ["Information Security Policy Statement & Objective", "Blog", "Near Me", "Careers", "Gift Card", "Quick Links"]

const india = ["Pune", "Nagpur", "Nashik", "Agra", "Amritsar", "Kanpur", "Mumbai", "Patna", "Ranchi", "Prayagraj", "Kota", "Kochi",
    "Alwar", "Amritsar", "Aurangabad", "Banglore", "Chennai", "Indore", "Jabalpur", "Delhi NCR", "Surat", "Vadodara", "Bhopal", "Bhubanewar", "Coimbatore",
    "Cuttack", "Guntur", "Guwahati"]
function Footer() {
    return (
        <Box style={{ marginTop: "80px" }}>

            <Box bgColor="black" color="#b8cccc"  >
                <Box display="flex" marginLeft="40px"
                >
                    {line1.map((item) => (
                        <Text style={{ padding: "1px 20px 3px 1px" }}>{item}</Text>
                    ))}
                </Box>
                <Box style={{ display: "flex", marginLeft: "40px" }}>
                    {line2.map((item1) => (
                        <Text style={{ padding: "1px 20px 3px 1px", marginTop: "-10px" }} >{item1}</Text>
                    ))}
                </Box>
                <hr />
                <Box style={{ display: "flex", justifyContent: "flex-start", marginLeft: "40px" }}><Text>Serving In</Text></Box>
                <Box style={{ display: "flex", justifyContent: "flex-start", marginLeft: "40px" }}><Text>USA</Text></Box>
                <HStack style={{ marginLeft: "40px", marginTop: "-10px" }}><Text>Austin</Text>
                    <Text>Dallas</Text>
                    <Text>New York City</Text></HStack>
                <Box>
                    <Text style={{ display: "flex", justifyContent: "flex-start", marginLeft: "40px" }}>IND</Text>
                    <Grid templateRows='repeat(5, 1fr)'
                        templateColumns='repeat(10, 1fr)'
                    >
                        {india.map((item3) => (
                            <Box padding="1px 20px 3px 1px" width='auto'>{item3}</Box>
                        ))}
                    </Grid>
                </Box>
                <Box style={{ display: "flex", justifyContent: "flex-start", marginLeft: "40px" }}><Text>UAE</Text></Box>
                <HStack style={{ marginLeft: "40px", marginTop: "-10px" }}><Text>Abu Dhabi</Text>
                    <Text>Dubai</Text>
                    <Text>Sharjah</Text></HStack>
                <Box style={{ display: "flex", justifyContent: "flex-start", marginLeft: "40px" }}><Text>SGP</Text></Box>
                <HStack style={{ marginLeft: "40px", marginTop: "-10px" }}><Text>Singapore</Text>
                </HStack>
            </Box>
            <HStack>
                <Box>
                    <Image />
                    <Text></Text>
                </Box>

                <HStack>

                </HStack>
            </HStack>
        </Box>
    )
}

export default Footer;