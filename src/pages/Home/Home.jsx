import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import HomeCar from "../../image/img_car.png";
import "./Home.css";

function Home() {
  const token = localStorage.getItem("token");
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.clear();
    navigate("/login", { replace: true });
  };

  useEffect(() => {
    if (!token) {
      window.location.href = "/login";
    }
  }, []);

  if (!token) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <Navbar />
      <div id="halaman-1" className="halaman-1">
        <div className="container-fluid pt-5">
          <div className="row d-flex align-items-center mt-5">
            <div className="col-lg-6">
              <div className="row justify-content-center">
                <div className="col-lg-8">
                  <h1
                    className="judul"
                    style={{
                      fontSize: "36px",
                      lineHeight: "54px",
                      maxWidth: "568px",
                    }}
                  >
                    Sewa & Rental Mobil Terbaik di kawasan (Lokasimu)
                  </h1>
                  <p style={{ fontSize: "14px" }}>
                    Selamat datang di Binar Car Rental. Kami menyediakan mobil
                    kualitas terbaik dengan harga terjangkau. Selalu siap
                    melayani kebutuhanmu untuk sewa mobil selama 24 jam.
                  </p>
                  <button
                    type="button"
                    className="btn btn-nav me-0"
                    onClick={() => handleLogout()}
                  >
                    <strong>Mulai Sewa Mobil</strong>
                  </button>
                </div>
              </div>
            </div>
            <div className="col-lg-6 p-0 m-0">
              <img src={HomeCar} className="w-100" alt="Mobil Home" />
            </div>
          </div>
        </div>
      </div>
      <Footer />
      {/* <button
      //   onClick={() => handleLogout()}
      >
        Log out
      </button> */}
    </div>
  );
}

export default Home;
