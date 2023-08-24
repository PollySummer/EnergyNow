// //это был мой первый вариант решения задания, но он мне показался слишком громоздким,
// //поэтому внизу второй вариант, заготовку которого я нашла на bootstrap-react  
import Button from 'react-bootstrap/Button';
import { useState } from 'react';
function ChooseButtons() {
    const [choose, setChoosen] = useState();

    return (
        <>

            <div className=' d-flex justify-content-center mb-5'>
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


//Нашла похожий компонент и сделала второй вариант решения, только он с radio buttons и через map
// import { useState } from 'react';
// import ButtonGroup from 'react-bootstrap/ButtonGroup';
// import ToggleButton from 'react-bootstrap/ToggleButton';

// function ChooseButtons() {

//     const [radioValue, setRadioValue] = useState('1');

//     const radios = [
//         { value: '1' }, { value: '2' }, { value: '3' }, { value: '4' },
//         { value: '5' }, { value: '6' }, { value: '7' }, { value: '8' },
//     ];

//     return (
//         <>
//             <div className='d-flex justify-content-center mb-5'>
//                 <ButtonGroup>
//                     {radios.map((radio, idx) => (
//                         <ToggleButton
//                             key={idx}
//                             id={`radio-${idx}`}
//                             type="radio"
//                             variant={idx = 'outline-warning'}
//                             value={radio.value}
//                             checked={radioValue === radio.value}
//                             onChange={(e) => setRadioValue(e.currentTarget.value)}
//                         >
//                             {radio.value}
//                         </ToggleButton>
//                     ))}
//                 </ButtonGroup>
//             </div>
//         </>
//     );
// }

// export default ChooseButtons;