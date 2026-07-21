import { enviarCurriculo } from "../../../api/api";
import { useState, useRef } from "react";
import Upload from "../../components/Upload/Upload";
import Button from "../../components/Button/Button";
import Header from "../../components/Header/Header";
import TextArea from "../../components/TextArea/TextArea";
import './AnalisePage.css';

function AnalisePage() {
    const [resumeFile, setResumeFile] = useState(null);
    const [jobDescription, setJobDescription] = useState("");

    function handleFileChange(event) {
        const file = event.target.files[0]
        if (!file) return
        setResumeFile(file);
    }

    function handleJobDescChange(event) {
        const job = event.target.value
        if (!job) return
        setJobDescription(job)
    }

    async function handleEnviar() {
        if (!resumeFile || !jobDescription) return;
        const data = await enviarCurriculo(resumeFile, jobDescription);
        console.log(data);
    }

    const inputRef = useRef(null);
    function abrirSeletor() {
        inputRef.current?.click();
    }

    const formatFileSize = (bytes) => {
        if (!bytes) return '';
        return (bytes / 1024).toFixed(0) + ' KB';
    };

    return (
        <div className="analysis-page">
            <Header />
            <div className="envio-container">
                <Upload onChange={handleFileChange} />
                <Input onChange={handleJobDescChange} />
            </div>
            <Button variant="upload" text="Upload" onClick={handleEnviar} />
        </>
    )

}

export default AnalisePage;