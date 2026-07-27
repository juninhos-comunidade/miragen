import { useState, useRef } from "react";
import { useNavigate } from "react-router";
import Upload from "../../components/Upload/Upload";
import Button from "../../components/Button/Button";
import TextArea from "../../components/TextArea/TextArea";
import './UploadPage.css';


function UploadPage() {
    const [resumeFile, setResumeFile] = useState(null);
    const [jobDescription, setJobDescription] = useState("");

    function handleFileChange(event) {
        const file = event.target.files[0];
        if (!file) return;
        setResumeFile(file);
    }

    function handleJobDescChange(event) {
        const job = event.target.value;
        setJobDescription(job);
    }

    const navigate = useNavigate()
    async function handleEnviar() {
        if (!resumeFile || !jobDescription) return;
        navigate("/analise", {
        state: {
            resumeFile,
            jobDescription,
        },
    });
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

            <main className="analysis-container">

                <div className="page-title-section">
                    <div className="title-with-icon">
                        <div>
                            <h1>Nova análise</h1>
                            <p className="subtitle">Faça o upload do seu currículo e cole a descrição da vaga para receber uma análise personalizada.</p>
                        </div>
                    </div>
                </div>

                <div className="analysis-grid">
                    <div className="card-section resume-section">
                        <div className="card-header">
                            <div>
                                <h2>Seu currículo</h2>
                                <p className="section-desc">Envie seu currículo em PDF (máx. 10MB).</p>
                            </div>
                        </div>

                        <div className="resume-upload" onClick={abrirSeletor}>
                            <div className="upload-icon-circle">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><line x1="12" y1="19" x2="12" y2="5"/><polyline points="5 12 12 5 19 12"/></svg>
                            </div>

                            <p className="upload-title">Arraste e solte seu arquivo aqui</p>
                            <span className="upload-or">ou</span>
                           

                            <Upload
                                ref={inputRef}
                                hidden={true}
                                variant="upload-curriculo"
                                onChange={handleFileChange}
                            />

                            <Button
                                variant="btn-select-file"
                                text="Selecionar arquivo"
                                onClick={(e) => { e.stopPropagation(); abrirSeletor(); }}
                            />
                        </div>



                        {resumeFile && (
                            <div className="selected-file-card">
                                <div className="file-icon-pdf">PDF</div>
                                <div className="file-details">
                                    <p className="file-name">{resumeFile.name}</p>
                                    <span className="file-size">PDF • {formatFileSize(resumeFile.size)}</span>
                                </div>

                                <div className="check-icon">
                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><polyline points="20 6 9 17 4 12"/></svg>
                                </div>
                            </div>
                        )}

                    </div>

                    <div className="card-section job-section">
                        <div className="card-header justify-between">
                            <div className="header-left">
                                <div>
                                    <h2>Descrição da vaga</h2>
                                    <p className="section-desc">Cole aqui a descrição completa da vaga que você deseja.</p>
                                </div>
                            </div>                
                        </div>

                        <div className="textarea-wrapper">
                            <TextArea
                                variant="job-description"
                                onChange={handleJobDescChange}
                                placeholder="Cole aqui a descrição da vaga..."
                                value={jobDescription}
                            />
                            <span className="char-counter">{jobDescription.length}/5000 caracteres</span>
                        </div>
                    </div>
                </div>


                <div className="bottom-bar">
                    <div className="stepper">
                        <div className="step active">
                            <span className="step-number">1</span>
                            <span className="step-label">Informações</span>
                        </div>
                        <div className="step-line"></div>

                        <div className="step">
                            <span className="step-number">2</span>
                            <span className="step-label">Análise</span>
                        </div>

                        <div className="step-line"></div>
                        <div className="step">
                            <span className="step-number">3</span>
                            <span className="step-label">Resultados</span>
                        </div>
                    </div>


                    <div className="bottom-actions">
                        <Button

                            variant="btn-upload"

                            text="Analisar agora"

                            onClick={handleEnviar}

                        />
                    </div>
                </div>
            </main>
        </div>

    );
}

export default UploadPage