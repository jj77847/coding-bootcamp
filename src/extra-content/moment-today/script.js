const clockContainer = $('#clock');

const onReady = function () {
  const timerTick = function () {
    // Saturday, 9th October, 2021 13:27:25
    const dateTime = moment();
    const dateTimeFormatted = dateTime.format('dddd, Do MMMM, YYYY kk:mm:ss');

    clockContainer.text(dateTimeFormatted);
  };

  const timer = setInterval(timerTick, 1000);
};

$(document).ready(onReady);
