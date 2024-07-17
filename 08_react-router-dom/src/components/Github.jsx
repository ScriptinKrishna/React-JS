import React from "react";
import { useEffect, useState } from "react";

export default function Github() {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("https://api.github.com/users/ScriptinKrishna")
      .then((res) => res.json())
      .then((data) => {
        setData(data);
      });
  }, []);
  return (
    <div>
      <center>
        <h1 className="text-4xl text-center bg-black bg-blend-darken p-3 text-white">
          Github followers: {data.followers}
        </h1>
      </center>
    </div>
  );
}
