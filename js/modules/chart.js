
import { obterTotaisDoDia } from './storage.js';

export function exibirGrafico(agua, xixi) {
    const ctx = document.getElementById('grafico').getContext('2d');
    new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['Água Ingerida', 'Xixi Expelido'],
            datasets: [{
                label: 'Quantidade (ml)',
                data: [agua, xixi],
                backgroundColor: ['#4A90E2', '#D0021B']
            }]
        },
        options: {
            responsive: true,
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
}
