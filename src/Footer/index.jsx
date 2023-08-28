import { useState } from "react";
// import DataSwitcher from "./DataSwitcher";
import Periods from "./Periods"
import Sidebar from "./Sidebar";
function Footer(props) {
    const [showSideBar, setShowSideBar] = useState(false);
    return (
        <>
            {/* <DataSwitcher {...props}/> */}
            <Periods setShowSideBar={setShowSideBar} />
            <Sidebar show={showSideBar} handleClose={() => setShowSideBar(false)} />
        </>
    )

}

export default Footer;