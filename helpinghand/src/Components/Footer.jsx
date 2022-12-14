import { Text, Box, HStack, Grid } from "@chakra-ui/react";


const line1 = ["About Us", "UC Impact", "Terms And Condition", "Privacy Policy", "Intrest-Based Advertising", "Anti Descrimination Policy",
    "Partner Welfare Policy"]
const line2 = ["Information Security Policy Statement & Objective", "Blog", "Near Me", "Careers", "Gift Card", "Quick Links"]

const ind = ["Pune", "Nagpur", "Nashik", "Agra", "Amritsar", "Kanpur", "Mumbai", "Patna", "Ranchi", "Prayagraj", "DelhiNCR", "Kota", "Kochi"]
function Footer() {
    return (
        <>
            <Box bgColor="black" color="#b8cccc" >
                <div style={{ display: "flex", marginLeft: "40px" }}
                >
                    {line1.map((item) => (
                        <p style={{ padding: "1px 20px 3px 1px" }}>{item}</p>
                    ))}
                </div>
                <div style={{ display: "flex", marginLeft: "40px" }}>
                    {line2.map((item1) => (
                        <p style={{ padding: "1px 20px 3px 1px", marginTop: "-10px" }} >{item1}</p>
                    ))}
                </div>
                <hr />
                <div style={{ display: "flex", justifyContent: "flex-start", marginLeft: "40px" }}><Text>Serving In</Text></div>
                <div style={{ display: "flex", justifyContent: "flex-start", marginLeft: "40px" }}><Text>USA</Text></div>
                <HStack style={{ marginLeft: "40px", marginTop: "-10px" }}><Text>Austin</Text>
                    <Text>Dallas</Text>
                    <Text>New York City</Text></HStack>
                <div>
                    <p style={{ display: "flex", justifyContent: "flex-start", marginLeft: "40px" }}>IND</p>
                    <div style={{ display: "flex", marginLeft: "40px" }}>
                        {ind.map((item3) => (
                            <p style={{ padding: "1px 20px 3px 1px" }}>{item3}</p>
                        ))}
                    </div>
                </div>
            </Box>
        </>
    )
}

export default Footer;