import React from "react";

function Section() {
    return(
        <>
                <div className="container py-5">
                    <div className="row">
                        <div className="col-md-12 col-lg-4 mb-4 mb-lg-0">
                            <div className="card "
                                 // style="max-width: 350px"
                                 onClick="window.location.href='singleProduct.html';">

                                <div className="card-body">
                                    <div className="col-md-12 mb-4">
                                        <div className="bg-image hover-zoom ripple rounded ripple-surface">
                                            <img
                                                src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/E-commerce/Products/img%20(4).webp"  alt=''
                                                className="w-100"/>

                                        </div>

                                    </div>
                                    <div className="d-flex justify-content-between mb-3 ">
                                        <h5 className="mb-0 fw-bold">HP Notebook</h5>
                                        <h5 className="text-primary  mb-0  fw-bold">999 ₽</h5>
                                    </div>

                                    <div className="d-flex justify-content-between mb-2">
                                        <p className="text-black mb-0  fw bold">Общежитие №8</p>
                                        <p className="text-black mb-0  fw bold">Каналы связи</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-12 col-lg-4 mb-4 mb-lg-0">
                            <div className="card"
                                 // style="max-width: 350px"
                                 onClick="window.location.href='singleProduct.html';">
                                <div className="card-body">

                                    <div className="col-md-12 mb-4">
                                        <div className="bg-image hover-zoom ripple rounded ripple-surface">
                                            <img
                                                src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/E-commerce/Products/img%20(4).webp" alt=''
                                                className="w-100"/>
                                        </div>
                                    </div>
                                    <div className="d-flex justify-content-between mb-3 ">
                                        <h5 className="mb-0 fw-bold">HP Notebook</h5>
                                        <h5 className="text-primary  mb-0  fw-bold">999 ₽</h5>
                                    </div>
                                    <div className="d-flex justify-content-between mb-2">
                                        <p className="text-black mb-0  fw bold">Общежитие №8</p>
                                        <p className="text-black mb-0  fw bold">Каналы связи</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-12 col-lg-4 mb-4 mb-lg-0">
                            <div className="card"
                                 // style="max-width: 350px"
                                 onClick="window.location.href='singleProduct.html';">

                                <div className="card-body">

                                    <div className="col-md-12 mb-4">
                                        <div className="bg-image hover-zoom ripple rounded ripple-surface">
                                            <img
                                                src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/E-commerce/Products/img%20(4).webp" alt=''
                                                className="w-100"/>

                                        </div>
                                    </div>
                                    <div className="d-flex justify-content-between mb-3 ">
                                        <h5 className="mb-0 fw-bold">HP Notebook</h5>
                                        <h5 className="text-primary  mb-0  fw-bold">999 ₽</h5>
                                    </div>

                                    <div className="d-flex justify-content-between mb-2">
                                        <p className="text-black mb-0  fw bold">Общежитие №8</p>
                                        <p className="text-black mb-0  fw bold">Каналы связи</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
        </>
    )

}

export  default  Section;