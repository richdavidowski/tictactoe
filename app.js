
let div = $('.cell');
const playerX = 'X';
const playerO = 'O';
currentPlayer = playerX;

console.log(div);


// get all cell buttons & add event listener

document.querySelectorAll('.squares').forEach(squares => squares.addEventListener('click', clickFunction))

// get restart button & add even listener

document.querySelector('.restart').addEventListener('click', restartGame)

//what happens when button is clicked

function clickFunction() {
    let i = parseInt(this.getAttribute('value'));
    let d = div[i];
    console.log('clicked');
    console.log(i);
    console.log(d);

    // remove elements from cell
    $(this).parent().empty();

    // add player token to cell
    div[i].append(currentPlayer);
    determineWinner();
    // change turn indicator
    if (currentPlayer == playerX) {
        currentPlayer = playerO;
        $('#turn').empty();
        $('#turn').append(playerO);
    } else {
        currentPlayer = playerX;
        $('#turn').empty();
        $('#turn').append(playerX);
    }
} 

//determine winner
const determineWinner = () => {
    if (div[0].textContent === currentPlayer) {
        if (div[1].textContent === currentPlayer && div[2].textContent === currentPlayer){
            console.log(true);
            setTimeout(() => {alert('YOU WON!')}, 250);
        };
        if (div[3].textContent === currentPlayer && div[6].textContent === currentPlayer){
            console.log(true);
            setTimeout(() => {alert('YOU WON!')}, 250);
        };
        if (div[4].textContent === currentPlayer && div[8].textContent === currentPlayer){
            console.log(true);
            setTimeout(() => {alert('YOU WON!')}, 250);
        };
    };
    if (div[6].textContent === currentPlayer) {
        if (div[4].textContent === currentPlayer && div[3].textContent === currentPlayer){
            console.log(true);
            setTimeout(() => {alert('YOU WON!')}, 250);
        };
        if (div[7].textContent === currentPlayer && div[8].textContent === currentPlayer){
            console.log(true);
            setTimeout(() => {alert('YOU WON!')}, 250);
        };
    };
    if (div[4].textContent === currentPlayer) {
        if (div[1].textContent === currentPlayer && div[7].textContent === currentPlayer){
            console.log(true);
            setTimeout(() => {alert('YOU WON!')}, 250);
        };
        if (div[3].textContent === currentPlayer && div[5].textContent === currentPlayer){
            console.log(true);
            setTimeout(() => {alert('YOU WON!')}, 250);
        };
    };
    }


// reset the board
function restartGame() {
    window.location.reload();
}
