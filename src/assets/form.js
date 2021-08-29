import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyDUAEQiDaJLfgM25UHpg4frtPPgssO56R8",
    authDomain: "yulia-aa0f1.firebaseapp.com",
    projectId: "yulia-aa0f1",
    storageBucket: "yulia-aa0f1.appspot.com",
    messagingSenderId: "1068439125174",
    appId: "1:1068439125174:web:4ecfb3a687c92917617a17"
  };

  //initialize Firebase
const app = initializeApp(firebaseConfig);

// Reference contactInfo collections
let contactInfo = firebase.database().ref("infos");

//Listen to submit
document.querySelector(".contact__form").addEventListener("submit", submitForm);

function submitForm(e) {
    e.preventDefault();
    console.log(123);

    //Get input values
    let name = document.querySelector(".name").value;
    let email = document.querySelector(".email").value;
    let message = document.querySelector(".message").value;
    console.log(name,email,message);

    saveContactInfo(name, email, message);
}

// Save infos to Firebase
function saveContactInfo(name, email, message) {
    let newContactInfo = contactInfo.push();
    newContactInfo.set({
        name: name,
        email: email,
        message: message,
    });
}