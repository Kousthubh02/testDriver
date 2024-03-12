import { initializeApp } from 'firebase/app';
import firebase from 'firebase/app';
import 'firebase/database'; // Import other Firebase services if needed
import { getDatabase } from 'firebase/database';


// Initialize Firebase
const firebaseConfig = {

    apiKey: "AIzaSyDecou5BCpW0VnCJB7fr9J1C_KiAk4vlFU",
  
    authDomain: "driver-c6516.firebaseapp.com",
  
    databaseURL: "https://driver-c6516-default-rtdb.firebaseio.com",
  
    projectId: "driver-c6516",
  
    storageBucket: "driver-c6516.appspot.com",
  
    messagingSenderId: "518539832038",
  
    appId: "1:518539832038:web:ee95229765a2c64fdb2927",
  
    measurementId: "G-KVBK7GK36B"
  
  };
  

  const app = initializeApp(firebaseConfig);

// Check if Firebase Analytics is supported in the current environment
  // const analytics = getAnalytics(app);

// Export Firebase app instance if needed
export const db=getDatabase(app)
