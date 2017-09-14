function reportTally(brand) {
    var tallyRef = firebase.database().ref('/users/');

    //Total Tally
    tallyRef.on("value", function(snapshot) {
        var totalScoreArray = [];
        var totalHintsArray = [];
        var totalSecondsArray = [];

        var maleScoreArray = [];
        var maleHintsArray = [];
        var maleSecondsArray = [];

        var femaleScoreArray = [];
        var femaleHintsArray = [];
        var femaleSecondsArray = [];

        var lt18ScoreArray = [];
        var lt18HintsArray = [];
        var lt18SecondsArray = [];

        var lt26ScoreArray = [];
        var lt26HintsArray = [];
        var lt26SecondsArray = [];

        var lt36ScoreArray = [];
        var lt36HintsArray = [];
        var lt36SecondsArray = [];

        var gt36ScoreArray = [];
        var gt36HintsArray = [];
        var gt36SecondsArray = [];

        snapshot.forEach(function(childSnapshot) {
            //Total Tally
            totalScoreArray.push(childSnapshot.val()[brand].avgScore);
            totalHintsArray.push(childSnapshot.val()[brand].avgHints);
            totalSecondsArray.push(childSnapshot.val()[brand].avgSeconds);

            //Sex Tally
            if (childSnapshot.val().sex == "male") {
                maleScoreArray.push(childSnapshot.val()[brand].avgScore);
                maleHintsArray.push(childSnapshot.val()[brand].avgHints);
                maleSecondsArray.push(childSnapshot.val()[brand].avgSeconds);
            } else {
                femaleScoreArray.push(childSnapshot.val()[brand].avgScore);
                femaleHintsArray.push(childSnapshot.val()[brand].avgHints);
                femaleSecondsArray.push(childSnapshot.val()[brand].avgSeconds);
            }

            //Age bracket tally
            if (childSnapshot.val().age < 18) {
                lt18ScoreArray.push(childSnapshot.val()[brand].avgScore);
                lt18HintsArray.push(childSnapshot.val()[brand].avgHints);
                lt18SecondsArray.push(childSnapshot.val()[brand].avgSeconds);
            } else if (childSnapshot.val().age < 26) {
                lt26ScoreArray.push(childSnapshot.val()[brand].avgScore);
                lt26HintsArray.push(childSnapshot.val()[brand].avgHints);
                lt26SecondsArray.push(childSnapshot.val()[brand].avgSeconds);
            } else if (childSnapshot.val().age < 36) {
                lt36ScoreArray.push(childSnapshot.val()[brand].avgScore);
                lt36HintsArray.push(childSnapshot.val()[brand].avgHints);
                lt36SecondsArray.push(childSnapshot.val()[brand].avgSeconds);
            } else {
                gt36ScoreArray.push(childSnapshot.val()[brand].avgScore);
                gt36HintsArray.push(childSnapshot.val()[brand].avgHints);
                gt36SecondsArray.push(childSnapshot.val()[brand].avgSeconds);
            }

        });
        //Push total
        var brandRef = firebase.database().ref('/tally/' + brand + '/total/');
        brandRef.on("value", function(snapshot) {
            brandRef.child('avgScore').set(_.mean(totalScoreArray));
            brandRef.child('avgHints').set(_.mean(totalHintsArray));
            brandRef.child('avgSeconds').set(_.mean(totalSecondsArray));
        });

        //Push male
        var maleRef = firebase.database().ref('/tally/' + brand + '/male/');
        maleRef.on("value", function(snapshot) {
            maleRef.child('avgScore').set(_.mean(maleScoreArray));
            maleRef.child('avgHints').set(_.mean(maleHintsArray));
            maleRef.child('avgSeconds').set(_.mean(maleSecondsArray));
        });

        //Push female
        var femaleRef = firebase.database().ref('/tally/' + brand + '/female/');
        femaleRef.on("value", function(snapshot) {
            femaleRef.child('avgScore').set(_.mean(femaleScoreArray));
            femaleRef.child('avgHints').set(_.mean(femaleHintsArray));
            femaleRef.child('avgSeconds').set(_.mean(femaleSecondsArray));
        });

        //Push lt18
        var lt18Ref = firebase.database().ref('/tally/' + brand + '/lt18/');
        lt18Ref.on("value", function(snapshot) {
            lt18Ref.child('avgScore').set(_.mean(lt18ScoreArray));
            lt18Ref.child('avgHints').set(_.mean(lt18HintsArray));
            lt18Ref.child('avgSeconds').set(_.mean(lt18SecondsArray));
        });

        //Push lt26
        var lt26Ref = firebase.database().ref('/tally/' + brand + '/lt26/');
        lt26Ref.on("value", function(snapshot) {
            lt26Ref.child('avgScore').set(_.mean(lt26ScoreArray));
            lt26Ref.child('avgHints').set(_.mean(lt26HintsArray));
            lt26Ref.child('avgSeconds').set(_.mean(lt26SecondsArray));
        });

        //Push lt36
        var lt36Ref = firebase.database().ref('/tally/' + brand + '/lt36/');
        lt36Ref.on("value", function(snapshot) {
            lt36Ref.child('avgScore').set(_.mean(lt36ScoreArray));
            lt36Ref.child('avgHints').set(_.mean(lt36HintsArray));
            lt36Ref.child('avgSeconds').set(_.mean(lt36SecondsArray));
        });

        //Push gt36
        var gt36Ref = firebase.database().ref('/tally/' + brand + '/gt36/');
        gt36Ref.on("value", function(snapshot) {
            gt36Ref.child('avgScore').set(_.mean(gt36ScoreArray));
            gt36Ref.child('avgHints').set(_.mean(gt36HintsArray));
            gt36Ref.child('avgSeconds').set(_.mean(gt36SecondsArray));
        });

        console.log("updated tally");
    });
}

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
        $('#startBtn').show();
        $('#logoutBtn').show();
        $('#loginBtn').hide();
    } else {
        // No user is signed in.
        console.log("No one is logged in");
        $('#startBtn').hide();
        $('#logoutBtn').hide();
        $('#loginBtn').show();
    }
});
