
import { salvarRegistro, obterTotaisDoDia } from './modules/storage.js';
import { atualizarResumo } from './modules/ui.js';

document.addEventListener("DOMContentLoaded", () => {
    if (location.pathname.includes("index")) {
        const totais = obterTotaisDoDia();
        atualizarResumo(totais.agua, totais.xixi);
    }

    if (location.pathname.includes("agua")) {
        document.getElementById("formAgua").addEventListener("submit", (e) => {
            e.preventDefault();
            const [data, hora, ml] = e.target.elements;
            salvarRegistro("agua", data.value, hora.value, Number(ml.value));
            e.target.reset();
            alert("Registro salvo!");
        });
    }

    if (location.pathname.includes("xixi")) {
        document.getElementById("formXixi").addEventListener("submit", (e) => {
            e.preventDefault();
            const [data, hora, ml] = e.target.elements;
            salvarRegistro("xixi", data.value, hora.value, Number(ml.value));
            e.target.reset();
            alert("Registro salvo!");
        });
    }
});
