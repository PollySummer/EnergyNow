import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import PriceTable from './PriceTable';
import { ELECTR } from './consts';
import Chart from './Chart';
import { ButtonGroup } from 'react-bootstrap';

function ShowTable() {
    const [activeEnergy, setActiveEnergy] = useState(ELECTR);

    const table = <PriceTable />;
    const chart = <Chart activeEnergy={activeEnergy} />;

    const [tableOrChart, setTableOrChart] = useState(false);

    return (
        <>
        <ButtonGroup className='my-5'>
            <Button onClick={() => setTableOrChart(true)}>
                Table
            </Button>
            <Button onClick={() => setTableOrChart(false)}>
                Chart
            </Button>
           
            </ButtonGroup>
            {tableOrChart ? table : chart}
        </>
    );
}
export default ShowTable;