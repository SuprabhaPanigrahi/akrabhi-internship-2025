import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import type { AppDispatch, RootState } from "@/redux/store";
import { clearAuthMessages, loginUser } from "@/redux/authSlice";
import type { LoginFormInputs } from "@/components1/Auth/types";
import {
  AuthContainer,
  AuthTitle,
  AuthFooter,
  FormGroup,
} from "@/styles/authFormStyle";
import { Button } from "@/components/ui/button";
import InputField from "@/components1/Auth/InputField";
import FormMessages from "@/components1/Auth/FormMessages";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<LoginFormInputs>();

  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || "/dashboard";

  const { isAuthenticated, error, success, loading } = useSelector(
    (state: RootState) => state.auth
  );

  useEffect(() => {
    if (isAuthenticated) {
      navigate(from, { replace: true });
    }
    return () => {
      dispatch(clearAuthMessages());
    };
  }, [isAuthenticated, navigate, from, dispatch]);

  const onSubmit = (data: LoginFormInputs) => {
    dispatch(loginUser(data));
  };

  return (
    <AuthContainer>
      <AuthTitle>Login</AuthTitle>

      <FormMessages error={error} success={success} />

      <form onSubmit={handleSubmit(onSubmit)}>
        <FormGroup>
          <InputField
            id="email"
            label="Email"
            type="email"
            placeholder="Enter your email"
            register={register("email", {
              required: "Email is required",
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "Invalid email address",
              },
            })}
            error={errors.email}
          />

          <InputField
            id="pass"
            label="Password"
            type="password"
            placeholder="Enter your password"
            register={register("pass", {
              required: "Password is required",
              minLength: {
                value: 6,
                message: "Password must be at least 6 characters",
              },
            })}
            error={errors.pass}
          />
        </FormGroup>

        <div className="flex gap-4 mt-6">
          <Button type="submit" className="flex-1" disabled={loading}>
            {loading ? "Logging in..." : "Login"}
          </Button>
          <Button
            type="button"
            variant="outline"
            className="flex-1"
            onClick={() => reset()}
          >
            Reset
          </Button>
        </div>
      </form>

      <AuthFooter>
        Don't have an account?{" "}
        <Link to="/register" className="text-blue-500 hover:underline">
          Register here
        </Link>
      </AuthFooter>
    </AuthContainer>
  );
};

export default Login;
