let quotes = [
  "“One man’s ‘magic’ is another man’s engineering.” – Robert Heinlein",
  "“Create with the heart; build with the mind.” – Criss Jami",
  "“People can have the Model T in any color – so long as it’s black.” – Henry Ford",
  "“The good thing about computers is that they do what you tell them to do. The bad news is that they do what you tell them to do.” – Ted Nelson",
  "“The press is the best instrument for enlightening the mind of man, and improving him as a rational, moral and social being.” – Thomas Jefferson",
  "“The speed of communication is wondrous to behold. It is also true that speed can multiply the distribution of information that we know to be untrue.” – Edward R. Murrow",
  "“A good rule for rocket experimenters to follow is this: always assume that it will explode.” – Astronautics Magazine, 1937",
  "“To achieve great things, two things are needed: a plan, and not quite enough time.” – Leonard Bernstein",
  "“We choose to go to the moon in this decade and do the other things, not because they are easy, but because they are hard.” – John F. Kennedy",
  "“One day there will be no borders, no boundaries, no flags and no countries and the only passport will be the heart” – Carlos Santana"
];

var currentQuote = 0;
setInterval(quoteGen, 100);
setInterval(quoteTimer, 15000);
window.onload = quoteGen;

// button functionality

var forward = document.getElementById("forwards");
var backward = document.getElementById("backwards");

var nextQuote = function next() {
  currentQuote += 1;
  if (currentQuote === quotes.length) {
    currentQuote = 0;
  }
};

var lastQuote = function back() {
  currentQuote -= 1;
  if (currentQuote <= -1) {
    currentQuote = quotes.length - 1;
  }
};

forward.addEventListener("click", nextQuote);

backward.addEventListener("click", lastQuote);

// quote generator function and timer function

function quoteGen() {
  document.getElementById("quote-box").innerHTML = [quotes[currentQuote]];
}

function quoteTimer() {
  currentQuote += 1;
  if (currentQuote === quotes.length) {
    currentQuote = 0;
  }
}

// quote styles generator function

var quoteBox = document.getElementById("quote-box");
quoteBox.style.fontSize = "1.3em";
quoteBox.style.fontFamily = "Montserrat";
