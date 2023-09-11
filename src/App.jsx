import './app.scss';
import Container from 'react-bootstrap/Container';
import Navigation from './Navigation/Navigation';
import Body from './Body';
import Footer from './Footer';
import ErrorModal from './ErrorModal';
import Contact from './Contact';
import PricePage from './Prices/PricePage';
import { Routes, Route } from 'react-router-dom';
import useGetData from './effects/useGetData';
import AboutMe from './Contact/AboutMe';
import MyWorks from './Contact/MyWorks';
import ContactFooter from './Contact/ContactFooter';
import MyServices from './Contact/MyServices';

function App() {

  useGetData();

  const mainPage = (
    <>
      <Body />
      <Footer />
    </>
  );

  return (
    <Container>
      <Navigation />
      <Routes>
        <Route path="/" element={mainPage} />
        <Route path="/gas" element={mainPage} />
        <Route path="/gas/:dataType" element={mainPage} />
        <Route path="/electricity" element={mainPage} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/PricePage" element={<PricePage />} />
        <Route path="/PricePage/kw" element={<PricePage />} />
        {/* что бы не переиспользовать PricePage второй раз
        потом в pricePage принять {kw} и также через if
        и использовать useEffect с зависимостью на kw*/}

        {/* <Route path="/PricePage/kw" element={<PricePage kw/>} /> */}
        <Route path="/AboutMe" element={<AboutMe />} />
        <Route path="/MyWorks" element={<MyWorks />} />
        <Route path="/MyServices" element={<MyServices />} />
        <Route path="/ContactFooter" element={<ContactFooter />} />
      </Routes>
      <ErrorModal />
    </Container>
  );
}

export default App;
