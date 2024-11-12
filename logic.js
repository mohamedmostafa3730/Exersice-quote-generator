var quotes = [
  {
    quote: "“Be yourself; everyone else is already taken.”",
    author: "― Oscar Wilde",
  },
  {
    quote: "“So many books, so little time.”",
    author: "― Frank Zappa",
  },
  {
    quote: "“A room without books is like a body without a soul.”",
    author: "― Marcus Tullius Cicero",
  },
  {
    quote: "“You only live once, but if you do it right, once is enough.”",
    author: "― Mae West",
  },
  {
    quote: "“Be the change that you wish to see in the world.”",
    author: "― Mahatma Gandhi",
  },
  {
    quote:
      "“In three words I can sum up everything I've learned about life: it goes on.”",
    author: "― Robert Frost",
  },
  {
    quote: "“If you tell the truth, you don't have to remember anything.”",
    author: "― Mark Twain",
  },
  {
    quote: "“A friend is someone who knows all about you and still loves you.”",
    author: "― Elbert Hubbard",
  },
  {
    quote:
      "“To live is the rarest thing in the world. Most people exist, that is all.”",
    author: "― Oscar Wilde",
  },
  {
    quote: "“Always forgive your enemies; nothing annoys them so much.”",
    author: "― Oscar Wilde",
  },
  {
    quote: "“Without music, life would be a mistake.”",
    author: "― Friedrich Nietzsche, Twilight of the Idols",
  },
];
function print() {
  document.getElementById("quote").innerHTML = quotes[uniqueNum()].quote;
  document.getElementById("author").innerHTML = quotes[uniqueNum()].author;
}
var oldNum = null;
function uniqueNum() {
  var newNum;
  do {
    newNum = Math.floor(Math.random() * quotes.length);
  } while (oldNum === newNum);
  oldNum = newNum;
  return newNum;
}
