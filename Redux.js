//Redux Middleware allows you to intercept every action sent to the reducer so you can make changes to the action or cancel the action.

//Middleware helps you with logging, error reporting, making asynchronous requests, and a whole lot more.

//Redux Saga. In thunk, action creator does not return an object, it returns a function, In the saga, it allows you to send action normally. but it has a watcher. whenever a particular action gets dispatched, the watcher catches it.

//Redux vs Context API
//Redux is a complete state manager capable to allowing undo/redo actions and provides advanced developer tooling for debugging.

//Better triubleshooting and testing support for complext apps

//Redux have other libraries assosiated with it like redux-persist which allows you to save/store data in localStorage and rehydrate on refresh which Context API still does't support.

//Advantages
//Easier to debug, highly maintainable, useful in server-side-rendering, east to test (redux relies on pure reducer functions since they always return same output given the same input)

//Context API is designed as a dependency injection mechanism that allow making that data vailable through the component tree without being manually passed.

//Context API does't give you anything like Redux devtools, the ability to trace the state updates, middleware to add centralized application logic.
