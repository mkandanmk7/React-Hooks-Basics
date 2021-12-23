import React from "react";
import { FetchApi } from "./FetchApi";

const ApiCalls = () => {
  const BaseURL = "https://jsonplaceholder.typicode.com/users";
  const data = FetchApi(BaseURL);
  console.log(data);
  return (
    <div>
      {data.loading && <p>Loading...</p>}
      {data.error && <p>Error happend</p>}
      {data.data &&
        data.data.map((user) => {
          return <p key={user.id}>User name is {user.name}</p>;
        })}
    </div>
  );
};

export default ApiCalls;
