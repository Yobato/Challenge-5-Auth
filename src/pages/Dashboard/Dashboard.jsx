import React, { useState } from "react";
import "./Dashboard.css";
import rectangularIcon from "../../image/Rectangular_Icon.svg";
import menuIcon from "../../image/Menu_Icon.svg";
import userPicture from "../../image/User_Picture.jpg";
import rectangleIcon from "../../image/Rectangle_Icon.svg";
import homeIcon from "../../image/Home_Icon.svg";
import truckIcon from "../../image/Truck_Icon.svg";
import { Dropdown, Menu, Space } from "antd";
import { DownOutlined } from "@ant-design/icons";
import Sidebar from "../../components/Sidebar/Sidebar";

function Dashboard() {
  const [sidebar, setSidebar] = useState(true);

  const toggleSidebar = () => {
    return setSidebar(!sidebar);
  };

  //   const menu = (
  //     <Menu
  //       items={[
  //         {
  //           label: <a href="https://www.antgroup.com">1st menu item</a>,
  //           key: "0",
  //         },
  //         {
  //           label: <a href="https://www.aliyun.com">2nd menu item</a>,
  //           key: "1",
  //         },
  //         {
  //           type: "divider",
  //         },
  //         {
  //           label: "3rd menu item",
  //           key: "3",
  //         },
  //       ]}
  //     />
  //   );

  return (
    <div className="ini-body">
      <div className="container-fluid p-0">
        {/* <!-- NAVBAR SECTION BEGIN --> */}
        <section className="navbar-section">
          <nav className="navbar navbar-expand-lg border-bottom ms-5">
            <div className="container-fluid">
              <div className="sidebar-toggler ps-5">
                <a href="#">
                  <img
                    className="ms-5 me-5 collapseSidebar"
                    src={rectangularIcon}
                    alt="icon"
                  />
                </a>
                <button
                  className="btn ms-5"
                  id="toggleSidebar"
                  onClick={toggleSidebar}
                >
                  <img src={menuIcon} alt="icon menu" />
                </button>
              </div>

              {/* <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <img src={menuIcon} alt="" />
              </button> */}
              <div
                className="collapse navbar-collapse"
                id="navbarSupportedContent"
              >
                <ul className="navbar-nav ms-auto mt-2 mt-lg-0">
                  <li className="nav-item">
                    <form className="d-flex ms-5">
                      <input
                        className="form-control"
                        type="search"
                        placeholder="Search"
                        aria-label="Search"
                      />
                      <button
                        className="btn btn-outline-primary border-3 me-3 fw-bold"
                        type="submit"
                      >
                        Search
                      </button>
                    </form>
                  </li>
                  <li className="nav-item">
                    {/* <Dropdown overlay={menu} trigger={["click"]}>
                      <a onClick={(e) => e.preventDefault()}>
                        <Space>
                          Click me
                          <DownOutlined />
                        </Space>
                      </a>
                    </Dropdown> */}
                    {/* <div className="dropdown mt-1">
                      <a
                        href="#"
                        className="d-flex flex-row justify-content-center align-items-center link-dark text-decoration-none dropdown-toggle me-2"
                        id="dropdownUser"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        <img
                          src={userPicture}
                          width="32"
                          height="32"
                          className="rounded-circle me-2"
                          style={{ objectFit: "cover" }}
                          alt="user"
                        />
                        <p className="my-0 me-2">Satriyo Bagus</p>
                      </a>
                      <ul
                        className="dropdown-menu text-small shadow"
                        aria-labelledby="dropdownUser"
                      />
                      <li>
                        <a className="dropdown-item" href="#">
                          Log Out
                        </a>
                      </li>
                    </div> */}
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </section>
        {/* <!-- NAVBAR SECTION END --> */}

        {/* <!-- SIDEBAR SECTION BEGIN --> */}
        {/* <div className="sidebar-container"> */}
        <div className="sidebar-contaier d-flex">
          <section className="sidebar-section">
            {/* <!-- Sidebar - Main Menu --> */}
            <div className="main-menu">
              <a href="#">
                <div className="box text-center d-flex justify-content-center align-items-center">
                  <img className="side-icon" src={rectangleIcon} alt="" />
                </div>
              </a>
              <a href="dashboard">
                <div className="box text-center py-2">
                  <img className="side-icon" src={homeIcon} alt="" />
                  <div>Dashboard</div>
                </div>
              </a>
              <a href="cars">
                <div className="box text-center py-2">
                  <img className="side-icon" src={truckIcon} alt="" />
                  <div>Cars</div>
                </div>
              </a>
            </div>

            <Sidebar show={sidebar} />
          </section>
          {/* <!-- SIDEBAR SECTION END --> */}

          {/* <!-- CONTENT SECTION BEGIN --> */}
          {/* <!-- BAGIAN ISI CONTENT DI MULAI DARI SINI --> */}
          <section className="content-section ps-2 pe-4">
            <div className="row">
              <div className="col-lg-0" id="show-col-lg-0">
                <div className="adding-space" style={{ width: "300px" }}></div>
              </div>
              <div className="col-lg-12" id="show-col-lg-12" style={{ marginTop: "90px" }}>
                {/* <%-body%> */}
                <p>Test</p>
              </div>
            </div>
          </section>
        </div>
        {/* </div> */}
        {/* <!-- BAGIAN ISI CONTENT BERAKHIR Di SINI -->
            <!-- CONTENT SECTION END --> */}
      </div>
    </div>
  );
}

export default Dashboard;
