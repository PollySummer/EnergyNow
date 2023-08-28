import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import PriceTable from './PriceTable';
import { ELECTR } from './consts';
import Chart from './Chart';
import { ButtonGroup } from 'react-bootstrap';


function ShowTable() {
    const [activeEnergy] = useState(ELECTR);
    const [electricityPrice, setElectricityPrice] = useState(null);
    const [gasPrice, setGasPrice] = useState(null);

    const table = <PriceTable electricityPrice={electricityPrice} gasPrice={gasPrice}/>;
    const chart = <Chart electricityPrice={electricityPrice} activeEnergy={activeEnergy} gasPrice={gasPrice}/>;

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