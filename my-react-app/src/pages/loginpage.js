import React from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useState } from "react";

const Loginpage = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);

  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLocaleLowerCase());
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    if (emailError && validateEmail(e.target.value)) {
      setEmailError("");
    }
  };

  const handleSubmit = () => {
    if (!validateEmail(email)) {
      setEmailError("Please enter a valid email address.");
    } else {
      setEmailError("");
    }
  };

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  return (
    <div
      style={{
        backgroundColor: "aqua",
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          backgroundColor: "white",
          padding: 25,
          width: "50vh",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          display: "flex",
          borderRadius: 10,
          border: "3px solid red",
        }}
      >
        <p style={{ fontSize: 20, fontWeight: "bold" }}>
          Login to your Account
        </p>
        <div>
          <label for="email">Email</label>
          <br />
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Email"
            value={email}
            onChange={handleEmailChange}
            style={{
              borderRadius: 5,
              padding: "5px",
              width: "250px",
              borderColor: "lightgray",
            }}
          />
          {emailError && (
            <p style={{ color: "red", fontSize: "12px" }}>{emailError}</p>
          )}
        </div>
        <div style={{ marginTop: 10 }}>
          <div style={{ justifyContent: "space-between", display: "flex" }}>
            <div>
              <label for="password">Password</label>
            </div>
            <div style={{ color: "blue" }}>
              <label>Forgot?</label>
            </div>
          </div>

          <div
            style={{
              position: "relative",
              display: "inline-block",
              marginTop: 3,
            }}
          >
            <input
              id="password"
              name="password"
              placeholder="Enter your password"
              type={passwordVisible ? "text" : "password"}
              style={{
                paddingRight: "30px",
                borderRadius: 5,
                padding: "5px",
                width: "250px",
                borderColor: "lightgray",
              }}
            />
            <span
              onClick={togglePasswordVisibility}
              style={{
                position: "absolute",
                right: "10px",
                top: "50%",
                transform: "translateY(-50%)",
                cursor: "pointer",
              }}
            >
              {passwordVisible ? <FaEyeSlash /> : <FaEye />}
            </span>
          </div>
        </div>
        <div
          onClick={handleSubmit}
          style={{
            backgroundColor: "#9768D9",
            width: "250px",
            borderRadius: 5,
            textAlign: "center",
            padding: 5,
            marginTop: 15,
            cursor: "pointer",
            color: "white",
          }}
        >
          Login now
        </div>
      </div>
    </div>
  );
};

export default Loginpage;
