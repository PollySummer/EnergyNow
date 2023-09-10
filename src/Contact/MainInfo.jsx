import Image from 'react-bootstrap/Image';

function MainIfo() {
    return (
        <div className='d-flex flex-column  align-items-center mainInfo'>
            <Image className='mainPhoto' src="/mainPhoto.JPG" roundedCircle />
            <h2>Hi there!</h2>
            <p className='mainText'>My name is Polina Ivanenko! I'm a beginner front-end developer<br></br>
                based in Tallinn, Estonia. It's nice to meet you.
            </p>
        </div>
    );
}

export default MainIfo;