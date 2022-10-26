import { useState } from "react";
import { createContext } from "react";
import { HelloCheckbox } from "./hello-checkbox";
import { HelloForm } from "./hello-form";

export const MyContext = createContext();

export const HelloContext = () => {
  const [isChecked, setIsChecked] = useState(false);

  return (
    <MyContext.Provider value={[isChecked, setIsChecked]}>
      <HelloCheckbox />
      <HelloForm />
    </MyContext.Provider>
  );
};
