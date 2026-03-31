function enviarWhats(event) {
    event.preventDefault();

    const name = document.getElementById('name').value.trim();
    const message = document.getElementById('message').value.trim();
    if (!name || !message) {
        alert('Por favor, preencha ambos os campos: Nome e Mensagem.');
        return;
    }

    const telefone = '55 35 99999-9999';
    const text = `Olá, meu nome é ${name},  ${message}`;
    const msgFormatada = encodeURIComponent(text);

    const url = `https://wa.me/${telefone}?text=${msgFormatada}`;

    window.open(url, '_blank');
}
// form.addEventListener('submit', function(event) {
//     event.preventDefault();
// });