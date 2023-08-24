import './App.scss';
import Container from 'react-bootstrap/Container';
import Navigation from './Navigation/Navigation';
import Header from './Body/Header';
import Chart from './Body/Chart';
import Dates from './Footer/Dates';
import ChooseButtons from './Footer/ChooseButtons'

function App() {
  return (
    <Container>
      <Navigation />
      <Header />
      <Chart/>
      <Dates/>
      <ChooseButtons/>
    </Container>

  );
}

export default App;
