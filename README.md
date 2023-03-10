# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

# TODO

Ideias em progresso para essa segunda etapa do projeto:   
    - Apenas duas telas: .Login; .Cardápio.
    - Na barra de navegação: botão clickavel e expandivel via javascript, ao invés da gambiarra da checkbox.
    - No login: API de login. (validar o usuário)
    - No cardápio: Botão para filtrar o sabor de pizza, por nome e preço. Colocar preço nas pizzas, ao clickar no botão de comprar, subir pop-up para calcular
valor da entrega conforme a geolocalização.  

Essas ideias cumprem os 5 requisitos:
    - R1: O aplicativo deve ter uma identidade visual e um layout bem definidos, 
    usando os conceitos de layout vistos no curso. Este requisito é um pouco subjetivo, 
    mas a ideia é que o aplicativo tenha aparência de um aplicativo real, algo que você mostraria a um amigo (ou um investidor, quem sabe?). 
    Uma paleta de cores bem pensada, seguindo o Material Design, por exemplo, é essencial!
    - R2: O aplicativo deve ter mais do que uma tela/página. (tem uma identidade)
    - R3: O aplicativo deve acessar a rede. O acesso à rede pode ser com um back-end falso, mas deve existir e estar implementado. (backend para login)
    - R4: O aplicativo deve possuir layout responsivo, sendo adequado para visualização em celulares/tablets/desktop. (já está feito)
    - R5: O aplicativo deve utilizar alguma API adicional, tais como geolocalização, storage, web workers, etc. (Storage para login, web workers para pesquisar e 
    geolocalização pro cálculo do frete)
