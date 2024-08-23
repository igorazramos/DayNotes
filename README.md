# Day Notes - Aplicativo para suas anotações diárias

Uma aplicação para anotar suas tarefas diárias ajudando a organizar seu dia a dia e a não esquecer seus afazeres!

Está aplicação foi desenvolvida para aprender tecnologias como `ReactJS`, `NodeJS`, `MongoDB` e aprimorar o conhecimento em `CSS`, ja que todo estilo da aplicação foi customizando utilizando o CSS puro.

## Rodando a aplicação

Primeiro é necessário instalar o node na versão 18.20.4, que é a versão compatível com a aplicação, faça o download aqui da versão: [x64](https://nodejs.org/dist/v18.20.4/node-v18.20.4-x64.msi) ou da versão [x86](https://nodejs.org/dist/v18.20.4/node-v18.20.4-x86.msi).

Execute o instalador e siga o passo a passo até que esteja concluído.

Acesse a pasta `Front` através do prompt de comando, utilize o comando `npm i --force` caso for a primeira vez executando a aplicação, em seguida utilize o comando `npm start` para rodar a aplicação.

## Criando um banco de dados no MongoDB

1. Crie sua conta no site do [MongoDB](https://www.mongodb.com/cloud/atlas/register) e configure sua conta de acordo com suas preferencias, caso ja tenha uma conta, faça o [Login aqui](https://account.mongodb.com/account/login).

2. Depois de logado em sua conta, acesse a parte `Data Services` e crie um novo cluster no botão `Create Cluster`.

3. Selecione a opção `Free`, coloque o nome de sua preferência e escolha a região, selecione a região mais próxima, clique em `Create Deployment` após tudo preenchido.

4. Para conectar ao cluster, crie seu `Username` e seu `Password` certifique de anotá-los, em seguida no botão `Create Database User` e por fim em `Choose a connection method`.

5. Selecione a opção `Drivers`, copie e salve a string que esta no terceiro passo e clique em `Done`.

6. Volte para a tela `Data Services` e onde está o cluster que acabou de criar, clique em `Browse Collections`, em seguida em `Create Database`. Na janela que abriu, preencha os campos `Database name` e `Collection name` com `annotations`, em seguida clique em `Create`.

## Rodando a API

É necessário criar uma variável de ambiente para configurar o banco de dados do MongoDB.
1. Para criar, acesse a pasta `Back`, dentro dela crie um arquivo chamado `.env`, dentro desse arquivo cole sua string do MongoDB. Por exemplo:
`dbConfig = mongodb+srv://{{username}}:{{password}}@cluster.mongodb.net/{{mydatabase}}?retryWrites=true&w=majority`.

2. Substitua o conteúdo após o `=` pela sua string, onde esta o `{{username}}` substitua pelo username que você criou, faça o mesmo com o conteúdo de `{{password}}` com a sua senha criada e o conteudo de `{{mydatabase}}` substitua por `annotations`.

3. Adicione o arquivo .env ao .gitignore. Procure o arquivo `.gitignore` na raiz da pasta `Back` e adicione a linha `.env`, assim sua string do banco esta pronta pra ser utilizada e ficará apenas disponivel para você, ninguem terá acesso a ela.

Acesse a pasta `Back/src` através do prompt de comando e utilize o comando `npm run dev` para rodar a API.

## Acessando o projeto

A aplicação pode ser acessada através da [URL - Localhost:3000](http://localhost:3000/).

# Tecnologias utilizadas

Este projeto foi desenvolvido utilizando as seguintes tecnologias:

## ReactJS

Utilizado para criar a interface de usuário interativa e responsiva. O React permite o desenvolvimento de componentes reutilizáveis e uma eficiente gestão do estado da aplicação.

## NodeJS

Responsável pela camada de backend, onde foi implementada a lógica do servidor e a comunicação com o banco de dados. O Node.js proporciona um ambiente de execução JavaScript no servidor.

## MongoDB

Banco de dados NoSQL utilizado para armazenar os dados da aplicação. MongoDB oferece flexibilidade e escalabilidade, facilitando o gerenciamento de grandes volumes de dados não estruturados.

## CSS

Usado para estilizar a aplicação, garantindo um design moderno e responsivo. O CSS foi utilizado para personalizar a aparência dos componentes e melhorar a experiência do usuário.

## Environment variable

Arquivo utilizado para armazenar variáveis de ambiente de forma segura. Ele permite proteger informações sensíveis, como credenciais de banco de dados, e evita que essas informações sejam expostas no repositório Git.