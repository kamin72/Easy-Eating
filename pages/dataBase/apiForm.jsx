import { useState } from "react";

export default function AddForm() {
  const [petName, setPetName] = useState("");
  const [ownerName, setOwnerName] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("/api/addData", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ petName, ownerName }),
    });

    if (response.status == 200) {
      alert("Pet added successfully!");
      setPetName("");
      setOwnerName("");
    } else {
      alert("Error adding pet");
    }
  };

  const handleDelete = async () => {
    const response = await fetch("/api/deleteData", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ ownerName }),
    });

    if (response.status == 200) {
      alert("data has been deleted successfully!");
      setOwnerName("");
    } else {
      alert("Delete Error");
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="petName">petName:</label>
          <input
            type="text"
            name="petName"
            id="petName"
            value={petName}
            onChange={(e) => setPetName(e.target.value)}
            required
            className="border border-blue-500 mx-[5px]"
          />
          <label htmlFor="ownerName">ownerName:</label>
          <input
            type="text"
            name="ownerName"
            id="ownerName"
            value={ownerName}
            onChange={(e) => setOwnerName(e.target.value)}
            required
            className="border border-blue-500 mx-[5px]"
          />
          <button type="submit" className="bg-amber-300">
            Submit
          </button>
          <button
            type="button"
            onClick={handleDelete}
            className="bg-amber-900 mx-[10px]">
            Delete
          </button>
        </div>
      </form>
    </>
  );
}
