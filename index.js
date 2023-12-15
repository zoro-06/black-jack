
let cards = []
let sum = 0
let hasBlackJack = false
let isAlive = false
let message = ""
let messageEl = document.getElementById("message-el")
let cardsEl = document.querySelector("#cards-el")
let sumEL = document.querySelector("#sum-el")
let player = {
    name: "per",
    money: 100
}
let playerEl = document.querySelector("#player-el")
playerEl.textContent = player.name + ": $" + player.money
function getRandomCard(){
    let randomcard = Math.floor(Math.random() * 13) + 1
    if (randomcard === 1){
        return 11
    }else if (randomcard > 10 ){
        return 10
    }else {
        return randomcard
    }
}
function startgame(){
    isAlive = true
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    cards = [firstCard,secondCard]
    sum = firstCard + secondCard
    rendergame()
}
function rendergame(){
    cardsEl.textContent = "cards: "
    for (let i = 0; i <= cards.length - 1; i++){
        cardsEl.textContent += cards[i] + " "
    }
    sumEL.textContent = "sum: " + sum
    if (sum <= 20){
        message = "do you want to draw a new card?"
    }else if (sum === 21){
        message = "wohoo! you've got blackjack"
        hasBlackJack = true
    }else{
        message = "you're out of the game"
        isAlive = false
    }
    messageEl.textContent = message
    moneyCal()
}
function newcard(){
    if (isAlive === true && hasBlackJack === false){
        let card = getRandomCard()
        sum += card
        cards.push(card)
        rendergame()
    }else{
        messageEl.textContent = "start a new game"
    }   
}
function moneyCal(){
    if (isAlive === false){
        player.money -= 10
    }else if (hasBlackJack === true){
        player.money += 50
        hasBlackJack = false
    }playerEl = document.querySelector("#player-el")
    playerEl.textContent = player.name + ": $" + player.money
}