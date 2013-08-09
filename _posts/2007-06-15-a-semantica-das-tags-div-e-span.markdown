---
author: rodrigomuniz
comments: true
date: 2007-06-15 12:42:32+00:00
layout: post
slug: a-semantica-das-tags-div-e-span
title: A semântica das tags ‹div› e ‹span›
wordpress_id: 219
categories:
- Web
---

Desenvolvedores, é semântico usar uma tag `‹div›` dentro da outra para fazer [cantos arredondados](http://www.smileycat.com/miaow/archives/000044.php)? Ou usar `‹span›` numa palavra de um link só para fazer uma arte tipográfica?

Muitos diriam que não, eu até entendo a preocupação com os exageros no uso de divs aninhadas, mas ninguém pensa que as tags `‹div›` e `‹span›` são elementos **sem valor semântico**. Pense: O que é a tag `‹ul›`? Lista _não ordenada_. O que é a tag `‹form›`? Formulário. E o que é uma `‹div›`? Nada :) É uma divisão que quebra linha (block) e só. 

_Divs_ e _spans_ estão aí exatamente para que se possa fazer um layout flexível e rebuscado sem influenciar na semântica do documento HTML. Isso significa que se você precisa de duas ou três _divs_ para um box com cantos arredondados num layout líquido, faça isso!



### But KISS, KISS and KISS...


Para mim o [KISS](http://en.wikipedia.org/wiki/KISS_principle) não é mais só a sigla de **[Keep It Simple, Stupid/Sweetheart](http://en.wikipedia.org/wiki/KISS_principle)**, é aquela voz que fica na cabeça na hora da codificação de um XHTML Strict em que você tem em mãos um super layout cheio de detalhes e para fazer um determinado efeito vai precisa usar tanto a `‹div›` pai, quanto a `‹ul›` filha e ainda criar outra `‹div›` filha só para fazer um detalhe. E essa voz lhe encoraja a fazer essa segunda `‹div›`, mas lhe faz pensar um pouco mais para evitar a criação de uma terceira `‹div›`, pois você pode usar a `‹ul›` que está bem ali pronta esperando o CSS. E isso é ótimo!

Desenvolver um HTML de forma semântica é exatamente isso, usar o bom senso para estruturar o documento e sentir-se à vontade usando tags sem valor semântico, mas ainda pensando na simplicidade da estrutura e sem fazer o que muitos já fizeram com **tabelas dentro de tabelas dentro de tabelas**...

Vamos usar as _divs_ sem medo, mas com o KISS na cabeça. :)
