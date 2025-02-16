// App.js
import React, { useState, useEffect } from "react";
import Loader from "../Loader/Loader";

const File = () => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // Simulating a network request or async operation
    setTimeout(() => {
      setLoading(false);
    }, 3000); // 3 seconds delay
  }, []);

  return (
    <div>
      {loading ? <Loader /> : <h1>Data Loaded!</h1>}
    </div>
  );
};

export default File;
