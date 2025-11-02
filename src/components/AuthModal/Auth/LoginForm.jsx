import css from "./Auth.module.css";
import Icon from "../../Icon/Icon";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup.object().shape({
  email: yup.string().email("Invalid email").required("Email is required"),
  password: yup
    .string()
    .min(6, "Minimum 6 characters")
    .required("Password is required"),
});

export default function LoginForm({ onSubmit }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    mode: "onTouched",
  });

  const handleFormSubmit = (data) => {
    if (onSubmit) onSubmit(data);
  };

  const [showPassword, setShowPassword] = useState(false);

  const togglePassword = () => {
    setShowPassword((prev) => !prev);
  };

  return (
    <form className={css.form} onSubmit={handleSubmit(handleFormSubmit)}>
      <h2 className={css.formTitle}>Log In</h2>
      <p className={css.formText}>
        Welcome back! Please enter your credentials to access your account and
        continue your babysitter search.
      </p>
      <input
        className={css.input}
        type="email"
        placeholder="Email"
        {...register("email")}
      />
      {errors.email && <p className={css.errorText}>{errors.email.message}</p>}

      <div className={css.inputWrapper}>
        <input
          className={css.input}
          type={showPassword ? "text" : "password"}
          placeholder="Password"
          {...register("password")}
        />
        <button
          className={css.btnIcon}
          type="button"
          onClick={togglePassword}
          aria-label={showPassword ? "Hide password" : "Show password"}
        >
          <Icon
            className={css.iconEye}
            name={showPassword ? "eye" : "eye-off"}
            size={20}
          />
        </button>
      </div>
      {errors.password && (
        <p className={css.errorText}>{errors.password.message}</p>
      )}
      <button type="submit" className={css.btn}>
        Log in
      </button>
    </form>
  );
}
