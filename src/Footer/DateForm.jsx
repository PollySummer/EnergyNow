
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { getElectricityPrice, getGasPrice } from '../services/apiServices';
import { setElectricityPrice, setErrorMessage, setGasPrice } from '../services/stateService';
import { useDispatch } from 'react-redux';

//компоненты принимают один аргумент - это property object, в нем хранятся все значения, которые мы откуда-то передали в компонент
//EXAMPLE
//Component <props1={1} props2={2}/>. Property передаются в компонент как атрибуты в html
//внутри компонента propery менять невозможно 
//property могут быть любым типом данных, которые существуют в nodeJs
// есть одно забронированное имя property - CHILDREN. В него записываются все элементы, переданные внутри компонента
function DateForm({ hideSideBar }) {
    const dispatch = useDispatch();

    const handleSubmit = async (event) => {
        //убрать стандартное поведение формы
        //target - с кем произошло событие и инпуты (что ввел пользователь)
        event.preventDefault();
        //обращение к элементам
        // console.log(event.target.from.value);
        const from = event.target.from.value;
        const to = event.target.to.value;

        try {
            const [dataElectr, dataGas] = await Promise.all([
                getElectricityPrice({ to, from }),
                getGasPrice({ to, from })
            ]);

            if (![dataElectr, dataGas].find(data => data.success)) {
                throw (dataElectr || dataGas).messages[0];
            }
            dispatch(setElectricityPrice(dataElectr.data));
            dispatch(setGasPrice(dataGas.data));
        } catch (error) {
            dispatch(setErrorMessage(error));
        } finally {
            hideSideBar();
        }
        console.log(from, to);

    };

    return (
        <>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3">
                    <Form.Label>From</Form.Label>
                    <Form.Control type="date" name='from' required />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>To</Form.Label>
                    <Form.Control type="date" name='to' />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Search
                </Button>
            </Form>
        </>
    );
}

export default DateForm;