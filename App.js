//var x=document.getElementById("root");
//console.log(x);

//using react
import React from "react";
import ReactDOM from "react-dom/client";
document.getElementById('1').innerText = 'Hello, World!';
var ReactComponent =function(){
    return <h1>hello world(using react element)</h1>

}
const mainRoot = document.getElementById("root");
const mainDom = ReactDOM.createRoot(mainRoot);
mainDom.render(<ReactComponent/>);