const API_URL = "http://127.0.0.1:8000";

export async function enviarMensagem(mensagem) {
  const response = await fetch(`${API_URL}/curriculo/envio-curriculo`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      mensagem,
    }),
  });

  return await response.json();
}