from fastapi import APIRouter, Body, HTTPException

router = APIRouter()


@router.post("/envio-curriculo")
def receber_curriculo(dados: dict = Body(...)):
    if "mensagem" not in dados:
        raise HTTPException(
            status_code=400,
            detail="Campo obrigatorio"
        )

    return {
        "mensagem": dados["mensagem"]
    }