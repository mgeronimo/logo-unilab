function recordAttempt() {
    console.log("Started attempt");
    var user = firebase.auth().currentUser;
    var ref = firebase.database().ref('/users/' + user.uid);
    //Set the performance of the current user
    ref.once("value").then(function(snapshot) {
        ref.child('attempt').set(snapshot.val().attempt + 1);
    }).catch(function(error) {
        console.log("No attempt set yet. Set attempt at 1.");
        ref.child('attempt').set(1);
    });

}

firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
        // User is signed in.
        console.log("User " + user.displayName + " is logged in");
    } else {
        // No user is signed in.
        console.log("No one is logged in");
    }
});
