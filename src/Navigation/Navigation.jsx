import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import { mainUrl } from '../Body/consts';

function Navigation() {
    return (
        <Navbar className="navigate mb-5">
            <Link to='/' className='navbar-brand me-5 main-link'>
                <img
                    alt=""
                    src={`${mainUrl}/flash.ico`}
                    width="35"
                    height="35"
                    className="d-inline-block align-top"
                />{' '}
                EnergyToday
            </Link>
            <Link className='nav-link me-5' to="/contact">About me</Link>
            <Link className='nav-link' to="/PricePage">Current price</Link>
        </Navbar>
    );
}

export default Navigation;