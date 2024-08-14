import React from "react";

const ForgotPassword = () => {
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
          padding: 30,
          width: "50vh",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          display: "flex",
          borderRadius: 10,
        }}
      >
       
        <div style={{ textAlign: "start" }}>
               Back to Login
          <div style={{ fontSize: 25, fontWeight: "bold",marginTop:8 }}>
            Forgot your Password ?
          </div>
          <p>
            Don't worry happen to all of us.Enter ur mail below to recover a
            password
          </p>
        </div>

        <div>
          <input
            id="Email"
            name="Email"
            placeholder="Email"
            style={{
              paddingRight: "30px",
              borderRadius: 5,
              padding: "5px",
              width: "330px",
              borderColor: "lightgray",
            }}
          />
        </div>

        <div
          style={{
            backgroundColor: "#9768D9",
            width: "330px",
            borderRadius: 3,
            textAlign: "center",
            padding: 5,
            marginTop: 15,
            cursor: "pointer",
            color: "white",
          }}
        >
          Submit
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
