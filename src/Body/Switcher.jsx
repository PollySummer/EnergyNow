import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import { useState } from 'react';

const electr='electricity';
const gas='gas';
function Switcher() {
    const [activeButton, setActiveButton] = useState(electr);
    return (
        <ButtonGroup>
            <Button
                variant="secondary"
                onClick={() => setActiveButton(electr)}
                active={activeButton === electr}

            >Electricity</Button>
            <Button variant="secondary"
                onClick={() => setActiveButton(gas)}
                active={activeButton === gas}
            >Gas</Button>
        </ButtonGroup>
    );
}

export default Switcher;