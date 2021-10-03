//MAGIC 8 BALL RESPONSE SCRIPT

//Create an ARRAY of possible responses. Separate each 'string' with a comma.
var responses = [
    'It is Certain.',
    'It is decidedly so.',
    'Without a doubt.',
    'Yes definitely.',
    'You may rely on it.',
    'As I see it, yes.',
    'Most likely.',
    'Outlook good.',
    'Yes.',
    'Signs point to yes.',
    'Reply hazy, try again.',
    'Ask again later.',
    'Better not tell you now.',
    'Cannot predict now.',
    'Concentrate and ask again.',
    'Don’t count on it.',
    'My reply is no.',
    'My sources say no.',
    'Outlook not so good.',
    'Very doubtful.'
]
var introduction=[
"oh hey",
"sup",
"hey there!",
"yoooo",
"hey...",
"yeah about tonight",
"hey?",
"oh damn",
"shit hey",
"uhhhhh",
"hey!"
]

var apology= [
"sorry",
"my bad",
"im sorry",
"im sorry but",
"im a little confused, what are you talking about? i told you that",
"i hate to break it to you but you're being crazy right now, you already knew that",
]

var excuse=[
    "i had plans to",
    "my mom needs me to",
    "my friend has the worst migrane and asked me to",
    "my dog has been constipated so i need to",
    "i've been busy working on my ambient album and i have to",
    "ive been so overwhelmed with homework so ive been trying to",
    "im so upset that you would even think that i would flake on you, i told you that i need to",
    "my cat has been so depressed so i need to",
    "i think we need to take a break, you know that i've got to"
]
var action=[
    "water my orchid",
    "take a shower",
    "eat dinner and think about what you said earlier",
    "look up what gaslighting means and 'do the work 'or whatever",
    "finish my homework",
    "call my landlord",
    "buy a new pair of jeans",
    "take advil and sleep through it",
    "take a smoke break",
    "drive to the beach",
    "leave the house early so i can beat rush hour"
]


// const inputVal = document.getElementById('my-text');
// const push=document.getElementsByClassName('my-text-pushed');

// push.innerHTML= inputVal;


function sendText(){
    let inputVal = document.getElementById('my-text').value;
let push=document.getElementById('my-text-pushed');
   
  push.innerHTML += inputVal;
 
  setTimeout(function(){
   
    story.style.display="inline-block";
  },700);

  push.style.display="inline-block";
  document.getElementById('my-form').reset();

  



//after saying hi, reset input, after displaying excuse, then type again and create a new div 







var story=document.getElementById('story');
for (var i=0; i<1;i++){
    story.innerHTML = introduction[Math.floor(Math.random() * introduction.length)] + " ";
    story.innerHTML += apology[Math.floor(Math.random() * apology.length)] + " ";
    story.innerHTML += excuse[Math.floor(Math.random() * excuse.length)] + " ";
    story.innerHTML += action[Math.floor(Math.random() * action.length)] + " ";
}

}

// function refresh(){
// // push.style.display="none";
// excuse.syle.display="none";
// }


//Create a variable that randomly selects a positive whole between 0 and the number of total responses.
// var randomResponse = responses[Math.floor(Math.random() * responses.length)];

//Select the HTML element with the id '#display' and replace its contents with the result of the randomResponse equation
// document.querySelector('#display').innerHTML = story;
