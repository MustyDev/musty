import React, { useState } from "react";

import {
  Jumbotron,
  Container,
  Form,
  InputGroup,
  Button,
  Modal,
} from "react-bootstrap";

import "../Assets/Donate/Donate.scss";

const Donate = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Donasi
      </Button>

      <Modal show={show} onHide={handleClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>Silahkan Masukan Jumlah Donasi Anda</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <InputGroup>
            <InputGroup.Prepend>
              <InputGroup.Text id="inputGroupPrepend">Rp</InputGroup.Text>
            </InputGroup.Prepend>
            <Form.Control
              type="number"
              name="donasi"
              placeholder="0"
            ></Form.Control>
          </InputGroup>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Kirim Donasi
          </Button>
        </Modal.Footer>
      </Modal>
    </>
    // <div>
    //   <div>
    //     <Jumbotron className="jumbotronDonate darkenImage">
    //       <Container>
    //         <h1>Donasi</h1>
    //       </Container>
    //     </Jumbotron>
    //   </div>
    //   <div>
    //     <Container className="containerDonate">
    //       <Form className="shadow p-3 mb-5 bg-white rounded">
    //         <Form.Group>
    //           <Form.Label>Masukan Nominal Donasi</Form.Label>
    //           <InputGroup>
    //             <InputGroup.Prepend>
    //               <InputGroup.Text id="inputGroupPrepend">Rp</InputGroup.Text>
    //             </InputGroup.Prepend>
    //             <Form.Control
    //               type="number"
    //               name="donasi"
    //               placeholder="0"
    //             ></Form.Control>
    //           </InputGroup>
    //         </Form.Group>
    //         <Button className="buttonDonasi" type="submit">
    //           Donasi
    //         </Button>
    //       </Form>
    //     </Container>
    //   </div>
    // </div>
  );
};

export default Donate;
