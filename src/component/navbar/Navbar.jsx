import React, { useState } from "react";
import Modal from "../../pages/Modal";
function Navbar() {
    const[modalActive,setModalActive]=useState(true)
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
                             <button className="btn btn-primary me-5" onClick={() => setModalActive(true)}>Создать  объявление</button> 
                           
                             <a href='/login'>  <button className="btn btn-outline-primary me-5"> Вход / Регистрация  </button></a>

                         </ul>

                     </div>
                 </div>
                 
             </nav>
             {/* <Modal active={modalActive} setActive={setModalActive}/> */}
             <Modal active={modalActive} setActive={setModalActive} />

         </div>
     )
 }

 export  default Navbar;