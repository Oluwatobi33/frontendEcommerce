import React from "react";
import { useState, useEffect, useRef } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import * as yup from "yup";
import { Formik, useFormik } from "formik";
import axios from "axios";
import { baseurl } from "./Endpoint";
import { isDisabled } from "@testing-library/user-event/dist/utils";
const Signup = () => {
  const [Error, setError] = useState("");
  const [message, setmessage] = useState("");
  const [loader, setloader] = useState(false);
  const navigate = useNavigate();

  let year = new Date().toLocaleDateString();
  let time = new Date().toLocaleTimeString();
  let DateCreated = `${year}  ${time}`;
  let lower = new RegExp(`(?=.*[a-z])`);
  let upper = new RegExp(`(?=.*[A-Z])`);
  let number = new RegExp(`(?=.*[0-9])`);
  const Formik = useFormik({
    initialValues: {
      Name: "",
      email: "",
      password: "",
      phoneno: "",
      DateCreated,
    },
    onSubmit: (values) => {
      setloader(true);
      let userdata = {
        Name: values.Name,
        phoneno: values.phoneno,
        email: values.email,
        password: values.password,
        DateCreated,
      };
      console.log(userdata);
      axios.post(`${baseurl}signupuser`, userdata).then((credentials) => {
        if (credentials) {
          let Err = credentials.data.message;
          setmessage(Err);
          navigate('/Signin')
          console.log(Err);
        }
      });
    },
    validationSchema: yup.object({
      Name: yup
        .string()
        .required("This field is required")
        .min(3, "must be greater than three"),
      email: yup
        .string()
        .required("This field is required")
        .email("must be a valid email"),
      phoneno: yup
        .string()
        .required("This field is required")
        .min(10, "must be greater than ten"),
      password: yup
        .string()
        .required("This field is required")
        .matches(lower, "Must include lowerCase letter")
        .matches(upper, "Must include upperCase letter")
        .matches(number, "Must include a number")
        .min(3, "must be between 3-5 charaters"),
    }),
  });
  const toggle = useRef();
  const i = useRef();
  const password = useRef();

  const showHide = () => {
    if (password.current.type === "password") {
      password.current.setAttribute("type", "text");
      toggle.current.classList.add("hide");
      i.current.classList = "fa fa-eye-slash";
    } else {
      password.current.setAttribute("type", "password");
      i.current.classList = "fa fa-eye";
      toggle.current.classList.remove("hide");
    }
  };
  return (
    <>
      <div className="container">
        <div class="row align-items-center g-lg-5 py-5">
          <div class="col-lg-5 text-center text-lg-start">
            <h1 class="display-4 fw-bold lh-1 mb-3">Vertically centered hero sign-up form</h1>
            <p class="col-lg-10 fs-4">Below is an example form built entirely with Bootstrap’s form controls. Each required form group has a validation state that can be triggered by attempting to submit the form without completing it.</p>
          </div>

          <div class="col-md-12 mx-auto col-lg-7">
            <p>
              <b className="text-danger">{Error}</b>
            </p>
            <div className="col-md-10 mx-auto col-lg-5 rig">
              <img src="" alt="" className="img-fluid mx-auto mt-5" />
              <h5>
                <b>Create an account for your business.</b>
              </h5>
              <form action="" onSubmit={Formik.handleSubmit}>
                <div className="form-floating mt-3 mb-4">
                  <input
                    type="text"
                    placeholder="Your FullName"
                    className={
                      Formik.errors.Name && Formik.touched.Name
                        ? "form-control is-invalid"
                        : "form-control"
                    }
                    onChange={Formik.handleChange}
                    style={{ backgroundColor: "#F5F7FA" }}
                    name="Name"
                    onBlur={Formik.handleBlur}
                  />
                  {Formik.touched.Name && (
                    <div style={{ color: "red" }} className="ade">
                      {Formik.errors.Name}
                    </div>
                  )}
                  <label>&#x1F464;&nbsp; Your FullName</label>
                </div>
                <div className="form-floating mt-3 mb-4">
                  <input
                    type="email"
                    placeholder="Your email"
                    className={
                      Formik.errors.email && Formik.touched.email
                        ? "form-control is-invalid"
                        : "form-control"
                    }
                    onChange={Formik.handleChange}
                    style={{ backgroundColor: "#F5F7FA" }}
                    name="email"
                    onBlur={Formik.handleBlur}
                  />
                  {Formik.touched.email && (
                    <div style={{ color: "red" }} className="ade">
                      {Formik.errors.email}
                    </div>
                  )}
                  <label>&#x1F4E7;&nbsp; Your email</label>
                </div>
                <div className="form-floating mt-3 mb-4">
                  <input
                    type="number"
                    placeholder="Your phone-number"
                    className={
                      Formik.errors.phoneno && Formik.touched.phoneno
                        ? "form-control is-invalid"
                        : "form-control"
                    }
                    onChange={Formik.handleChange}
                    style={{ backgroundColor: "#F5F7FA" }}
                    name="phoneno"
                    onBlur={Formik.handleBlur}
                  />
                  {Formik.touched.phoneno && (
                    <div style={{ color: "red" }} className="ade">
                      {Formik.errors.phoneno}
                    </div>
                  )}
                  <label>&#x1F464;&nbsp; Your phone-number</label>
                </div>
                <div className="form-floating my-3">
                  <input
                    type="password"
                    placeholder="Your password"
                    className={
                      Formik.errors.password && Formik.touched.password
                        ? "form-control is-invalid"
                        : "form-control"
                    }
                    ref={password}
                    maxLength={5}
                    onChange={Formik.handleChange}
                    style={{ backgroundColor: "#F5F7FA" }}
                    name="password"
                    onBlur={Formik.handleBlur}
                  />
                  <div
                    id="toggle"
                    ref={toggle}
                    onClick={showHide}
                    className="goses pe-4"
                  >
                    <i ref={i} className="fa fa-eye" aria-hidden="true"></i>
                  </div>
                  {Formik.touched.password && (
                    <div style={{ color: "red" }} className="py-2 ade">
                      {Formik.errors.password}
                    </div>
                  )}
                  <label>&#x1F512;&nbsp; Your password</label>
                  <button
                    type="submit"
                    className="btn form-control py-3 mt-3 text-white"
                    style={{ background: "#210F60", border: "none" }}
                  >
                    <b>Create account</b>
                    {loader && (
                      <div className="spin">
                        <div className="loader"></div>
                      </div>
                    )}
                  </button>
                </div>
                <div className="row mt-2">
                  <div className="col-md-12">
                    <div className="row">
                      <div className="col-md-8">
                        <p style={{ opacity: "1.2" }}>Do have an account?</p>
                      </div>
                      <div className="col-4">
                        <p style={{ fontSize: "17px" }}>
                          <b>
                            <Link to="/SignIn">Sign In</Link>
                          </b>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;
