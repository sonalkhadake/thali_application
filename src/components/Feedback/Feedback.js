
import { useState} from "react";
import { Button, Modal } from "react-bootstrap";
import Feedback_form from './Feedback_form'

 function Feedback() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div>
      
      <Button className='bttnn' variant="primary" onClick={handleShow}>
        Feedback
      </Button>

      <Modal className='Model' show={show} onHide={handleClose}>
        <Feedback_form />
      </Modal>
    </div>
  );
}export default Feedback
