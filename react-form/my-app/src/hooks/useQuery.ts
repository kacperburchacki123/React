import { useState, useEffect } from "react";

export interface User {
  id: number;
  email: string;
  name: string;
  phone: string;
}

export default function useQuery(initQuery = true) {
  const [users, setUsers] = useState<User[]>([]);

  async function query() {
    const response = await fetch("http://localhost:3030/");

    const data = await response.json();

    setUsers(data);
  }

  async function update(props: User) {
    const response = await fetch("http://localhost:3030/" + props.id, {
      method: "PUT",
      body: JSON.stringify(props),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await response.json();

    if (response.status === 200) {
      setUsers((prev) =>
        prev.map((user) => {
          if (user.id === props.id) return { ...data.user, id: props.id };

          return user;
        })
      );
    }
  }

  async function remove(userId: number) {
    const response = await fetch("http://localhost:3030/" + userId, {
      method: "DELETE",
    });

    console.log(await response.json());

    if (response.status === 200) {
      setUsers((prev) => prev.filter((e) => e.id !== userId));
    }
  }

  async function create(input: { email: string; name: string; phone: string }) {
    const response = await fetch("http://localhost:3030/", {
      method: "POST",
      body: JSON.stringify(input),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) throw new Error("Bad request");

    const data = await response.json();

    setUsers((prev) => [...prev, data.user]);
  }

  useEffect(() => {
    if (initQuery) query();
  }, []);

  return { users, create, remove, update };
}
