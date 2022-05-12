import { Input } from "antd";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import welcomeLogin from "../../image/img-mobil.png";
import logoBCR from "../../image/logo-bcr.png";
// import logo from "./logo.svg";

function Login() {
  const token = localStorage.getItem("token");
  const navigate = useNavigate();

  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = async () => {
    try {
      const res = await axios({
        method: "POST",
        url: "https://reqres.in/api/login",
        data: loginData,
      });

      if (res.status === 200) {
        localStorage.setItem("token", res.data.token);
        navigate("/", { replace: true });
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleData = async () => {
    const token = localStorage.getItem("token");
    try {
      const res = await axios({
        method: "POST",
        url: "https://reqres.in/api/login",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (res.status === 200) {
        localStorage.setItem("token", res.data.token);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (token) {
      navigate("/");
    }
  }, []);

  return (
    <div>
      <div className="container-fluid" style={{ margin: 0, padding: 0 }}>
        <div className="row login m-0 p-0 overflow-hidden">
          <div className="col-lg-8 left-side px-0 overflow-hidd">
            <img
              src={welcomeLogin}
              className="w-100 vh-100"
              style={{ objectFit: "cover" }}
              alt="cover"
            />
          </div>
          <div
            className="col-lg-4 vh-100 py-5 mx-auto d-flex flex-column justify-content-center overflow-auto"
            style={{
              textAlign: "left",
              paddingRight: "2rem",
              paddingLeft: "2rem",
            }}
          >
            <div className="form-head">
              <img src={logoBCR} alt="" />
              <h1 className="pt-4 pb-4">Welcome, Admin BCR</h1>
            </div>

            <div className="form-content">
              <form action="">
                <div className="mb-3">
                  <label for="inputEmail" className="form-label">
                    Email
                  </label>
                  <Input
                    type="email"
                    name="email"
                    className="form-control"
                    id="inputEmail"
                    placeholder="Contoh: johndee@gmail.com"
                    value={loginData.email}
                    onChange={(e) =>
                      setLoginData({
                        ...loginData,
                        email: e.target.value,
                      })
                    }
                  />
                </div>
                <div className="mb-3">
                  <label for="inputPassword" className="form-label">
                    Password
                  </label>
                  <Input
                    type="password"
                    name="password"
                    className="form-control"
                    id="inputPassword"
                    placeholder="6+ karakter"
                    value={loginData.password}
                    onChange={(e) =>
                      setLoginData({ ...loginData, password: e.target.value })
                    }
                  />
                </div>
                <button
                  className="button-blue w-100 mt-4"
                  style={{
                    backgroundColor: "#0D28A6" /* Blue */,
                    border: "none",
                    padding: "8px 12px",
                    color: "white",
                    textAlign: "center",
                    textDecoration: "none",
                    fontSize: "14px",
                  }}
                  onClick={() => {
                    handleSubmit();
                    handleData();
                  }}
                >
                  Sign In
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
