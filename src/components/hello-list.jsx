import { useState } from "react";
import { useEffect } from "react";

export const HelloList = () => {
  const [names, setNames] = useState([]);

  useEffect(() => {
    const apiNames = fetch("https://randomuser.me/api/?results=3").then(
      (response) => {
        if (response) {
          response.json().then((data) => {
            const newNames = [];
            data.results.forEach((result) => {
              newNames.push(result.name.first);
            });
            setNames(newNames);
          });
        }
      }
    );
    setNames(apiNames);
  }, []);

  return (
    <ul>
      {Boolean(names.length) &&
        names.map((name, index) => {
          const uniqueKey = `${name}${index}`;
          return <li key={uniqueKey}>{name}</li>;
        })}
    </ul>
  );
};
