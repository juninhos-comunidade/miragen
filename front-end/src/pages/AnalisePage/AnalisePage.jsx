import { useLocation, useNavigate } from "react-router"
import {enviarCurriculo} from '../../../api/api.js' 
import { useEffect, useState } from 'react'

function AnalisePage() {
    const { state } = useLocation()
    const [etapa, setEtapa] = useState("");
    const {resumeFile, jobDescription } = state;
    const navigate = useNavigate();

    function esperar(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }
    
    useEffect(() => {
        async function analisar() {
            setEtapa("Enviando currículo...");

            const resultado = await enviarCurriculo(
                resumeFile,
                jobDescription
            );

            setEtapa("Extraindo texto...");
            await esperar(1000);

            setEtapa("Analisando compatibilidade...");
            await esperar(1000);

            setEtapa("Preparando resultados...");

            navigate("/resultado", {
                state: resultado,
            });
        }

        analisar();
    }, [resumeFile, jobDescription, navigate]);
    
    return (
        <div>
            {etapa}
        </div>
    );
}

export default AnalisePage