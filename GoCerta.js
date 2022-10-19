String.prototype.sayHi = function () {
  return 'Hi ' + this;
};

console.log('String', 'John'.sayHi());

if ([]) {
} else {
}

if ([] == false) {
} else {
}

const prom = (name, value) => {
  return new Promise((res, rej) => {
    setTimeout(() => {
      res(`${name} ${value}`);
      //console.log(name,value);
    }, 1000);
  });
};
let arr = [
  prom.bind(null, 'Adam'),
  prom.bind(null, 'Glen'),
  prom.bind(null, 'Don'),
];
//arr[0]("").then(res=>arr[1](res)).then(res=>arr[2](res)).then(ans=>console.log(ans));

async function dynamic(arr, init) {
  if (!arr.length) return;
  let fn = arr.shift();
  const res = await fn(init);
  console.log('dynamic', res);
  return dynamic(arr, res);
}
dynamic([...arr], '');

//console.log(arr[0]("Hi"));

//My code in code sandox
//https://codesandbox.io/s/ancient-shape-f2n7nz
/*
Create a small app where when you click on a button, it hits an API (https://randomuser.me/api/) that gives you a random user.

With each response, create a list of users, and keep adding new users to that list, upon any subsequent clicks. 

List should be sorted alphabetically by the first name.

Lastly, each user that’s added should be removed from the list after 3 seconds.*/
/*export default function App() {
  const [userList, setUserList] = useState([]);

  const addUserHandler = async () => {
    const { data } = await axios.get("https://randomuser.me/api/");
    let result = data.results[0];
    setUserList([...userList, result]);
    removeElement();
  };
  const removeElement = () => {
    setTimeout(() => {
      userList.splice(0, 1);
      setUserList([...userList]);
    }, 3000);
  };

  return (
    <div className="App">
      <button onClick={addUserHandler}>Load User</button>
      {userList.length > 0 && (
        <ul>
          {userList
            .sort((a, b) => {
              return a.name.first < b.name.first ? -1 : 1;
            })
            .map((user, i) => {
              return (
                <li key={i}>
                  {user.name.first}
                  {user.email}
                </li>
              );
            })}
        </ul>
      )}
    </div>
  );
}
*/
//
