import React from "react";
import { Link } from "react-router-dom";

function HomePage() {
  return (
    <div>
      <Link to="/login">
        <button>Admin</button>
      </Link>
      <Link to="/user">
        <button>User</button>
      </Link>
    </div>
  );
}

export default HomePage;
