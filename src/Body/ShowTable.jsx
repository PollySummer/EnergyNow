import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import PriceTable from './PriceTable';
import Chart from './Chart';
import { ButtonGroup } from 'react-bootstrap';
import { useParams } from 'react-router-dom';

// {activeEnergy, electricityPrice,setElectricityPrice,gasPrice,setGasPrice}
function ShowTable(props) {
    const table = <PriceTable {...props} />;
    const chart = <Chart {...props} />;
    const { dataType } = useParams();

    const [tableOrChart, setTableOrChart] = useState(false);

    useEffect(() => {
        if (dataType === 'chart') {
            setTableOrChart(false)
        } else if (dataType === 'table') {
            setTableOrChart(true)
        }
    }, [dataType]);
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