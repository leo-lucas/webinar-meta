import React from "react";

interface ListProps {
  lista: Array<string>;
  action: (teste: string) => void;
}
export default function Lista({ lista, action }: ListProps): JSX.Element {
  return (
    <ul style={{ textAlign: "left" }}>
      {lista.map((el, index) => (
        <li onClick={() => action(index.toString())}>
          {index} - {el}
        </li>
      ))}
    </ul>
  );
}
