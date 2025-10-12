import css from "./Auth.module.css";

export default function LoginForm({ onSubmit }) {
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
      <input
        className={css.input}
        type="password"
        name="password"
        placeholder="Password"
        required
      />
      <button type="submit" className={css.btn}>
        Log in
      </button>
    </form>
  );
}
