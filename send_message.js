document.getElementById("contactForm").addEventListener("submit", function(e){

    e.preventDefault();

    const nome = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const mensagem = document.getElementById("message").value;

    const texto =
`Nome: ${nome}

Email: ${email}

Mensagem:
${mensagem}`;

    const opcao = confirm(
        "Clique em OK para enviar por WhatsApp.\n\nClique em Cancelar para enviar por Email."
    );

    if(opcao){

        // WhatsApp
        const numero = "258840584001"; // seu número

        window.open(
            `https://wa.me/${numero}?text=${encodeURIComponent(texto)}`,
            "_blank"
        );

    }else{

        // Email
        const destinatario = "rizikissufo@gmail.com";

        const assunto = "Nova mensagem do Website";

        window.location.href =
        `mailto:${destinatario}?subject=${encodeURIComponent(assunto)}&body=${encodeURIComponent(texto)}`;

    }

});
