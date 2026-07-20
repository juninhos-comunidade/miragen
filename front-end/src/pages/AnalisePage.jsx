import { enviarCurriculo } from "../../api/api";
import { useState } from "react";
import Upload from "../components/Upload";
import Button from "../components/Button";
import Header from "../components/Header";
import Input from "../components/Input"

function AnalisePage(){
    const [resumeFile, setResumeFile] = useState(null);
    const [jobDescription, setJobDescription] = useState("");

    function handleFileChange(event){
        const file = event.target.files[0]
        if (!file) return
        setResumeFile(file);
    }

    function handleJobDescChange(event){
        const job = event.target.value
        if (!job) return
        setJobDescription(job)
    }

    async function handleEnviar() {
        console.log(resumeFile, jobDescription)
        const data = await enviarCurriculo(resumeFile, jobDescription);
        console.log(data);
    }
    return (
        <>
            <Header />
            <Upload onChange={handleFileChange} />
            <Input onChange={handleJobDescChange} />
            <Button variant="upload" text="Upload" onClick={handleEnviar} />
        </>
    )

}

export default AnalisePage