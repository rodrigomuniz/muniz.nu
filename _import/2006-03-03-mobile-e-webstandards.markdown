---
author: rodrigomuniz
comments: true
date: 2006-03-03 23:33:08+00:00
layout: post
slug: mobile-e-webstandards
title: Mobile e webstandards
wordpress_id: 117
categories:
- Navegadores
- Tecnologia
- Web
---

A web está pronta para a vida sem fio, das telinhas de handhelds e celulares? Como seria se os preços das tarifas para se navegar na internet pelo celular despencassem?
O que ainda se vê é que grandes sites têm na cabeça a idéia do [WAP](http://pt.wikipedia.org/wiki/WAP), você faz uma versão totalmente nova do site como fez o [Gmail](http://gmail.com) criando o [m.gmail.com](http://m.gmail.com) e o [Flickr](http://flickr.com/) com o [flickr.com/mob](http://flickr.com/mob/), trabalho que pode ser facilmente evitado se o site estivesse nos [padrões](http://www.rodrigomuniz.com/padroes/).


![Página num Handheld](http://www.rodrigomuniz.com/wp-content/img/26163100_50e009b828_m.jpg)

© Some rights reserved. [JackSim](http://www.flickr.com/photos/jacksim/26163100/)

Eu fico tentando imaginar quantas pessoas têm o costume de navegar na web com aparelhos cuja resolução é bem menor que dos populares monitores. Como eu só vi fotos e vídeos não conseguia ter idéia de como sites estruturados com `table` ficavam realmente renderizados neles. Seria realmente uma confusão tabular ou os aparelhinhos descartavam totalmente a tabulação deixando o conteúdo "solto"? Depois de algumas buscas o que vi foi a segunda "guerra do browsers", a coisa é muito mais sem padrão que nos browsers para PC, muito pelos diferentes tipos de hardware que variam de tamanho de tela, plataforma e por aí vai.

A única referência prática que tenho é o simulador do [Opera](http://opera.com), Shift + F11 e ele mostra como sua página ficará num minibrowser de um mobile e nele os layouts de tabela têm quase os mesmos resultados que os sem elas. Se isso for uma tendência a web semântica corre o risco de não pegar. Os profissionais que ainda fecham os olhos para os [webstandards](http://rodrigomuniz.com/blog/padroes) vão continuar sem ver muita vantagem em sair do seu mundinho de tabelas para formatar as colunas de seus layouts.


## Experimentos


Veja esse teste que fiz, criei duas versões de um layout simples de duas colunas, uma com tabela e outra com div:
[![Layout de duas colunas sem tabelas](http://www.rodrigomuniz.com/wp-content/img/sem-table.png)](http://rodrigomuniz.com/experimentos/mobile-webstandards/mobile-tableless.html)[![Layout de duas colunas com tabela](http://www.rodrigomuniz.com/wp-content/img/com-table.png)](http://rodrigomuniz.com/experimentos/mobile-webstandards/mobile-table.html)
O que pode-se ver é que o Opera não leva em conta a tabulação para deixar o layout mais acessível, o que cria um problema. Quando precisarmos visualizar uma tabela de dados usada da forma correta, semântica, ela vai perder a forma. Testando uma tabela qualquer o resultado é uma pequena catástrofe, sem tabulação fica impossível de entender:
[![Grandes tabelas viram isso](http://www.rodrigomuniz.com/wp-content/img/big-table.png)](http://centricle.com/ref/css/filters/?highlight_columns=true)


## Então...


Vamos supor que o desenvolvedor não enxergue a maior das vantagens, a semântica, e continue usando as tabelas no lugar de divs para fazer duas ou três colunas. O "tabeleiro" vai pensar: "Posso muito bem continuar fazendo minhas colunas rapidinho usando tabelas, ganhando tempo e fazer com que o site seja bem visualizados nesses aparelhos".

Do modo que aconteceu com os navegadores como Netscape e como acontece hoje com o [Firefox](http://getfirefox.com) que, por causa de usuários que acham que alguns sites "não funcionam" no navegador, não consegue ganhar mais mercado mesmo sendo melhor e mais flexível, sites mal estruturados podem estragar a experiência do usuário mobile? Frustrar e atrapalhar esse avanço? Ou esses sites serão eliminados, numa [seleção natural](http://pt.wikipedia.org/wiki/Sele%C3%A7%C3%A3o_natural) tal qual teoria da evolução de [Darwin](http://pt.wikipedia.org/wiki/Charles_Darwin)?


## Links





	
  * [Compact HTML for Small Information Appliances](http://www.w3.org/TR/1998/NOTE-compactHTML-19980209/)

	
  * [Mobile browser rendering](http://www.howtocreate.co.uk/operaStuff/devices/)

	
  * [Wikipedia Microbrowser](http://en.wikipedia.org/wiki/Microbrowser)

	
  * [Projeto Origami da Microsoft é micro compacto com Windows Xp - Estadão](http://www.estadao.com.br/tecnologia/noticias/2006/mar/03/62.htm)


