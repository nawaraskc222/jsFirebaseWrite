var firebaseConfig = {
  apiKey: "AIzaSyByuYb-Jp_2CdH7xW5DVECNSwvC5Mna20w",
  authDomain: "testing-9394b.firebaseapp.com",
  projectId: "testing-9394b",
  storageBucket: "testing-9394b.appspot.com",
  messagingSenderId: "258087417193",
  appId: "1:258087417193:web:0221311fd181d4279a39f8",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
 var db = firebase.firestore();


async function submit() {
  const name = document.getElementById("uname").value;
  const email = document.getElementById("email").value;
  try {
    await db.collection("userInfo").add({
      name: name,
      email: email,
    });
    console.log("Document written successfully");
    alert("Data added successfully!");
  } catch (e) {
    console.error("Error adding document: ", e);
  }

  document.getElementById("uname").value = "";
  document.getElementById("email").value = "";
}
