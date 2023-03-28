var firebaseConfig = {
    apiKey: "AIzaSyC3IykHoY5LE_1M2yp9loOQ5YvoFoFoZ3Y",
    authDomain: "practice-605e9.firebaseapp.com",
    databaseURL: "https://practice-605e9-default-rtdb.firebaseio.com",
    projectId: "practice-605e9",
    storageBucket: "practice-605e9.appspot.com",
    messagingSenderId: "590692284352",
    appId: "1:590692284352:web:68ec072a67da1bec5bba25"
  };
  firebase.initializeApp(firebaseConfig);

  function getData() {
  firebase.database().ref("/").on('value',
  function(snapshot) {document.getElementById("output").innerHTML = "";
  snapshot.forEach(function(childSnapshot) {childKey = childSnapshot.key;
  Room_names = childKey;
  //Start code
  row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
      document.getElementById("output").innerHTML += row;
  //End code
  });});}
  getData();


  user_name = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML = "WELCOME" + user_name + "!";

function add_room(){

  room_name = document.getElementById("room_name").value;
  firebase.database().ref("/").child(room_name).update({
        purpose : "adding room name"
  });
  localStorage.setItem("room_name", room_name);
  window.location = "chat_page.html" ;
}

function redirectToRoomName(name){

  localStorage.setItem("room_name", name);
  window.location = "chat_page.html";

}
function logout(){

  localStorage.removeItem("user_name");
  localStorage.removeItem("room_name");
  window.location = "index.html";

}