//Least recently used cache
class LRU {
  constructor(max = 5) {
    this.max = max;
    this.cache = new Map();
  }
  set_(key, value) {
    if (this.cache.has(key)) {
      this.cache.delete(key);
    } else if (this.max == this.cache.size) {
      this.cache.delete(this.findFirst());
    }
    this.cache.set(key, value);
  }
  findFirst() {
    return this.cache.keys().next().value;
  }
  get_(key) {
    let itm = this.cache.get(key);
    this.cache.delete(key);
    this.set_(key, itm);
  }
  getSample() {
    return this.cache;
  }
}

let LC = new LRU(3);
LC.set_('1', 1);
LC.set_('2', 1);
LC.set_('3', 11);
console.log('LC', LC.getSample());
LC.set_('4', 11);
console.log('LC', LC.getSample());
LC.set_('2', 11);
console.log('LC', LC.getSample());
LC.set_('5', 11);
console.log('LC', LC.getSample());
LC.set_('4', 12);
console.log('LC', LC.getSample());
LC.set_('3', 12);
console.log('LC', LC.getSample());

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
