document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('form-sorteador').addEventListener('submit', function() {
        let numeroMaximo = document.getElementsById('numero-maximo');
        numeroMaximo = parseInt(numeroMaximo);
        
        let numeroAleatorio = Math.random() * numeroMaximo;
        alert(numeroAleatorio);
    })
})