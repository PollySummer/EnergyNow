import Header from './Header';
import { useState } from 'react';
import { ELECTR } from './consts';
import './body.scss'
import ShowTable from './ShowTable';
// import Chart from './Chart';
// import PriceTable from './PriceTable';

function Body({dataType}) {
    const [activeEnergy, setActiveEnergy] = useState(ELECTR);
    return (
        <>
            <Header activeEnergy={activeEnergy}
                setActiveEnergy={setActiveEnergy} />
                {/* {dataType==='chart' ? <Chart activeEnergy={activeEnergy}/> : <PriceTable/>} */}
            <ShowTable />
        </>
    );
}
export default Body;