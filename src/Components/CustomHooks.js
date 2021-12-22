import axios from "axios";
import React, { useEffect, useState } from "react";

const CustomHooks = (url) => {
  const [data, setData] = useState([]);
  const [error, setError] = useState("");
  console.log(url);
  console.log(error);

  const getData = async () => {
    try {
      const res = await axios.get(url);
      setData(res.data);
      console.log(res.data);
    } catch (err) {
      console.log(err.message);
      setError(err.message);
    }
  };

  useEffect(() => {
    getData();
  }, [url]);
  return [data, error];
};

export default CustomHooks;
