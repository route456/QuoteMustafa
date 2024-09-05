var btn = document.getElementById("btn");
var text1 = document.getElementById("item");
var text2 = document.getElementById("item2");
var lastNum = null;

var Quotes = [
  {
    quote: "'Beware of what you become in pursuit of what you want.'",
    name: "Jim Rohn",
  },
  {
    quote:
      "Resentment is like drinking poison and waiting for your enemies to die.",
    name: "Ralph Waldo Emerson",
  },
  {
    quote:
      "It's not what happens to you, but how you react to it that matters.",
    name: " Friedrich Nietzsche,",
  },
  {
    quote: "Do not take life too seriously. You will not get out alive",
    name: " Mahatma Gandhi",
  },
  {
    quote:
      "“You know youre in love when you cant fall asleep because reality is finally better than your dreams.”",
    name: "Maya Angelou",
  },
  {
    quote: "“A friend is someone who knows all about you and still loves you.”",
    name: "Elbert Hubbard",
  },
  {
    quote:
      "“To live is the rarest thing in the world. Most people exist, that is all.”",
    name: "Oscar Wilde",
  },
];

btn.addEventListener("click", function () {
  var num;

  do {
  
    num = Number.parseInt(Math.random() * Quotes.length);
  } while (num === lastNum);

  lastNum = num;

  text1.textContent = `${Quotes[num].quote}`; 
  text2.textContent = `―― ${Quotes[num].name} ――`;
});

// Math.random() ==> return random number (0 -1)
//   Math.random() * array.length ==> return int number
