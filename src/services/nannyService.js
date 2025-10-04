import { db } from "../firebase";
import { ref, get } from "firebase/database";

export async function getNannies() {
  const dbRef = ref(db);
  const snapshot = await get(dbRef);

  if (snapshot.exists()) {
    return snapshot.val();
  } else {
    return {};
  }
}
