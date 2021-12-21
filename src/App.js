import { createContext, useState } from "react";
import "./App.css";
import Component1 from "./Components/Component1";
import Component2 from "./Components/Component2";
import LastComponent from "./Components/LastComponent";

export const UserContext = createContext();
function App() {
  const [name, setname] = useState("Muthu");

  return (
    <div className="App">
      <UserContext.Provider value={name}>
        <Component2 />
        <Component1 />
        <LastComponent />
      </UserContext.Provider>
    </div>
  );
}

export default App;
