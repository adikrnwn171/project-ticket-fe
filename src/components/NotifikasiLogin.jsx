import React from "react";
import { Container,Col,Row,} from "react-bootstrap";
import { Link } from "react-router-dom";
import NavbarUser from "./NavbarUser";
import Header from "./Header";

import "bootstrap/dist/css/bootstrap.min.css";
import "./NavbarHomepage.css";

import bel from "/bel.svg";
import buletijo from "/buletijo.svg";
import buletmerah from "/buletmerah.svg";

const style = `
  .content{
    padding-left:150px !important;
  }
  `;

const NotifikasiLogin = () => {
  return (
    <>
      <style>{style}</style>
      <NavbarUser />
      <div className="border-bottom shadow-sm">
        <Container className="history mb-10">
          <div className="d-flex">
            <h4 className="fw-bold"> Notifikasi</h4>
          </div>
          <Header/>
        </Container>
      </div >
      <div className="content">
      <Container className="d-flex justify-content-center">
        <Row className="d-flex mt-4" style={{ width: "100%" }}>
          <Col md={1} className="d-flex justify-content-end">
            <div>
              <img src={bel} />
            </div>
          </Col>
          <Col md={10}>
            <Row>
              <Col
                md={3}
                className="m-0 p-0"
                style={{ fontSize: "14px", color: "#8A8A8A" }}
              >
                Promosi
              </Col>
              <Col
                md={{ span: 3, offset: 6 }}
                className="justify-content-end d-flex"
                style={{ fontSize: "14px", color: "#8A8A8A" }}
              >
                20 Maret, 14:04 <img src={buletijo} className="m-1" />
              </Col>
              <Col md={12} className="m-0 p-0" style={{ fontSize: "16px" }}>
                <p className="m-0 p-0">Dapatkan Potongan Tiket 50% Tiket !</p>
                <p
                  className="m-0 p-0"
                  style={{ fontSize: "14px", color: "#8A8A8A" }}
                >
                  Syarat Dan Ketentuan berlaku
                </p>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>

      <Container>
        <hr />
      </Container>

      <Container className="d-flex justify-content-center">
        <Row className="d-flex mt-4" style={{ width: "100%" }}>
          <Col md={1} className="d-flex justify-content-end">
            <div>
              <img src={bel} />
            </div>
          </Col>
          <Col md={10}>
            <Row>
              <Col
                md={3}
                className="m-0 p-0"
                style={{ fontSize: "14px", color: "#8A8A8A" }}
              >
                Notifikasi
              </Col>
              <Col
                md={{ span: 3, offset: 6 }}
                className="justify-content-end d-flex"
                style={{ fontSize: "14px", color: "#8A8A8A" }}
              >
                5 Maret, 14:04 <img src={buletmerah} className="m-1" />
              </Col>
              <Col md={12} className="m-0 p-0" style={{ fontSize: "16px" }}>
                <p className="m-0 p-0">Terdapat perubahan pada jadwal penerbangan kode booking 45GT6. Cek jadwal perjalanan Anda disini!</p>
                <p
                  className="m-0 p-0"
                  style={{ fontSize: "14px", color: "#8A8A8A" }}
                >
                  Syarat Dan Ketentuan berlaku
                </p>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>

      </div>
      

      {/* <Container className="d-flex justify-content-center mt-4">
        <Row style={{ width: "100%" }}>
          <Col md={1} className="d-flex justify-content-end">
            <div>
              <img src={bel} />
            </div>
          </Col>
          <Col md={10}>
            <Row>
              <Col
                md={3}
                className="m-0 p-0"
                style={{ fontSize: "14px", color: "#8A8A8A" }}
              >
                Notifikasi
              </Col>
              <Col
                md={{ span: 3, offset: 6 }}
                className="justify-content-end d-flex"
                style={{ fontSize: "14px", color: "#8A8A8A" }}
              >
                20 Maret <img src={buletmerah} className="m-1" />
              </Col>
              <Col md={12} className="m-0 p-0">
                <p className="m-0 p-0" style={{ fontSize: "16px" }}>
                  Terdapat perubahan pada jadwal penerbangan booking 45GT6. Cek
                  jadwal perjalanan Anda disini!
                </p>
                <p
                  className="m-0 p-0"
                  style={{ fontSize: "14px", color: "#8A8A8A" }}
                >
                  Syarat Dan Ketentuan berlaku
                </p>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container> */}
    </>
  );
};

export default NotifikasiLogin;