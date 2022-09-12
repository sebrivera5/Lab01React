
var firebase = require('firebase/app')

const { getDatabase, ref, onValue, set, update, get, child } = require('firebase/database'); 


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCqjnMe-R7ZsNVNpJXNzE2zSdvwUvzS6P8",
  authDomain: "senior-design-lab-1-1c890.firebaseapp.com",
  databaseURL: "https://senior-design-lab-1-1c890-default-rtdb.firebaseio.com",
  projectId: "senior-design-lab-1-1c890",
  storageBucket: "senior-design-lab-1-1c890.appspot.com",
  messagingSenderId: "651404526549",
  appId: "1:651404526549:web:7158e1023954d5f4ca735c",
  measurementId: "G-74DKBEQ6YC"
};

// Initialize Firebase
firebase.initializeApp( firebaseConfig );



const database = getDatabase();


//Read from the database
/*const dbRef = ref(getDatabase());
get(child(dbRef,"CurrentTemp/")).then((snapshot) => {
  if (snapshot.exists()) {
    console.log(snapshot.val());
  } else {
    console.log("No data available");
  }
}).catch((error) => {
  console.error(error);
});*/

//Refresh page after getting onValue
function updateChart(){
// This is the element that will display graph data.
           
        
}    

//Push adds element to end of array
var graphArr = new Array (300);
if (graphArr.length != 300){
    for (var i = 0; i < 300; i++){
        graphArr.push(0);
    }
}

var temp = 0;
//On Value Change
const currTempRef = ref(database, 'CurrentTemp');
onValue(currTempRef, (snapshot) => {
const currTemp = snapshot.val();
temp = currTemp
document.getElementById("chartJSScript").innerHTML = 3
document.getElementById("test").innerHTML = "Current Temperature = " + currTemp + "°C";
//If device becomes unbplugged
if (currTemp == null){
    currTemp = 0;
    temp = 0;
}
//refresh();
console.log(currTemp);
//updateStarCount(postElement, data);
});


//Text

