import Button from 'react-bootstrap/Button';
import { useState } from 'react';

function ChooseButtons() {
    const [choose, setChoosen] = useState(false);

    return (
        <>
            <div className=' d-flex justify-content-center'>
                <Button
                    className='me-2'
                    variant="warning"
                    onClick={() => setChoosen('first')}
                    active={choose === 'first'}
                >1</Button>{' '}
                <Button
                    className='me-2'
                    variant="warning"
                    onClick={() => setChoosen('second')}
                    active={choose === 'second'}
                >2</Button>{' '}
                <Button
                    className='me-2'
                    variant="warning"
                    onClick={() => setChoosen('third')}
                    active={choose === 'third'}
                >3</Button>{' '}
                <Button
                    className='me-2'
                    variant="warning"
                    onClick={() => setChoosen('fourth')}
                    active={choose === 'fourth'}
                >4</Button>{' '}
                <Button
                    className='me-2'
                    variant="warning"
                    onClick={() => setChoosen('fifth')}
                    active={choose === 'fifth'}
                >5</Button>{' '}
                <Button
                    className='me-2'
                    variant="warning"
                    onClick={() => setChoosen('sixth')}
                    active={choose === 'sixth'}
                >6</Button>{' '}
                <Button
                    className='me-2'
                    variant="warning"
                    onClick={() => setChoosen('seventh')}
                    active={choose === 'seventh'}
                >7</Button>{' '}
                <Button
                    className='me-2'
                    variant="warning"
                    onClick={() => setChoosen('eight')}
                    active={choose === 'eight'}
                >8</Button>{' '}
            </div>
        </>
    );
}
export default ChooseButtons;