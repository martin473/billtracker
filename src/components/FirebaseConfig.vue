<script>
// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
//import { getAnalytics } from 'firebase/analytics';
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: 'AIzaSyC2mANWGrKhkL9zLRevGBN9rghzX_VUOx0',
    authDomain: 'legiscanbackend.firebaseapp.com',
    databaseURL: 'https://legiscanbackend-default-rtdb.firebaseio.com',
    projectId: 'legiscanbackend',
    storageBucket: 'legiscanbackend.appspot.com',
    messagingSenderId: '102780714438',
    appId: '1:102780714438:web:9a26dcbf0c6085bfb506c7',
    measurementId: 'G-1022N3KCBT',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);
const db = getFirestore(app);

async function getMyBills(db) {
    const billsCol = collection(db, 'storedBills');
    const billsSnapshot = await getDocs(billsCol);
    const billsList = billsSnapshot.docs.map((doc) => doc.data());
    return billsList;
}

export default {
    methods: {
        getMyBills: getMyBills(db),
    },
};
</script>
