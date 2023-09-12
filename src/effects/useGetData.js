import { useEffect } from "react";
import { getElectricityPrice, getGasPrice, getCurrentGasPrice } from "../services/apiServices";
import { setElectricityPrice, setGasPrice, setErrorMessage, setGasCurrentPrice } from "../services/stateService";
import { useDispatch, useSelector } from "react-redux";

const useGetData = () => {
    const dispatch = useDispatch();
    const selectedPeriod = useSelector((state) => state.selectedPeriod);

    useEffect(() => {
        getElectricityPrice({ selectedPeriod }).then(data => {
            if (!data.success) {
                throw data.messages[0];
            }
            dispatch(setElectricityPrice(data.data));
        })
            .catch((error) => dispatch(setErrorMessage(error)));

        getGasPrice({ selectedPeriod }).then(data => {
            if (!data.success) {
                throw data.messages[0];
            }
            dispatch(setGasPrice(data.data));
        })
            .catch((error) => dispatch(setErrorMessage(error))); //для then

    }, [selectedPeriod, dispatch]);


    useEffect(() => {
        getCurrentGasPrice().then(data => {
            if (!data.success) {
                throw data.messages[0];
            }
            dispatch(setGasCurrentPrice(data.data[0].price));
        })
            .catch((error) => dispatch(setErrorMessage(error)));
    }, [dispatch]);
}

export default useGetData;