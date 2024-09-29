import { createContext } from "react";

export const userContext = createContext({
  uid: "",
  email: "",
  photoURL: "",
});
