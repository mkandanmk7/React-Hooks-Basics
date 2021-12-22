import axios from "axios";
import React, { useEffect, useState } from "react";

const Fetch = () => {
  const [data, setData] = useState(null);

  const getData = async () => {
    const res = await axios.get(`https://jsonplaceholder.typicode.com/todos`);
    console.log(res);
    setData(res.data);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      {data &&
        data.map((item) => {
          return (
            <div key={item.id}>
              <ul>
                <li> {item.title} </li>
              </ul>
            </div>
          );
        })}
    </div>
  );
};

export default Fetch;
