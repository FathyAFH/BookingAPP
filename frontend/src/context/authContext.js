import { createContext, useReducer, useEffect } from "react";

const INITIAL_STATE = {
  user: null,
  loading: false,
  error: null
};

export const AuthContext = createContext(INITIAL_STATE);

const AuthReducer = (state, action) => {
  switch (action.type) {
    case "LOGIN_START":
      return {
        ...state,
        loading: true,
        error: null
      };
    case "LOGIN_SUCCESS":
      return {
        ...state,
        user: action.payload,
        loading: false,
        error: null
      };
    case "LOGIN_FAILURE":
      return {
        ...state,
        loading: false,
        error: action.payload
      };
    case "LOGOUT":
      return {
        ...state,
        user: null,
        loading: false,
        error: null
      };
    default:
      return state;
  }
};

export const AuthContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AuthReducer, INITIAL_STATE);

  useEffect(() => {
    // Retrieve user data from localStorage
    const storedUser = localStorage.getItem("user");

    if (storedUser) {
      try {
        // Parse stored user data
        const parsedUser = JSON.parse(storedUser);

        // Dispatch action to update state with parsed user data
        dispatch({ type: "LOGIN_SUCCESS", payload: parsedUser });
      } catch (error) {
        // Handle parsing error (if any)
        console.error("Error parsing stored user data:", error);
      }
    }
  }, []);

  
  return (
    <AuthContext.Provider
      value={{
        user: state.user,
        loading: state.loading,
        error: state.error,
        dispatch
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
