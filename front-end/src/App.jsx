import "./App.css";
import { enviarMensagem } from "../api/api";
import { useState } from "react";

function App() {
  const [message, setMessage] = useState("");

  function saveMessage(event) {
    setMessage(event.target.value);
  }

  async function handleEnviar() {
    const data = await enviarMensagem(message);

    console.log(data);
  }

  return (
    <>
      <input
        type="text"
        onChange={saveMessage}
      />

      <button onClick={handleEnviar}>
        Enviar
      </button>
    </>
  );
}

export default App;