import firebase from 'firebase'

const firebaseConfig = {
  apiKey: "AIzaSyAS0qKqkqxht5cxirwlBoNVetkXCjrIU4o",
  authDomain: "starter-95a33.firebaseapp.com",
  databaseURL: "https://starter-95a33.firebaseio.com",
  projectId: "starter-95a33",
  storageBucket: "starter-95a33.appspot.com",
  messagingSenderId: "970707301207",
  appId: "1:970707301207:web:16b3005b0272385d11c412"
};

export const initFirebase = () => {
  firebase.initializeApp(firebaseConfig);
}