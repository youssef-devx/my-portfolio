import { Inter } from "@next/font/google";
import { useEffect, useState } from "react";
import { auth } from "../../../firebase";
import { onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";
import styles from "./../../styles/admin.module.css";
import { useRouter } from "next/router";
import Preloader from "@/components/Preloader";

const inter = Inter({ subsets: ["latin"] });

export default function admin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [preloading, setPreloading] = useState(true);

  const router = useRouter();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) return router.push("dashboard");
      setPreloading(false);
    });
  }, []);

  function onSend(e) {
    e.preventDefault();

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;

        alert("signed in");
        router.push("dashboard");
      })
      .catch((error) => alert(error));
  }

  if (preloading) return <Preloader />;

  return (
    <form onSubmit={onSend} className={styles.adminForm}>
      <div className="form-group">
        <label htmlFor="email">Admin E-mail:</label>
        <div className="input-container">
          <input
            required={true}
            type="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <span className="before"></span>
          <span className="border"></span>
        </div>
      </div>
      <div className="form-group">
        <label htmlFor="password">Password:</label>
        <div className="input-container">
          <input
            required={true}
            type="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <span className="before"></span>
          <span className="border"></span>
        </div>
      </div>
      <button type="submit" className={inter.className} onClick={onSend}>
        <span className="before"></span>
        <span className="border"></span>
        <span style={{ display: "block" }}>Login</span>
      </button>
    </form>
  );
}
