//CRA :

//Advantages :

//In CRA, we can focus more on React not bother much about babel or webpack or any other build dependencies
//Package maintanence is managed by React community

//Disadvantages:

//Thers's less learning curve here. As a developer,using CRA would not help what things happen under the hood in build process
//It's difficult to use custom build configs.one way of doing is eject the app but which defeats the whole purpose of using CRA.
//CRA comes with SASS support, so if you want to use LESS we need extra dependency that's not supported yet

//Webpack - Bundlers :

//Webpack is a module bundler. Bundling is the process of following imported files and merging into single file.This bundle can be included on webpage to load an entire app at once.

//When application grows, to avoid winding up with large bundles we can use code-splitting supported by webpack.which created multiple bundle that can be dynamically load at run time.

//Webpack takes total control over dev env and we can configure as per our needs.

//If you’re building a complex Front End application with many non-code static assets such as CSS, images, fonts, etc, then yes, Webpack will give you great benefits.

//Advantages:
//HMR , Code splitting technique, Image Loaders, SVG Loaders & Plugins for minification and uglification of code.

//Unit Testing

//Unit test is a method to test an individual software unit in isolation.This invloves testing function or components for a given input.

//In React, checking the component render correctly for the specified props.

//Main reason:
//Prevent regression, exercise your code, faster feedback while developing

//Main advantage of writing unit test is how it improves the way you write code
//If you write test during dev and or even before implementing a feature, it gives you better picture of the requirement.
//You automatically end up writing a code that's easy to test, loosely coupled, and maintanable.