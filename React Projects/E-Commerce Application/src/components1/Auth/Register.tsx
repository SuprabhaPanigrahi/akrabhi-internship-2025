import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import type { AppDispatch, RootState } from "@/redux/store";
import { clearAuthMessages, registerUser } from "@/redux/authSlice";
import type { User } from "@/components1/Auth/types";
import {
  AuthContainer,
  AuthTitle,
  AuthFooter,
  FormGroup,
} from "@/styles/authFormStyle";
import { Button } from "@/components/ui/button";
import InputField from "@/components1/Auth/InputField";
import FormMessages from "@/components1/Auth/FormMessages";

const Register = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<User>();

  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();

  const { isAuthenticated, error, success, loading } = useSelector(
    (state: RootState) => state.auth
  );

  useEffect(() => {
    if (isAuthenticated) navigate("/dashboard", { replace: true });
    return () => {
      dispatch(clearAuthMessages());
    };
  }, [isAuthenticated, navigate, dispatch]);

  const onSubmit = (data: User) => {
    dispatch(registerUser(data));
  };

  return (
    <AuthContainer>
      <AuthTitle>Sign Up</AuthTitle>
      <FormMessages error={error} success={success} />

      <form onSubmit={handleSubmit(onSubmit)}>
        <FormGroup>
          <InputField
            id="fname"
            label="First Name"
            placeholder="Enter your first name"
            register={register("fname", { required: "First name is required" })}
            error={errors.fname}
          />
          <InputField
            id="lname"
            label="Last Name"
            placeholder="Enter your last name"
            register={register("lname", { required: "Last name is required" })}
            error={errors.lname}
          />
          <InputField
            id="email"
            label="Email"
            type="email"
            placeholder="Enter your email"
            register={register("email", {
              required: "Email is required",
              pattern: {
                value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
                message: "Enter a valid email address",
              },
            })}
            error={errors.email}
          />
          <InputField
            id="phn"
            label="Phone"
            type="tel"
            placeholder="Enter your phone number"
            register={register("phn", {
              required: "Phone number is required",
              pattern: {
                value: /^[0-9]{10}$/,
                message: "Enter a valid 10-digit phone number",
              },
            })}
            error={errors.phn}
          />
          <InputField
            id="password"
            label="Password"
            type="password"
            placeholder="Enter your password"
            register={register("password", {
              required: "Password is required",
              minLength: {
                value: 6,
                message: "Password must be at least 6 characters",
              },
            })}
            error={errors.password}
          />
          <InputField
            id="repass"
            label="Confirm Password"
            type="password"
            placeholder="Re-enter your password"
            register={register("repass", {
              required: "Please confirm your password",
              validate: (val) =>
                val === watch("password") || "Passwords do not match",
            })}
            error={errors.repass}
          />
          <InputField
            id="address"
            label="Address"
            placeholder="Enter your address"
            register={register("address", {
              required: "Address is required",
            })}
            error={errors.address}
          />
        </FormGroup>

        <Button type="submit" disabled={loading} className="w-full mt-4">
          {loading ? "Registering..." : "Register"}
        </Button>
      </form>

      <AuthFooter>
        Already have an account?{" "}
        <Link to="/login" className="text-blue-500 hover:underline">
          Login here
        </Link>
      </AuthFooter>
    </AuthContainer>
  );
};

export default Register;
