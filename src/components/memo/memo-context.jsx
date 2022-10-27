import React, { useEffect } from "react";


export const MemoContext = React.memo(() => {
  useEffect(() => {
    console.log("MemoContext rendered!");
  });
  return <></>;
});
