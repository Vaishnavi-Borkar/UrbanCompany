import { Routes, Route } from "react-router-dom";
import Home from "./Home"
import Help from "./Help";
import Login from "./Login"
import Register from "./Register";
import NotFound from "./NotFound";
import Modal from "./Modal";
import Product from "./Product";
import Service from "./Service";
function AllRoutes() {
    return (
        <>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/help" element={<Help />} />
                <Route path="*" element={<NotFound />} />
                <Route path="/modal" element={<Modal />} />
                <Route path="/product" element={<Product />} />
                <Route path="/service" element={<Service />} />
            </Routes>
        </>
    )
}

export default AllRoutes;