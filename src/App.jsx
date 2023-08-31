import './app.scss';
import Container from 'react-bootstrap/Container';
import Navigation from './Navigation/Navigation';
import Body from './Body';
import Footer from './Footer';
import { useState } from 'react';
import { PERIODS } from './Body/consts';
import { ELECTR } from './Body/consts';

function App() {
  const [dataType, setDataType] = useState('chart');
  const [selectedPeriod, setSelectedPeriod] = useState(PERIODS[0].value);
  const [activeEnergy, setActiveEnergy] = useState(ELECTR);

  return (
    <Container>
      <Navigation />
      <Body dataType={dataType} selectedPeriod={selectedPeriod} 
      activeEnergy={activeEnergy}
      setActiveEnergy={setActiveEnergy}/>
      <Footer
        dataType={dataType}
        setDataType={setDataType}
        selectedPeriod={selectedPeriod}
        setSelectedPeriod={setSelectedPeriod}
        activeEnergy={activeEnergy}
      />
    </Container>
  );
}

export default App;
