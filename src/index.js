import React from 'react';
import ReactDOM from 'react-dom';
import './styles/styles.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import DocumentTitle from 'react-document-title';


let a = "";

if(document.location.hash.split("#/")[1] !== "") {

    var b = document.location.hash.split("#/")[1].split("/");

    if(b.length > 1) {
        b[1] = b[1][0].toUpperCase() + b[1].substring(1, b[1].length);

        a = " Planos " + b[1]; 

    } else {
        var c = b[0].split("-");
        c[0] = c[0][0].toUpperCase() + c[0].substring(1, c[0].length);
        a = " " + c.join(" ")
    }
} 


ReactDOM.render(
    <DocumentTitle title={`Karter Telecon${a}`}>
        <App />
    </DocumentTitle>, document.getElementById('root'));
registerServiceWorker();
