import {useEffect } from 'react';
import Header from './Header';
import './body.scss'
import ShowTable from './ShowTable';
import { getElectricityPrice, getGasPrice, getCurrentGasPrice } from '../services/apiServices';

import {
    setElectricityPrice, setGasPrice,
    setActiveEnergy, setGasCurrentPrice,
    setErrorMessage
} from '../services/stateService';
import { useSelector, useDispatch } from 'react-redux';



function Body() {
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
            .catch((error) => dispatch(setErrorMessage(error)));

        getGasPrice({ selectedPeriod }).then(data => {
            console.log('gas');
            if (!data.success) {
                throw data.messages[0];
            }
            dispatch(setGasPrice(data.data));
        })
            .catch((error) => dispatch(setErrorMessage(error))); //для then

    }, [selectedPeriod, dispatch]);


    useEffect(() => {
        getCurrentGasPrice().then(data => {
            console.log('current gas', data);
            if (!data.success) {
                throw data.messages[0];
            }
            dispatch(setGasCurrentPrice(data.data[0].price));
        })
            .catch((error) => dispatch(setErrorMessage(error)));
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



        </>
    );
}
export default Body;