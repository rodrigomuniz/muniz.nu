---
author: rodrigomuniz
comments: true
date: 2007-08-17 20:44:29+00:00
layout: post
slug: acessibilidade-facil-crie-um-link-direto-para-o-conteudo
title: 'Acessibilidade fácil: Crie um link direto para o conteúdo'
wordpress_id: 239
categories:
- Acessibilidade
---

Começo hoje uma série de posts para mostrar aos desenvolvedores como é simples deixar seus projetos web mais acessíveis para usuários com necessidades especiais que usam leitores de tela ou só podem navegar pelo teclado.



### O link para o conteúdo




![Link de pular para conteúdo do site webstandards.org](http://rodrigomuniz.com/wp-content/img/pointer-skip.gif)


Essa primeira técnica que apresento já é bem conhecida, talvez seja a mais simples de implementar para deixar um conteúdo mais acessível. Esse link não é necessário em todas as páginas, mas se você tem uma navegação que precisa de muitos tabs para chegar ao conteúdo isso já vira item obrigatório no seu projeto.

Muitas pessoas imaginam que "dar alguns tabs" para chegar ao conteúdo de uma página é aceitável, mas imagine se quem navega pelo teclado usa o seu site todos os dias ou caiu nele e gostou do conteúdo, começa a navega por inúmeras páginas. "Alguns tabs" se transformam em "**incontáveis** tabs" e um atalho para o conteúdo principal do site não faz mal a ninguém.

[Já falei aqui que alguns desenvolvedores não gostam do link para pular para o conteúdo](http://rodrigomuniz.com/blog/acessibilidade-e-estetica/) no topo do site por questões estéticas ou até clientes que não querem o link lá porque o acham inútil para si. Mas há diferentes técnicas para escondê-lo da interface gráfica sem interferir na navegação pelo teclado. A técnica que apresento a seguir é a que uso de uns tempos pra cá.



### O HTML...


Você só precisa de um parágrafo com um link para a div que tem o conteúdo. É muito importante que esse link esteja com **tabindex="1"** pois será o primeiro lugar que receberá o foco quando o usuário teclar "tab" depois que a página carregar. O código:

`<p class="skip"><a href="#maincontent" tabindex="1">Pular navegação e ir direto para o conteúdo</a></p>`

No link o "maincontent" é a ID da div onde está meu conteúdo principal.



### E no CSS...


No CSS poderíamos ocultar o parágrafo de várias formas, eu prefiro usar essa técnica a seguir porque o parágrafo some visualmente, mas o link ainda fica **acessível via teclado em todos os browsers** para desktop.

`.skip{
	position:absolute;
	text-indent:-9999em;
	width:0;
}`

O resultado pode ser experimentado na [página de exemplo que criei](http://labs.rodrigomuniz.com/artigos/link-skip), nela seria preciso **12 tabs** para chegar ao conteúdo sem o uso do link. Quem não tem leitor de tela fique atento ao endereço que aparece na barra de status do browser assim que teclar o primeiro "tab". Já com o software leitor você vai poder ouvir o texto que está no link.

Simples não? Agora seus usuários estão a 2 comandos de teclado do seu conteúdo principal. A série continua assim que conseguir tempo para postar. :) Mesmo tendo alguns temas na fila, aceito sugestões.
