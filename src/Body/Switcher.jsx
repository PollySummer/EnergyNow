import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import { ELECTR, GAS } from './consts'
function Switcher({ activeEnergy, setActiveEnergy }) {

    return (
        <>
            <ButtonGroup>
                <Button className='text-capitalize'
                    variant="secondary"
                    onClick={() => setActiveEnergy(ELECTR)}
                    active={activeEnergy === ELECTR}

                >{ELECTR}</Button>
                <Button className='text-capitalize'
                    variant="secondary"
                    onClick={() => setActiveEnergy(GAS)}
                    active={activeEnergy === GAS}
                >{GAS}</Button>
            </ButtonGroup>
        </>
    );
}

export default Switcher;