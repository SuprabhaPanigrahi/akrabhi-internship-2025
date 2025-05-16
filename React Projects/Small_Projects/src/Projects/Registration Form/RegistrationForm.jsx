import React, { useState } from "react";
import { useForm } from "react-hook-form";
import "./Form.css";

export const RegistrationForm = () => {
  const [submitting, setSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    setSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 3000)); 
    console.log("Form submitted successfully:", data);
    setSubmitting(false);
    reset();
  };

  const watchedValues = watch();

  return (
    <div className="container">
      <h1>Employee Registration Form</h1>

      <div className="live-preview">
        Hello! My first name is <b>{watchedValues.firstname || "---"}</b> and
        last name is <b>{watchedValues.lastname || "---"}</b>. My email is{" "}
        <b>{watchedValues.email || "---"}</b> and phone number is{" "}
        <b>{watchedValues.phonenumber || "---"}</b>. I work as a{" "}
        <b>{watchedValues.designation || "---"}</b> and my current address is{" "}
        <b>{watchedValues.address || "---"}</b>.
      </div>

      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label htmlFor="fname"><b>First Name:</b></label><br />
          <input
            type="text"
            id="fname"
            {...register("firstname", {
              required: "First name is required",
              minLength: {
                value: 3,
                message: "Minimum 3 characters",
              },
              maxLength: {
                value: 20,
                message: "Maximum 20 characters",
              },
            })}
          />
          {errors.firstname && (
            <p className="error">{errors.firstname.message}</p>
          )}
        </div>

        <div>
          <label htmlFor="lname"><b>Last Name:</b></label><br />
          <input
            type="text"
            id="lname"
            {...register("lastname", {
              required: "Last name is required",
            })}
          />
          {errors.lastname && (
            <p className="error">{errors.lastname.message}</p>
          )}
        </div>

        <div>
          <label htmlFor="email"><b>Email:</b></label><br />
          <input
            type="email"
            id="email"
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/,
                message: "Invalid email format",
              },
            })}
          />
          {errors.email && <p className="error">{errors.email.message}</p>}
        </div>

        <div>
          <label htmlFor="pass"><b>Password:</b></label><br />
          <input
            type="password"
            id="pass"
            {...register("password", {
              required: "Password is required",
              minLength: {
                value: 6,
                message: "Minimum 6 characters",
              },
            })}
          />
          {errors.password && (
            <p className="error">{errors.password.message}</p>
          )}
        </div>

        <div>
          <label htmlFor="tele"><b>Contact Number:</b></label><br />
          <input
            type="tel"
            id="tele"
            {...register("phonenumber", {
              required: "Phone number is required",
              pattern: {
                value: /^[6-9]\d{9}$/,
                message: "Enter a valid 10-digit phone number",
              },
            })}
          />
          {errors.phonenumber && (
            <p className="error">{errors.phonenumber.message}</p>
          )}
        </div>

        <div>
          <label htmlFor="designation"><b>Designation:</b></label><br />
          <input
            type="text"
            id="designation"
            {...register("designation", {
              required: "Designation is required",
            })}
          />
          {errors.designation && (
            <p className="error">{errors.designation.message}</p>
          )}
        </div>

        <div>
          <label htmlFor="address"><b>Address:</b></label><br />
          <input
            type="text"
            id="address"
            {...register("address", {
              required: "Address is required",
            })}
          />
          {errors.address && (
            <p className="error">{errors.address.message}</p>
          )}
        </div>

        <div className="button-group">
          <input
            type="submit"
            value={submitting ? "Submitting..." : "Submit"}
            disabled={submitting}
          />
          <input type="reset" value="Reset" onClick={() => reset()} />
        </div>
      </form>
    </div>
  );
};
