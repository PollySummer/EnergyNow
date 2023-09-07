import './app.scss';
import Container from 'react-bootstrap/Container';
import Navigation from './Navigation/Navigation';
import Body from './Body';
import Footer from './Footer';
import ErrorModal from './ErrorModal';
import Contact from './Contact';
import { Routes, Route } from 'react-router-dom';
import useGetData from './effects/useGetData';

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
      </Routes>
      <ErrorModal />
    </Container>
  );
}

export default App;
