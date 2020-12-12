var carousel = new Carousel();
carousel
    .add('Black Music')
    .add('Brasilidade')
		.add('Funk')
		.add('Baile Charme')
		.add('Hip Hop')
		.add('Manguebeat')
		.add('Afrofuturismo')
    .add('Tropical')
    .add('Twerk')
    .add('Afrobeat')
		.add('Soul')
    .add('Dancehall')
    .showFor(1200) // set the time in milliseconds how long a word is shown
    .onUpdate(
        function (partial) {
            document.getElementById('carousel').innerHTML = partial;
        }
    ).run(); // start the loop
