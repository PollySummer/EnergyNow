import { useState, useEffect } from 'react';
import Header from './Header';
import './body.scss'
import ShowTable from './ShowTable';
import { getElectricityPrice, getGasPrice, getCurrentGasPrice } from '../services/apiServices';
import ErrorModal from './ErrorModal';
// import Chart from './Chart';
// import PriceTable from './PriceTable';

function Body({ selectedPeriod,
    activeEnergy, setActiveEnergy,
    electricityPrice, setElectricityPrice,
    gasPrice, setGasPrice,
    gasCurrentPrice, setGasCurrentPrice }) {

    const [errorMessage, setErrorMessage] = useState(null);
    //если данные будут как-то меняться
    // useEffect(() => {
    //     console.log('fetch');
    // }, [activeEnergy]);

    //если данные не будут меняться
    // useEffect(() => {
    //     console.log('fetch');
    // }, []);
    useEffect(() => {

        getElectricityPrice({selectedPeriod}).then(data => {
            console.log('ele', data);
            if (!data.success) {
                throw data.messages[0];
            }
            setElectricityPrice(data.data);

        })
            .catch(setErrorMessage);

        getGasPrice({selectedPeriod}).then(data => {
            console.log('gas', data);
            if (!data.success) {
                throw data.messages[0];
            }
            setGasPrice(data.data);
        })
            .catch(setErrorMessage); //для then

    }, [selectedPeriod, setGasPrice, setElectricityPrice]);


    useEffect(() => {
        getCurrentGasPrice().then(data => {
            console.log('current gas', data);
            if (!data.success) {
                throw data.messages[0];
            }
            setGasCurrentPrice(data.data[0].price);
        })
            .catch(setErrorMessage);
    }, [setGasCurrentPrice]);

    return (
        <>
            <Header activeEnergy={activeEnergy}
                setActiveEnergy={setActiveEnergy}
                electricityPrice={electricityPrice}
                gasCurrentPrice={gasCurrentPrice}
            />

            <ShowTable activeEnergy={activeEnergy}
                electricityPrice={electricityPrice}
                setElectricityPrice={setElectricityPrice}
                gasPrice={gasPrice}
                setGasPrice={setGasPrice}
            />

            <ErrorModal errorMessage={errorMessage} handleClose={() => setErrorMessage(null)} />

            {/* {dataType==='chart' ? <Chart activeEnergy={activeEnergy}/> : <PriceTable/>} */}
        </>
    );
}
export default Body;