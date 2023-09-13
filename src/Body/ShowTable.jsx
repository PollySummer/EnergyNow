import { useEffect, useState } from 'react';
import PriceTable from './PriceTable';
import Chart from './Chart';
import { useParams } from 'react-router-dom';
import ToggleButtonGroup from 'react-bootstrap/ToggleButtonGroup';
import ToggleButton from 'react-bootstrap/ToggleButton';

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
        <div className='my-5'>
            <ToggleButtonGroup type="radio" name="options" defaultValue={1}>
                <ToggleButton 
                onClick={() => setTableOrChart(false)} 
                id="tbg-radio-1" 
                variant="outline-success"
                value={1}>
                    
                    Chart
                </ToggleButton>

                <ToggleButton 
                onClick={() => setTableOrChart(true)} 
                id="tbg-radio-2" 
                variant="outline-success"
                value={2}>
                    Table
                </ToggleButton>
            </ToggleButtonGroup>
            {tableOrChart ? table : chart}
        </div>
    );
}
export default ShowTable;