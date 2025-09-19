import { useState, useEffect } from "react";

const url = "https://icanhazdadjoke.com";

export default function App() {
  const [joke, setJoke] = useState("");

  async function getJokes() {
    const response = await fetch(url, {
      headers: {
        Accept: "application/json",
      },
    });

    const data = await response.json();
    setJoke(data.joke);
  }

  useEffect(() => {
    getJokes();
  }, []);

  return (
    <>
      <h1>Dad Joke Generator</h1>
      <p>{joke}</p>
      <button onClick={getJokes}>Get New Joke</button>
    </>
  );
}
