# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
# User.delete_all
GermanWord.delete_all()

words = GermanWord.create([
	{text:'Tisch',plural:'Tische',translation:'стол',speech_part:'subst', gender:'m',lesson:1},
	{text:'Lampe',plural:'Lampen',translation:'лампа',speech_part:'subst', gender:'f',lesson:1},
	{text:'Buch',plural:'Bücher',translation:'книга',speech_part:'subst', gender:'n',lesson:1},
	{text:'Stuhl',plural:'Stühle',translation:'стул',speech_part:'subst', gender:'m',lesson:1},
	{text:'Tasche',plural:'Taschen',translation:'сумка',speech_part:'subst', gender:'f',lesson:1},
	{text:'Bild',plural:'Bilder',translation:'картина',speech_part:'subst', gender:'n',lesson:1},
	{text:'Schrank',plural:'Schränke',translation:'шкаф',speech_part:'subst', gender:'m',lesson:1},
	{text:'Blume',plural:'Blumen',translation:'цветы',speech_part:'subst', gender:'f',lesson:1},
	{text:'Wort',plural:'Worte',translation:'слова',speech_part:'subst', gender:'n',lesson:1},
	{text:'Vase',plural:'Vasen',translation:'ваза',speech_part:'subst', gender:'f',lesson:1},
	{text:'Haus',plural:'Häuser',translation:'дом',speech_part:'subst', gender:'n',lesson:1},
	{text:'Straße',plural:'Straßen',translation:'улица',speech_part:'subst', gender:'f',lesson:1},
	{text:'Zimmer',plural:'Straßen',translation:'комната',speech_part:'subst', gender:'f',lesson:1},
	{text:'Übung',plural:'Übungen',translation:'упражнение',speech_part:'subst', gender:'f',lesson:1},
	{text:'Kind',plural:'Kinder',translation:'ребенок',speech_part:'subst', gender:'n',lesson:1},
	{text:'Mensch',plural:'Menschen',translation:'человек',speech_part:'subst', gender:'m',lesson:1},
	{text:'Zeitung',plural:'Zeitungen',translation:'газета',speech_part:'subst', gender:'f',lesson:1},
	{text:'Lehrer',plural:'Lehrer',translation:'учитель',speech_part:'subst', gender:'m',lesson:1},
	{text:'Zeitschrift',plural:'Zeitschriften',translation:'журнал',speech_part:'subst', gender:'f',lesson:1},
	{text:'Mädchen',plural:'Mädchen',translation:'девушка',speech_part:'subst', gender:'n',lesson:1},
	{text:'Spielzeug',plural:'Spielzeug',translation:'игрушка',speech_part:'subst', gender:'n',lesson:1},
	{text:'groß',translation:'большой',speech_part:'adj',lesson:1},
	
])
