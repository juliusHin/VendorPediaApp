import firebase from 'firebase';

export class AuthService{
    signInUser(email:string, password:string){
        return firebase.auth().signInWithEmailAndPassword(email,password);
    }

    registerUser(email:string, password:string){
        return firebase.auth().createUserWithEmailAndPassword(email,password);
    }

    logout(){
        return firebase.auth().signOut();
    }

    getCurrentUser(){
        return firebase.auth().currentUser;
    }

    getActiveUser(){
        return firebase.auth().currentUser;
    }
}