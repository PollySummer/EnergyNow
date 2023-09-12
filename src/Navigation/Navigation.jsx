import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import { mainUrl } from '../Body/consts';

function Navigation() {
    return (
        <Navbar className="bg-body-tertiary ">
            <Container>
                <Link to='/' className='navbar-brand'>
                    <img
                        alt=""
                        src={`${mainUrl}/logo.svg`}
                        width="30"
                        height="30"
                        className="d-inline-block align-top"
                    />{' '}
                    EnergyToday
                    </Link>
                <Link className='nav-link' to="/contact">About me</Link>
                <Link className='nav-link' to="/PricePage">Current price</Link>
            </Container>
        </Navbar>
    );
}

export default Navigation;