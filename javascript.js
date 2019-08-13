'use strict'

let questions = [
    // 'What animal would be cutest if scaled down to the size of a cat?', 'What inanimate object would be the most annoying if it played loud upbeat music while being used?', 'When did something start out badly for you but in the end, it was great?', 'What weird food combinations do you really enjoy?', 'How would your country change if everyone, regardless of age, could vote?', 'What are some red flags to watch out for in daily life?', 'If your job gave you a surprise three day paid break to rest and recuperate, what would you do with those three days?',
    // 'Where do you get your news?',
    // 'What movie can you watch over and over without ever getting tired of?',
    // 'What do you think is wrong but sounds right?',
    // 'If you could not be convicted of any one type of crime, what criminal charge would you like to be immune to?',
    // 'What social stigma do you think society needs to get over?',
    // 'What do you think will always be in fashion, no matter how much time passes?', 'Who do you go out of your way to be nice to?',
    // 'Where do you get most of the decorations for your home?',
    // 'What food have you never eaten but would really like to try?',
    // 'What food do you think is delicious but a pain to eat?',
    // 'Who was your most interesting teacher?', 'What is an unusual place you have been?',
    // 'What was the spiciest thing you have ever eaten?',
    // 'What is the most expensive thing you have ever broken?', 'What obstacles would be included in the most amazing obstacle course ever?',
    // 'What makes you roll your eyes every time you hear it?', 'What do you think you are much better at than you actually are?', 'What would a world populated by clones of you be like?',
    // 'Do you know any riddles? Like what?',
    // 'What is your cure for hiccups?',
    // 'What invention does not get a lot of love, but has greatly improved the world?',
    // 'What are you currently worried about?',
    // 'What is the most interesting building you have ever seen or been in?',
    // 'What mythical creature do you wish actually existed?',
    // 'What are you interested in that most people are not?',
    // 'What smartphone feature would you be excited for a company to implement?',
    // 'What movie quotes do you use on a regular basis?',
    // 'Which charity or charitable cause is most deserving of money?',
    // 'What TV show character would it be the most fun to change places with for a week?',
    // 'What was cool when you were younger that is no longer cool?',
    // 'If you were moving to another country, but could only pack one carry-on sized bag, what would you pack?',
    // 'What is the most ironic thing you have ever seen happen?',
    // 'What spell would you try to learn first?',
    // 'If you were a ghost and could possess people, what would you make them do?',
    // 'What goal do you think humanity is not focused enough on achieving?',
    // 'What problem are you currently grappling with?',
    // 'What character in a movie do you think could have been great, but the actor they cast did not fit the role?', 'What game have you spent the most hours playing?',
    // 'What is the most comfortable bed or chair you have ever been in?',
    // 'What is the wildest conversation you have overheard?',
    // 'When was the hardest you have ever worked?',
    // 'What movie, picture, or video always makes you laugh no matter how often you watch it?',
    // 'What artist or band do you always recommend when someone asks for a music recommendation?',
    // 'If you could have an all-expenses paid trip to see any famous world monument, which monument would you choose?',
    // 'If animals could talk, which animal would be the most annoying?',
    // 'What game have you ever been most addicted to?',
    // 'What is the coldest you have ever been?',
    // 'Which protagonist from a book or movie would make the worst roommate?',
    // 'Do you eat food that is past its expiration date if it still smells and looks fine?',
    // 'What is the most ridiculous thing you have bought?',
    // 'What is the funniest comedy skit you have seen?',
    // 'What tips or tricks have you picked up from your job / jobs?',
    // 'What outdoor activity have you never tried, but would like to?',
    // 'What songs hit you with a wave of nostalgia every time you hear them?',
    // 'What is the most interesting documentary you have ever watched?',
    // 'What was the last song you sung along to?',
    // 'What is the funniest thing you have done or had happen while your mind was wandering?',
    // 'What app has no one made yet?',
    // 'If you were given five million dollars to open a small museum, what kind of museum would you create?',
    // 'Which of your vices or bad habits would be the hardest to give up?',
    // 'What really needs to be modernized?',
    // 'When was the last time you slept more than nine hours?',
    // 'How comfortable are you speaking in front of large groups of people?',
    // 'When was the last time you immediately regretted something you said?',
    // 'What would be the best thing you could reasonably expect to find in a cave?',
    // 'What did you think was going to be amazing but turned out to be horrible?',
    // 'What bit of trivia do you know that is very interesting but also very useless?',
    // 'What was the best thing that happened to you today?',
    // 'What languages do you wish you could speak?',
    // 'What accent sounds the most pleasant to you?',
    // 'What do you think everyone, absolutely everyone, in the entire world can agree on?', 
    // 'What is the funniest word in the English language?',
    // 'Who do you wish you could get back into contact with?',
    // 'How do you make yourself sleep when you cannot seem to get to sleep?',
    // 'What is the wackiest video you have ever seen?', 
    // 'If you could know the truth behind every conspiracy, but you would instantly die if you hinted that you knew the truth, would you want to know?', 
    // 'What animal would be the most terrifying if it could speak?',
    // What’s the worst hairstyle you’ve ever had?  ,
    // What habit do you have now that you wish you started much earlier?,
    // If you were given one thousand acres of land that you didn’t need to pay taxes on but couldn’t sell, what would you do with it?,
    // When was the last time you yelled at someone?', 
    // 'What is the opposite of a koala?', 
    // 'What do you like to cook?'

    // 'What is the difference between == and === in JS?',
    // 'What is a package.json file?',
    // 'How many years of paid professional experience do you have in web development?',
    // 'Tell me about your background.',
    // 'What are your ambitions?',
    // 'Why do you want to work for Trilogy?',
    // 'What experiences set you apart from other individuals?',
    // 'Tell me about your experience.',
    // 'How would you motivate students who were having trouble?',
    // 'Why work for us?',
    // 'Are you familiar with HTML, CSS, React, Node,js, Express, MongoDB, jQuery?',
    // 'Tell me a bit about yourself.',
    // 'How would you go about helping a student?',
    // 'How comfortable are you with our curriculum on a scale from 1 to 5?',
    // 'How long have you been coding websites?',
    // 'Do you have any conflicts during the class period? (6 months)?',
    // 'Would you like to reschedule again?',
    // 'How would you encourage and motivate students who may be having difficulty with the material?',
    'What exactly is React JS?',
    'What is React JS',
    'What sets React apart from other JS libraries?',
    'What are the benefits of using React?',
    'Tell me about React.',
    
    // 'How do you declare a class component in React?',
    // 'How do you create a component in React js?',
    // 'What is Event Delegation in Java Script?',
    // 'What are media queries in CSS?',
    // 'What is the difference between ID and Class, and how do you declare an ID and Class in CSS?',
    // 'How do you avoid callback errors in node.js?',
    // 'What is a JavaScript constructor?',
    // 'What is the difference between SQL and no SQL?',
    // 'What is the difference between an inner join and an outer join in databases?',
    // 'What is a get request and a post request?',
    // 'Explain the purpose of a) HTML, b) CSS, and c) JavaScript on a webpage.',
    // 'What are joins in SQL?',
    // 'In JavaScript is "false" false?',
    // 'What is the difference between class and id and how are they referenced?',
    // 'Event bubbling in the DOM',
    // 'What is JSX?'
]

function genQuestion() {
    var randNum = Math.floor(Math.random() * (questions.length));
    document.getElementById('question').innerHTML = questions[randNum];
    // var tweetQuestion = questions[randNum].split(' ').join('%20');
    // tweetQuestion = tweetQuestion.split('<br>').join('');
    // tweetQuestion = "https://twitter.com/intent/tweet?text=" + tweetQuestion.split('"').join('')
    // $('.twitter-share-button').attr('href', tweetQuestion);
}