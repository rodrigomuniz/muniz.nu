---
author: rodrigomuniz
comments: false
date: 2005-12-01 17:07:23+00:00
layout: post
slug: como-instalar-o-wordpress
title: Como instalar o Wordpress?
wordpress_id: 74
categories:
- Web
- Wordpress
---

Depois que migrei do [Blogger.com](http://rodrigomuniz.blogspot.com) para o super [Wordpress](http://wordpress.org) recebi alguns e-mails com dúvidas sobre como instalar o danado do sistema num host. Muitos reclamam que não existem muitas informações amigáveis em português, ou então reclamam que a instalação precisa de conhecimentos em MySQL e PHP, o que não é uma verdade completa. Muita gente começa no WP sem saber programar em PHP. Uns até acabam se interessando pela linguagem para brincar no seu blog e se descobrem como bons programadores. Claro que há aqueles blogueiros que não tem interesse em programar, mas querem mais flexibilidade na sua ferramenta de blog. Por esses motivos resolvi fazer um tutorial o mais amigável possível sobre a instalação do [Wordpress](http://wordpress.org), mas é preciso ler com calma. Se precisar correr ou estiver com preguiça é melhor escolher outro dia ou outro tutorial, pois não escrevo muito bem. :)

Você primeiro, claro, vai ter que assinar um plano de hospedagem num host com [PHP](http://pt.wikipedia.org/wiki/Php) e [MySQL](http://pt.wikipedia.org/wiki/MySQL). Há uma [lista com hosts gratuitos](http://www.free-webhosts.com/free-php-webhosting.php), mas que devem ser usados por sua conta e risco, pois não testei nenhum deles. Eu realmente indico que você procure uma hospedagem paga pelas inúmeras vantagens, inclusive suporte personalizado. Você pode tentar a [Dreamhost](http://www.dreamhost.com/r.cgi?240527), apesar de ter um serviço incrível o suporte é em inglês pois é um host internacional, você também pode [pesquisar preços de hospedagem no Buscapé](http://compare.buscape.com.br/categorias?id=7340&c=0&raiz=0&lkout=1&site_origem=1176412), essa parte de hospedagem é você mesmo quem tem que decidir.

Você vai ter que saber que o [WP](http://wordpress.org) usa esse MySQL como banco de dados para armazenar tudo que você vai escrever e configurar. Para tudo funcionar você precisa criar um novo banco de dados no seu host. Geralmente você faz isso usando o [PHPMyAdmin](http://www.phpmyadmin.net/home_page/index.php), mas se ao abri-lo não tiver a opção de criar um novo banco de dados você pode procurar a opção “Banco de dados MySQL” no seu painel de controle, é fácil. Se não achar, qualquer coisa você pode infernizar o suporte do seu host e perguntar onde que faz o novo bd. :P
No meu exemplo vou dar o nome de “meubd” (sem as aspas) ao banco de dados. O MySQL também vai pedir um nome de usuário e uma senha para esse novo bd. Vou usar “meuusuariobd” e “minhasenhabd” respectivamente, no exemplo.
**Adendo: Os hosts têm, por questão de segurança, o costume de colocar o seu nome de usuário como prefixo do nome do seu bd. Complicou? Se o seu nome de usuário for “maria” então o nome do seu bd será “maria_meubd”. Então preste atenção ao nome do seu banco de dados assim que ele for criado.**

Banco criado, [baixe o zip no site do Wordpress](http://wordpress.org/latest.zip) e descompacte os arquivos no seu PC. É preciso agora dizer ao WP as três informações do banco de dados recém criado. Dentro da pasta “wordpress” procure o arquivo “wp-config-sample.php” e abra no seu bloco de notas, você vai ver [uns códigos bonitos](http://www.rodrigomuniz.com/wp-content/img/howtowp_conf.png) que precisam ser modificados, não se assuste é muito simples.


[![wp-config-sample.php aberto no Bloco de notas do Windows](http://rodrigomuniz.com/wp-content/img/_howtowp_conf.png)](http://rodrigomuniz.com/wp-content/img/howtowp_conf.png)


Na terceira linha encontramos o seguinte texto:
`define('DB_NAME', 'wordpress');    // The name of the database`
Modifique ‘wordpress’ para o nome do banco de dados que foi criado anteriormente, nesse meu exemplo aqui vai ficar:
`define('DB_NAME', 'meubd');    // The name of the database`

As linhas que seguem no arquivo são:
`define('DB_USER', 'username');     // Your MySQL username
define('DB_PASSWORD', 'password'); // ...and password`
Há espertinho! Já deve saber o que fazer hein? Onde tem ‘username’ você vai mudar para o nome de usuário que você criou e o ‘password’ é a senha definida para o bd. Então no exemplo aqui vamos ter:
`define('DB_USER', 'meuusuariobd');     // Your MySQL username
define('DB_PASSWORD', 'minhasenhadb'); // ...and password`

Feito isso vá em _Arquivo > Salvar como_, salve o arquivo na pasta “wordpress” com o nome “wp-config.php”.
Agora é a hora de subir essa pasta para o seu servidor de hospedagem usando um programa de FTP. Recomendo o [Filezilla](http://filezilla.sourceforge.net/) ou o [SmartFTP](http://www.smartftp.com/).
Com a pasta “wordpress” no ar mude o nome dela para “blog”, faça isso agora. Mudar o nome dessa pasta no futuro é possível, mas não é uma boa idéia, repito: não é uma boa idéia.

Nome da pasta escolhido? Então agora você finalmente precisa instalar o Wordpress. Abra o seu navegador e acesse o endereço do seu blog, por exemplo www.meusite.com/blog. Vai aparecer um aviso em inglês pedindo pra você instalar o WP. Clique no link no final da frase e siga os passos.
_“First Step”_, depois preencha o campo com aquele que vai ser o título do seu blog e o outro com o seu e-mail. Antes de seguir dê uma verificada para ver se seu e-mail está correto. É só clicar em “_Continue to Second Step”_, o Wordpress vai gerar uma senha aleatória e mandá-la para o e-mail especificado e criar suas tabelas no banco de dados e configurar-se sozinho. Deve aparecer a seguinte:


[![Tela de sucesso](http://rodrigomuniz.com/wp-content/img/_howtowp_step2.png)](http://rodrigomuniz.com/wp-content/img/howtowp_step2.png)


Seu nome de usuário é “admin” e a senha é o número aleatório que ele apresenta nessa página. No exemplo da imagem temos “40e3f1” como senha. Copie esse número para logar no sistema pela primeira vez.
É só clicar no link “log in” e colocar “admin” (obviamente sem as aspinhas) no “username” e no “password” colocar o número que ele gerou. Se por um acaso você o perdeu nesse tempão, abra o e-mail especificado na instalação que lá estará a senha.

Com essa senha estranha em mãos é uma boa idéia mudá-la. Já dentro do sistema, vá em “Users” e preencha os campos “New password” e “Type it one more time” com a sua senha pessoal que você quer definir para o blog, vê se não vai colocar "1234" ou seu número de celular pra todo mundo descobrir depois.

Acesse www.meusite.com/blog e veja se está lá o post e o comentário de exemplos. Agora é só [ir atrás de um tema estiloso](http://www.google.com/search?q=themes+wordpress), instalar os [plugins](http://wordpress.org/extend/plugins/) que você achar interessante e dizer a todo mundo que você é [Powered by fuckin’ lovely Wordpress](http://wordpress.org/). ;)

Também foi criado o [Portal Wordpress](http://www.portalwordpress.com.br/wp/) e criei [um post com dicas](http://rodrigomuniz.com/blog/dicas-depois-de-instalar-o-wordpress/) que podem ser seguidas depois da instalação.
Apensar de eu não indicar o uso do WP em português pelo fato da documentação dele ser toda em inglês, no site taijiquan.pro.br você encontra o [arquivo de tradução e também as instruções de como configurar para português](http://taijiquan.pro.br/baixar/).
Divirta-se!



	
  * [Pesquise preços de hospedagem PHP/MSQL no Buscapé](http://compare.buscape.com.br/categorias?id=7340&c=0&raiz=0&lkout=1&site_origem=1176412)


