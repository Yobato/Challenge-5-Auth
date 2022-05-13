import React, { useState } from "react";
import "./Dashboard.css";
import rectangularIcon from "../../image/Rectangular_Icon.svg";
import menuIcon from "../../image/Menu_Icon.svg";
import userPicture from "../../image/User_Picture.jpg";
import rectangleIcon from "../../image/Rectangle_Icon.svg";
import homeIcon from "../../image/Home_Icon.svg";
import truckIcon from "../../image/Truck_Icon.svg";
import { Dropdown, Menu, Space, Table } from "antd";
import { DownOutlined } from "@ant-design/icons";
import "antd/dist/antd.css";
import Sidebar from "../../components/Sidebar/Sidebar";
import { useNavigate } from "react-router-dom";

function Dashboard() {
  //   const token = localStorage.getItem("token");
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.clear();
    navigate("/login", { replace: true });
  };

  const [sidebar, setSidebar] = useState(true);

  const toggleSidebar = () => {
    return setSidebar(!sidebar);
  };

  const columns = [
    {
      title: "No",
      dataIndex: "no",
    },
    {
      title: " User Email",
      dataIndex: "name",
    },
    {
      title: "Car",
      dataIndex: "chinese",
      sorter: {
        compare: (a, b) => a.chinese - b.chinese,
        multiple: 3,
      },
    },
    {
      title: "Start Rent",
      dataIndex: "math",
      sorter: {
        compare: (a, b) => a.math - b.math,
        multiple: 2,
      },
    },
    {
      title: "Finish Rent",
      dataIndex: "english",
      sorter: {
        compare: (a, b) => a.english - b.english,
        multiple: 1,
      },
    },
    {
      title: "Price",
      dataIndex: "english",
      sorter: {
        compare: (a, b) => a.english - b.english,
        multiple: 1,
      },
    },
    {
      title: "Status",
      dataIndex: "english",
      sorter: {
        compare: (a, b) => a.english - b.english,
        multiple: 1,
      },
    },
  ];

  const data = [
    {
      key: "1",
      no: "1",
      name: "John Brown",
      chinese: 98,
      math: 60,
      english: 70,
    },
    {
      key: "2",
      no: "2",
      name: "Jim Green",
      chinese: 98,
      math: 66,
      english: 89,
    },
    {
      key: "3",
      no: "3",
      name: "Joe Black",
      chinese: 98,
      math: 90,
      english: 70,
    },
    {
      key: "4",
      no: "4",
      name: "Jim Red",
      chinese: 88,
      math: 99,
      english: 89,
    },
    {
      key: "5",
      no: "5",
      name: "Jim Red",
      chinese: 88,
      math: 99,
      english: 89,
    },
    {
      key: "6",
      no: "6",
      name: "Jim Red",
      chinese: 88,
      math: 99,
      english: 89,
    },
    {
      key: "7",
      no: "7",
      name: "Jim Red",
      chinese: 88,
      math: 99,
      english: 89,
    },
    {
      key: "8",
      no: "8",
      name: "Jim Red",
      chinese: 88,
      math: 99,
      english: 89,
    },
    {
      key: "9",
      no: "9",
      name: "Jim Red",
      chinese: 88,
      math: 99,
      english: 89,
    },
    {
      key: "10",
      no: "10",
      name: "Jim Red",
      chinese: 88,
      math: 99,
      english: 89,
    },
  ];

  function onChange(pagination, filters, sorter, extra) {
    console.log("params", pagination, filters, sorter, extra);
  }

  const menu = (
    <Menu
      items={[
        {
          label: <a onClick={handleLogout}>Logout</a>,
          key: "0",
        },
      ]}
    />
  );

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
                    <Dropdown overlay={menu} trigger={["click"]}>
                      <a onClick={(e) => e.preventDefault()}>
                        <Space
                          style={{ marginTop: "10px", marginLeft: "10px" }}
                        >
                          <img
                            src={userPicture}
                            alt="user"
                            width="32"
                            height="32"
                            className="rounded-circle me-2"
                            style={{ objectFit: "cover" }}
                          />
                          Ini User
                          <DownOutlined />
                        </Space>
                      </a>
                    </Dropdown>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </section>
        {/* <!-- NAVBAR SECTION END --> */}

        {/* <!-- SIDEBAR SECTION BEGIN --> */}
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
          <section className="content-section ps-2 pe-4" style={{ zIndex: -1 }}>
            <div className="row">
              <div className="col-lg-0" id="show-col-lg-0">
                <div className="adding-space" style={{ width: "300px" }}></div>
              </div>
              <div
                className="col-lg-12"
                id="show-col-lg-12"
                style={{ marginTop: "90px" }}
              >
                <h3>Dashboard</h3>
                <Table
                  columns={columns}
                  dataSource={data}
                  onChange={onChange}
                  style={{ zIndex: -1 }}
                />
                ;
              </div>
            </div>
          </section>
        </div>
        {/* <!-- BAGIAN ISI CONTENT BERAKHIR Di SINI -->
            <!-- CONTENT SECTION END --> */}
      </div>
    </div>
  );
}

export default Dashboard;
