# Segunda entrega WEB2

Nessa segunda prosseguimos com a implementação do site de uma pizzaria. Os integrantes do projeto são:  
- Igor Teixeira Machado RA: 769708  
- João Ricardo Lopes Lovato RA: 772138  
- Matheus Teixeira Mattioli RA: 769783  

## Requisitos e Ideias

Ideias em implementadas para essa *segunda etapa do projeto*:   
- Apenas duas telas: **Login** e **Cardápio**.  
- Na barra de navegação um botão clickavel e expandivel com Javascript, ao invés do truque da checkbox.  
- No login: Login validando no backend, não precisa de cadastro, podemos deixar usuários pré-cadastrados.  
- No cardápio: Botão para filtrar o sabor de pizza, por nome e preço.

Essas ideias cumprem os 5 *requisitos*:
- R1: O aplicativo deve ter uma identidade visual e um layout bem definidos, 
usando os conceitos de layout vistos no curso. Este requisito é um pouco subjetivo, 
mas a ideia é que o aplicativo tenha aparência de um aplicativo real, algo que você mostraria a um amigo (ou um investidor, quem sabe?). 
Uma paleta de cores bem pensada, seguindo o Material Design, por exemplo, é essencial!  ✔️
- R2: O aplicativo deve ter mais do que uma tela/página. (tem uma identidade)  ✔️
- R3: O aplicativo deve acessar a rede. O acesso à rede pode ser com um back-end falso, mas deve existir e estar implementado. ✔️
- R4: O aplicativo deve possuir layout responsivo, sendo adequado para visualização em celulares/tablets/desktop. ✔️
- R5: O aplicativo deve utilizar alguma API adicional, tais como geolocalização, storage, web workers, etc. ✔️

## Tecnologias e Linguagens.

As tecnologias envolvidas são React, Tailwind e Nodemon, utilizando como linguagens Javascript, HTML e CSS. O banco de dados é MongoDB e a api utilizada é localstorage. 

## Compilação.

Para rodar o site executamos os seguintes comandos na pasta raíz do projeto.  

Para rodar o frontend
``` npm start ```  

Para rodar o backend
``` nodemon ./src/backend/index.js ```  

Para rodar o tailwind
``` npm run tailwind-watch ```  
