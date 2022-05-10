import { Input } from "antd";
import React from "react";
import welcomeLogin from "../../image/img-mobil.png";
import logoBCR from "../../image/logo-bcr.png";
// import logo from "./logo.svg";

function Login() {
  return (
    <div>
      <div className="container-fluid" style={{ margin: 0, padding: 0 }}>
        <div className="row login">
          <div className="col-8 left-side">
            <img
              src={welcomeLogin}
              className="w-100 vh-100"
              style={{ objectFit: "cover" }}
              alt=""
            />
          </div>
          <div
            className="col-4 my-auto mx-auto d-flex flex-column justify-content-center"
            style={{
              textAlign: "left",
            }}
          >
            <div className="form-head">
              <img src={logoBCR} alt="" />
              <h1>Welcome back</h1>
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
                <button type="submit" className="btn btn-primary">
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
