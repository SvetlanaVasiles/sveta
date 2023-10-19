var questions = [ 

	{

		question: "Как называется персонаж, глазами которого читатель видит мир книги?",

		answer: "Фокал"

	},

	{

		question: "Каким термином обозначается место действия в литературных произведениях и фильмах?",

		answer: "Сеттинг"

	},

	{

		question: "Как называют различную игру с аудиторией в журналистике?",

		answer: "Элементы геймификации"

	},

	{

		question: "Каким приёмом при трансляции произошедшего с героем часто пользуются журналисты в аналитических и публицистических материалах?",

		answer: "Сторителлинг"

	},

	{

		question: "Какая группа журналистских материалов сосредоточена на ценностной проблематике?",

		answer: "Художественная публицистика"

	}

]
for(i = 0; i < questions.length; i++) {

	q = questions[i].question

	document.getElementById('question' + [i]).textContent = q

}



function testResults() {

	var correct = 0;

	var incorrect = 0;

	for(i = 0; i < questions.length; i++) {	

		var answer = questions[i].answer

		var guess = document.getElementById('answer' + [i]).value

		var questionSpot = document.getElementById('question' + [i])

		if(answer == guess) {

			questionSpot.className = 'correct'

			correct++

		} else {

			questionSpot.className = 'incorrect'

			incorrect++

		}

	}

	document.getElementById('correct').textContent = correct

	document.getElementById('incorrect').textContent = incorrect

}