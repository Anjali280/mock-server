import React from "react";

function User() {
  const registerUser = async () => {
    let g = "";
    if (document.getElementById("m").checked) {
      g = document.getElementById("m").value;
    } else if (document.getElementById("f").checked) {
      g = document.getElementById("f").value;
    } else {
      g = document.getElementById("o").value;
    }
    const user = {
      name: document.getElementById("name").value,
      age: document.getElementById("age").value,
      gender: g,
      country: document.getElementById("country").value,
      profession: document.getElementById("profession").value,
    };

    await fetch("http://localhost:3001/users", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    });
  };
  return (
    <div>
      <form>
        <input id="name" type="text" placeholder="Name" />
        <br />
        <input id="age" type="number" placeholder="Age" />
        <br />
        <input type="radio" value="Male" name="gender" id="m" />
        <label htmlFor="Male">Male</label>

        <input type="radio" value="Female" name="gender" id="f" />
        <label htmlFor="Female">Female</label>

        <input type="radio" value="Others" name="gender" id="o" />
        <label htmlFor="Others">Others</label>
        <br />

        <input type="text" placeholder="Country" id="country" />
        <br />

        <select name="" id="profession">
          <option value="Student">Student</option>
          <option value="Employed">Employed</option>
        </select>

        <button onClick={registerUser}>Register</button>
      </form>
    </div>
  );
}

export default User;
