var carousel = new Carousel();
carousel
    .add('DJ')
    .add('Black Music')
    .add('Brasilidade')
		.add('Funk')
		.add('Baile Charme')
		.add('Hip Hop')
		.add('Manguebeat')
		.add('Afrofuturismo')
    .add('Tropical')
    .add('Trap')
		.add('Brega')
    .add('House')
    .add('Dance')
    .add('Forró')
    .add('Baião')
    .add('Frevo')
    .add('Samba')
    .add('Pagodão')
    .add('Afoxé')
    .add('Bregadeira')
    .showFor(1200) // set the time in milliseconds how long a word is shown
    .onUpdate(
        function (partial) {
            document.getElementById('carousel').innerHTML = partial;
        }
    ).run(); // start the loop
