import React, { useEffect, useState } from "react";
import axios from "axios";
const Sellers = () => {
  const [user, setUser] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState();
  const [name, setName] = useState("");
  
  // calling api once
  useEffect(() => {
    fetchData();
  }, []);

  // fetch api
  const fetchData = async () => {
    try {
      setIsLoading(true);
      const res = await axios.get("https://jsonplaceholder.typicode.com/users");
      setUser(res.data);
      setIsLoading(false);
    } catch (err) {
      console.log(err.message);
    }
  };

  // add user
  const addUser = () => {
    const newUser = {
      name,
      id: user.length + 1,
    };
    setUser([newUser, ...user]);
    axios
      .post("https://jsonplaceholder.typicode.com/users", newUser)
      .then((res) => setUser([res.data, ...user]))
      .catch((err) => {
        setError(err.message);
        setUser(user);
      });
  };

  // delete user
  const handleDelete = (id) => {
    setUser(user.filter((u) => u.id !== id));
    axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`);
  };

  // update user
  const handleUpdate = (singleRecord) => {
    const updateUser = {
      ...singleRecord,
      name: singleRecord.name + ".....Updated",
    };
    setUser(user.map((u) => (u.id === singleRecord.id ? updateUser : u)));
    axios
      .patch(
        "https://jsonplaceholder.typicode.com/users/${singleRecord.id}",
        updateUser,
      )
      .catch((err) => {
        setError(err.message);
        setUser(user);
      });
  };
  // if (isLoading) return "Loading...";
  return (
    <div>
      <h1>users</h1>
      <div>
        <input
          type="text"
          placeholder="add name"
          onChange={(e) => setName(e.target.value)}
        />
        <button onClick={addUser}>Add User</button>
      </div>
      <div>
        <table>
          <tbody>
            {user.map((item) => (
              <tr>
                <td>{item.name}</td>
                <td>
                  <button
                    onClick={() => {
                      handleDelete(item.id);
                    }}
                  >
                    Delete
                  </button>
                </td>
                <td>
                  <button
                    onClick={() => {
                      handleUpdate(item);
                    }}
                  >
                    Update
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
export default Sellers;
