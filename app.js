document.addEventListener('DOMContentLoaded', () => {


    //card options
    const cardArray = [
        {
            name: 'basketball',
            img: 'images/basketball.png'
        },
        {
            name: 'basketball',
            img: 'images/basketball.png'
        },
        {
            name: 'soccer',
            img: 'images/soccer.png'
        },
        {
            name: 'soccer',
            img: 'images/soccer.png'
        },
        {
            name: 'football',
            img: 'images/football.png'
        },
        {
            name: 'football',
            img: 'images/football.png'
        },
        {
            name: 'hockey',
            img: 'images/hockey.png'
        },
        {
            name: 'hockey',
            img: 'images/hockey.png'
        },
        {
            name: 'baseball',
            img: 'images/baseball.png'
        },
        {
            name: 'baseball',
            img: 'images/baseball.png'
        },
                {
            name: 'cricket',
            img: 'images/cricket.png'
        },
        {
            name: 'cricket',
            img: 'images/cricket.png'
        },

    ]

    cardArray.sort(() => 0.5 - Math.random());


    const grid = document.querySelector('.grid');
    const result = document.querySelector('#result');
    var cardsChosen = [];
    var cardsChosenId = [];
    var cardsWon = [];

    //gameboard
    function createBoard(){
        for(let i = 0; i < cardArray.length; i++){
            var card = document.createElement('img');
            card.setAttribute('src', 'images/orange.png');
            card.setAttribute('data-id', i);
            card.addEventListener('click', flipcard);
            grid.appendChild(card);
        }
    }

    //check for match
    function checkForMatch() {
        var cards = document.querySelectorAll('img');
        const optionOneId = cardsChosenId[0];
        const optionTwoId = cardsChosenId[1];

        if(cardsChosen[0] === cardsChosen[1]){
            alert('You found a match');
            cards[optionOneId].setAttribute('src', 'images/white.png');
            cards[optionTwoId].setAttribute('src', 'images/white.png');
            cardsWon.push(cardsChosen);
        }
        else {
            cards[optionOneId].setAttribute('src', 'images/orange.png');
            cards[optionTwoId].setAttribute('src', 'images/orange.png');
            alert('Cards do not match, try again');
        }

        cardsChosen = [];
        cardsChosenId = [];

        result.textContent = cardsWon.length;
        if(cardsWon.length === cardArray.length/2){
            result.textContent = 'Congratulations you have won';
        }
    }



    //flip card

    function flipcard() {
        var cardId = this.getAttribute('data-id');
        cardsChosen.push(cardArray[cardId].name);
        cardsChosenId.push(cardId);
        this.setAttribute('src', cardArray[cardId].img);

        if(cardsChosen.length === 2){
            setTimeout(checkForMatch, 500);
        }
    }

    createBoard();
})