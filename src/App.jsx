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

//компонент это функция, которая возвращает ОДИН элемент и только один!
//КОМПОНЕНТЫ называются с большой буквы, что бы их можно было отличить от ЭЛМЕНТОВ в jsx
//JSX - новый синтаксис от реакт, который позволяет писать node.js внутри html

function App() {
  useGetData();
  const mainPage = (
    <>
      <Body />
      <Footer />
    </>
  );

//ссылки в реакт-роутер-дом называюся маршрут или "rout"
//у каждого маршрута есть свой путь (path) и элемент, который должен запуститься
//при изменении ссылки компонент, который был отрисован, react-router-dom запускает процесс unmount компонента
//и новый компонент запускает процесс unmount
// мы можем передать любую инфу в компонент через ссылки. Это назыв. поисковые параметры (search params)
//в классическом виде: http://neti.ee?dataType=electricity
//в react-router-dom можно создать читабельные ссылки и через / передать нкжную инфу
//example: neti.ee/electricity
//значение electricity запишется в назначенный нам param через :{paramName}
//в нашем случае новый парам dataType с знач 'ele'

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
