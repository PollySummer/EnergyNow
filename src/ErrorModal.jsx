import Modal from 'react-bootstrap/Modal';
import { Button } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import { setErrorMessage } from './services/stateService';

function ErrorModal() {
    //нужен для того, чтобы передавать экшн в редакс. Он - связной между реакт и редакс
    //принимает в себя экшн и отправляет экшн в редакс вместе с новыми данными
    const dispath = useDispatch();

    //useSelector - hook-listener, который слушает ему назначенное состояние
    //при изменении компонет перезапускается
    const errorMessage = useSelector((state) => state.errorMessage);
    const handleClose = () => dispath(setErrorMessage(null));
    return (
        <>
            <Modal show={!!errorMessage} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Error </Modal.Title>
                </Modal.Header>
                <Modal.Body>{errorMessage}</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}
export default ErrorModal;