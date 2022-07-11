import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDocs,
  updateDoc,
} from "firebase/firestore";
import { useEffect, useState } from "react";

import { db } from "./firebaseConfig";

function App() {
  const [users, setUsers] = useState([]);
  const [name, setName] = useState("");
  const usersCollectionRef = collection(db, "users");

  const getUsers = async () => {
    const data = await getDocs(usersCollectionRef);
    setUsers(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  };

  const createUser = async () => {
    await addDoc(usersCollectionRef, { name });
    await getUsers();
    setName("");
  };

  const updateUser = async (id, name) => {
    const userDoc = doc(db, "users", id);
    const newField = { name: name + " ⭐️" };
    await updateDoc(userDoc, newField);
    await getUsers();
  };

  const deleteUser = async (id) => {
    const userDoc = doc(db, "users", id);
    await deleteDoc(userDoc);
    await getUsers();
  };

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <div className="container">
      <br />

      <br />
      <h3 className="mb-3">Users:</h3>

      <div className="input-group mb-1">
        <input
          type="text"
          className="form-control"
          placeholder="Name..."
          aria-label="Name..."
          aria-describedby="button-addon2"
          onChange={(event) => setName(event.target.value)}
        />
        <button
          className="btn btn-outline-secondary"
          type="button"
          id="button-addon2"
          onClick={createUser}
        >
          Add
        </button>
      </div>

      <ol className="list-group list-group-numbered list-group-flush">
        {users.map((user) => (
          <li key={user.id} className="list-group-item">
            {user.name}{" "}
            <button
              type="button"
              className="btn btn-light float-end"
              onClick={() => {
                deleteUser(user.id);
              }}
            >
              🗑️
            </button>
            <button
              type="button"
              className="btn btn-light float-end"
              onClick={() => {
                updateUser(user.id, user.name);
              }}
            >
              Add ⭐️
            </button>
          </li>
        ))}
      </ol>
    </div>
  );
}

export default App;
