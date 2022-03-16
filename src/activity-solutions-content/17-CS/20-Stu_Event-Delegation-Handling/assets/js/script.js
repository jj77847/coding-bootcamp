const buttons = document.getElementsByTagName("button");

const clickHandler = function () {
  let count = 0;

  const incrementCount = (event) => {
    count++;
    event.target.textContent = `Clicks: ${count}`;
  };

  return incrementCount;
};

for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", clickHandler());
}
