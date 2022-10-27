import React, { useEffect, useContext, useCallback, useState } from "react";
import { CustomContext } from "./hello-memo";

export const MemoChild = React.memo(() => {
  const [fieldValue, setFieldValue] = useState();
  const context = useContext(CustomContext);
  const veryExpensiveValue = useCallback(() => {
    console.log("Current value ");
  }, [fieldValue]);
  useEffect(() => {
    console.log("MemoChild rendered!");
  });
  return (
    <input
      onChange={(event) => {
        setFieldValue(event.target.value);
      }}
    ></input>
  );
});
