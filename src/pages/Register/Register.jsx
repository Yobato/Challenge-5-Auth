import { Input } from "antd";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import welcomeLogin from "../../image/img-mobil.png";
import logoBCR from "../../image/logo-bcr.png";

function Register() {
  const token = localStorage.getItem("token");
  const navigate = useNavigate();

  const [registerData, setRegisterData] = useState({
    email: "",
    password: "",
  });

  // const [validation, setValidation] = useState({
  //   email: "",
  //   password: "",
  // });

  const handleSubmit = async () => {
    if (!registerData.email || !registerData.password) {
      return alert("Please fill all the fields!");
    }
    try {
      const res = await axios({
        method: "POST",
        url: "https://rent-car-appx.herokuapp.com/admin/auth/register",
        data: registerData,
      });

      if (res.status === 201) {
        console.log(res);
        localStorage.setItem("token", res.data.access_token);
        if (res.data.role === "admin") {
          navigate("/dashboard", { replace: true });
        } else {
          navigate("/", { replace: true });
        }
        return alert("Registration was successful!");
      }
    } catch (error) {
      console.log(error);
      return alert("Email already Exist");
    }
  };

  // const handleData = () => {
  //   let error = validation;
  //   // let test = true;

  //   if (!registerData.email) {
  //     error.email = "Email is required";
  //   } else {
  //     error.email = "";
  //   }

  //   if (!registerData.password) {
  //     error.password = "Password is required";
  //   } else {
  //     error.password = "";
  //   }
  // };

  useEffect(() => {
    if (token) {
      navigate("/register");
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
              <h1 className="pt-4 pb-4">Create New Account</h1>
            </div>

            <div className="form-content">
              <form action="">
                <div className="mb-3">
                  <label htmlFor="inputEmail" className="form-label">
                    Email
                  </label>
                  <Input
                    type="email"
                    className="form-control"
                    id="inputEmail"
                    placeholder="Contoh: johndee@gmail.com"
                    value={registerData.email}
                    onChange={(e) =>
                      setRegisterData({
                        ...registerData,
                        email: e.target.value,
                      })
                    }
                  />
                  {/* {validation.email && <p>{validation.email}</p>} */}
                  {/* <p>{validateEmail}</p> */}
                </div>
                <div className="mb-3">
                  <label htmlFor="inputPassword" className="form-label">
                    Password
                  </label>
                  <Input
                    type="password"
                    className="form-control"
                    id="inputPassword"
                    placeholder="6+ karakter"
                    onChange={(e) =>
                      setRegisterData({
                        ...registerData,
                        password: e.target.value,
                      })
                    }
                  />

                  {/* {validation.password && <p>{validation.password}</p>} */}
                  {/* <p>{validatePassword}</p> */}
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
                  onClick={(e) => {
                    e.preventDefault();
                    handleSubmit();
                    // handleData();
                    // handleData();
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
