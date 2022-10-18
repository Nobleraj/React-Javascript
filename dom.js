//Event probagation - 3 phase
//Capture Target Bubble

//Synthetic Event
//Synthetic events are objects which ascts as a cross browser wrapper around the browser's native event. this combine the behavious of different browsers into one API. this is done to make sure that the events show consistent properties across different browsers.

//Tree Shaking


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


//axios
//second max array
function secondMax(ar){
  let max = -Infinity;
  let secondmax = max;
  for(var i=0;i<ar.length;i++){
      if(ar[i]>max){
          secondMax = max;
          max = ar[i];
      }else if(ar[i]>secondMax){
          secondMax = ar[i];
      }
  }
  return secondMax;
}

//Email validation
var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
reg.test("ewfvefefe");

//Virtual DOM Shadow DOM
/*Virtual DOM is any kind of representation of a real DOM. Virtual DOM is about avoiding unnecessary changes to the DOM, which are expensive performance-wise, because changes to the DOM usually cause re-rendering of the page. It allows to collect several changes to be applied at once, so not every single change causes a re-render, but instead re-rendering only happens once after a set of changes was applied to the DOM.

Shadow DOM is mostly about encapsulation of the implementation. A single custom element can implement more-or-less complex logic combined with more- or-less complex DOM. Shadow DOM refers to the ability of the browser to include a subtree of DOM elements into the rendering of a document, but not into the main document DOM tree. 

Is the Shadow DOM the same as the Virtual DOM?
No, they are different. The Shadow DOM is a browser technology designed primarily for scoping variables and CSS in web components. The virtual DOM is a concept implemented by libraries in JavaScript on top of browser APIs.
*/

//Meta tag 
// we can add charcode - UTF-8 to support emoji's in HTML page
//can tell who's the author of the webpage by adding name and author in meta tag 
// add description in meat tag - overview of page
//add viewport in meta tag

//fixed position will not occupy any space in the body, so the next element(eg: an image) will be behind the fixed element.
//irrespective of scrolling it won't move


//sticky position occupies the space, so the next element will not be hidden behind it.
//it will scroll until offset value given by user

//Webworkes - 