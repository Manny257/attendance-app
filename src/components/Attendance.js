import React from "react";
import { useForm } from "react-hook-form";
import { useState } from "react";

export default function Attendance() {
  const [State, setState] = useState("");
  const expected = 7 * 60; // 7 hours of work (in mins)
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({ mode: "onTouched" });

  const onSubmit = (data) => {
    const ArrivingTime = data.arrival.split(":");
    const ExitingTime = data.exiting.split(":");
    const difference =
      (ExitingTime[0] - ArrivingTime[0]) * 60 +
      Math.abs(ExitingTime[1] - ArrivingTime[1]);

    if (expected > difference - data.break) setState("below");
    else setState("above");

    console.log((difference - data.break) / 60);
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
            {...register("arrival", {
              required: "please enter your arrival time",
            })}
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
            {...register("exiting", {
              required: "please enter your exiting time time",
            })}
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
            {...register("break", {
              required: "please enter your lunch break time",
            })}
            type="number"
            placeholder="in minuts"
            className="form-control"
            id="break"
          />
          {errors.exiting && (
            <small className="text-danger">{errors.break.message}</small>
          )}
        </div>
        {State ? (
          <h5>Your worked hours are {State} the expected working hours </h5>
        ) : (
          <button type="submit" className="btn btn-warning">
            Submit
          </button>
        )}
      </form>
    </div>
  );
}
