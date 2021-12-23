import axios from "axios";
import { useEffect, useReducer } from "react";

const actions = {
  API_CALL: "api_call",
  GET_DATA: "get_data",
  ERROR: "error",
};
const initialState = {
  data: [],
  loading: false,
  error: null,
};

const dataReducer = (state, action) => {
  switch (action.type) {
    case actions.API_CALL: {
      return { ...state, data: [], loading: true };
    }
    case actions.GET_DATA: {
      return { ...state, data: action.payload, loading: false };
    }

    case actions.Error: {
      return { ...state, error: action.payload };
    }
    default:
      return state;
  }
};

export const FetchApi = (url) => {
  const [state, dispatch] = useReducer(dataReducer, initialState);

  // get data()
  const getData = async (url) => {
    try {
      const res = await axios.get(url);
      dispatch({ type: actions.GET_DATA, payload: res.data });
      console.log(res.data);
    } catch (err) {
      console.log(err.message);
      dispatch({ type: actions.Error, payload: err.message });
    }
  };

  useEffect(() => {
    dispatch({ type: actions.API_CALL });
    getData(url);
  }, [url]);

  return state;
};
