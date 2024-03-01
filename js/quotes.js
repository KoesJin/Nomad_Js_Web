const quotes = [
    {
        quote: "Life is a process of facing uncertainties and adapting to changes.",
        author: "Tom Robbins",
    },
    {
        quote: "If you think something is impossible, it's already impossible." ,
        author: "Nikola Tesla",
    },
    {
        quote: "Setting a goal introduces the possibility of failure, but not setting one guarantees it." ,
        author: "Woodrow Wilson",
    },
    {
        quote: "Achieving amazing things while living an ordinary life is not that difficult." ,
        author: "Eleanor Roosevelt",
    },
    {
        quote: "You become what you think.",
        author: "Mahatma Gandhi",
    },
    {
        quote: "To see the light, you must understand the darkness." ,
        author: "Oprah Winfrey",
    },
    {
        quote: "Plans are attempts to overcome uncertainty." ,
        author: "Rain Holliday",
    },
    {
        quote: "If you leave the door of your mind open, any problem can be solved.",
        author: "Hillary Clinton",
    },
    {   
        quote: "All achievement is possible after going through a difficult process.",
        author: "Bette Davis",
    },
    {
        quote: "Every moment in life is a part of the whole life." ,
        author: "Dale Carnegie",
    },
]

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;