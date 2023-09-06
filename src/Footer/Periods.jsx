import Button from 'react-bootstrap/Button';
import { Container } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import { PERIODS } from '../Body/consts';
import { setSelectedPeriod } from '../services/stateService';

function Periods({ setShowSideBar }) {

    const activeEnergy = useSelector((state) => state.activeEnergy);
    const selectedPeriod = useSelector((state) => state.selectedPeriod);

    const dispatch = useDispatch();
    return (
        <Container className='text-center my-2'>
            {
                PERIODS.map(({ label, value }) =>
                    <Button
                        className='mx-2'
                        key={value}
                        variant='primary'
                        active={selectedPeriod === value}
                        onClick={() => dispatch(setSelectedPeriod(value))}
                    >
                        {value} {label[activeEnergy]}
                    </Button>)
            }

            <Button
                className='mx-2'
                variant='primary'
                onClick={() => setShowSideBar(true)}
            >
                Custom
            </Button>
        </Container>
    );
}
export default Periods;