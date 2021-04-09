var fireBase = fireBase || firebase;
var hasInit = false;
var config = {
    apiKey: "AIzaSyCEelg6GokiZ6_WLZJMEwQsFKY6e1wuKCY",
    authDomain: "fir-auth-6c762.firebaseapp.com",
    projectId: "fir-auth-6c762",
    storageBucket: "fir-auth-6c762.appspot.com",
    messagingSenderId: "805277846374",
    databaseURL: "https://fir-auth-6c762.firebaseio.com",
  };
if(!hasInit){
    firebase.initializeApp(config);
    hasInit = true;
}


