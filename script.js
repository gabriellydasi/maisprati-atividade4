/*const images = [
    'url(/240773house-cleaning.webp)',
    'url(/equipe-de-limpeza.png)',
    'url(/Hero Iamge.png)'
];
const homeSection = document.querySelector('.home');
let currentImageIndex = 0;

function changeBackgroundImage() {
    homeSection.style.backgroundImage = images[currentImageIndex];
    currentImageIndex = (currentImageIndex + 1) % images.length; // Reinicia o índice
}

setInterval(changeBackgroundImage, 5000); // Troca a cada 5 segundos*/

// COMENTÁRIOS/FEEDBACKS
document.addEventListener('DOMContentLoaded', function() {
    function carregarDepoimentos() {
        fetch('https://jsonplaceholder.typicode.com/comments')
            .then(response => response.json())
            .then(data => {
                const feedbackContainer = document.getElementById('feedback-container');
                feedbackContainer.innerHTML = ''; // Limpa o contêiner

                const comentariosPtBr = [
                    "Excelente serviço! A equipe foi pontual, minuciosa e deixou minha casa brilhando. Recomendo muito!",
                    "Muito profissional e atencioso. Fiquei extremamente satisfeito com o serviço prestado.",
                    "Serviço de alta qualidade! Minha casa nunca esteve tão limpa. A equipe é muito dedicada.",
                    "Adorei o serviço! A equipe foi muito cuidadosa e detalhista. Com certeza contratarei novamente.",
                    "Ótimo atendimento e serviço impecável. Minha casa ficou maravilhosa. Recomendo a todos!",
                    "Fiquei extremamente satisfeito com o serviço de limpeza oferecido! A equipe foi pontual, profissional e cuidadosa em cada detalhe."
                ];

                // Busca nomes da API do IBGE
                fetch('https://servicodados.ibge.gov.br/api/v2/censos/nomes')
                    .then(response => response.json())
                    .then(nomesData => {
                        const nomes = nomesData.slice(0, 6).map(nome => nome.nome);

                        data.slice(0, 6).forEach((depoimento, index) => { // Limita a 6 depoimentos para exemplo
                            const div = document.createElement('div');
                            div.classList.add('swiper-slide', 'feedback-img-text');

                            const h4 = document.createElement('h4');
                            h4.textContent = nomes[index];

                            const h5 = document.createElement('h5');
                            h5.textContent = 'Cliente Satisfeito'; 

                            const stars = document.createElement('div');
                            for (let i = 0; i < 6; i++) {
                                const star = document.createElement('i');
                                star.classList.add('fa', 'fa-star');
                                star.setAttribute('aria-hidden', 'true');
                                stars.appendChild(star);
                            }

                            const p = document.createElement('p');
                            p.textContent = comentariosPtBr[index];

                            div.appendChild(h4);
                            div.appendChild(h5);
                            div.appendChild(stars);
                            div.appendChild(p);

                            feedbackContainer.appendChild(div);
                        });

                        // Inicializa o Swiper após carregar os depoimentos
                        new Swiper('.swiper-container', {
                            slidesPerView: 1,
                            spaceBetween: 30,
                            navigation: {
                                nextEl: '.swiper-button-next',
                                prevEl: '.swiper-button-prev',
                            },
                            loop: false,
                        });
                    })
                    .catch(error => console.error('Erro ao carregar nomes:', error));
            })
            .catch(error => console.error('Erro ao carregar depoimentos:', error));
    }

    carregarDepoimentos();
});

// FORMULÁRIO

document.addEventListener('DOMContentLoaded', function() {
    emailjs.init("FaoTyMxFAifp_HskI"); // Chave pública da conta no EmailJS

    const form = document.getElementById('contactForm');

    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Impede o envio do formulário

        let isValid = true;
        const requiredFields = document.querySelectorAll('.required');

        // Verifica campos obrigatórios
        requiredFields.forEach(function(field) {
            if (!field.value.trim()) {
                isValid = false;
                field.style.borderColor = 'red';
            } else {
                field.style.borderColor = '';
            }
        });

        // Validação do nome
        const name = document.getElementById('name');
        const spanName = document.getElementById('spanName');
        if (!name.value.trim()) {
            isValid = false;
            name.style.borderColor = 'red';
            spanName.style.display = 'block';
        } else {
            name.style.borderColor = '';
            spanName.style.display = 'none';
        }

        // Validação do assunto
        const subject = document.getElementById('subject');
        const spanSubject = document.getElementById('spanSubject');
        if (!subject.value.trim()) {
            isValid = false;
            subject.style.borderColor = 'red';
            spanSubject.style.display = 'block';
        } else {
            subject.style.borderColor = '';
            spanSubject.style.display = 'none';
        }

        // Validação do email
        const email = document.getElementById('email');
        const spanEmail = document.getElementById('spanEmail');
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email.value.trim())) {
            isValid = false;
            email.style.borderColor = 'red';
            spanEmail.style.display = 'block';
        } else {
            email.style.borderColor = '';
            spanEmail.style.display = 'none';
        }

        // Validação da mensagem
        const message = document.getElementById('message');
        const spanMessage = document.getElementById('spanMessage');
        if (!message.value.trim()) {
            isValid = false;
            message.style.borderColor = 'red';
            spanMessage.style.display = 'block';
        } else {
            message.style.borderColor = '';
            spanMessage.style.display = 'none';
        }

        if (isValid) {
            sendMail(); // Chama o envio apenas se o formulário for válido
        } else {
            alert('Por favor, preencha todos os campos obrigatórios corretamente.');
        }
    });
});

// Função de envio de email
function sendMail() {
    const params = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        subject: document.getElementById('subject').value,
        replyTo: document.getElementById('replyTo').value,
        message: document.getElementById('message').value
    };

    const serviceID = 'service_d9rnrmc'; // ID do serviço do EmailJS
    const templateID = 'template_bgds4hn'; // ID do template do EmailJS

    emailjs.send(serviceID, templateID, params)
        .then(response => {
            alert('Mensagem enviada com sucesso!');
        })
        .catch(error => console.error('Erro ao enviar mensagem:', error));
}