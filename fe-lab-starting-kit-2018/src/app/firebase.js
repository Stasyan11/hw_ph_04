import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/database";



var config = {
    apiKey: "AIzaSyCqP1N2H_FO2p6NWlWue0aBE8SspJ_Faf0",
    authDomain: "productivity-app-be1ce.firebaseapp.com",
    databaseURL: "https://prod-app-1333b-default-rtdb.europe-west1.firebasedatabase.app/",
    storageBucket: "productivity-app-be1ce.appspot.com"
};
firebase.initializeApp(config);
const db = firebase.database();


export function save_settings(value) {
    try {
        const name = db.ref("settings");
        name.remove();
        var postListRef = firebase.database().ref('settings');
        var newPostRef = postListRef.push(value);

        console.log('Data was successfully saved');
    } catch (err) {
        console.log(err.name + "Data wasn`t successfully saved");
    }

}

export function show_saved_settings(func, w_t, w_i, s_b, l_b, ) {
    const names = db.ref("settings");
    names.on('value', (e) => {

        let result = e.val();
        let value = null;
        value = {
            long_break: 15,
            short_break: 5,
            work_iteration: 5,
            work_time: 20,
        }
        for (var key in result) {
            value = result[key];
        }


        func(value || value_1);


        w_t.value = value.work_time;
        w_i.value = value.work_iteration;
        s_b.value = value.short_break
        l_b.value = value.long_break

    })
}

export function writeUserData(userId, name, email, imageUrl) {
    firebase.database().ref('users/' + userId).set({
        username: name,
        email: email,
        profile_picture: imageUrl
    });
}