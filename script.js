const result = document.querySelector('.result');
const options = document.querySelector('.options');
const humanScore = document.querySelector('#human-score');
const machineScore = document.querySelector('#machine-score');


let scoreNumberHuman = 0;
let scoreNumberMachine = 0;

const PLAY_MACHINE = {
    SCISSORS: 'scissors',
    PAPER: 'paper',
    STONE: 'stone'
}

function playHuman(HumanChoice) {
    playTheGame(HumanChoice, playMachine());
}

function playMachine() {
    const choiceMachine = [PLAY_MACHINE.SCISSORS, PLAY_MACHINE.PAPER, PLAY_MACHINE.STONE];
    const randomMachineMove = Math.floor(Math.random() * 3);

    return choiceMachine[randomMachineMove];
}

function playTheGame(human, machine) {
    if (human === machine) {
        options.src = "empate.png";
        result.innerHTML = "Deu empate";
    } else if (human === PLAY_MACHINE.PAPER && machine === PLAY_MACHINE.STONE ||
        human === PLAY_MACHINE.STONE && machine === PLAY_MACHINE.SCISSORS ||
        human === PLAY_MACHINE.SCISSORS && machine === PLAY_MACHINE.PAPER
    ) {
        options.src = "giphy.gif"
        scoreNumberHuman++
        humanScore.innerHTML = scoreNumberHuman;
        result.innerHTML = "PARABÉNS VOCÊ VENCEU"
    } else {
        options.src = "choro.gif";
        scoreNumberMachine++
        machineScore.innerHTML = scoreNumberMachine
        result.innerHTML = "VOCÊ PERDEU PARA MAQUINA"
    }
}

/* 
papel -> pedra -> tesoura

*/