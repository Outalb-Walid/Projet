import Firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import { seedDatabase } from '../seed';

// const config = {
//     apiKey: "AIzaSyDBvRukOCs4boRMs2goGaQEOZKfwKoMlck",
//     authDomain: "netflix-clone-v3-1f3b1.firebaseapp.com",
//     projectId: "netflix-clone-v3-1f3b1",
//     storageBucket: "netflix-clone-v3-1f3b1.appspot.com",
//     messagingSenderId: "571417635116",
//     appId: "1:571417635116:web:a22a20744b2cf3783a6489",
//     measurementId: "G-SV755DC3X3"
//   };
const config = {
  apiKey: "AIzaSyCOHtOFQffVaIB69n6Hv_DFL2-iCbJUN1A",
  authDomain: "netflix-clone-603d4.firebaseapp.com",
  projectId: "netflix-clone-603d4",
  storageBucket: "netflix-clone-603d4.appspot.com",
  messagingSenderId: "338190247857",
  appId: "1:338190247857:web:06c4b4a453d0cc2f4c7f90"
};

const firebase = Firebase.initializeApp(config);



export { firebase };