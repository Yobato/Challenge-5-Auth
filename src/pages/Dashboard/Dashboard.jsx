import React from 'react'
import $ from "jquery";

function Dashboard() {
    $("#toggleSidebar").click(function () {
      $(".collapseSidebar").toggle();

      var currTabElem1 = document.getElementById("show-col-lg-0");
      let currentClassName1 =
        document.getElementById("show-col-lg-0").className;

      if (currentClassName1 === "col-lg-0") {
        currTabElem1.setAttribute("class", "col-lg-2");
      } else {
        currTabElem1.setAttribute("class", "col-lg-0");
      }

      var currTabElem2 = document.getElementById("show-col-lg-12");
      let currentClassName2 =
        document.getElementById("show-col-lg-12").className;

      if (currentClassName2 === "col-lg-12") {
        currTabElem2.setAttribute("class", "col-lg-10");
      } else {
        currTabElem2.setAttribute("class", "col-lg-12");
      }
    });

  return (
    <div className="ini-body">
        <div className="container-fluid p-0">

            {/* <!-- NAVBAR SECTION BEGIN --> */}
            <section className="navbar-section">
                <nav className="navbar navbar-expand-lg border-bottom ms-5">
                    <div className="container-fluid">
                        <div className="sidebar-toggler ps-5">
                            <a href="#"><img className="ms-5 me-5 collapseSidebar"
                                    src="../public/images/Rectangular_Icon.svg"/></a>
                            <button className="btn ms-5" id="toggleSidebar">
                                <img src="../public/images/Menu_Icon.svg" alt='icon menu'/>
                            </button>
                        </div>

                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                            data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                            aria-expanded="false" aria-label="Toggle navigation"><img
                                src="../public/images/Menu_Icon.svg" alt=""/></button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav ms-auto mt-2 mt-lg-0">
                                <li className="nav-item">
                                    <form className="d-flex ms-5">
                                        <input className="form-control" type="search" placeholder="Search"
                                            aria-label="Search"/>
                                        <button className="btn btn-outline-primary border-3 me-3 fw-bold"
                                            type="submit">Search</button>
                                    </form>
                                </li>
                                <li className="nav-item">
                                    <div className="dropdown mt-1">
                                        <a href="#"
                                            className="d-flex flex-row justify-content-center align-items-center link-dark text-decoration-none dropdown-toggle me-2"
                                            id="dropdownUser" data-bs-toggle="dropdown" aria-expanded="false">
                                            <img src="../public/images/User_Picture.jpg" width="32" height="32"
                                                className="rounded-circle me-2" style={{objectFit: "cover"}} alt='user'/>
                                            <p className="my-0 me-2">Satriyo Bagus</p>

                                        </a>
                                        <ul className="dropdown-menu text-small shadow" aria-labelledby="dropdownUser"/>
                                            <li><a className="dropdown-item" href="#">Log Out</a></li>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </section>
            {/* <!-- NAVBAR SECTION END --> */}

            {/* <!-- SIDEBAR SECTION BEGIN --> */}
            <section className="sidebar-section">
                {/* <!-- Sidebar - Main Menu --> */}
                <div className="main-menu">
                    <a href="#">
                        <div className="box text-center d-flex justify-content-center align-items-center">
                            <img className="side-icon" src="../public/images/Rectangle_Icon.svg"/>
                        </div>
                    </a>
                    <a href="dashboard">
                        <div className="box text-center py-2">
                            <img className="side-icon" src="../public/images/Home_Icon.svg"/>
                            <div>Dashboard</div>
                        </div>
                    </a>
                    <a href="cars">
                        <div className="box text-center py-2">
                            <img className="side-icon" src="../public/images/Truck_Icon.svg"/>
                            <div>Cars</div>
                        </div>
                    </a>
                </div>

                <div className="collapseSidebar">
                    {/* <!-- Sidebar - Menu List --> */}
                    <div className="menu-list pt-3">
                        <h4 className="text-secondary px-3 py-2">
                            {/* <%-title%> */}
                        </h4>
                        <a href="dashboard">
                            <div className="list-menu">
                                <p className="m-0">Dashboard</p>
                            </div>
                        </a>
                        <a href="cars">
                            <div className="list-menu">
                                <p className="m-0">Cars</p>
                            </div>
                        </a>
                    </div>
                </div>
            </section>
            {/* <!-- SIDEBAR SECTION END --> */}



            {/* <!-- CONTENT SECTION BEGIN --> */}
            {/* <!-- BAGIAN ISI CONTENT DI MULAI DARI SINI --> */}
            <section className="content-section ps-5 pe-4">
                <div className="row">
                    <div className="col-lg-0" id="show-col-lg-0">
                        <div className="adding-space" style={{ width: "300px" }}>
                        </div>
                    </div>
                    <div className="col-lg-12" id="show-col-lg-12">
                        {/* <%-body%> */}
                    </div>
                </div>

            </section>
            {/* <!-- BAGIAN ISI CONTENT BERAKHIR Di SINI -->
            <!-- CONTENT SECTION END --> */}
        </div>
    </div>
  )
}

export default Dashboard