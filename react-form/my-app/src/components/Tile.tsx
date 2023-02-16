import useQuery, { User } from "../hooks/useQuery";
import Form from "./Form";
import { useState } from "react";

export default function Tile(props: {
  id: number;
  name: string;
  email: string;
  phone: string;
  onSubmit: (vals: any) => Promise<any>;
  onRemove: (id: number) => Promise<any>;
}) {
  const [visible, setVisible] = useState(false);

  return (
    <div>
      <div>
        {props.name} {props.email} {props.phone}
      </div>

      <div>
        <button onClick={() => props.onRemove(props.id)}>REMOVE</button>
        <button onClick={() => setVisible((prev) => !prev)}>EDIT</button>
      </div>

      {visible && <Form onSubmit={props.onSubmit} />}
    </div>
  );
}
