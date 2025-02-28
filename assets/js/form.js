document.getElementById('contactForm').addEventListener('submit', function (event) {
    event.preventDefault(); // Impede o envio padrão do formulário

    // Captura os valores do formulário
    const name = document.getElementById('name').value;
    const message = document.getElementById('message').value;

    // Formata a mensagem
    const formattedMessage = `Olá, meu nome é ${name}. ${message}`;

    // Número de telefone no formato internacional (ex: 5511999999999 para um número brasileiro)
    const phoneNumber = '5511989954592'; 

    // Cria o link do WhatsApp
    const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(formattedMessage)}`;

    // Redireciona para o WhatsApp
    window.location.href = whatsappLink;
});