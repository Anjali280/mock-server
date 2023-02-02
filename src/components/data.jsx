import React, { useEffect, useState } from "react";

function Data() {
  const [user, setUser] = useState([]);

  useEffect(() => {
    fetchUsers("http://localhost:3001/users");
  }, []);

  const fetchUsers = async (url) => {
    const res = await fetch(url);
    const data = await res.json();
    console.log(data);
    setUser(data);
  };
  return (
    <div>
      {user.map((elem, idx) => {
        return <h2 key={idx}>{elem.name}</h2>;
      })}
    </div>
  );
}

export default Data;
