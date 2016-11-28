# Primeiro desafio
Primeiro desafio do teste para vaga de front-end Amil.

# Instruções do projeto
O projeto está divido em 2 diretórios: public/ e dist/. O diretório public contém o projeto aberto, para desenvolver e fazer as devidas manunteções. O projeto final encontra-se na pasta dist, nela contem os arquivos finais totalmente minificado, com os arquivos comprimidos para que tenhamos mais rapidez ao acessar o projeto. E em ambas as pasta o arquivo principal é index.html. Os arquivos de estilo, imagens, fonts e scripts estão em Assets.

# Tecnologias utilizadas
Para este desafio, foram utilizado as seguintes tecnologias:

* HTML5
* CSS3
* Pre-processador: SASS
* Ferramenta de automoção: Grunt

# Automação Grunt
Para agilizar alguns processos importantes no desenvolvimento desta aplicação foi utilizado o Grunt. O arquivo de configuração do Grunt encontra-se na raiz do projeto (Gruntfile.js). A pasta node-modules não foi commitada devida ao grande números de arquivos, caso precise testar basta  instalar os módulos descritos no arquivo GruntFile.js . E abaixo as TASKS que utilizei no processo de automação:

* grunt-contrib-copy - Copia os arquivos do public e cria a pasta dist
* grunt-contrib-clean - Deleta a pasta dist quando necessário
* grunt-contrib-concat - Unifica os arquivos no index. Utilzado nos styles
* grunt-contrib-cssmin - Minifica os arquivos css
* grunt-usemin - Automatiza e controla os plugins: Concat e Cssmin
* grunt-contrib-imagemin - Reduz o tamanho de todas as imagens
* grunt-contrib-sass - Processa todo SASS da aplicação 
* grunt-contrib-watch - Executa alguma task assim que um arquivo é modificado ou criado dentro do projeto.

# Considerações finais
Este desafio foi criado pensando em todos os detalhes especificados. Este projeto foi desenvolvido pensado em caso tenhamos um projeto grande que precise de organização e ferramentas que ajudam nos processos. Mesmo sendo apenas uma página, os componentes foram pensados de forma geral. Agradeço a oportunidade de concorrer a esta vaga.

# Informações pessoais 

**E-mail:** silviojr.siqueira@gmail.com
**Telefone:** +55 (11) 98240-4417










