import MainIfo from "./MainInfo";
import AboutMe from "./AboutMe";
import MyServices from './MyServices';
import MyWorks from './MyWorks';
import ContactFooter from './ContactFooter';
import './style.scss'

function Contact() {
    return (
        <>
        <MainIfo/>
        <AboutMe/>
        <MyServices/>
        <MyWorks/>
        <ContactFooter/>
        </>
    );
}

export default Contact;