import Form from 'react-bootstrap/Form';
import { Button } from 'react-bootstrap';

function ContactFooter() {
    return (
        <div className='d-flex flex-column align-items-center'>
            <h2 className='text-center mt-5 mb-3'>Contact Me</h2>
            <Form className='w-50 m-auto'>
                <Form.Group className="mb-3">
                    <Form.Control type="text" placeholder="Name" />

                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Control type="email" placeholder="name@example.com" />
                </Form.Group>
                <Form.Group className="mb-3" >
                    <Form.Control as="textarea" rows={3} />
                </Form.Group>
            </Form>
            <Button className='aboutBtn mb-5' as="input" type="submit" value="Submit" />
            <div className='text-center p-4'>
                © 2023 All rights reserved
                <a className='nav-link' href='/'>
                    ReactApp | EnergyToday
                </a>
            </div>
        </div>
    );
}

export default ContactFooter;