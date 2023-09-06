import { useState, useEffect } from 'react';
import Header from './Header';
import './body.scss'
import ShowTable from './ShowTable';
import { getElectricityPrice, getGasPrice, getCurrentGasPrice } from '../services/apiServices';
import ErrorModal from './ErrorModal';
import {
    setElectricityPrice, setGasPrice,
    setActiveEnergy, setGasCurrentPrice
} from '../services/stateService';
import { useSelector, useDispatch } from 'react-redux';



function Body() {

    const [errorMessage, setErrorMessage] = useState(null);
    const gasPrice = useSelector((state) => state.gasPrice);
    const activeEnergy = useSelector((state) => state.activeEnergy);
    const selectedPeriod = useSelector((state) => state.selectedPeriod);
    const gasCurrentPrice = useSelector((state) => state.gasCurrentPrice);
    const dispatch = useDispatch();

    useEffect(() => {

        getElectricityPrice({ selectedPeriod }).then(data => {
            console.log('ele');
            if (!data.success) {
                throw data.messages[0];
            }
            dispatch(setElectricityPrice(data.data));
        })
            .catch(setErrorMessage);

        getGasPrice({ selectedPeriod }).then(data => {
            console.log('gas');
            if (!data.success) {
                throw data.messages[0];
            }
            dispatch(setGasPrice(data.data));
        })
            .catch(setErrorMessage); //для then

    }, [selectedPeriod, dispatch]);


    useEffect(() => {
        getCurrentGasPrice().then(data => {
            console.log('current gas', data);
            if (!data.success) {
                throw data.messages[0];
            }
            dispatch(setGasCurrentPrice(data.data[0].price));
        })
            .catch(setErrorMessage);
    }, [dispatch]);

    return (
        <>
            <Header activeEnergy={activeEnergy}
                setActiveEnergy={setActiveEnergy}
                gasCurrentPrice={gasCurrentPrice}
            />

            <ShowTable activeEnergy={activeEnergy}
                gasPrice={gasPrice}
                setGasPrice={setGasPrice}
            />

            <ErrorModal errorMessage={errorMessage} handleClose={() => setErrorMessage(null)} />

        </>
    );
}
export default Body;