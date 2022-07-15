const socket = io();
const socket = require('socket.io');
const loginForm = document.getElementById("welcome-form");
const messagesSection = document.getElementById("messages-section");
const messagesList = document.getElementById("messages-list");
const addMessageForm = document.getElementById("add-messages-form"); 
const userNameInput = document.getElementById("username");
const messageContentInput = document.getElementById("message-content");

let userName = ''; 
const io = socket(server);

io.on('connection', (socket) => {
    console.log('New client! Its id – ' + socket.id);
    socket.on('message', () => { console.log('Oh, I\'ve got something from ' + socket.id) });
    console.log('I\'ve added a listener on message event \n');
  });

  
const login = function (event) {
    alert('working!'); // should alert, but eventListener not working
    event.preventDefault();
    if(userNameInput.value === '') {
        alert('Please enter some interesting username!')
    } else {
        userName = userNameInput.value;
        loginForm.classList.remove('show');
        messagesSection.classList.add('show');
    }
}

const sendMessage = function (event) {
    e.preventDefault();

    let messageContent = messageContentInput.value;
  
    if(!messageContent.length) {
      alert('You have to type something!');
    }
    else {
      addMessage(userName, messageContent);
      socket.emit('message', { author: userName, content: messageContent })
      messageContentInput.value = '';
    }
}

function addMessage(author, content) {
    const message = document.createElement('li');
    message.classList.add('message');
    message.classList.add('message--received');
    if(author === userName) message.classList.add('message--self');
    message.innerHTML = `
      <h3 class="message__author">${userName === author ? 'You' : author }</h3>
      <div class="message__content">
        ${content}
      </div>
    `;
    messagesList.appendChild(message);
  }

loginForm.addEventListener('submit', login);
addMessageForm.addEventListener('submit', sendMessage);



