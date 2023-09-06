import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import { ELECTR, GAS } from './consts'
import { setActiveEnergy } from '../services/stateService';
import { useSelector, useDispatch } from 'react-redux';
function Switcher() {
    const activeEnergy = useSelector((state) => state.activeEnergy);
    const dispatch = useDispatch();

    return (
        <>
            <ButtonGroup>
                <Button className='text-capitalize'
                    variant="secondary"
                    onClick={() => dispatch(setActiveEnergy(ELECTR))}
                    active={activeEnergy === ELECTR}

                >{ELECTR}</Button>
                <Button className='text-capitalize'
                    variant="secondary"
                    onClick={() => dispatch(setActiveEnergy(GAS))}
                    active={activeEnergy === GAS}
                >{GAS}</Button>
            </ButtonGroup>
        </>
    );
}

export default Switcher;