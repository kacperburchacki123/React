import { Formik } from "formik";
import React from "react";
import Form from "./components/Form";
import Tile from "./components/Tile";

import useQuery from "./hooks/useQuery";

function App() {
  const { users, create, remove, update } = useQuery(true);

  return (
    <main className="app">
      <section className="form">
        <Form onSubmit={create} />
      </section>

      <section>
        {users.map((user) => (
          <Tile
            key={user.id + user.name}
            onRemove={remove}
            onSubmit={(v) => update({ ...v, id: user.id })}
            {...user}
          />
        ))}
      </section>
    </main>
  );
}

export default App;
