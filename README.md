# Desafio | Frontend Developer Vue Js

## Etapas de Instalação e Execução

1 -  Primeiro certifique-se de que possui o node (última versão estável) instalado para utilizar os comandos npm, para isso em seu terminal digite:
> npm -v

2 - Se o node não estiver instalado acesse o site para download (**[node](https://nodejs.org/en/download/)**)

3 - Após instalação das dependências o projeto poderá ser executado, para isso acesse o diretório "shop-right-now" pelo terminal, verifique se encontra-se na branch "master" e então execute o comando para a instalação de todas as dependência presentes no projeto.
> npm install

4 - No mesmo diretório digite o camando para executar o projeto.
> npm run serve

5 - Para realizar os testes unitários.
> npm run test:unit

6 - Para checar código em busca de possíveis erros seguindo o padrão da linguagem.
> npm run lint

---
## Sobre o Projeto

Criar uma aplicação SPA (Single-page application) Vue Js capaz de:

- Navegar entre as páginas de produtos e carrinho.
- Listar produtos.
- Adicionar/Remover/Alterar quantidade produtos ao carrinho.
- Toda vez que alguma dessas ações for tomada, deve ser enviada uma mensagem ao usuário informando do sucesso ou erro.
- Calcular total do carrinho.
- Seguir interface.

---
### Tecnologias Utilizadas

- Vue Js, VueX
- HTML5, SASS, JavaScript
- Boostrap-view
- Node v12.16.1
- Npm 6.13.7

---
### Melhorias Feitas

- Responsividade
- Site possui botão para selecionar entre os idiomas "Português" e "Inglês"
- Ao abrir as páginas será exibido um loading em spinner
- Os boões exibiram dentro de si um loading em spinner ao executarem alguma ação
- Alertas serão exibidos com animação tornando a experiência mais agradável

---
### Melhorias/Sugestões Futuras (Versão 2.0)

- Criação de uma dashboard para exibir tabelas e gráficos do controle das vendas, estoque, etc. A tecnologia escolhida inicialmente para exibir os gráficos será **[Chart.js](https://www.chartjs.org/)**
- Campo de busca para lista de produtos da página principal e para realizar buscas de produtos do carrinho
- Criar filtros para os mesmos casos citados anteriormente 

---
### Considerações

- Para fazer todo o controle do carrinho e realizar as ações que serão necessárias optei por usar os recursos do VueX, isso deve pelo fato de seus recursos serem mais apropriados para a tecnilogia e situação encontrada, trata-se de uma forma mais limpar clara de se comunicar com todos os compoentes do app, redução de código, Uma outra forma que poderia ser feita seria utilizando o Local Storage, porém esse recurso é mais utilizado para dados momentâneos e locais, casos em que não existem endpoints por exemplo para armazenar os dados, como no projeto existem os endpoints para a funcionalidade do carrinho de compras, portanto o VueX foi escolhido como melhor opção.

----
### Commits

- Commit Inicial: Mon Feb 24 07:05
- Commit Final: Wed Feb 26 23:23

---
### Página Publicada

- O projeto foi finalizado com sucesso e está funcionando perfeitamente em ambiente local.
- O app tam bém foi colocado no servidor **[ZEIT Now](https://zeit.co/)** sem nenhum tipo de impedimento, porém pelo que parece existem restrições impedindo as requisições de serem realizadas com sucesso.

> Acessar página **[shop-right-now](https://shop-right-now.now.sh/)**