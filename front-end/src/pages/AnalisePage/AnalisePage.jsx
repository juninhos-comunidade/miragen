import { useLocation, useNavigate } from "react-router";
import { enviarCurriculo } from "../../../api/api.js";
import { useEffect, useState } from "react";
import './AnalisePage.css'

function AnalisePage() {
    const { state } = useLocation();
    const { resumeFile, jobDescription } = state;
    const navigate = useNavigate();

    const [etapaAtual, setEtapaAtual] = useState(0);

    const etapas = [
        "Enviando currículo",
        "Extraindo texto",
        "Analisando compatibilidade",
        "Preparando resultados"
    ];

    function esperar(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    useEffect(() => {
        async function analisar() {
            setEtapaAtual(0);

            const resultado = await enviarCurriculo(
                resumeFile,
                jobDescription
            );

            setEtapaAtual(1);
            await esperar(1000);

            setEtapaAtual(2);
            await esperar(1000);

            setEtapaAtual(3);
            await esperar(1000);

            navigate("/results", {
                state: resultado,
            });
        }

        analisar()
    }, [resumeFile, jobDescription, navigate]);

    return (
        <div className="analysis-page">
            <div className="analysis-card">
                <h2 className="analysis-title">
                    Analisando seu currículo
                </h2>

                <p className="analysis-subtitle">
                    Aguarde enquanto comparamos seu currículo com a vaga.
                </p>

                {etapas.map((etapa, index) => (
                    <div className="analysis-step" key={etapa}>
                        <span>
                            {index < etapaAtual && "✓"}
                            {index === etapaAtual && "⟳"}
                            {index > etapaAtual && "○"}
                        </span>

                        <span>{etapa}</span>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default AnalisePage;