import firebase from 'firebase';
import MobxFirebaseStore from 'mobx-firebase-store';

import { firebaseConfig } from '../config';


export default class AppStore extends MobxFirebaseStore {
    constructor(config) {
        const fbApp = firebase.initializeApp(config || firebaseConfig);
        const store = new MobxFirebaseStore(firebase.database(fbApp).ref());
        super(store.fb);
    }

    resolveFirebaseQuery(sub) {
        return this.fb.child('addresses');
    }

    getAddresses() {
        return this.getData('addresses')
    }

    getSubs(subKey) {
        return [
            {
                subKey,
                asList: true,
                onData: (type, snapshot) =>  snapshot.val(),
                resolveFirebaseRef: this.resolveFirebaseQuery
            }
        ]
    }
}