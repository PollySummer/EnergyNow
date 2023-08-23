import './App.scss';
import Container from 'react-bootstrap/Container';
import Navigation from './Navigation/Navigation';
import Header from './Body/Header';
import Chart from './Body/Chart';
import ChooseDays from './Body/ChooseDays';

function App() {
  return (
    <Container>
      <Navigation />
      <Header />
      <Chart/>
      <ChooseDays/>
    </Container>
  );
}

export default App;
