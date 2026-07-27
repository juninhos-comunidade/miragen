from fastapi import APIRouter, Body, HTTPException, UploadFile, File, Form
from app.utils.extrator_pdf import extrair_texto
from app.utils.comparator import comparar_vaga_curriculo

router = APIRouter()


@router.post("/envio")
async def receber_curriculo(file: UploadFile = File(...), job_description: str = Form(...)):
    if not file or not job_description:
        raise HTTPException(
            status_code=400,
            detail="Campo obrigatorio"
        )

    print(file.filename)
    print(job_description)


    pdf = await file.read()
    texto = extrair_texto(pdf)

    score = comparar_vaga_curriculo(texto, job_description)
    print(f"Score: {score}")
    
    return {
        "score": score
    }