"use strict"

const container = document.querySelector('#container');
window.addEventListener("message", messageCallback, false);

function messageCallback(event) {
  if(event.data && event.data.from === 'hello') {
    container.innerText = event.data.message;
  }
}
