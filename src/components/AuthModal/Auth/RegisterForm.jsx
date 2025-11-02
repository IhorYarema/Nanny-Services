import css from "./Auth.module.css";
import Icon from "../../Icon/Icon";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup.object().shape({
  name: yup.string().required("Name is required"),
  email: yup.string().email("Invalid email").required("Email is required"),
  password: yup
    .string()
    .min(6, "Minimum 6 characters")
    .required("Password is required"),
});

export default function RegisterForm({ onSubmit }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    mode: "onTouched",
  });

  const [showPassword, setShowPassword] = useState(false);

  const togglePassword = () => {
    setShowPassword((prev) => !prev);
  };

  const handleFormSubmit = (data) => {
    if (onSubmit) onSubmit(data);
  };

  return (
    <form className={css.form} onSubmit={handleSubmit(handleFormSubmit)}>
      <h2 className={css.formTitle}>Registration</h2>
      <p className={css.formText}>
        Thank you for your interest in our platform! In order to register, we
        need some information. Please provide us with the following information.
      </p>

      <input
        className={css.input}
        type="text"
        name="name"
        placeholder="Name"
        {...register("name")}
      />
      {errors.name && <p className={css.errorText}>{errors.name.message}</p>}

      <input
        className={css.input}
        type="email"
        name="email"
        placeholder="Email"
        {...register("email")}
      />
      {errors.email && <p className={css.errorText}>{errors.email.message}</p>}

      <div className={css.inputWrapper}>
        <input
          className={css.input}
          type={showPassword ? "text" : "password"}
          name="password"
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
        {errors.password && (
          <p className={css.errorText}>{errors.password.message}</p>
        )}
      </div>
      <button type="submit" className={css.btn}>
        Sign up
      </button>
    </form>
  );
}
