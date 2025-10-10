import css from "./Auth.module.css";

export default function RegisterForm({ onSubmit }) {
  return (
    <form className={css.form} onSubmit={onSubmit}>
      <h2>Registration</h2>
      <label>Email</label>
      <input type="email" name="email" required />
      <label>Password</label>
      <input type="password" name="password" required />
      <button type="submit" className={css.btn}>
        Sign up
      </button>
    </form>
  );
}
