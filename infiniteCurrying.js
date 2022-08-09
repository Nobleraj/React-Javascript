//Render to string - it is basically used in server side rendering. In SSR, what happens our html is generated over the server and send to the client.This function(ReactDOMServer.renderToString()) is used to tranfer to send that html as string to the client
ReactDOMServer.renderToString();

ReactDOM.hydrate();
//- when you receive the generated html from the server,ReactDOM.hydrate i sused to attached event handlers and make the page responsive

function infiniteCurring(a) {
  return (b) => {
    if (b) {
      return infiniteCurring(a + b);
    }
    return a;
  };
}

console.log(infiniteCurring(2)(8)());
