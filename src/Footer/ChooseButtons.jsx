import Button from 'react-bootstrap/Button';
import { useState } from 'react';

const first = 'first';
const second = 'second';
const third = 'third';
const fourth = 'fourth';
function ChooseButtons() {
    const [choose, setChoosen] = useState(false);

    return (
        <>
            <Button
                variant="primary"
                onClick={() => setChoosen(first)}
                active={choose === first}
            >1</Button>{' '}
            <Button
                variant="primary"
                onClick={() => setChoosen(second)}
                active={choose === second}
            >2</Button>{' '}
            <Button
                variant="primary"
                onClick={() => setChoosen(third)}
                active={choose === third}
            >3</Button>{' '}
            <Button
                variant="primary"
                onClick={() => setChoosen(fourth)}
                active={choose === fourth}
            >4</Button>{' '}
        </>
    );
}
export default ChooseButtons;