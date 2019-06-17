# ECMAScript
    O nome ECMAScript é a junção de ECMA (European Computer Manufactures Association) com Javascript.
    Foi dado esse nome pois o nome Javascript já havia sido patentiado pela Sun. Portanto, o nome ECMAScript
    é usado para identificar a versão da linguagem.

# Babel
    Transpiler: converte o código ECMAScript 6+ em códigos para serem interpretados
    corretamente pelos browsers (todos os navegadores entendam).

# Yarn
    Gerenciador de pacotes do Javascript (Instala ferramentas de outras pessoas, empresas, etc no nosso projeto)

    yarn init
        - Criar o arquivo package.json para armazenamento de nossas dependências
    yarn add @babel/core
        - Recursos principais do babel
    yarn add @babel/cli
        - O babel fornece comandos do babel para trabalharmos via terminal
    yarn add @babel/preset-env
        - Entende o ambiete que estamos trabalhando e converte as features (código) do ES6, ES7, ES8 para os navegadores

# Package.JSON
    Gerenciamento de bibliotecas do projeto

        ## Configuração para que seja feita a conversão do babel
            scripts": {
                "dev" : "babel -w ./main.js -o bundle.js"
            }
        ## Após a configuração inserir no terminal
            yarn dev

# Constantes e Variáveis de Escopo
    const: é um valor constante, isto é, seu valor não pode ser reatribuído.

    A mutabilidade de um valor constante está na mudança de suas propriedades.
    Por exemplo:
        const aluno = { "nome" : "Alexandre" }
        aluno.nome = "José"; // funciona!

    let: variáveis de escopo, isto é, as variáveis definidas como let dentro de um escopo só possuirão escopo naquele local

# Operações em Vetores
    map: percorre o vetor e retorna uma nova informação
        const ages = [15, 25, 30, 14, 19];
        const isOfAge = ages.map(function(age) { return age >= 18 });
    
    reduce: consome o vetor e retorna um único valor
        const sumAges = ages.reduce(function(previousValue, currentValue) { return previousValue + currentValue});
    
    filter: efetua a filtragem dos dados se o item analisado vai estar no novo array
        const ofAges = ages.filter(function(age) { return age >= 18 });
    
    find: verificar se existe uma informação no array
        const findMinor = ages.find(function(age) { return age < 18 });
        // O valor retornado é o proprio valor analisado se 'true'
        // Caso a condição nunca for satisfeita é retornado undefined

# Arrow functions
    Funções anônimas na qual são removidas o nome das mesmas e adicionados o Arrow (=>)
    O escopo de uma Arrow Function é local!
        const findMinorWithArrowFunction = ages.find((age) => { return age < 18 });
        const findMinorWithArrowFunction = ages.find(age => { return age < 18 });
        const findMinorWithArrowFunction = ages.find(age => age < 18 );

# Valores padrão
    São valores são definidos como 'default' caso não sejam informados
        function soma(a = 5, b = 10) {
            return a + b;
        }
        soma(1, 2); // 3
        soma(); // 15

# Desestruturação de objeto
    Busca de propriedades dentro de um objeto

    const user = {
        name: "Alexandre", 
        age: 24,
        address : {
            state: "Rio Grande do Sul",
            city: "Porto Alegre"
        }
    }

    const { name, age, address: { city } } = user;
    console.log(name); // Alexandre
    console.log(age); // 24
    console.log(city); // Porto Alegre

    function showData( { name, age, address: { city }}) {
        console.log(name); // Alexandre
        console.log(age); // 24
        console.log(city); // Porto Alegre
    }

    showData(user);

