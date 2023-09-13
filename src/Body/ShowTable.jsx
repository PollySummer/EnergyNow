import { useEffect, useState } from 'react';
import PriceTable from './PriceTable';
import Chart from './Chart';
import { useParams } from 'react-router-dom';
import ToggleButtonGroup from 'react-bootstrap/ToggleButtonGroup';
import ToggleButton from 'react-bootstrap/ToggleButton';
import { useNavigate, useLocation } from "react-router-dom";

// {activeEnergy, electricityPrice,setElectricityPrice,gasPrice,setGasPrice}
function ShowTable(props) {
    const table = <PriceTable {...props} />;
    const chart = <Chart {...props} />;
    const { dataType } = useParams();

    const navigate = useNavigate()
    const { pathname } = useLocation();


    const [tableOrChart, setTableOrChart] = useState(false);

    useEffect(() => {
        if (dataType === 'chart') {
            setTableOrChart(false)
        } else if (dataType === 'table') {
            setTableOrChart(true)
        }
    }, [dataType]);


    const handleChart = () => {
        navigate((pathname.includes('/gas') ? '/gas' : '/ele') + '/chart');
        setTableOrChart(false);
    }

    const hanldeTable = () => {
        navigate((pathname.includes('/gas') ? '/gas' : '/ele') + '/table');
        setTableOrChart(true);
    }

    return (
        <div className='my-5'>
            <ToggleButtonGroup type="radio" name="options" defaultValue={1}>
                <ToggleButton
                    onClick={handleChart}
                    id="tbg-radio-1"
                    variant="outline-success"
                    value={1}>

                    Chart
                </ToggleButton>

                <ToggleButton
                    onClick={hanldeTable }
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