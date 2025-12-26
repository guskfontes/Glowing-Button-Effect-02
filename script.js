// Seleciona o elemento
const plate = document.querySelector('.plate');

// Adiciona o evento de clique
plate.addEventListener('click', function() {
    // Liga/Desliga a classe 'active'
    this.classList.toggle('active');
    
    // Log para você saber que funcionou (abra o console do navegador com F12)
    console.log('Clicou! Estado ativo:', this.classList.contains('active'));
});