import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import PriceTable from './PriceTable';
import { ELECTR } from './consts';
import Chart from './Chart';

function ShowTable() {
    const [activeEnergy, setActiveEnergy] = useState(ELECTR);

    const table = <PriceTable />;
    const chart = <Chart activeEnergy={activeEnergy} />;

    const [tableOrChart, setTableOrChart] = useState(false);
    
    return (
        <>
            <Button onClick={() => setTableOrChart(true)}>
                Table
            </Button>
            {tableOrChart ? table : chart}
        </>
    );
}
export default ShowTable;