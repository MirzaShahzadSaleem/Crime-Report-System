import * as firebase from 'firebase';

var config = {
        apiKey: "AIzaSyA70cMNEJNYMZiD3f40qYELkz8qBzTtzV4",
        authDomain: "crime-report-system-521d9.firebaseapp.com",
        projectId: "crime-report-system-521d9",
        storageBucket: "crime-report-system-521d9.appspot.com",
        messagingSenderId: "249119673191",
        appId: "1:249119673191:web:923bb0f264c710fcb63dc2",
        measurementId: "G-6ZS9PRG7S6",
        databaseURL : "https://crime-report-system-521d9-default-rtdb.firebaseio.com/"
};
firebase.initializeApp(config);
export class DBfirebase {

    static ref = firebase.database().ref();
    static storage = firebase.storage().ref();
    static auth = firebase.auth();
    static refCrime = firebase.database().ref('crimeList');
    static refMissing = firebase.database().ref('MissingPeople');
    

    static saveMultipath(multipath) {
        return this.ref.update(multipath);
    } // saveMultipath

    static customAuth(user) {
        return this.auth.createUserWithEmailAndPassword(user.email, user.password);
    } //AuthNewUser

    static customLogin(user) {
        return this.auth.signInWithEmailAndPassword(user.email, user.password);
    } //loginUser

    static addNewUser(user) {
        return this.ref.child(user).set();
    } //AuthNewUser

    static getPushRef(path) {
        return this.ref.child(path).push();
    }

// static Logout(){
//     return this.auth.signOut()
//         console.log("Signed out");
// }


}