let btn = document.getElementById("new-quote");
let person = document.querySelector(".person");
let quote = document.querySelector(".quote");

const quotes = [
  {
    quote: `"I've learned that people will forget what you said, people will forget what you did, but people will never forget how you made them feel."`,
    person:`Maya Angelou`
  },
  {
    quote: `"Education is the most powerful weapon which you can use to change the world."`,
    person:`Nelson Mandela`
  },
  {
    quote: `"Your work is going to fill a large part of your life, and the only way to be truly satisfied is to do what you believe is great work."`,
    person:`Steve Jobs`
  },
  {
    quote: `"If you don't like something, change it. If you can't change it, change your attitude."`,
    person:`Albert Einstein`
  },
  {
    quote: `"When the whole world is silent, even one voice becomes powerful."`,
    person:`Malala Yousafzai`
  },
];

btn.addEventListener('click',function(){
     let random= Math.floor(Math.random()*quotes.length)

     quote.innerText= quotes[random].quote
     person.innerText= quotes[random].person
})