# Rest/Spread
    Adicionar o plugin do rest-spread
        yarn add @babel/plugin-proposal-object-rest-spread
    
    Adicionar nos plugins do babel
        ...
        "plugins": ["@babel/plugin-proposal-object-rest-spread"]
        ...

    rest
        Armazena o resto de um conteúdo específico. Um uso pode ser utilizando a desestruturacao
            const user = {
                name: "Alexandre", 
                age: 24,
                address : {
                    state: "Rio Grande do Sul",
                    city: "Porto Alegre"
                }
            }

            const { nome, ...resto } = usuario;

            a variável resto armazena todo o resto do objeto sem o nome.

        É possível usar o rest nos parâmetros da função
            function soma(...params) {
                ...
            }

            soma(a, b, c, d);
    
    spread
        Repassa as informações de um objeto ou um array pra uma outra estrutura
            const array1 = [ 1, 2, 3];
            const array2 = [ 4, 5, 6];
            const array3 = [ ...array1, ...array2 ]; // 1, 2, 3, 4, 5, 6

            const user = {
                name: "Alexandre", 
                age: 24,
                address : {
                    state: "Rio Grande do Sul",
                    city: "Porto Alegre"
                }
            }

            // copia tudo de user mudando apenas o nome
            const user2 = { ...user, name : 'João' } 
        
# Template literals
    Inclusão de variáveis em string
        let nome = 'Alexandre';
        let idade = 24;

        console.log(`Meu nome é ${nome} e tenho ${idade} anos`);

# Object Short Syntax
    Quando se quer passar informações de variáveis que tenham o mesmo nome de atributos de um objeto não é preciso passar o valor da variável
        let nome = 'Alexandre';
        let idade = 24;

        let usr = {
            nome,
            idade,
            sexo : 'Masculino'
        };

# Webpack
    Serviço que nos disponibiliza uma forma para trabalhar com vários arquivos js/imagens/css através do javascript
        1) Modificar o arquivo package.json de 'dependencies' para 'devDependencies'
        2) Instalar o webpack cli em modo de dependencia de desenvolvimento
            yarn add webpack webpack-cli -D
        3) Criar o arquivo do webpack na raiz do projeto
            webpack.config.js
                module.exports = {
                    entry: './main.js',
                    output: {
                        path: __dirname,
                        filename: 'bundle.js'
                    },
                    module: {
                        rules: [
                            {
                                test: /\.js$/,
                                exclude: /node_modules/,
                                use: {
                                    loader: 'babel-loader'
                                }
                            }
                        ]
                    }
                }
        4) Instalar o babel-loader em modo de dependencia de desenvolvimento
            yarn add babel-loader@8.0.0-beta.0 -D
        5) Executar o webpack
            5.1) Modificar o package.json
                    ...
                    "scripts" : {
                        "dev" : "webpack --mode=development -w"
                    }
            5.2) yarn dev
    
# Webpack dev server
    Monitora o projeto e assim que há uma modificação ele atualiza a página do projeto
    
    yarn add webpack-dev-server -D

# async/await
    Nova forma de trabalhar com programação assíncrona

    1) Adicionar ao babel
        yarn add @babel/plugin-transform-async-to-generator -D
            1.1) Adicionar no .babelrc o plugin instalado
        yarn add @babel/polyfill
            1.2) Adicionar ao webpack.config.js no atributo 'entry' o plugin
                ...
                entry: ['@babel/polyfill', './src/main.js'],
                ...

    const minhaPromise = () => new Promise((resolve, reject) => {
        setTimeout(() => { resolve('OK') }, 2000);
    });

    // Sempre que uma função vira uma async function ela se tornar uma promise
    async function executaPromise() {
        const response = await minhaPromise();
        const response2 = await minhaPromise();
        const response3 = await minhaPromise();
        const response4 = await minhaPromise();
        // A segunda linha que contém o await só será executada após a primeira linha que possuir o await for executada
        // e assim sucessivamente
        console.log(response);
    }

    executaPromise();

    Observação: não é possível usar a instrução await chamando uma função que retorna uma promise
    sem estar em uma função async

# axios
    Usado para efetuar requisições HTTP
        yarn add axios
    
    É possível combinar o axios com o async/await, pois a requisição do axios sempre retornará uma promise


        import axios from 'axios';

        class GitHubAPI {
            static async getUserInfo(username) {
                try {
                    const response = await axios.get(`https://api.github.com/users/${username}`);
                    console.log(response.data);
                } catch(err) {
                    console.log("erro na API");
                }
            }
        }

        GitHubAPI.getUserInfo('alexandrebn');
        GitHubAPI.getUserInfo('xpotR');