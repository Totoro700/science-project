var currentAnswer = "None";
var right = 0;
var wrong = 0;
var total = 0;
var percentScore = 0;


function startGame() {
	//var button = document.getElementById('startButton');
	//button.style = 'visibility: hidden; opacity: 0; transition: visibility 0s 1s, opacity 1s linear;';
	var gameText = document.getElementById('gameText');
	const textList = ['Rain slowly breaks down rocks on the ground', 'Flowing river pushes weathered rock to another location', 'Wind deposits sand into a sand dune', 'Wind pushes rocks off a cliff causing them to break', 'Glaciers slowly pushing rock', 'Moving water carves a river into a canyon over a long time', 'River deposits large amounts of sand at the mouth of the river', 'Plant roots splitting a rock apart', 'Water in the ocean breaks down rocks on the beach into sand', 'Ocean washes sand from one beach to another', 'Ocean slowly placing sediments into sandbars or barrier islands', ''];
	const random = textList[Math.floor(Math.random() * textList.length)];
    gameText.innerText = random;
	switch (random) {
		case 'Rain slowly breaks down rocks on the ground':
		    currentAnswer = 'Weathering';
		    break;
		case 'Flowing river pushes weathered rock to another location':
		    currentAnswer = 'Erosion';
		    break;
		case 'Wind deposits sand into a sand dune':
		    currentAnswer = 'Deposition';
		    break;
        case 'Wind pushes rocks off a cliff causing them to break':
            currentAnswer = 'Weathering';
            break;
        case 'Glaciers slowly pushing rock':
            currentAnswer = 'Erosion';
        break;
        case 'Moving water carves a river into a canyon over a long time':
            currentAnswer = 'Weathering';
            break;
        case 'River deposits large amounts of sand at the mouth of the river':
            currentAnswer = 'Deposition';
            break;
        case 'Plant roots splitting a rock apart':
            currentAnswer = 'Weathering';
            break;
        case 'Water in the ocean breaks down rocks on the beach into sand':
            currentAnswer = 'Weathering';
            break;
        case 'Ocean washes sand from one beach to another':
            currentAnswer = 'Erosion';
            break;
        case 'Ocean slowly placing sediments into sandbars or barrier islands':
            currentAnswer = 'Deposition';
            break;
	}
}


function scoreUpdate() {
	percentScore = right/total*1.0;
	score.innerText = `Correct: ${right.toString()}; Wrong: ${wrong.toString()}; Total: ${total.toString()}; Score: ${(percentScore*100).toFixed(2)}%`;
}

function updateResult(qCorrect) {
	var score = document.getElementById('score');
	total = total + 1;
	if (qCorrect) {
		right = right + 1;
		scoreUpdate();
	} else {
		wrong = wrong + 1;
		scoreUpdate();
	}
}

function check(answer) {
	if (answer == currentAnswer) {
		updateResult(true);
	} else {
		updateResult(false);
	}
	startGame();
}