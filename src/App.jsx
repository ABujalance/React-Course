import React from "react";
import "./global.css";
import { HelloList } from "./components/hello-list";
import { HelloWorld } from "./components/hello-world";
export function App() {
  return (
    <>
      <HelloWorld />
      <HelloList />
    </>
  );
}
