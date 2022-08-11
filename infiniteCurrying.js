//Render to string - it is basically used in server side rendering. In SSR, what happens our html is generated over the server and send to the client.This function(ReactDOMServer.renderToString()) is used to tranfer to send that html as string to the client
ReactDOMServer.renderToString();

ReactDOM.hydrate();
//- when you receive the generated html from the server,ReactDOM.hydrate i sused to attached event handlers and make the page responsive

//Position Property
  --Fixed, Sticky, Relative, Absolute, Static;
//Symmetrical layout(with flex, grid), Asymitrical layout (with position property)

//Box- Sizing
content-box, border-box

//By default,the width and height of an element is calculated like this:
//width + padding + border = actual width of an element
//height + padding + border = actual height of an element

//box-sizing: border-box; on an element, padding and border are included in the width and height

//200 - 5 * 2 - 10 * 2 = 170px

//content-box
//Width and height only apply to the content of the element
// div has a width of 300px. But the full width is 300px + 20px (left and right border) + 60px (left and right padding) = 380px!

//== vs ===
//loose equality(type conversion) vs strict equality(runs faster)

DOMContentLoaded vs onload
//onLoad fires once all the resources are downloaded like img,ads and css, basically it waits for all the resorses to downlaod and it fires
//DOMContentLoaded fires before all the resources gets downloaded,basicallt it won't wait

//Element.getBoundingClientRect()

//AddBLocker - is plugin that blocks the request that downloads the content

//What happens when we type url in browser and Enter
//browser cache -> OS cache -> Router cache -> ISP(Internet service provider)cache -> if in office Proxy server cache -> DNS (mapping ip)

//Pagespeed insights - FCP, LCP

function infiniteCurring(a) {
  return (b) => {
    if (b) {
      return infiniteCurring(a + b);
    }
    return a;
  };
}

console.log(infiniteCurring(2)(8)());
