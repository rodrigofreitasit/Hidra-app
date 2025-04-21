
export function atualizarResumo(agua, xixi) {
    document.getElementById("aguaTotal").textContent = agua;
    document.getElementById("xixiTotal").textContent = xixi;
    const comparacao = document.getElementById("comparacao");
    if (agua > xixi) {
        comparacao.textContent = "Boa hidratação!";
        comparacao.style.color = "green";
    } else if (xixi > agua) {
        comparacao.textContent = "Atenção: você expeliu mais do que ingeriu.";
        comparacao.style.color = "red";
    } else {
        comparacao.textContent = "Ingestão equilibrada.";
        comparacao.style.color = "orange";
    }
}
