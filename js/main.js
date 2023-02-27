'use strict';

const privateMessage = document.querySelector('.message--post')
const messageInfo = document.querySelector('.message__info')
const markAll = document.querySelector('.mark-all');
const message = document.querySelectorAll('.message');
const number = document.querySelector('.number');
const noRead = document.querySelectorAll('.no-read');
let notificationNumber = parseInt(number.childNodes[0].data);

for(let i=0; i < message.length; i++) {
  message[i].addEventListener('click', () =>{
  message[i].style.backgroundColor = "#fff";
  message[i].style.cursor = 'not-allowed'
  for(let j = 0; j < noRead.length; j++){
    noRead[i].style.backgroundColor = "#fff";
  } 
  if(notificationNumber > 0) {
    notificationNumber--;
    document.querySelector('.number').textContent = notificationNumber;
  }else {
    document.querySelector('.number').textContent = 0;
  }
})
  markAll.addEventListener('click', function(){
    document.querySelector('.number').textContent = 0;
    message[i].style.backgroundColor = "#fff";
    for(let j = 0; j < noRead.length; j++){
      noRead[i].style.backgroundColor = "#fff";
    }
  })
 }
 privateMessage.addEventListener('click', () => {
  messageInfo.classList.toggle('hidden');
 })