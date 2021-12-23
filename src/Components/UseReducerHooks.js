import React, { useReducer, useState } from "react";
const initialState = {
  contacts: [{ id: Date.now(), name: "muthu", email: "muthu@gmail.com" }],
  counter: 0,
};
const CounterReducer = (state, action) => {
  switch (action.type) {
    case "addcount":
      return {
        ...state,
        counter: state.counter + 1,
      };

    case "deccount":
      return {
        ...state,
        counter: state.counter - 1,
      };

    case "add": {
      console.log("Payload ", action.paylo);
      //   state.contacts.push(action.payload);
      return {
        ...state,
        contacts: [...state.contacts, action.paylo], //added an new object value to existing array data;
      };
    }
    default:
      return state;
  }
};

const UseReducerHooks = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  //state used for get state value from reducer function;
  const [state, dispatch] = useReducer(CounterReducer, initialState);
  console.log(state);

  const addContact = (e) => {
    e.preventDefault();
    console.log("name ", name, email);
    const contact = { id: Date.now(), name, email };
    dispatch({ type: "add", paylo: contact });
    setName("");
    setEmail("");
  };

  const DeleteContact = (id) => {
    console.log("deleted contact is :", id);
  };
  // counter example
  return (
    <div>
      {/* <h2>Counter Value is {state}</h2>
      <button onClick={() => dispatch({ type: "addcount" })}>Inc</button>
      <button onClick={() => dispatch({ type: "deccount" })}>Dec</button>
      <hr /> */}

      <h3>Contact details</h3>
      <form onSubmit={addContact}>
        <input
          type="text"
          value={name}
          name="name"
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter Name"
        />
        <input
          type="email
          "
          value={email}
          name="email"
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter email"
        />
        <button>Add Contact</button>
      </form>
      <h2>Contact Details</h2>
      {state.contacts.map((contact) => {
        return (
          <div key={contact.id}>
            <ul>
              <li>{contact.name}</li>
              <li>{contact.email}</li>
              <button onClick={DeleteContact(contact.id)}>
                Delete Contact
              </button>
            </ul>
          </div>
        );
      })}
    </div>
  );
};

export default UseReducerHooks;
