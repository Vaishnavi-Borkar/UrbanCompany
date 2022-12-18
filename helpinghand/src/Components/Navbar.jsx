
import { HStack, Box, Spacer } from "@chakra-ui/react";
import { Link, NavLink } from "react-router-dom";

const links = [
    { path: "/", text: "Home" },
    { path: "/login", text: "Login" },
    { path: "/register", text: "Register As A Professional" },
    { path: "/help", text: "Help Center" }
]


function Navbar() {

    const defaultstyle = {
        color: "white",
        textDecoration: "none",
        padding: "0px 10px"
    }
    const activestyle = {
        color: "yellow",
        textDecoration: "none",
        padding: "0px 10px"
    }
    return (
        <div>
            <Box display="flex" backgroundColor="black">

                <Box>
                    <img style={{ cursor: "pointer", width: "200px", height: "80px" }} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFbyulT-JGYWgijetJaAu1NoGDPpB29uP7yQ&usqp=CAU" alt="Urban" />

                </Box>

                <Spacer />

                <div style={{ display: "flex", alignItems: "center" }}>
                    {links.map((link) => (
                        <NavLink
                            style={({ isActive }) => {
                                return isActive ? activestyle : defaultstyle;
                            }}
                            key={link.path}
                            to={link.path}
                        >
                            {link.text}
                        </NavLink>
                    ))}
                </div>

            </Box>
        </div >
    )
}
export default Navbar;