import { enviarMensagem } from "../../api/api";
import { useState } from "react";
import Upload from "../components/Upload";
import Button from "../components/Button";
import Header from "../components/Header";

function AnalisePage(){
    const [message, setMessage] = useState("");

    function handleFileChange(event){
        const file = event.target.files[0]
        if (!file) return
        setMessage(file)
    }

    async function handleEnviar() {
        const data = await enviarMensagem(message);

        console.log(data);
    }
    return (
        <>
            <Header />
            <Upload onChange={handleFileChange} />
            <Button variant="upload" text="Upload" onClick={handleEnviar} />
        </>
    )

}

export default AnalisePage