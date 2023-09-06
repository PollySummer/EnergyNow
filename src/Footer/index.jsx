import { useState } from "react";
import Periods from "./Periods"
import Sidebar from "./Sidebar";
function Footer(props) {
    const [showSideBar, setShowSideBar] = useState(false);
    return (
        <>
            <Periods setShowSideBar={setShowSideBar} {...props}/>
            <Sidebar show={showSideBar} handleClose={() => setShowSideBar(false)} {...props}/>
        </>
    )

}

export default Footer;