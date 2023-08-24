import Header from './Header';
import Chart from './Chart';
import { useState } from 'react';
import {ELECTR} from './consts';

import './body.scss'

function Body() {
    const [activeEnergy, setActiveEnergy] = useState(ELECTR);
    return (
        <>
            <Header activeEnergy={activeEnergy}
                setActiveEnergy={setActiveEnergy} />
            <Chart activeEnergy={activeEnergy}/>
        </>
    );
}
export default Body;