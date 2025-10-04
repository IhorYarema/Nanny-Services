import { auth } from "./firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";

export default function AuthModal() {
  const register = async () => {
    try {
      const user = await createUserWithEmailAndPassword(
        auth,
        "test@test.com",
        "123456"
      );
      console.log("Registered:", user);
    } catch (e) {
      console.error(e);
    }
  };

  const login = async () => {
    try {
      const user = await signInWithEmailAndPassword(
        auth,
        "test@test.com",
        "123456"
      );
      console.log("Logged in:", user);
    } catch (e) {
      console.error(e);
    }
  };

  const logout = async () => {
    await signOut(auth);
    console.log("Logged out");
  };

  return (
    <section>
      <h2>AuthModal</h2>
      <div>
        <button onClick={register}>Register test user</button>
        <button onClick={login}>Login test user</button>
        <button onClick={logout}>Logout</button>
      </div>
    </section>
  );
}
