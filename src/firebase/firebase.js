import app from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import firebaseConfig from './config';

class Firebase {
    constructor() {
        app.initializeApp(firebaseConfig)
        this.auth = app.auth();
        this.db = app.firestore();
    }


}

const firebase = new Firebase()

export default firebase;