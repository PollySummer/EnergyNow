import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import ErrorModal from '../Body/ErrorModal';
import { getElectricityPrice, getGasPrice, getCurrentGasPrice } from '../services/apiServices';

function DateForm({ setElectricityPrice,
    setGasPrice,
    setGasCurrentPrice }) {

    const [errorMessage, setErrorMessage] = useState(null);

    const handleSubmit = async (event) => {
        //убрать стандартное поведение формы
        //target - с кем произошло событие и инпуты (что ввел пользователь)
        event.preventDefault();
        //обращение к элементам
        // console.log(event.target.from.value);
        const from = event.target.from.value;
        const to = event.target.to.value;

        try {
            const dataElectr = await getElectricityPrice({ to, from });
            if (!dataElectr.success) {
                throw dataElectr.messages[0];
            }

            setElectricityPrice(dataElectr.data);
            const dataGas = await getGasPrice({ to, from });
            if (!dataGas.success) {
                throw dataGas.messages[0];
            }
            setGasPrice(dataGas.data);

            const dataCurrent = await getCurrentGasPrice();
            if (!dataCurrent.success) {
                throw dataCurrent.messages[0];
            }
            setGasCurrentPrice(dataCurrent.data[0].price);
        } catch (error) {
            setErrorMessage(error);
        }
        console.log(from, to);
    };

    return (
        <>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3">
                    <Form.Label>From</Form.Label>
                    <Form.Control type="date" name='from' />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>To</Form.Label>
                    <Form.Control type="date" name='to' />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Search
                </Button>
            </Form>
            <ErrorModal errorMessage={errorMessage} handleClose={() => setErrorMessage(null)} />
        </>
    );
}

export default DateForm;