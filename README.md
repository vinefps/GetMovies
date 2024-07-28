# MovieSearch
Este projeto é uma aplicação web simples que utiliza Node.js, Express e a API TMDb para exibir filmes populares e permitir que os usuários busquem por filmes específicos. A aplicação renderiza os detalhes dos filmes usando templates Mustache e Tailwind CSS para estilização.

# Funcionalidades:
.Exibir uma lista de filmes populares
.Buscar filmes por título
.Visualizar informações detalhadas sobre um filme selecionado

# Requisitos:
Node.js
NPM
Chave da API TMDb

# Instalação:
1 - Clone o repositório:
git clone https://github.com/seuusuario/moviesearch.git
cd moviesearch
2- Instale as dependências:
Npm install 
3- Crie um arquivo .env no diretório raiz e adicione sua chave da API TMDb:
API_MOVIE_KEY=sua_chave_tmdb
4- Inicie o servidor:
npm start
5- Abra seu navegador e acesse http://localhost:3000.

# Estrutura do Projeto
•	index.js: Arquivo principal da aplicação onde o servidor Express é configurado.
•	routes/movieRoute.js: Define as rotas para buscar e exibir dados dos filmes.
•	views/: Contém os templates Mustache para renderização do HTML.
o	index.mustache: Template para exibir a lista de filmes populares.
o	results.mustache: Template para exibir os resultados da busca.
o	details.mustache: Template para exibir informações detalhadas sobre um filme.
•	public/: Arquivos estáticos (CSS, JavaScript, imagens).
-Rotas
•	GET /: Busca e exibe os filmes populares do TMDb.
•	GET /search: Busca filmes com base em um parâmetro de consulta.
•	GET /movie/:id: Busca e exibe informações detalhadas para um filme específico por ID.
-Scripts NPM
•	start: Inicia a aplicação.
•	dev: Inicia a aplicação em modo de desenvolvimento utilizando Nodemon.
-Dependências
•	axios: Para realizar requisições HTTP.
•	dotenv: Para carregar variáveis de ambiente.
•	express: Framework web para Node.js.
•	helmet: Middleware de segurança para Express.
•	mustache: Motor de template para Node.js.
•	mustache-express: Integração do Mustache com Express.
-Dependências de Desenvolvimento
•	nodemon: Ferramenta que reinicia automaticamente o servidor quando arquivos são modificados.


