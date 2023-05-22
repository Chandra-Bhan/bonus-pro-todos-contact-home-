import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  const [localStoreData, setLocalStoreData] = useState(
    localStorage.getItem("contact")
      ? JSON.parse(localStorage.getItem("contact"))
      : []
  );

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  useEffect(() => {
    if (localStoreData.length > 0) {
      let lastContact = localStoreData[localStoreData.length - 1];
      setFirstName(lastContact.firstName);
      setLastName(lastContact.lastName);
      console.log("hey", lastContact);
    }
  }, [localStoreData]);
  return (
    <div className="navbar pe-5 bg-dark ">
      <span className="navbar-brand ms-5 text-warning">
        Hello, {firstName} {lastName}
      </span>
      <span
        style={{
          width: "30rem",
          display: "flex",
          justifyContent: "space-between",
          fontSize: "25px",
          fontWeight: "bold",
        }}
      >
        <NavLink style={{ textDecoration: "none" }} to="/">
          Home
        </NavLink>
        <NavLink style={{ textDecoration: "none" }} to="/contact">
          Contact
        </NavLink>
        <NavLink style={{ textDecoration: "none" }} to="/task">
          Task
        </NavLink>
      </span>
    </div>
  );
}

export default Navbar;
