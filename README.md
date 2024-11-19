<div align="center">
  
  # ProCleaning - Website de Serviços de Limpeza 🧼
</div>

O ProCleaning é um site que oferece soluções completas de limpeza para diversos tipos de ambientes, incluindo residências, empresas, academias, eventos e mais. O objetivo do site é fornecer informações detalhadas sobre os serviços de limpeza, planos disponíveis e permitir a reserva de serviços online. O layout é responsivo e conta com diversas funcionalidades interativas, como animações com a biblioteca AOS e navegação de conteúdo utilizando o Swiper. 
<br>

**Observação:** Todas as informações presentes no site (como endereço, telefone, e-mail e nome da empresa) são de cunho educacional, portanto, não devem ser tomadas como verdadeiras.

## Funcionalidades/Sessões
* **Home:** Apresentação do site com uma introdução aos serviços oferecidos. Contém botões de ação para iniciar o agendamento ou explorar mais serviços.
* **Sobre:** Seção que traz informações sobre a empresa e os benefícios dos serviços prestados, com ícones que destacam os pontos fortes da empresa.
* **Serviços:** Descrição detalhada dos tipos de serviços de limpeza oferecidos, como limpeza de escritórios, casas, jardins, academias, eventos e comércios.
* **Citação:** Seção destacando soluções acessíveis de limpeza, acompanhada de imagens e texto informativo.
* **Planos:** Apresentação de planos de assinatura mensais para serviços de limpeza, com descrição detalhada dos serviços inclusos e preços.
* **Contatos:** Formulário para agendamento de serviços e informações de contato para dúvidas.

## Tecnologias Utilizadas
* HTML5: Estruturação do conteúdo do site.
* CSS3: Estilização responsiva, com a utilização de arquivos CSS dedicados (`style.css` e `media-queries.css`).
* Font Awesome: Ícones para representar diversos serviços e funcionalidades.
* Bootstrap Icons: Ícones adicionais para elementos de navegação e ações no site.
* Swiper: Biblioteca de slides para navegação de imagens e conteúdo.
* AOS (Animate On Scroll): Animações dinâmicas ao rolar a página, tornando a navegação mais interativa.

## APIs Utilizadas
1. JSONPlaceholder
* Endpoint: `https://jsonplaceholder.typicode.com/comments`
* Função: Utilizada para carregar comentários fictícios que servem como depoimentos de clientes no site. Esses dados são manipulados e exibidos dinamicamente.
* Objetivo: Fornecer feedbacks fictícios de clientes para exibição na seção de depoimentos.
* Como foi implementado: Utilizamos a função fetch para fazer uma requisição GET à API do JSONPlaceholder. A resposta é tratada como um objeto JSON e, então, processada para exibir os depoimentos na interface do site.

2. RandomUser.me
* Endpoint: `https://randomuser.me/api/?results=6`
* Função: Fornece dados de usuários aleatórios, incluindo nome e foto, que são usados para criar perfis fictícios de clientes nos depoimentos.
* Objetivo: Gerar dados de usuários para exibição junto aos depoimentos, criando uma experiência visual mais realista.
* Como foi implementado: A requisição à API foi realizada também com fetch. Os dados retornados são usados para preencher as informações do perfil dos clientes que aparecem ao lado de cada depoimento.

3. EmailJS
* Função: API utilizada para enviar e-mails diretamente do frontend, sem a necessidade de um backend. Quando o formulário de contato é enviado, os dados são processados e enviados por e-mail através do EmailJS.
* Configuração: Inicializado com a chave pública da conta no EmailJS, usando os IDs do serviço e template para realizar o envio.
* Como foi implementado: O formulário de contato utiliza fetch para enviar os dados do usuário para o EmailJS. A função `sendMail()` é usada para enviar o e-mail com as informações preenchidas pelo usuário.

## Visual
![image](https://github.com/user-attachments/assets/fcb760db-27ec-4664-86a5-ef177951bb5c)

## Como Executar o Projeto
Clone este repositório:

```
https://github.com/gabriellydasi/maisprati-atividade4.git
```
Acesse o diretório do projeto:
```
cd maisprati-atividade4
```
Abra o arquivo `index.html` diretamente no seu navegador ou utilize uma extensão como <b>Live Server</b> no Visual Studio Code.

## Deploy
O projeto está disponível online no seguinte link:
<a href="https://pro-cleaning-five.vercel.app/">Acessar Página</a>
