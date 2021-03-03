//import {HttpClient} from '@butter-robotics/mas-javascript-api';
var HttpClient = require("@butter-robotics/mas-javascript-api").HttpClient;

var ip = document.getElementById("inputPassword2").value;
var butterHttpClient = new HttpClient(ip.toString()); // use you robot ip here


var result = butterHttpClient.playAnimation('KipThrowtoGimi');


//const butterHttpClient = new HttpClient(ip.toString()); // use you robot ip here


//const result = butterHttpClient.playAnimation('KipThrowtoGimi');

//console.log(result.data);
//old async call
result.then(response => console.log(response.data)).catch(error => console.error(error));