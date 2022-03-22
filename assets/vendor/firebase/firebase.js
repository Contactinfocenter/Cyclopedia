//var firebaseConfig = {
//    apiKey: "AIzaSyCDL3U26Kvu16VxUcpsRtpL07dEIDwIgpQ",
//    authDomain: "fir-project-a7458.firebaseapp.com",
//    projectId: "fir-project-a7458",
//    storageBucket: "fir-project-a7458.appspot.com",
//    messagingSenderId: "575906290952",
//    appId: "1:575906290952:web:0f2f7421abffc0db1420bd",
//    measurementId: "G-6EF9ND3KRX"
//};
// Initialize Firebase
//firebase.initializeApp(firebaseConfig);
//firebase.analytics();

 // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
    apiKey: "AIzaSyAT2BHxsa29ryV6jzryUp3XX8Zb9gZJzEc",
    authDomain: "contact-login-project.firebaseapp.com",
    projectId: "contact-login-project",
    storageBucket: "contact-login-project.appspot.com",
    messagingSenderId: "485291159101",
    appId: "1:485291159101:web:97d40d6713e94ada5dc454",
    measurementId: "G-N0KDSKZBG0"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const auth =  firebase.auth();
  const analytics = getAnalytics(app);
