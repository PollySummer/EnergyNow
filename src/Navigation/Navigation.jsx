import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

function Navigation() {
    return (
        <Navbar className="bg-body-tertiary">
            <Container>
                <Link to='/' className='navbar-brand'>

                    <img
                        alt=""
                        src="/logo.svg"
                        width="30"
                        height="30"
                        className="d-inline-block align-top"
                    />{' '}
                    EnergyToday
                    </Link>
                <Link className='nav-link' to="/contact">Contact</Link>
                <Link className='nav-link' to="/gas">Gas</Link>
            </Container>
        </Navbar>
    );
}

export default Navigation;