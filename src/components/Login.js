import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
// import "./Style.css";

const Login = () => {
  const navigate = useNavigate();
  const [status, setStatus] = useState("flase");
  const [UserName, savedUserName] = useState();
  const [password, savedpassword] = useState();

  const getdetails = async () => {
    const get = await axios
      .post("http://localhost:5000/v1/usermangement/user-login", {
        UserName,
        password,
      })
      .then((Response) => {
        console.log(Response);
        console.log("token", Response.data.data.jwttoken);
        localStorage.setItem("token", Response.data.data.jwttoken);

        alert("successfully loggedIn");

        navigate("/home");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  // const setdata = Response.data.data.loginStatus;
  //   setStatus(setdata)
  //   if (status === true) {
  //     console.log("update", status);
  //     navigate("/home");
  //   }
  //console.log("update", status);
  // let data = {

  return (
    <div className="container my-5 ">
      <div
        className=" col-sm-8 offset-sm-2 col-lg-6 offset-lg-3 col-xl-4 offset-xl-4 p-4 "
        id="box"
      >
        <h2 className="text-center">Login</h2>
        <p>
          Already have an account? Login in or
          <a href="" onClick={() => navigate("/signup")}>
            SignUp
          </a>
        </p>

        <form>
          <div className="mb-3 mt-3">
            <label htmlFor="UserName" className="form-label">
              UserName:
            </label>
            <input
              type="text"
              className="form-control"
              id="UserName"
              placeholder="UserName"
              name="UserName"
              onChange={(e) => savedUserName(e.target.value)}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">
              Password:
            </label>
            <input
              type="password"
              className="form-control"
              placeholder="Enter Password"
              name="password"
              onChange={(e) => savedpassword(e.target.value)}
              required
            />
          </div>
          <p>
            By creating an account you agree to our &nbsp;
            <a href="#">Terms &amp; Privacy</a>.
          </p>
          <div className="text-center">
            <button
              type="button"
              className="btn btn-outline-info w-100"
              onClick={getdetails}
            >
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
