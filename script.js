/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

/***
 * This program stores 15 quotes and randomly generates them two ways:
 * a) When the user clicks a "Show Quotes" button, or b) automatically
 * generated every 5 seconds, whatever comes first 
***/

/*** 
 * `quotes` array 
 * 15 quotes are stored.  All quotes come with the "source", "tags" and "genre" attributes.
 * Where available, "citation" and "year" attributes are also shown.
***/

const quotes = [
  {quote: "Here’s Johnny!", source: " Jack Nicholson", tags: " Movie", genre: " Horror", citation: "  The Shining", year: " 1980" }, 
  {quote: "Keep your friends close but your enemies closer.", source: " Al Pacino", tags: " Movie", genre: " Drama", citation: "  The Godfather II", year: " 1974" },
  {quote: "Human beings, on the contrary, have a soul which lives forever, lives after the body has been turned to dust.", source: "  Hans Christian Andersen", tags: " Literature", genre: " Children", citation: "  The Little Mermaid", year: " 1837" },
  {quote: "You have a grand gift for silence, Watson. It makes you quite invaluable as a companion.", source: "  Sherlock Holmes", tags: " Literature", genre: " Mystery", citation: "  The Man with the Twisted Lip", year: " 1891" },
  {quote: "My whole soul is in this. Bringing America together. Uniting our people. Uniting our nation. And I ask every American to join me in this cause.", source: "  - President Joe Biden", tags: " Politics", genre: " Speeches", citation: "  Presidential Inauguration", year: " 2021" },
  {quote: "This is one small step for a man, one giant leap for mankind.", source: "  Neil Armstrong", tags: " Science", genre: " Space Travel", citation: "  Moon Landing", year: " 1969" },
  {quote: "I am a supporter of Bitcoin", source: "  Elon Musk", tags: " Social Media", genre: " Audio Chat App", citation: " Clubhouse app", year: " 2021" },
  {quote: "I don't like to lose.  At Anything.", source: "  Serena Williams", tags: " Sports", genre: " Tennis", citation: "", year: "" },
  {quote: "Sun is shining, weather is sweet...", source: "  Bob Marley", tags: " Music", genre: " Reggae", citation: "  Sun is Shining", year: " 1971" },
  {quote: "It does not matter how slowly you go as long as you do not stop.", source: "  Confucius", tags: " Philosophy", genre: " Confucionism", citation: "", year: "" },
  {quote: "Once you've accepted your flaws, no one can use them against you.", source: "  Tyrion Lannister", tags: " TV Show", genre: " Fantasy", citation: "  Game of Thrones", year: "" },
  {quote: "There is no try, only do.", source: "  Yoda", tags: " Movie", genre: " Sci-Fi", citation: " The Empire Strikes Back", year: " 1980" },
  {quote: "I am so clever that sometimes I don't understand a single word of what I am saying.”", source: "  Oscar Wilde", tags: " Literature", genre: " Children", citation: " The Happy Prince and Other Tales", year: " 1888" },
  {quote: "Insanity is doing the same thing, over and over again, but expecting different results.”", source: "  Narcotics Anonymous", tags: " Self-Help", genre: " Growth", citation: "", year: "" },
  {quote: "Frankly, my dear, I don't give a damn.", source: "  Clark Gable", tags: " Movie", genre: " Drama", citation: " Gone With The Wind", year: "1939" }
];

/***
 * setting up a function to randomly pick quotes from available set 
***/

// initializing variables for the function
// there are 15 quotes in total
let upper = 15;
let randomQuote = "";

// randomly pick a quote from the array and store it in the variable randomQuote
function getRandomQuote (upper) {
  const randomNumber = Math.floor(Math.random() * upper); 
  randomQuote = quotes[randomNumber]
  return randomQuote
}

/***
 * setting up a function  to randomly change the background color 
***/

function randomRGB(value) {
  color = `rgb( ${value()}, ${value()}, ${value()} )`
  return color;
}

/***
 * setting up a function printQuote to print formatted quotes
 * function printQuote is a nested function that calls "getRandomQuote" and
 * "randomRGB" functions
***/

function printQuote () {
   
  // initializing variables 
  let randomValue = () => Math.floor(Math.random() * 256);
  let color;

  // call function 
  getRandomQuote(upper); 

  // retrieve and format the quote plus related information (source, tag, genre, citation, year)

  let html = ""

  html += `
    <p class="quote"> ${randomQuote.quote} </p>
    <p class="source"> ${randomQuote.source} 
   `
  if (randomQuote.tags != "") { 
    html += `<span class = "tags">, tags: ${randomQuote.tags}, </span>`;
  } 

  if (randomQuote.genre != "") { 
    html += `<span class = "genre"> genre: ${randomQuote.genre} </span>`;
  }

  if (randomQuote.citation != "") { 
    html += `<span class = "citation"> ${randomQuote.citation} </span>`;
  }

  if (randomQuote.year != "") { 
    html += ` <span class = "year"> ${randomQuote.year}</span> `; 
  }
    
  html += `</p>`
  
  // call function to randomly assign background color 
  document.body.style.backgroundColor = randomRGB(randomValue);

  // insert quote into the body of the website  
  document.getElementById('quote-box').innerHTML = html
}

// set up a timer to automatically refresh quotes every 5 seconds 
setInterval(printQuote, 5000);

/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);

