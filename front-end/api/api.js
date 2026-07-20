const API_URL = "http://127.0.0.1:8000";

export async function enviarCurriculo(file, jobDescription) {

  const formData = new FormData();

  formData.append("file", file);
  formData.append("job_description", jobDescription);

  const response = await fetch(`${API_URL}/curriculo/envio`, {
    method: "POST",
    body: formData,
  });


  return await response.json();
}