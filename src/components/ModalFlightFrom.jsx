import React, { useState } from "react";
import { Button, Modal, Image, Form } from "react-bootstrap";

function ModalFlightFrom() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const style = `
  .modal-flight-from {
    margin-top: -21rem;
  }

  .modal-search {
    border: 1px solid #D0D0D0;
  }

  .modal-search input:focus {
    outline-style: none !important;
  }

  .modal-search__img {
    width: 20px;
    height: 20px;
    opacity: 0.4;
  }

  .close-btn__img {
    width: 18px;
    height: 18px;
  }

  .history__text {
    color: #151515;
    font-weight: 500;
  }

  .delete-btn:hover, delete-btn:active {
    background-color: transparent !important;
  }

  .delete-btn__img {
    width: 12px;
    height: 12px;
  }
  `;

  return (
    <>
      <style>{style}</style>
      <div className="border-bottom text-dark col-7 pb-3" onClick={handleShow} style={{ cursor: "pointer" }}>
        <input className="border-0 bg-transparent" style={{ fontSize: "18px" }} defaultValue="" disabled hidden />
        Jakarta (JKTA)
      </div>

      <Modal size="lg" className="modal-flight-from position-relative" show={show} onHide={handleClose}>
        <Modal.Body>
          <div className="d-flex align-items-center">
            <Form className="modal-search d-flex py-1 px-1 rounded-2 col-11 me-auto">
              <Button className="delete-btn bg-transparent border-0">
                <Image className="modal-search__img " src="/search.svg" alt="search" />
              </Button>
              <input className="bg-transparent border-0 col-11" type="search" placeholder="Masukkan Kota atau Negara" aria-label="Search" />
            </Form>
            <Button className="delete-btn bg-transparent border-0" onClick={handleClose}>
              <Image className="close-btn__img" src="/close-button.svg" />
            </Button>
          </div>
          <div className="d-flex mt-4">
            <h5 className="me-auto">Pencarian Terkini</h5>
            <h5 className="text-danger">Hapus</h5>
          </div>
          <div className="d-flex align-items-center border-bottom mt-3">
            <p className="history__text me-auto">Jakarta</p>
            <Button className="delete-btn bg-transparent border-0">
              <Image className="delete-btn__img" src="close-button.svg" alt="delete icon" />
            </Button>
          </div>
          <div className="d-flex align-items-center border-bottom mt-3">
            <p className="history__text me-auto">Jakarta</p>
            <Button className="delete-btn bg-transparent border-0">
              <Image className="delete-btn__img" src="close-button.svg" alt="delete icon" />
            </Button>
          </div>
          <div className="d-flex align-items-center border-bottom mt-3">
            <p className="history__text me-auto">Jakarta</p>
            <Button className="delete-btn bg-transparent border-0">
              <Image className="delete-btn__img" src="close-button.svg" alt="delete icon" />
            </Button>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default ModalFlightFrom;
