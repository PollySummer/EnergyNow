import Header from './Header';
import './body.scss'
import ShowTable from './ShowTable';
import {
    setGasPrice,
    setActiveEnergy
} from '../services/stateService';
import { useSelector} from 'react-redux';

function Body() {
    const gasPrice = useSelector((state) => state.gasPrice);
    const activeEnergy = useSelector((state) => state.activeEnergy);
    const gasCurrentPrice = useSelector((state) => state.gasCurrentPrice);

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