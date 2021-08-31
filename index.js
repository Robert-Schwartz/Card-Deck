const suits = ["spades", "diamonds", "clubs", "hearts"];
const values = [
	"A",
	"2",
	"3",
	"4",
	"5",
	"6",
	"7",
	"8",
	"9",
	"10",
	"J",
	"Q",
	"K",
];

//Create a new Deck Object
function getDeck() {
	var deck = new Array();

	for (var i = 0; i < suits.length; i++) {
		for (var x = 0; x < cards.length; x++) {
			var card = { Value: cards[x], Suit: suits[i] };
			deck.push(card);
		}
	}

	return deck;
}

// Create Shuffle Function
function shuffle() {
	// for 1000 turns
	// switch the values of two random cards
	for (var i = 0; i < 1000; i++) {
		var location1 = Math.floor(Math.random() * deck.length);
		var location2 = Math.floor(Math.random() * deck.length);
		var tmp = deck[location1];

		deck[location1] = deck[location2];
		deck[location2] = tmp;
	}

	renderDeck();
}

//Load Functions
function load() {
	deck = getDeck();
	shuffle();
}

window.onload = load;
