import './app.scss';
import Container from 'react-bootstrap/Container';
import Navigation from './Navigation/Navigation';
import Body from './Body';
import Footer from './Footer';

function App() {
  return (
    <Container>
      <Navigation />
      <Body />
      <Footer />
    </Container>
  );
}

export default App;
