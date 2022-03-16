const runAfter8Seconds = () => {
  document.querySelector("#submit-btn").classList.remove("display-none");
};

const timer = setTimeout(runAfter8Seconds, 8000);

console.log(timer);
