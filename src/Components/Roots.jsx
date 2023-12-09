import { Outlet } from "react-router-dom";
import Navbar from "./Navbar/Navbar";
<link rel="stylesheet" href="index.css" />
const Roots = () => {
    return (
        <div className="font ">
            <Navbar></Navbar>
            <Outlet></Outlet>
        </div>
    );
};

export default Roots;