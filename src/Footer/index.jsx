import { useState } from "react";
import Periods from "./Periods"
import Sidebar from "./Sidebar";
function Footer(props) {
//useState - react hook, который инициализирует состояние компонента. Usestate возвразает массив из 2 элементов:
//1 - переменная, которая держит в себе значение
//2 - функция, которая меняет это значение.
// при запуске функции смены состояния компонент перезапускаетя/рендер
    const [showSideBar, setShowSideBar] = useState(false);
    return (
        <>
            <Periods setShowSideBar={setShowSideBar} {...props}/>
            <Sidebar show={showSideBar} handleClose={() => setShowSideBar(false)} {...props}/>
        </>
    )

}

export default Footer;