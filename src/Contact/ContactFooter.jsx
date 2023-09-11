import Form from 'react-bootstrap/Form';
import { Button } from 'react-bootstrap';
import Toast from 'react-bootstrap/Toast';
import { useState } from 'react';

function ContactFooter() {
    const [show, setShow] = useState(false);

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
            <Button onClick={() => setShow(true)} className='aboutBtn mb-5' as="input" type="submit" value="Submit" />
            <Toast onClose={() => setShow(false)} show={show} delay={3000} autohide>
                <Toast.Header>
                    <img
                        src="holder.js/20x20?text=%20"
                        className="rounded me-2"
                        alt=""
                    />
                    <strong className="me-auto">EnergyToday</strong>
                    <small>Now</small>
                </Toast.Header>
                <Toast.Body>Thank you for contacting us. We will answer you very soon!</Toast.Body>
            </Toast>
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