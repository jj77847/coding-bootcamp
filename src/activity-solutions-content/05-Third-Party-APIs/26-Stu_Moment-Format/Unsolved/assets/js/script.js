const gradDate = moment('12-01-2015').format('MMM Do, YYYY');
$('#1a').text(gradDate);

const weekDay = moment('1-1-2022', 'M-D-YYYY').format('dddd');
$('#2a').text(weekDay);

const now = moment().format('DDD');
$('#3a').text(now);

const time = moment().format('HH:mm:ss');
$('#4a').text(time);

const unix = moment().unix();
$('#5a').text(unix);

const unixFormat = moment.unix(1318781876).format('dddd Do MMM, YYYY');
$('#6a').text(unixFormat);
