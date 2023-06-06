import "./FormLogin.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

function FormReset() {
  const [passwordVisible, setPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const passwordInputType = passwordVisible ? "text" : "password";

  return (
    <>
      <h1 className="fw-bold mb-4">Reset Password</h1>

      <form onSubmit={(e) => e.preventDefault}>
        
        <div className="d-flex">
          <div>
            <p style={{ marginBottom: "0px" }}>Masukkan Password Baru</p>
          </div>
          
        </div>

        <div className="input-group mb-2 mt-1">
          <input
            type={passwordInputType}
            placeholder="Masukkan password"
            aria-label="Password"
            className="form-control password"
            // value={password}
            onChange={(e) => e.preventDefault}
            required
            style={{ fontFamily: "Poppins" }}
          />
          <span className="input-group-text" onClick={togglePasswordVisibility}>
            <FontAwesomeIcon icon={passwordVisible ? faEye : faEyeSlash} />
          </span>
        </div>
        <div className="d-flex">
          <div>
            <p style={{ marginBottom: "0px" }}>Ulangi Password Baru</p>
          </div>
          
        </div>

        <div className="input-group mb-2 mt-1">
          <input
            type={passwordInputType}
            placeholder="Masukkan password"
            aria-label="Password"
            className="form-control password"
            // value={password}
            onChange={(e) => e.preventDefault}
            required
            style={{ fontFamily: "Poppins" }}
          />
          <span className="input-group-text" onClick={togglePasswordVisibility}>
            <FontAwesomeIcon icon={passwordVisible ? faEye : faEyeSlash} />
          </span>
        </div>
        {/* {error && <p className="error-message">{error}</p>} */}
        <div className="d-grid gap-2 mt-4">
          <button className="btn btn-primary lg sign-up" type="submit">
            Simpan
          </button>
        </div>
      </form>
      
    </>
  );
}

export default FormReset;
