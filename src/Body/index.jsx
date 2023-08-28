import Header from './Header';
import { useState, useEffect } from 'react';
import { ELECTR } from './consts';
import './body.scss'
import ShowTable from './ShowTable';
// import Chart from './Chart';
// import PriceTable from './PriceTable';
import { getElectricityPrice, getGasPrice } from '../services/apiServices';

function Body({ dataType, selectedPeriod }) {
    const [activeEnergy, setActiveEnergy] = useState(ELECTR);
    const [electricityPrice, setElectricityPrice] = useState(null);
    const [gasPrice, setGasPrice] = useState(null);
    
    //если данные будут как-то меняться
    // useEffect(() => {
    //     console.log('fetch');
    // }, [activeEnergy]);

    //если данные не будут меняться
    // useEffect(() => {
    //     console.log('fetch');
    // }, []);
    useEffect(() => {
        getElectricityPrice(selectedPeriod).then(data => {
            console.log(data);
            setElectricityPrice(data.data);

        })
        getGasPrice(selectedPeriod).then(data => {
            console.log('gas', data);
            setGasPrice(data.data);
        })
    }, [selectedPeriod]);

    return (
        <>
            <Header activeEnergy={activeEnergy}
                setActiveEnergy={setActiveEnergy} />
            {/* {dataType==='chart' ? <Chart activeEnergy={activeEnergy}/> : <PriceTable/>} */}
            <ShowTable/>
        </>
    );
}
export default Body;