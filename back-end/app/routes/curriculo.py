from fastapi import APIRouter, Body, HTTPException, UploadFile, File, Form
from app.extrator_pdf import extrair_texto

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

    print(texto)

    return {
        "texto": texto
    }