
export function salvarRegistro(tipo, data, hora, ml) {
    const registros = JSON.parse(localStorage.getItem(tipo)) || [];
    registros.push({ data, hora, ml });
    localStorage.setItem(tipo, JSON.stringify(registros));
}

export function obterTotaisDoDia() {
    const hoje = new Date().toISOString().slice(0, 10);
    const agua = (JSON.parse(localStorage.getItem("agua")) || [])
        .filter(r => r.data === hoje)
        .reduce((sum, r) => sum + r.ml, 0);
    const xixi = (JSON.parse(localStorage.getItem("xixi")) || [])
        .filter(r => r.data === hoje)
        .reduce((sum, r) => sum + r.ml, 0);
    return { agua, xixi };
}
