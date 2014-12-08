---
author: rodrigomuniz
comments: true
date: 2010-06-05 21:35:25+00:00
layout: post
slug: google-font-api-e-uma-otima-ideia-para-o-proprio-google
title: Google Font API é uma ótima idéia para o próprio Google
wordpress_id: 837
categories:
- Web
tags:
- fonts
- google
---

Dependência, precisava iniciar com a palavra-chave deste texto. Para entender melhor você terá primeiro que conhecer duas histórias: a origem do sucesso do **Microsoft Windows** e a da **App Store da Apple**. Na época em que Bill Gates criou a Microsoft com o objetivo de alugar a licença do Windows, foi importantíssimo que a concorrência achasse que o aluguel de software doméstico nunca daria certo, enquanto o público achava isso uma vantagem e enchia o bolso do Gates de grana. Já no caso da App Store, a Apple usa sua vantagem técnica no mercado móvel para criar tendências tanto com os desenvolvedores, quanto com os usuário; dessa forma vai moldando o mercado e engolindo a concorrência. Nos dois casos vemos duas gigantes aproveitando oportunidades num determinado mercado e plataforma para gerar dependência. O Google está fazendo isso neste exato momento e sua plataforma é a aberta e sem dono Web. E eles conhecem bem essas características e também sabem como ganhar dinheiro com isso (como ninguém hoje sabe).

Junte essa _expertise_ do Google ao fato dos Desenvolvedores Web serem criaturas mal entendidas e que não estão acostumados a terem coisas fáceis e que funcionam logo de primeira. A demora na finalização de novos padrões como o **HTML5** e **CSS3** e a medonha era do **Internet ****Explorer**** 6** falam bem do nosso sofrimento. Então, crie um ambiente lindo para esses carentes e eles serão seus escravos. Não quero pagar de profeta do apocalipse da liberdade na Web, mas o Google está criando essa dependência e parece que ninguém está vendo.


## O que o Google Font API tem a ver com isso tudo?


![](http://rodrigomuniz.com/wp-content/img/2010/06/googlefonts.jpg)

Por que a gente só usa Verdana, Arial, Helvetica, Tahoma, Trebuchet MS? Com a limitação técnica de alguns browers (Firefox até pouco tempo não aceitava _embedded fonts_) e problemas com licença de uso das fontes, ficamos dependentes dessas famílias que já vem instaladas nos sistemas operacionais mais populares. A questão é que o Google está usando um problema para o qual [já existe solução](http://www.fontsquirrel.com/fontface/generator) para ganhar poder por meio da dependência.


### Trocando limitação por limitação + dependência


A solução do Google para nossa limitação de escolha é um [diretório de fontes opensource](http://code.google.com/webfonts) tão limitado quanto as opções que usamos hoje. Imagine um cenário onde grandes sites começam a usá-las. Isso vai influenciar os menores e só serve para criarmos um novo leque de "fontes padrão". E o pior de tudo é que a nova pasta **C:\Windows\Fonts** será um dos servidores da empresa de Mountain View. Eu sei que podemos baixar as fontes e apontar o link do @font-face para a pasta do projeto, mas é exatamente aí que o Google usa sua estrutura e popularidade para criar a vantagem do cache e bancar de bom moço. O mesmo acontece quando ele [oferece seus servidores](http://code.google.com/apis/ajaxlibs/documentation/) para criar um cache de arquivos JavaScript de frameworks famosos, como o jQuery. É uma ótima iniciativa para projetos pequenos, porém realmente queremos usá-la em grandes sites de nossos clientes, deixando-os dependendo dos servidores de uma empresa já tão dominante?

Na minha opinião o único problema que o Google resolve no caso das fontes é o de licença de uso. Eu realmente não acho uma boa idéia começar a usar essas fontes em projetos comerciais usando o @font-face com link nos servidores do buscador. Nós podemos muito bem continuar otimizando nossos próprios servidores e criar nosso próprio repositório, centralizando as fontes que mais usamos em nossos projetos. Não teremos a vantagem da disseminação que os servidores deles tem para criar cache nas máquinas dos usuários, mas pensando bem um arquivo de fonte com 30 ou 40k é bem menor que muita imagem que usamos nos nossos sites. É só não exagerar e fugir do grande irmão.
