import Badge from 'react-bootstrap/Badge';

const price = 'low';

function PriceInfo() {

    return (
        <>
            <h3>Price is: </h3>
            {/* если цена - низкая ? значит "то" лоу : это вместо елс*/}
            {price === 'low' ? <Badge bg="success">Low</Badge> : <Badge bg="danger">Hight</Badge>}
        </>
    );
}

export default PriceInfo;