from fastapi import APIRouter, Body, HTTPException, UploadFile, File, Form


router = APIRouter()


@router.post("/envio-curriculo")
def receber_curriculo(file: UploadFile = File(...), job_description: str = Form(...)):
    if not file or not job_description:
        raise HTTPException(
            status_code=400,
            detail="Campo obrigatorio"
        )

    print(file.filename)
    print(job_description)

    return {
        "arquivo": file.filename,
        "descricao": job_description
    }