"use strict"
const button = document.querySelector('#in-button');
button.onclick = (e) => {
  const body = document.querySelector('#in-body');
  body.innerText = "Updated from button";
  window.parent.postMessage({"from": "hello", "message": "updated from iframe!"});
};

