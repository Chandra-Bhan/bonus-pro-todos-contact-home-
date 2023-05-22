import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";

function Home() {
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
    <div
      className="border p-5"
      style={{ marginTop: "7rem", padding: "1.5rem" }}
    >
      <h1 className="text-success pt-5">
        Welcome aboard,
        <span className="text-danger">
          {" "}
          {firstName} {lastName}!{" "}
        </span>{" "}
        You are one of the most proficient and resourceful candidates we have
        hired so far. We hope you like the amenities here, and make sure your
        talents are utilized!
      </h1>
      <button
        onClick={() => {
          Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!",
          }).then((result) => {
            if (result.isConfirmed) {
              localStorage.setItem("contact", JSON.stringify([]));
              Swal.fire("Deleted!", "Your file has been deleted.", "success");
            }
          });
        }}
        className="btn btn-danger ps-5 pe-5 m-5"
      >
        Clear LocalStorage
      </button>
    </div>
  );
}

export default Home;
