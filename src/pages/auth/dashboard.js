import Preloader from "@/components/Preloader";
import { auth, db } from "../../../firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import styles from "../../styles/dashboard.module.css";
import { collection, getDocs, updateDoc } from "firebase/firestore";

export default function dashboard() {
  const [user, setUser] = useState();
  const [isPushCalled, setIsPushCalled] = useState(false);
  const [preloading, setPreloading] = useState(true);
  const [data, setData] = useState([]);
  const [mainHeading, setMainHeading] = useState("");
  const [github, setGithub] = useState("");
  const [discord, setDiscord] = useState("");
  const [linkedin, setLinkedin] = useState("");

  const router = useRouter();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
        setPreloading(false);
        return;
      }

      if (!user && !isPushCalled) {
        router.push("admin");
        setIsPushCalled(true);
      }
    });

    async function fetchData() {
      const querySnapshot = getDocs(collection(db, "data"));

      querySnapshot.forEach((doc) =>
        setData((prevData) => [...prevData, ...doc.data()])
      );
    }

    fetchData();
  }, []);

  function logOut() {
    signOut(auth)
      .then(() => router.push("admin"))
      .catch((err) => alert(err));
  }

  async function updateGeneralInformation(e) {
    e.preventDefault();

    await updateDoc(collection(db, "info"), {
      mainHeading,
      github,
      discord,
      linkedin,
    });

    alert("done");
  }

  if (preloading) return <Preloader />;

  return (
    <div className={styles.dashboard}>
      <header className={styles.header}>
        <h1>Dashboard</h1>
        <button onClick={logOut}>Sign out</button>
      </header>

      <div className={styles.sections}>
        <div className={styles.section}>
          <h2>General information</h2>
          <form onSubmit={updateGeneralInformation}>
            <div>
              <label htmlFor="heading">Main Heading:</label>
              <input
                type="text"
                name="heading"
                value={mainHeading}
                onChange={(e) => setMainHeading(e.target.value)}
              />
              <span className="before"></span>
              <span className="border"></span>
            </div>
            <div>
              <label htmlFor="github">Github:</label>
              <input
                type="text"
                name="github"
                value={github}
                onChange={(e) => setGithub(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="discord">Discord:</label>
              <input
                type="text"
                name="discord"
                value={discord}
                onChange={(e) => setDiscord(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="linkedin">LinkedIn:</label>
              <input
                type="text"
                name="linkedin"
                value={linkedin}
                onChange={(e) => setLinkedin(e.target.value)}
              />
            </div>
            <button type="submit" onClick={updateGeneralInformation}>
              Update
            </button>
          </form>
        </div>
        <div className={styles.section}>
          <h2>Tech I use</h2>
          <form></form>
        </div>
      </div>
    </div>
  );
}
