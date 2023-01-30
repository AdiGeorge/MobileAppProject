import { fetchChatrooms } from "./ChatActions";
import firebase from "firebase/app";
export const SAVE_USER = 'SAVE_USER';
export const SIGNUP = 'SIGNUP';
const firebaseConfig = {
    apiKey: "AIzaSyAiZX6KX_c1rx7YukroIS35Mo5TLj8oWVU",
    authDomain: "cbsapp-exam.firebaseapp.com",
    databaseURL: "https://cbsapp-exam-default-rtdb.firebaseio.com",
    projectId: "cbsapp-exam",
    storageBucket: "cbsapp-exam.appspot.com",
    messagingSenderId: "627782754303",
    appId: "1:627782754303:web:0aa7ba6107016cfee391ca"
  };
 
  firebase.initializeApp(firebaseConfig);

export const saveUser = (user) => {
    return {type: SAVE_USER, payload: user};
};


export const signup = (email, password) => {
   return async dispatch => {
       console.log("signup");
       const response = await fetch(
           'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyAiZX6KX_c1rx7YukroIS35Mo5TLj8oWVU', {
           method: 'POST',
           headers: {
               'Content-Type': 'application/json'
           },
           body: JSON.stringify({ //javascript to json
               //key value pairs of data you want to send to server
               // ...
               email: email,
               password: password,
               returnSecureToken: true
           })
        });
        console.log(response)
 
       const data = await response.json(); // json to javascript
       console.log(data);
       if (!response.ok) {
        console.log("signup err");
       } else {
           
           dispatch({type: SIGNUP, payload: data });
           dispatch(fetchChatrooms());
           
       }
   };
};

