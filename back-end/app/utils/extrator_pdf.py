import fitz

def extrair_texto(pdf):
    texto = ""

    pdf = fitz.open(stream=pdf, filetype="pdf")

    for pagina in pdf:
        texto += pagina.get_text()

    return texto