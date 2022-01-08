import React from "react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Landing() {
  const [Error, setError] = useState("");
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({ mode: "onTouched" });

  const onSubmit = async (data) => {
    try {
      await axios.post("https://reqres.in/api/login", data);
      setError("");
      reset();
      navigate("/attendance", { replace: true });
    } catch (error) {
      setError("Invalid email or password");
    }
  };
  return (
    <div className=" layout d-flex flex-column flex-md-row ">
      <div className="landing-img">
        <img src="Team-pro.svg" alt="landing" />
      </div>

      <div className="login-form">
        {Error && <h3 className="text-danger">{Error}</h3>}
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-3">
            <label htmlFor="email" className="form-label fw-bold">
              Email
            </label>
            <input
              {...register("email", { required: "email is required" })}
              type="email"
              className="form-control"
              id="email"
            />
            {errors.email && (
              <small className="text-danger">{errors.email.message}</small>
            )}
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label fw-bold">
              Password
            </label>
            <input
              {...register("password", {
                required: "password is required",
                minLength: {
                  value: 5,
                  message: "Password can't be less than 5 characters",
                },
              })}
              type="password"
              className="form-control"
              id="password"
            />
            {errors.password && (
              <small className="text-danger">{errors.password.message}</small>
            )}
          </div>
          <button type="submit" className="btn btn-warning">
            Login
          </button>
        </form>
      </div>
    </div>
  );
}
