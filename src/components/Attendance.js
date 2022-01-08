import React from "react";
import { useForm } from "react-hook-form";

export default function Attendance() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({ mode: "onTouched" });

  const onSubmit = (data) => {
    console.log("attendance");
    console.log(data);
    reset();
  };

  return (
    <div className="layout d-flex">
      <form className="attendance-form" onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-3">
          <label htmlFor="arrival" className=" form-label fw-bold">
            Arrival Time
          </label>
          <input
            {...register("arrival")}
            type="time"
            className="form-control"
            id="arrival"
          />
          {errors.arrival && (
            <small className="text-danger">{errors.arrival.message}</small>
          )}
        </div>
        <div className="mb-3">
          <label htmlFor="exiting" className="form-label fw-bold">
            Exiting Time
          </label>
          <input
            {...register("exiting")}
            type="time"
            className="form-control"
            id="exiting"
          />
          {errors.exiting && (
            <small className="text-danger">{errors.exiting.message}</small>
          )}
        </div>
        <div className="mb-3">
          <label htmlFor="break" className="form-label fw-bold">
            Lunch Break
          </label>
          <input
            {...register("break")}
            type="number"
            className="form-control"
            id="break"
          />
          {errors.exiting && (
            <small className="text-danger">{errors.exiting.message}</small>
          )}
        </div>
        <button type="submit" className="btn btn-warning">
          Submit
        </button>
      </form>
    </div>
  );
}
