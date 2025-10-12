import css from "./Auth.module.css";

export default function RegisterForm({ onSubmit }) {
  return (
    <form className={css.form} onSubmit={onSubmit}>
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
        required
      />

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
        Sign up
      </button>
    </form>
  );
}
