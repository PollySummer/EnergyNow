import Button from 'react-bootstrap/Button';
function Dates() {
    return (
        <>
            <div className='d-flex align-items-center justify-content-center m-5'>
                <p className=' h3 me-3'>I want to consume</p>
                <Button href="#" variant="secondary" size="lg" disabled>
                    Tomorrow morning
                </Button>
            </div>
        </>
    );
}
export default Dates;