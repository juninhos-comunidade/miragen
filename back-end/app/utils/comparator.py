# Da forma mais simples possível
def comparar_vaga_curriculo(curriculo, vaga):
    palavras_chave = list

    palavras_vaga = vaga.lower().split()
    palavras_curriculo = curriculo.lower().split()

    score = 0
    total = 0

    for palavra in palavras_vaga:
        if palavra in palavras_chave:
            total += 1
            if palavra in palavras_curriculo:
                score += 1

    return score / total