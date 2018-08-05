import firebase from 'firebase';
import ReduxSagaFirebase from 'redux-saga-firebase';
import { firebaseConfig } from '../config';

const firebaseApp = firebase.initializeApp(firebaseConfig);
const rsf = new ReduxSagaFirebase(firebaseApp)
export default rsf;
