import { Routes, Route } from "react-router-dom";
import Home from "./Home"
import Help from "./Help";
import Login from "./Login"
import Register from "./Register";
import NotFound from "./NotFound";
function AllRoutes() {
    return (
        <>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/help" element={<Help />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </>
    )
}

export default AllRoutes;