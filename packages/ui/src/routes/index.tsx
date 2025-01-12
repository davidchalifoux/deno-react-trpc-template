import { createFileRoute } from "@tanstack/react-router";
import { api } from "@glizz/api";
import {useState} from "react";

export const Route = createFileRoute("/")({
  component: HomeComponent,
  loader: async () => {
    return await api.testQuery.query();
  },
});

function HomeComponent() {
  const data = Route.useLoaderData();

  const [name, setName] = useState("Your name");

  async function handleClick() {
    const res = await api.testMutation.mutate({name: name});

    globalThis.alert(res)
  }

  return (
    <div className="p-2">
      <h3>Welcome Home!</h3>
      <p>{data} - from TRPC</p>

      <br/>

      <input defaultValue={name} onChange={(e) => setName(e.target.value)} />
      <button onClick={handleClick}>Test mutation</button>
    </div>
  );
}
