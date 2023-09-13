import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import { ELECTR, GAS } from './consts'
import { setActiveEnergy } from '../services/stateService';
import { useSelector, useDispatch } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

function Switcher() {
    const activeEnergy = useSelector((state) => state.activeEnergy);
    const dispatch = useDispatch();
    const { pathname } = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        if (pathname === '/gas') {
            dispatch(setActiveEnergy(GAS));
        } else {
            dispatch(setActiveEnergy(ELECTR));
        }
    }, [pathname, dispatch]);

    return (
        <>
            <ButtonGroup>
                <Button className='text-capitalize buttons'
                    variant="outline-success"
                    onClick={() => navigate('/electricity')}
                    active={activeEnergy === ELECTR}
                >{ELECTR}</Button>
                <Button className='text-capitalize'
                    variant="outline-success"
                    onClick={() => navigate('/gas')}
                    active={activeEnergy === GAS}
                >{GAS}</Button>
            </ButtonGroup>
        </>
    );
}

export default Switcher;