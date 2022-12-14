import React, { useState } from "react";
import CreateOrder from "../../pages/Modal";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function Navbar() {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    // const showCart = () => <CreateOrder show={true} onHide={handleClose} animation={false} handleModal={handleClose} />

    return (
         <div>

             <nav className="navbar navbar-expand-lg navbar-light bg-light">
                 <div className="container">
                     <a href="/" className="navbar-brand">СТАНКИН ДОСКА</a>
                     <button type="button" className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                         <span className="navbar-toggler-icon"></span>
                     </button>
                     <div className="collapse navbar-collapse" id="navbarCollapse">
                         <ul className="navbar-nav">
                             <a href="/team" className="nav-item nav-link active me-5">О проекте</a>
                             <button
                                 className="btn btn-primary me-5"
                                 onClick={handleShow} >Создать  объявление</button>
                           
                             <a href='/login'>  <button className="btn btn-outline-primary me-5"> Вход / Регистрация  </button></a>

                         </ul>
                         <Modal show={show} onHide={handleClose} animation={false}>
                             <Modal.Header closeButton>
                                 <Modal.Title>
                                     <CreateOrder title={"Создать  объявление"}/>
                                 </Modal.Title>
                             </Modal.Header>
                             <Modal.Body>
                                 <CreateOrder body={"Текст сообщения"}/>
                             </Modal.Body>
                             <Modal.Footer>
                                 <Button variant="secondary" onClick={handleClose}>
                                     Close
                                 </Button>
                                 <Button variant="primary" onClick={handleClose}>
                                     Save Changes
                                 </Button>
                             </Modal.Footer>
                         </Modal>
                     </div>
                 </div>
                 
             </nav>



         </div>
     )
 }

 export  default Navbar;