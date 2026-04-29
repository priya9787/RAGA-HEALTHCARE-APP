import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBU9J3vmHfTv7Qcq9SMdtje2oW45HuHmVY",
  authDomain: "raga-healthcare-a6a96.firebaseapp.com",
  projectId: "raga-healthcare-a6a96",
  appId: "1:115517395698:web:6df41fe52fe77ef28bb66b",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);