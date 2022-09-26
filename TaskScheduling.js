//Task scheduling

const schedules = [
  { id: 'z', depedencies: ['a', 'e', 'b', 'd', 'f'] },
  { id: 'a', depedencies: ['b', 'c'] },
  { id: 'b', depedencies: ['d'] },
  { id: 'c', depedencies: ['e'] },
  { id: 'd', depedencies: [] }, //d f b e c a
  { id: 'e', depedencies: ['f'] },
  { id: 'f', depedencies: [] },
];

const removeDep = (id) => {
  schedules.forEach((itm) => {
    let indx = itm.depedencies.indexOf(id);
    if (indx !== -1) {
      itm.depedencies.splice(indx, 1);
    }
  });
};
const totalTask = schedules.length;
let currentTask = 0,
  completed = 0;

const scheduleTask = () => {
  while (currentTask < totalTask) {
    if (
      !schedules[currentTask].depedencies.length &&
      !schedules[currentTask].visited
    ) {
      let value = schedules[currentTask];
      schedules[currentTask].visited = true;
      console.log('done', value.id);
      completed++;
      removeDep(value.id);
    } else if (completed === totalTask) break;

    if (currentTask === totalTask - 1) currentTask = 0;
    else currentTask++;
  }
  //console.log("res", schedules);
  //d f b e c a
};
scheduleTask(schedules);
