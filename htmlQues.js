//html vs html5
//html5 - we are using doctype
//doctype means semantic tags like header, footer, section,main,article can be used

//strong vs bold tag
//strong tag semantically emphasizes on the important word or section of words while the bold tag is just offset text conventionally styled in bold

//Render to string - it is basically used in server side rendering. In SSR, what happens our html is generated over the server and send to the client.This function(ReactDOMServer.renderToString()) is used to tranfer to send that html as string to the client
ReactDOMServer.renderToString();

ReactDOM.hydrate();
//- when you receive the generated html from the server,ReactDOM.hydrate i sused to attached event handlers and make the page responsive
