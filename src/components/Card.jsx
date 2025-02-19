import React, { useState } from "react";
import axios from "axios";

function Card() {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  async function apiCall() {
    await axios
      .get("http://localhost:8000/api/greet", { params: { name } })
      .then((res) => setMessage(res.data))
      .catch((err) => console.error(err));
      setName("");
  }

  return (
    <>
      <div className="w-1/2 h-1/2 bg-zinc-300 rounded-4xl flex flex-col justify-center items-center">
        <input
          className="w-64 h-9 px-2 border"
          placeholder="YourName"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <button
          className="p-3 rounded-xl mt-2 bg-black text-white"
          onClick={apiCall}
        >
          Get Greeting
        </button>
{message &&  <div className=" bg-zinc-600 text-2xl text-white w-[80%] p-6 mt-8 flex justify-center rounded-3xl">
            {message}
        </div> }

      </div>
    </>
  );
}

export default Card;
