import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./services/firebase";
import { useAuthStore } from "./store/authStore";
import AppRoutes from "./routes/AppRoutes";

function App() {
  const setUser = useAuthStore((state) => state.setUser);
  const setAuthReady = useAuthStore((state) => state.setAuthReady);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
      setAuthReady(true); // ✅ IMPORTANT
    });

    return () => unsubscribe();
  }, []);

  return <AppRoutes/>
}

export default App;