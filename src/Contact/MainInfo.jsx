import Image from 'react-bootstrap/Image';
import { mainUrl } from '../Body/consts';

function MainIfo() {
    return (
        <div className='d-flex flex-column  align-items-center mainInfo'>
            <Image className='mainPhoto' src={`${mainUrl}/mainPhoto.JPG`} roundedCircle />
            <h2>Hi there!</h2>
            <p className='text-center lead'>My name is Polina Ivanenko! I'm a beginner front-end developer<br></br>
                based in Tallinn, Estonia. It's nice to meet you.
            </p>
        </div>
    );
}

export default MainIfo;