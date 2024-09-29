import { createContext } from "react";
import { contents } from "./constants";

export const streamContext = createContext({
  title: "restream",
  description:
    "Restream helps you multistream & reach your audience, wherever they are.",
  value: contents[0],
});
