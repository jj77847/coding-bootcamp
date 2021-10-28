const myString = 'hello';

const messageBtn = document.getElementById('message-btn');
const messagesContainer = document.getElementById('messages');

const renderMessages = function (messages) {
  const createAndAppend = function (each, index) {
    const div = document.createElement('div');
    div.textContent = each;
    messagesContainer.appendChild(div);
  };

  messagesContainer.innerHTML = '';
  // insert forEach on dataFromLS
  messages.forEach(createAndAppend);
};

const onClick = function () {
  // get from LS
  const dataFromLS = JSON.parse(localStorage.getItem('messages'));

  if (!dataFromLS) {
    // set in to LS
    localStorage.setItem('messages', JSON.stringify([myString]));
    renderMessages([myString]);
  } else {
    dataFromLS.push(myString);
    localStorage.setItem('messages', JSON.stringify(dataFromLS));
    renderMessages(dataFromLS);
  }
};

messageBtn.addEventListener('click', onClick);
