//Convert 24hrs format
const conver12to24 = (data) => {
  //02:24 PM
  //12:01 PM
  //12:00 AM
  const [time, modifier] = data.split(' ');
  let [hour, minute] = time.split(':');

  if (hour == 12) hour = '00';

  if (modifier == 'PM') hour = Number(hour) + 12;

  return `${hour}:${minute}`;
};

console.log('Convert 24hrs format', conver12to24('12:01 PM'));
