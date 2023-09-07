import './app.scss';
import Container from 'react-bootstrap/Container';
import Navigation from './Navigation/Navigation';
import Body from './Body';
import Footer from './Footer';
import ErrorModal from './ErrorModal';

function App() {
  return (
    <Container>
      <Navigation />
      <Body
      />
      <ErrorModal />
      <Footer />
    </Container>
  );
}

export default App;
