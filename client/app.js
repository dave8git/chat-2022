const loginForm = document.getElementById("add-messages-form");
const messagesSection = document.getElementById("messages-section__list");
const messagesList = document.getElementById("messages-list");
const addMessageForm = document.getElementById("add-messages-form"); 
const userNameInput = document.getElementById("username");
const messageContentInput = document.getElementById("message-content");

const userName = ''; 

loginForm.addEventListener('submit', login);

const login = function (e) {
    alert('working!'); // should alert, but eventListener not working
    e.preventDefault();
    if(userNameInput.value === '') {
        alert('Please enter some interesting username!')
    } else {
        userName = userNameInput.value;
        loginForm.classList.remove('show');
        messagesSection.classList.add('show');
    }
}
