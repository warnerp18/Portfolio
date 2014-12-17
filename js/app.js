
window.onload = app;
// runs when the DOM is loaded
function app(){
    "use strict";
    // load some scripts (uses promises :D)
    loader.load(
        //css
        {url:"./bower_components/normalize.css/normalize.css"},
        {url:"./bower_components/typeplate-starter-kit/css/typeplate.css"},
        {url: "./dist/style.css"},
        //js
        {url: "./bower_components/jquery/dist/jquery.min.js"},
        {url: "./bower_components/lodash/dist/lodash.min.js"},
        {url: "./bower_components/backbone/backbone.js"}
    ).then(function(){
        _.templateSettings.interpolate = /{([\s\S]+?)}/g;
        document.body.style.opacity = 1;
        // start app?
    })
}
    
