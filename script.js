const gameQuiz = [
    {
        animal: "LION",
        imageScr: "https://www.colchester-zoo.com/wp-content/uploads/2022/03/Bailey-Statement.jpg"
    }
]

const ongoingGame = {
    state: [],
    lettersUsed: [],
    animalArray: undefined
}

function prepareState() {
    for(let i=0; i < ongoingGame.animalArray.length; i++) {
        ongoingGame.state[i] = null;
    }
    console.log(ongoingGame.animalArray);
    console.log(ongoingGame.state);
}

function createLetterElement(parent, state) {
    const letter = document.createElement('div');
    letter.classList.add("guessing-letter");
    letter.classList.add("shadow");
    letter.textContent = state;
    parent.appendChild(letter);
    return letter;
}

function populateFielGame() {
    const letterContainer = document.getElementById("guessing-box");
    letterContainer.innerHTML = "";
    for(let i=0; i < ongoingGame.animalArray.length; i++) {
        createLetterElement(letterContainer, ongoingGame.state[i]);
    }
}

function prepareGame(quiz) {
    ongoingGame.animalArray = quiz.animal.split('');
    prepareState();
    populateFielGame();
}

function onLoad() {
    prepareGame(gameQuiz[0]);
}

function verifyLetter(value) {
    for(let i=0; i < ongoingGame.animalArray.length; i++) {
        if(ongoingGame.animalArray[i] == value) {
            ongoingGame.state[i] = value;
        }
    }
}

function updateLettersUsed(value) {
    const guestBox = document.getElementById("guess-box");
    const divCreated = createLetterElement(guestBox, value);
    divCreated.classList.add("missed-letter");
}

function setLetter() {
    const value = document.getElementById("letterInput").value;
    setTimeout(function() {  
        document.getElementById("letterInput").value = "";
        verifyLetter(value);
        populateFielGame();
        updateLettersUsed(value);
    }, 200);
}
