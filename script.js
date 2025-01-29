// Firebase configuration (use your own keys)
const firebaseConfig = {
  apiKey: "AIzaSyDvTQ0DeAsFtk-VjMe0FVPV4KYO03Uk3lI",
  authDomain: "headstart-product-development.firebaseapp.com",
  projectId: "headstart-product-development",
  storageBucket: "headstart-product-development.appspot.com",
  messagingSenderId: "718325388324",
  appId: "1:718325388324:web:43009963835dfe0c0374b1"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();

function login() {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const errorMessage = document.getElementById("error-message");

  // Clear any previous error messages
  errorMessage.textContent = "";

  // Firebase authentication
  auth.signInWithEmailAndPassword(email, password)
      .then((userCredential) => {
          // Check if the email contains 'admin'
          if (email.includes('admin')) {
              window.location.href = "admin.html"; // Redirect to admin page
          } else {
              window.location.href = "products.html"; // Redirect to products page
          }
      })
      .catch((error) => {
          // Display error message
          errorMessage.textContent = "Login failed: " + error.message;
      });
}
