import Header from './Header';
import { useState } from 'react';
import { ELECTR } from './consts';
import './body.scss'
import ShowTable from './ShowTable';

function Body() {
    const [activeEnergy, setActiveEnergy] = useState(ELECTR);
    return (
        <>
            <Header activeEnergy={activeEnergy}
                setActiveEnergy={setActiveEnergy} />
            <ShowTable />
        </>
    );
}
export default Body;