import css from "./Auth.module.css";
import Icon from "../../Icon/Icon";
import { useState } from "react";

export default function LoginForm({ onSubmit }) {
  const [showPassword, setShowPassword] = useState(false);

  const togglePassword = () => {
    setShowPassword((prev) => !prev);
  };

  return (
    <form className={css.form} onSubmit={onSubmit}>
      <h2 className={css.formTitle}>Log In</h2>
      <p className={css.formText}>
        Welcome back! Please enter your credentials to access your account and
        continue your babysitter search.
      </p>
      <input
        className={css.input}
        type="email"
        name="email"
        placeholder="Email"
        required
      />
      <div className={css.inputWrapper}>
        <input
          className={css.input}
          type={showPassword ? "text" : "password"}
          name="password"
          placeholder="Password"
          required
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
      <button type="submit" className={css.btn}>
        Log in
      </button>
    </form>
  );
}
