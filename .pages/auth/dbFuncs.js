import { collection, addDoc, doc, getDocs, deletedDoc } from "firebase/firestore";

function addProjects() {
  projects.forEach(async project => {
    const projectRef = await addDoc(collection(db, "projects"), project)

    console.log(projectRef)
  })
}

async function updateProject(PROJECT_ID) {
  const newData = {}
  const projectRef = doc(db, "projects", PROJECT_ID);

  await updateDoc(projectRef, newData)
}

async function getProjects() {
  const querySnapshot = await getDocs(collection(db, "projects"));

  querySnapshot.forEach((doc) => {

    setProjects(prevProjects => [...prevProjects, { ...doc.data(), id: doc.id }])
    console.log(doc.id, " => ", doc.data());
  })
}

async function deleteProject(PROJECT_ID) {
  await deleteDoc(doc(db, "projects", PROJECT_ID))
}

export {
  addProjects,
  updateProject,
  getProjects,
  deleteProject
}