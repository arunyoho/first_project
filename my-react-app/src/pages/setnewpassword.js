import React from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useState } from "react";

const Password = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const [createPassword,setCreatePassword]= useState(false) 

  const togglecreate = () =>{
    setCreatePassword(!createPassword)
  }

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
          padding:30,
          width: "50vh",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          display: "flex",
          borderRadius: 10,
          
        }}
      >
        <div style={{textAlign:"start"}}> 
        <p style={{ fontSize: 20, fontWeight: "bold"}}>
          Set a password
        </p>
        <p>
            your previous password is reseted.Please select a new password
        </p>
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
              placeholder="Create password"
              type={createPassword ? "text" : "password"}
              style={{
                paddingRight: "30px",
                borderRadius: 5,
                padding: "5px",
                width: "330px",
                borderColor: "lightgray",
              }}
            />
            <span
              onClick={togglecreate}
              style={{
                position: "absolute",
                right: "10px",
                top: "50%",
                transform: "translateY(-50%)",
                cursor: "pointer",
              }}
            >
              {createPassword ? <FaEyeSlash /> : <FaEye />}
            </span>
          </div>
        
        <div style={{ marginTop: 10 }}>


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
              placeholder="Renter password"
              type={passwordVisible ? "text" : "password"}
              style={{
                paddingRight: "30px",
                borderRadius: 5,
                padding: "5px",
                width: "330px",
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
          style={{
            backgroundColor: "#9768D9",
            width: "330px",
            borderRadius: 5,
            textAlign: "center",
            padding: 5,
            marginTop: 15,
            cursor: "pointer",
            color: "white",
          }}
        >
        set password
        </div>
      </div>
    </div>
  );
};

export default Password;
