import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyCoXGM-X0_6bofjOJR6MNoqmDX5NXlidVM",
  authDomain: "idobatakaigi-hands-on.firebaseapp.com",
  projectId: "idobatakaigi-hands-on",
  storageBucket: "idobatakaigi-hands-on.appspot.com",
  messagingSenderId: "974466325558",
  appId: "1:974466325558:web:6bcf82203f1c8bc75d8c97"
};

firebase.initializeApp(firebaseConfig);
const database = firebase.database();
const messagesRef = database.ref('messages');

export const pushMessage = ({name, text}) => {
  messagesRef.push({ name, text })
}