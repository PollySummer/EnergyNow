import './app.scss';
import Container from 'react-bootstrap/Container';
import Navigation from './Navigation/Navigation';
import Periods from './Footer/Periods';
import Body from './Body';

function App() {
  return (
    <Container>
      <Navigation />
      <Body />
      <Periods />
    </Container>
  );
}

export default App;
