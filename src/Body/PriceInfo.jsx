import Badge from 'react-bootstrap/Badge';
import { NOW_TIMESTAMP } from './consts';
import { LOW_ELE_PRICE } from './consts';
import { useSelector } from 'react-redux';

function PriceInfo() {

    const electricityPrice = useSelector((state) => state.electricityPrice);

    const currentPrice = electricityPrice?.ee.find(item => item.timestamp === NOW_TIMESTAMP);

    return (
        <>
            <h3>Price is: </h3>
            {currentPrice?.price <= LOW_ELE_PRICE ?
                <Badge bg="success">Low</Badge> :
                <Badge bg="danger">Hight</Badge>}
        </>
    );
}

export default PriceInfo;