import React from "react";
import "./Footer.css";
import ListItem from "../../image/list_item.png";

function Footer() {
  return (
    <>
      <footer className="pb-5 pt-2">
        <div className="container mt-5">
          <div className="row">
            <div className="col-lg-4">
              <a className="alamat " href="#" style={{ paddingRight: "2rem" }}>
                Jalan Suroyo No. 161 Mayangan Kota Probolonggo 672000
              </a>
              <br />
              <br />
              <a className="alamat" href="#">
                binarcarrental@gmail.com
              </a>
              <br />
              <br />
              <a className="alamat" href="#">
                081-233-334-808
              </a>
              <br />
              <br />
            </div>
            <div className="col-lg-2">
              <a className="link" href="#">
                Our services
              </a>
              <br />
              <br />
              <a className="link" href="#">
                Why Us
              </a>
              <br />
              <br />
              <a className="link" href="#">
                Testimonial
              </a>
              <br />
              <br />
              <a className="link" href="#">
                FAQ
              </a>
              <br />
              <br />
            </div>
            <div className="col-lg-4">
              <p>Connect with us</p>
              <img
                src={ListItem}
                style={{ maxWidth: "224px", cursor: "pointer" }}
                alt="item"
              />
              <br />
              <br />
            </div>
            <div className="col-lg-2">
              <p href="/">Copyright Binar 2022</p>
              <button
                type="button"
                className="btn btn-nav me-0"
                style={{ backgroundColor: "#0D28A6" }}
              >
                <span style={{ visibility: "hidden" }}>Copyrighted</span>
              </button>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
