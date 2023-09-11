import Carousel from 'react-bootstrap/Carousel';

function MyWorks() {
    return (
        <>
            <h2 className='text-center mt-5 mb-3'>My works</h2>
            <Carousel data-bs-theme="dark">
                <Carousel.Item>
                    <img
                        className="d-block w-40 m-auto"
                        src="myWork1.png"
                        alt="First slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-20 m-auto"
                        src="myWork2.png"
                        alt="Second slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-20 m-auto"
                        src="myWork3.png"
                        alt="Third slide"
                    />
                </Carousel.Item>
            </Carousel>
        </>
    );
}

export default MyWorks;