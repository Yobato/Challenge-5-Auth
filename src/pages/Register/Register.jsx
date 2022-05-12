import { Input } from "antd";
import React from "react";
import welcomeLogin from "../../image/img-mobil.png";
import logoBCR from "../../image/logo-bcr.png";

function Register() {
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
              <h1 className="pt-4 pb-4">Create New Account</h1>
            </div>

            <div className="form-content">
              <form action="">
                <div className="mb-3">
                  <label for="inputEmail" className="form-label">
                    Email
                  </label>
                  <Input
                    type="email"
                    className="form-control"
                    id="inputEmail"
                    placeholder="Contoh: johndee@gmail.com"
                  />
                </div>
                <div className="mb-3">
                  <label for="inputPassword" className="form-label">
                    Password
                  </label>
                  <Input
                    type="password"
                    className="form-control"
                    id="inputPassword"
                    placeholder="6+ karakter"
                  />
                </div>
                <button
                  type="submit"
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
                >
                  Sign Up
                </button>
                <p className="pt-2">
                  Already have an account? <a href="/login">Login</a>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
