let texto = "";

document.getElementById("contactForm").addEventListener("submit", function(e){

    e.preventDefault();

    const nome = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const mensagem = document.getElementById("message").value;

    texto =
`Nome: ${nome}

Email: ${email}

Mensagem:
${mensagem}`;

    $("#sendModal").modal("show");

});

document.getElementById("sendWhatsapp").onclick = function(){

    const numero = "258840584001";

    window.open(
        `https://wa.me/${numero}?text=${encodeURIComponent(texto)}`,
        "_blank"
    );

};

document.getElementById("sendEmail").onclick = function(){

    const destinatario = "rizikissufo@gmail.com";

    const assunto = "Nova mensagem do Website";

    window.location.href =
        `mailto:${destinatario}?subject=${encodeURIComponent(assunto)}&body=${encodeURIComponent(texto)}`;

};