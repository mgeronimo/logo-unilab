window.onload = function() {
    var ref = firebase.database().ref().child("users");
    ref.once("value").then(function(snapshot) {
        var ccount = 0;
        var reportsTable = "";
        // snapshot.forEach(function(childSnapshot) {
        //     reportsTable += "<tr>";
        //     reportsTable += "<td>" + checkUndefined(childSnapshot.key) + "</td>";
        //     reportsTable += "<td>" + checkUndefined(childSnapshot.val().advil.attempt) + "</td>";
        //     reportsTable += "<td>" + checkUndefined(childSnapshot.val().advil.firstGuess) + "</td>";
        //     reportsTable += "<td>" + checkUndefined(childSnapshot.val().advil.firsthints) + "</td>";
        //     reportsTable += "<td>" + checkUndefined(childSnapshot.val().advil.firstSeconds) + "</td>";
        //     reportsTable += "<td>" + checkUndefined(childSnapshot.val().advil.firstScore) + "</td>";
        //     reportsTable += "<td>" + checkUndefined(childSnapshot.val().advil.guessRightOnAttempt) + "</td>";
        //     reportsTable += "<td>" + checkUndefined(childSnapshot.val().advil.avgGuess) + "%</td>";
        //     reportsTable += "<td>" + checkUndefined(childSnapshot.val().advil.avgHints) + "</td>";
        //     reportsTable += "<td>" + checkUndefined(childSnapshot.val().advil.avgSeconds) + "</td>";
        //     reportsTable += "<td>" + checkUndefined(childSnapshot.val().advil.avgScore) + "</td>";
        //     reportsTable += "<td>" + checkUndefined(childSnapshot.val().advil.guessRightCount) + "</td>";


        //     reportsTable += "</tr>";
        //     ccount++;
        // });
        // document.getElementById('ccount').innerHTML = ccount;
        // document.getElementById('advil').innerHTML = reportsTable;
        reportsTable += "<table>";
        snapshot.forEach(function(childSnapshot) {
            if(childSnapshot.val().name == "Madi Geronimo" || childSnapshot.val().name == "Romel Almarinez" || childSnapshot.val().name == "Grace Connexion" || childSnapshot.val().name == "Joanne Carla Blanco Almarinez" || childSnapshot.val().name == "Alexandre Gerona" || childSnapshot.val().name == "Michael Taquiqui" || childSnapshot.val().name == "Santa Gallardo-Geronimo"){
                return;
            }

            reportsTable += "<tr><td colspan='12' class='userName'>" + (ccount+1) + ". " + childSnapshot.val().name + "</td></tr>";
            reportsTable += "<tr><td>Age:</td><td colspan='11'>" + childSnapshot.val().age + "</td></tr>";
            reportsTable += "<tr><td>Sex:</td><td colspan='11'>" + childSnapshot.val().sex + "</td></tr>";
            reportsTable += "<tr><td>Brand</td><td>Total Attempts</td><td>Guessed on the first try</td><td># of hints on the first try</td><td># of seconds on the first try</td><td>Score on the first try</td><td>First guessed correctly on which attempt</td><td>Ave. Guess Rate</td><td>Ave. Hints</td><td>Ave. Seconds</td><td>Ave. Score</td><td># of correct guesses</td></tr>";
            if(childSnapshot.hasChild('advil')){
                reportsTable += "<tr><td>Advil</td>";
                reportsTable += "<td>" + checkUndefined(childSnapshot.val().advil.attempt) + "</td>";
                firstGuess = checkUndefined(childSnapshot.val().advil.firstGuess)
                fGuess = firstGuess == true ? "Yes" : "No";
                reportsTable += "<td>" + fGuess + "</td>";
                reportsTable += "<td>" + checkUndefined(childSnapshot.val().advil.firsthints) + "</td>";
                reportsTable += "<td>" + checkUndefined(childSnapshot.val().advil.firstSeconds) + "</td>";
                reportsTable += "<td>" + checkUndefined(childSnapshot.val().advil.firstScore) + "</td>";
                reportsTable += "<td>" + checkUndefined(childSnapshot.val().advil.guessRightOnAttempt) + "</td>";
                reportsTable += "<td>" + checkUndefined(childSnapshot.val().advil.avgGuess) + "%</td>";
                reportsTable += "<td>" + checkUndefined(childSnapshot.val().advil.avgHints) + "</td>";
                reportsTable += "<td>" + checkUndefined(childSnapshot.val().advil.avgSeconds) + "</td>";
                reportsTable += "<td>" + checkUndefined(childSnapshot.val().advil.avgScore) + "</td>";
                reportsTable += "<td>" + checkUndefined(childSnapshot.val().advil.guessRightCount) + "</td>";
                reportsTable += "</tr>";
            }
            if(childSnapshot.hasChild('alaxan')){
                reportsTable += "<tr><td>Alaxan</td>";
                reportsTable += "<td>" + checkUndefined(childSnapshot.val().alaxan.attempt) + "</td>";
                firstGuess = checkUndefined(childSnapshot.val().alaxan.firstGuess)
                fGuess = firstGuess == true ? "Yes" : "No";
                reportsTable += "<td>" + fGuess + "</td>";
                reportsTable += "<td>" + checkUndefined(childSnapshot.val().alaxan.firsthints) + "</td>";
                reportsTable += "<td>" + checkUndefined(childSnapshot.val().alaxan.firstSeconds) + "</td>";
                reportsTable += "<td>" + checkUndefined(childSnapshot.val().alaxan.firstScore) + "</td>";
                reportsTable += "<td>" + checkUndefined(childSnapshot.val().alaxan.guessRightOnAttempt) + "</td>";
                reportsTable += "<td>" + checkUndefined(childSnapshot.val().alaxan.avgGuess) + "%</td>";
                reportsTable += "<td>" + checkUndefined(childSnapshot.val().alaxan.avgHints) + "</td>";
                reportsTable += "<td>" + checkUndefined(childSnapshot.val().alaxan.avgSeconds) + "</td>";
                reportsTable += "<td>" + checkUndefined(childSnapshot.val().alaxan.avgScore) + "</td>";
                reportsTable += "<td>" + checkUndefined(childSnapshot.val().alaxan.guessRightCount) + "</td>";
                reportsTable += "</tr>";
            }
            if(childSnapshot.hasChild('allerta')){
                reportsTable += "<tr><td>Allerta</td>";
                reportsTable += "<td>" + checkUndefined(childSnapshot.val().allerta.attempt) + "</td>";
                firstGuess = checkUndefined(childSnapshot.val().allerta.firstGuess)
                fGuess = firstGuess == true ? "Yes" : "No";
                reportsTable += "<td>" + fGuess + "</td>";
                reportsTable += "<td>" + checkUndefined(childSnapshot.val().allerta.firsthints) + "</td>";
                reportsTable += "<td>" + checkUndefined(childSnapshot.val().allerta.firstSeconds) + "</td>";
                reportsTable += "<td>" + checkUndefined(childSnapshot.val().allerta.firstScore) + "</td>";
                reportsTable += "<td>" + checkUndefined(childSnapshot.val().allerta.guessRightOnAttempt) + "</td>";
                reportsTable += "<td>" + checkUndefined(childSnapshot.val().allerta.avgGuess) + "%</td>";
                reportsTable += "<td>" + checkUndefined(childSnapshot.val().allerta.avgHints) + "</td>";
                reportsTable += "<td>" + checkUndefined(childSnapshot.val().allerta.avgSeconds) + "</td>";
                reportsTable += "<td>" + checkUndefined(childSnapshot.val().allerta.avgScore) + "</td>";
                reportsTable += "<td>" + checkUndefined(childSnapshot.val().allerta.guessRightCount) + "</td>";
                reportsTable += "</tr>";
            }
            if(childSnapshot.hasChild('ascof')){
                reportsTable += "<tr><td>Ascof</td>";
                reportsTable += "<td>" + checkUndefined(childSnapshot.val().ascof.attempt) + "</td>";
                firstGuess = checkUndefined(childSnapshot.val().ascof.firstGuess)
                fGuess = firstGuess == true ? "Yes" : "No";
                reportsTable += "<td>" + fGuess + "</td>";
                reportsTable += "<td>" + checkUndefined(childSnapshot.val().ascof.firsthints) + "</td>";
                reportsTable += "<td>" + checkUndefined(childSnapshot.val().ascof.firstSeconds) + "</td>";
                reportsTable += "<td>" + checkUndefined(childSnapshot.val().ascof.firstScore) + "</td>";
                reportsTable += "<td>" + checkUndefined(childSnapshot.val().ascof.guessRightOnAttempt) + "</td>";
                reportsTable += "<td>" + checkUndefined(childSnapshot.val().ascof.avgGuess) + "%</td>";
                reportsTable += "<td>" + checkUndefined(childSnapshot.val().ascof.avgHints) + "</td>";
                reportsTable += "<td>" + checkUndefined(childSnapshot.val().ascof.avgSeconds) + "</td>";
                reportsTable += "<td>" + checkUndefined(childSnapshot.val().ascof.avgScore) + "</td>";
                reportsTable += "<td>" + checkUndefined(childSnapshot.val().ascof.guessRightCount) + "</td>";
                reportsTable += "</tr>";
            }
            if(childSnapshot.hasChild('bioflu')){
                reportsTable += "<tr><td>Bioflu</td>";
                reportsTable += "<td>" + checkUndefined(childSnapshot.val().bioflu.attempt) + "</td>";
                firstGuess = checkUndefined(childSnapshot.val().bioflu.firstGuess)
                fGuess = firstGuess == true ? "Yes" : "No";
                reportsTable += "<td>" + fGuess + "</td>";
                reportsTable += "<td>" + checkUndefined(childSnapshot.val().bioflu.firsthints) + "</td>";
                reportsTable += "<td>" + checkUndefined(childSnapshot.val().bioflu.firstSeconds) + "</td>";
                reportsTable += "<td>" + checkUndefined(childSnapshot.val().bioflu.firstScore) + "</td>";
                reportsTable += "<td>" + checkUndefined(childSnapshot.val().bioflu.guessRightOnAttempt) + "</td>";
                reportsTable += "<td>" + checkUndefined(childSnapshot.val().bioflu.avgGuess) + "%</td>";
                reportsTable += "<td>" + checkUndefined(childSnapshot.val().bioflu.avgHints) + "</td>";
                reportsTable += "<td>" + checkUndefined(childSnapshot.val().bioflu.avgSeconds) + "</td>";
                reportsTable += "<td>" + checkUndefined(childSnapshot.val().bioflu.avgScore) + "</td>";
                reportsTable += "<td>" + checkUndefined(childSnapshot.val().bioflu.guessRightCount) + "</td>";
                reportsTable += "</tr>";
            }
            if(childSnapshot.hasChild('biogesic')){
                reportsTable += "<tr><td>Biogesic</td>";
                reportsTable += "<td>" + checkUndefined(childSnapshot.val().biogesic.attempt) + "</td>";
                firstGuess = checkUndefined(childSnapshot.val().biogesic.firstGuess)
                fGuess = firstGuess == true ? "Yes" : "No";
                reportsTable += "<td>" + fGuess + "</td>";
                reportsTable += "<td>" + checkUndefined(childSnapshot.val().biogesic.firsthints) + "</td>";
                reportsTable += "<td>" + checkUndefined(childSnapshot.val().biogesic.firstSeconds) + "</td>";
                reportsTable += "<td>" + checkUndefined(childSnapshot.val().biogesic.firstScore) + "</td>";
                reportsTable += "<td>" + checkUndefined(childSnapshot.val().biogesic.guessRightOnAttempt) + "</td>";
                reportsTable += "<td>" + checkUndefined(childSnapshot.val().biogesic.avgGuess) + "%</td>";
                reportsTable += "<td>" + checkUndefined(childSnapshot.val().biogesic.avgHints) + "</td>";
                reportsTable += "<td>" + checkUndefined(childSnapshot.val().biogesic.avgSeconds) + "</td>";
                reportsTable += "<td>" + checkUndefined(childSnapshot.val().biogesic.avgScore) + "</td>";
                reportsTable += "<td>" + checkUndefined(childSnapshot.val().biogesic.guessRightCount) + "</td>";
                reportsTable += "</tr>";
            }
            if(childSnapshot.hasChild('celeteque')){
                reportsTable += "<tr><td>Celeteque</td>";
                reportsTable += "<td>" + checkUndefined(childSnapshot.val().celeteque.attempt) + "</td>";
                firstGuess = checkUndefined(childSnapshot.val().celeteque.firstGuess)
                fGuess = firstGuess == true ? "Yes" : "No";
                reportsTable += "<td>" + fGuess + "</td>";
                reportsTable += "<td>" + checkUndefined(childSnapshot.val().celeteque.firsthints) + "</td>";
                reportsTable += "<td>" + checkUndefined(childSnapshot.val().celeteque.firstSeconds) + "</td>";
                reportsTable += "<td>" + checkUndefined(childSnapshot.val().celeteque.firstScore) + "</td>";
                reportsTable += "<td>" + checkUndefined(childSnapshot.val().celeteque.guessRightOnAttempt) + "</td>";
                reportsTable += "<td>" + checkUndefined(childSnapshot.val().celeteque.avgGuess) + "%</td>";
                reportsTable += "<td>" + checkUndefined(childSnapshot.val().celeteque.avgHints) + "</td>";
                reportsTable += "<td>" + checkUndefined(childSnapshot.val().celeteque.avgSeconds) + "</td>";
                reportsTable += "<td>" + checkUndefined(childSnapshot.val().celeteque.avgScore) + "</td>";
                reportsTable += "<td>" + checkUndefined(childSnapshot.val().celeteque.guessRightCount) + "</td>";
                reportsTable += "</tr>";
            }
            if(childSnapshot.hasChild('centrum')){
                reportsTable += "<tr><td>Centrum</td>";
                reportsTable += "<td>" + checkUndefined(childSnapshot.val().centrum.attempt) + "</td>";
                firstGuess = checkUndefined(childSnapshot.val().centrum.firstGuess)
                fGuess = firstGuess == true ? "Yes" : "No";
                reportsTable += "<td>" + fGuess + "</td>";
                reportsTable += "<td>" + checkUndefined(childSnapshot.val().centrum.firsthints) + "</td>";
                reportsTable += "<td>" + checkUndefined(childSnapshot.val().centrum.firstSeconds) + "</td>";
                reportsTable += "<td>" + checkUndefined(childSnapshot.val().centrum.firstScore) + "</td>";
                reportsTable += "<td>" + checkUndefined(childSnapshot.val().centrum.guessRightOnAttempt) + "</td>";
                reportsTable += "<td>" + checkUndefined(childSnapshot.val().centrum.avgGuess) + "%</td>";
                reportsTable += "<td>" + checkUndefined(childSnapshot.val().centrum.avgHints) + "</td>";
                reportsTable += "<td>" + checkUndefined(childSnapshot.val().centrum.avgSeconds) + "</td>";
                reportsTable += "<td>" + checkUndefined(childSnapshot.val().centrum.avgScore) + "</td>";
                reportsTable += "<td>" + checkUndefined(childSnapshot.val().centrum.guessRightCount) + "</td>";
                reportsTable += "</tr>";
            }
            if(childSnapshot.hasChild('cetaphil')){
                reportsTable += "<tr><td>Cetaphil</td>";
                reportsTable += "<td>" + checkUndefined(childSnapshot.val().cetaphil.attempt) + "</td>";
                firstGuess = checkUndefined(childSnapshot.val().cetaphil.firstGuess)
                fGuess = firstGuess == true ? "Yes" : "No";
                reportsTable += "<td>" + fGuess + "</td>";
                reportsTable += "<td>" + checkUndefined(childSnapshot.val().cetaphil.firsthints) + "</td>";
                reportsTable += "<td>" + checkUndefined(childSnapshot.val().cetaphil.firstSeconds) + "</td>";
                reportsTable += "<td>" + checkUndefined(childSnapshot.val().cetaphil.firstScore) + "</td>";
                reportsTable += "<td>" + checkUndefined(childSnapshot.val().cetaphil.guessRightOnAttempt) + "</td>";
                reportsTable += "<td>" + checkUndefined(childSnapshot.val().cetaphil.avgGuess) + "%</td>";
                reportsTable += "<td>" + checkUndefined(childSnapshot.val().cetaphil.avgHints) + "</td>";
                reportsTable += "<td>" + checkUndefined(childSnapshot.val().cetaphil.avgSeconds) + "</td>";
                reportsTable += "<td>" + checkUndefined(childSnapshot.val().cetaphil.avgScore) + "</td>";
                reportsTable += "<td>" + checkUndefined(childSnapshot.val().cetaphil.guessRightCount) + "</td>";
                reportsTable += "</tr>";
            }
            if(childSnapshot.hasChild('conzace')){
                reportsTable += "<tr><td>Conzace</td>";
                reportsTable += "<td>" + checkUndefined(childSnapshot.val().conzace.attempt) + "</td>";
                firstGuess = checkUndefined(childSnapshot.val().conzace.firstGuess)
                fGuess = firstGuess == true ? "Yes" : "No";
                reportsTable += "<td>" + fGuess + "</td>";
                reportsTable += "<td>" + checkUndefined(childSnapshot.val().conzace.firsthints) + "</td>";
                reportsTable += "<td>" + checkUndefined(childSnapshot.val().conzace.firstSeconds) + "</td>";
                reportsTable += "<td>" + checkUndefined(childSnapshot.val().conzace.firstScore) + "</td>";
                reportsTable += "<td>" + checkUndefined(childSnapshot.val().conzace.guessRightOnAttempt) + "</td>";
                reportsTable += "<td>" + checkUndefined(childSnapshot.val().conzace.avgGuess) + "%</td>";
                reportsTable += "<td>" + checkUndefined(childSnapshot.val().conzace.avgHints) + "</td>";
                reportsTable += "<td>" + checkUndefined(childSnapshot.val().conzace.avgSeconds) + "</td>";
                reportsTable += "<td>" + checkUndefined(childSnapshot.val().conzace.avgScore) + "</td>";
                reportsTable += "<td>" + checkUndefined(childSnapshot.val().conzace.guessRightCount) + "</td>";
                reportsTable += "</tr>";
            }
            if(childSnapshot.hasChild('decolgen')){
                reportsTable += "<tr><td>Decolgen</td>";
                reportsTable += "<td>" + checkUndefined(childSnapshot.val().decolgen.attempt) + "</td>";
                firstGuess = checkUndefined(childSnapshot.val().decolgen.firstGuess)
                fGuess = firstGuess == true ? "Yes" : "No";
                reportsTable += "<td>" + fGuess + "</td>";
                reportsTable += "<td>" + checkUndefined(childSnapshot.val().decolgen.firsthints) + "</td>";
                reportsTable += "<td>" + checkUndefined(childSnapshot.val().decolgen.firstSeconds) + "</td>";
                reportsTable += "<td>" + checkUndefined(childSnapshot.val().decolgen.firstScore) + "</td>";
                reportsTable += "<td>" + checkUndefined(childSnapshot.val().decolgen.guessRightOnAttempt) + "</td>";
                reportsTable += "<td>" + checkUndefined(childSnapshot.val().decolgen.avgGuess) + "%</td>";
                reportsTable += "<td>" + checkUndefined(childSnapshot.val().decolgen.avgHints) + "</td>";
                reportsTable += "<td>" + checkUndefined(childSnapshot.val().decolgen.avgSeconds) + "</td>";
                reportsTable += "<td>" + checkUndefined(childSnapshot.val().decolgen.avgScore) + "</td>";
                reportsTable += "<td>" + checkUndefined(childSnapshot.val().decolgen.guessRightCount) + "</td>";
                reportsTable += "</tr>";
            }
            if(childSnapshot.hasChild('diatabs')){
                reportsTable += "<tr><td>Diatabs</td>";
                reportsTable += "<td>" + checkUndefined(childSnapshot.val().diatabs.attempt) + "</td>";
                firstGuess = checkUndefined(childSnapshot.val().diatabs.firstGuess)
                fGuess = firstGuess == true ? "Yes" : "No";
                reportsTable += "<td>" + fGuess + "</td>";
                reportsTable += "<td>" + checkUndefined(childSnapshot.val().diatabs.firsthints) + "</td>";
                reportsTable += "<td>" + checkUndefined(childSnapshot.val().diatabs.firstSeconds) + "</td>";
                reportsTable += "<td>" + checkUndefined(childSnapshot.val().diatabs.firstScore) + "</td>";
                reportsTable += "<td>" + checkUndefined(childSnapshot.val().diatabs.guessRightOnAttempt) + "</td>";
                reportsTable += "<td>" + checkUndefined(childSnapshot.val().diatabs.avgGuess) + "%</td>";
                reportsTable += "<td>" + checkUndefined(childSnapshot.val().diatabs.avgHints) + "</td>";
                reportsTable += "<td>" + checkUndefined(childSnapshot.val().diatabs.avgSeconds) + "</td>";
                reportsTable += "<td>" + checkUndefined(childSnapshot.val().diatabs.avgScore) + "</td>";
                reportsTable += "<td>" + checkUndefined(childSnapshot.val().diatabs.guessRightCount) + "</td>";
                reportsTable += "</tr>";
            }
            if(childSnapshot.hasChild('efficascent')){
                reportsTable += "<tr><td>Efficascent Oil</td>";
                reportsTable += "<td>" + checkUndefined(childSnapshot.val().efficascent.attempt) + "</td>";
                firstGuess = checkUndefined(childSnapshot.val().efficascent.firstGuess)
                fGuess = firstGuess == true ? "Yes" : "No";
                reportsTable += "<td>" + fGuess + "</td>";
                reportsTable += "<td>" + checkUndefined(childSnapshot.val().efficascent.firsthints) + "</td>";
                reportsTable += "<td>" + checkUndefined(childSnapshot.val().efficascent.firstSeconds) + "</td>";
                reportsTable += "<td>" + checkUndefined(childSnapshot.val().efficascent.firstScore) + "</td>";
                reportsTable += "<td>" + checkUndefined(childSnapshot.val().efficascent.guessRightOnAttempt) + "</td>";
                reportsTable += "<td>" + checkUndefined(childSnapshot.val().efficascent.avgGuess) + "%</td>";
                reportsTable += "<td>" + checkUndefined(childSnapshot.val().efficascent.avgHints) + "</td>";
                reportsTable += "<td>" + checkUndefined(childSnapshot.val().efficascent.avgSeconds) + "</td>";
                reportsTable += "<td>" + checkUndefined(childSnapshot.val().efficascent.avgScore) + "</td>";
                reportsTable += "<td>" + checkUndefined(childSnapshot.val().efficascent.guessRightCount) + "</td>";
                reportsTable += "</tr>";
            }
            if(childSnapshot.hasChild('enervon')){
                reportsTable += "<tr><td>Enervon</td>";
                reportsTable += "<td>" + checkUndefined(childSnapshot.val().enervon.attempt) + "</td>";
                firstGuess = checkUndefined(childSnapshot.val().enervon.firstGuess)
                fGuess = firstGuess == true ? "Yes" : "No";
                reportsTable += "<td>" + fGuess + "</td>";
                reportsTable += "<td>" + checkUndefined(childSnapshot.val().enervon.firsthints) + "</td>";
                reportsTable += "<td>" + checkUndefined(childSnapshot.val().enervon.firstSeconds) + "</td>";
                reportsTable += "<td>" + checkUndefined(childSnapshot.val().enervon.firstScore) + "</td>";
                reportsTable += "<td>" + checkUndefined(childSnapshot.val().enervon.guessRightOnAttempt) + "</td>";
                reportsTable += "<td>" + checkUndefined(childSnapshot.val().enervon.avgGuess) + "%</td>";
                reportsTable += "<td>" + checkUndefined(childSnapshot.val().enervon.avgHints) + "</td>";
                reportsTable += "<td>" + checkUndefined(childSnapshot.val().enervon.avgSeconds) + "</td>";
                reportsTable += "<td>" + checkUndefined(childSnapshot.val().enervon.avgScore) + "</td>";
                reportsTable += "<td>" + checkUndefined(childSnapshot.val().enervon.guessRightCount) + "</td>";
                reportsTable += "</tr>";
            }
            if(childSnapshot.hasChild('gatorade')){
                reportsTable += "<tr><td>Gatorade</td>";
                reportsTable += "<td>" + checkUndefined(childSnapshot.val().gatorade.attempt) + "</td>";
                firstGuess = checkUndefined(childSnapshot.val().gatorade.firstGuess)
                fGuess = firstGuess == true ? "Yes" : "No";
                reportsTable += "<td>" + fGuess + "</td>";
                reportsTable += "<td>" + checkUndefined(childSnapshot.val().gatorade.firsthints) + "</td>";
                reportsTable += "<td>" + checkUndefined(childSnapshot.val().gatorade.firstSeconds) + "</td>";
                reportsTable += "<td>" + checkUndefined(childSnapshot.val().gatorade.firstScore) + "</td>";
                reportsTable += "<td>" + checkUndefined(childSnapshot.val().gatorade.guessRightOnAttempt) + "</td>";
                reportsTable += "<td>" + checkUndefined(childSnapshot.val().gatorade.avgGuess) + "%</td>";
                reportsTable += "<td>" + checkUndefined(childSnapshot.val().gatorade.avgHints) + "</td>";
                reportsTable += "<td>" + checkUndefined(childSnapshot.val().gatorade.avgSeconds) + "</td>";
                reportsTable += "<td>" + checkUndefined(childSnapshot.val().gatorade.avgScore) + "</td>";
                reportsTable += "<td>" + checkUndefined(childSnapshot.val().gatorade.guessRightCount) + "</td>";
                reportsTable += "</tr>";
            }
            if(childSnapshot.hasChild('gynepro')){
                reportsTable += "<tr><td>Gynepro</td>";
                reportsTable += "<td>" + checkUndefined(childSnapshot.val().gynepro.attempt) + "</td>";
                firstGuess = checkUndefined(childSnapshot.val().gynepro.firstGuess)
                fGuess = firstGuess == true ? "Yes" : "No";
                reportsTable += "<td>" + fGuess + "</td>";
                reportsTable += "<td>" + checkUndefined(childSnapshot.val().gynepro.firsthints) + "</td>";
                reportsTable += "<td>" + checkUndefined(childSnapshot.val().gynepro.firstSeconds) + "</td>";
                reportsTable += "<td>" + checkUndefined(childSnapshot.val().gynepro.firstScore) + "</td>";
                reportsTable += "<td>" + checkUndefined(childSnapshot.val().gynepro.guessRightOnAttempt) + "</td>";
                reportsTable += "<td>" + checkUndefined(childSnapshot.val().gynepro.avgGuess) + "%</td>";
                reportsTable += "<td>" + checkUndefined(childSnapshot.val().gynepro.avgHints) + "</td>";
                reportsTable += "<td>" + checkUndefined(childSnapshot.val().gynepro.avgSeconds) + "</td>";
                reportsTable += "<td>" + checkUndefined(childSnapshot.val().gynepro.avgScore) + "</td>";
                reportsTable += "<td>" + checkUndefined(childSnapshot.val().gynepro.guessRightCount) + "</td>";
                reportsTable += "</tr>";
            }
            if(childSnapshot.hasChild('kremils')){
                reportsTable += "<tr><td>Kremil S</td>";
                reportsTable += "<td>" + checkUndefined(childSnapshot.val().kremils.attempt) + "</td>";
                firstGuess = checkUndefined(childSnapshot.val().kremils.firstGuess)
                fGuess = firstGuess == true ? "Yes" : "No";
                reportsTable += "<td>" + fGuess + "</td>";
                reportsTable += "<td>" + checkUndefined(childSnapshot.val().kremils.firsthints) + "</td>";
                reportsTable += "<td>" + checkUndefined(childSnapshot.val().kremils.firstSeconds) + "</td>";
                reportsTable += "<td>" + checkUndefined(childSnapshot.val().kremils.firstScore) + "</td>";
                reportsTable += "<td>" + checkUndefined(childSnapshot.val().kremils.guessRightOnAttempt) + "</td>";
                reportsTable += "<td>" + checkUndefined(childSnapshot.val().kremils.avgGuess) + "%</td>";
                reportsTable += "<td>" + checkUndefined(childSnapshot.val().kremils.avgHints) + "</td>";
                reportsTable += "<td>" + checkUndefined(childSnapshot.val().kremils.avgSeconds) + "</td>";
                reportsTable += "<td>" + checkUndefined(childSnapshot.val().kremils.avgScore) + "</td>";
                reportsTable += "<td>" + checkUndefined(childSnapshot.val().kremils.guessRightCount) + "</td>";
                reportsTable += "</tr>";
            }
            if(childSnapshot.hasChild('lactacyd')){
                reportsTable += "<tr><td>Lactacyd</td>";
                reportsTable += "<td>" + checkUndefined(childSnapshot.val().lactacyd.attempt) + "</td>";
                firstGuess = checkUndefined(childSnapshot.val().lactacyd.firstGuess)
                fGuess = firstGuess == true ? "Yes" : "No";
                reportsTable += "<td>" + fGuess + "</td>";
                reportsTable += "<td>" + checkUndefined(childSnapshot.val().lactacyd.firsthints) + "</td>";
                reportsTable += "<td>" + checkUndefined(childSnapshot.val().lactacyd.firstSeconds) + "</td>";
                reportsTable += "<td>" + checkUndefined(childSnapshot.val().lactacyd.firstScore) + "</td>";
                reportsTable += "<td>" + checkUndefined(childSnapshot.val().lactacyd.guessRightOnAttempt) + "</td>";
                reportsTable += "<td>" + checkUndefined(childSnapshot.val().lactacyd.avgGuess) + "%</td>";
                reportsTable += "<td>" + checkUndefined(childSnapshot.val().lactacyd.avgHints) + "</td>";
                reportsTable += "<td>" + checkUndefined(childSnapshot.val().lactacyd.avgSeconds) + "</td>";
                reportsTable += "<td>" + checkUndefined(childSnapshot.val().lactacyd.avgScore) + "</td>";
                reportsTable += "<td>" + checkUndefined(childSnapshot.val().lactacyd.guessRightCount) + "</td>";
                reportsTable += "</tr>";
            }
            if(childSnapshot.hasChild('mcdo')){
                reportsTable += "<tr><td>Mcdo</td>";
                reportsTable += "<td>" + checkUndefined(childSnapshot.val().mcdo.attempt) + "</td>";
                firstGuess = checkUndefined(childSnapshot.val().mcdo.firstGuess)
                fGuess = firstGuess == true ? "Yes" : "No";
                reportsTable += "<td>" + fGuess + "</td>";
                reportsTable += "<td>" + checkUndefined(childSnapshot.val().mcdo.firsthints) + "</td>";
                reportsTable += "<td>" + checkUndefined(childSnapshot.val().mcdo.firstSeconds) + "</td>";
                reportsTable += "<td>" + checkUndefined(childSnapshot.val().mcdo.firstScore) + "</td>";
                reportsTable += "<td>" + checkUndefined(childSnapshot.val().mcdo.guessRightOnAttempt) + "</td>";
                reportsTable += "<td>" + checkUndefined(childSnapshot.val().mcdo.avgGuess) + "%</td>";
                reportsTable += "<td>" + checkUndefined(childSnapshot.val().mcdo.avgHints) + "</td>";
                reportsTable += "<td>" + checkUndefined(childSnapshot.val().mcdo.avgSeconds) + "</td>";
                reportsTable += "<td>" + checkUndefined(childSnapshot.val().mcdo.avgScore) + "</td>";
                reportsTable += "<td>" + checkUndefined(childSnapshot.val().mcdo.guessRightCount) + "</td>";
                reportsTable += "</tr>";
            }
            if(childSnapshot.hasChild('myra')){
                reportsTable += "<tr><td>Myra</td>";
                reportsTable += "<td>" + checkUndefined(childSnapshot.val().myra.attempt) + "</td>";
                firstGuess = checkUndefined(childSnapshot.val().myra.firstGuess)
                fGuess = firstGuess == true ? "Yes" : "No";
                reportsTable += "<td>" + fGuess + "</td>";
                reportsTable += "<td>" + checkUndefined(childSnapshot.val().myra.firsthints) + "</td>";
                reportsTable += "<td>" + checkUndefined(childSnapshot.val().myra.firstSeconds) + "</td>";
                reportsTable += "<td>" + checkUndefined(childSnapshot.val().myra.firstScore) + "</td>";
                reportsTable += "<td>" + checkUndefined(childSnapshot.val().myra.guessRightOnAttempt) + "</td>";
                reportsTable += "<td>" + checkUndefined(childSnapshot.val().myra.avgGuess) + "%</td>";
                reportsTable += "<td>" + checkUndefined(childSnapshot.val().myra.avgHints) + "</td>";
                reportsTable += "<td>" + checkUndefined(childSnapshot.val().myra.avgSeconds) + "</td>";
                reportsTable += "<td>" + checkUndefined(childSnapshot.val().myra.avgScore) + "</td>";
                reportsTable += "<td>" + checkUndefined(childSnapshot.val().myra.guessRightCount) + "</td>";
                reportsTable += "</tr>";
            }
            if(childSnapshot.hasChild('neozep')){
                reportsTable += "<tr><td>Neozep</td>";
                reportsTable += "<td>" + checkUndefined(childSnapshot.val().neozep.attempt) + "</td>";
                firstGuess = checkUndefined(childSnapshot.val().neozep.firstGuess)
                fGuess = firstGuess == true ? "Yes" : "No";
                reportsTable += "<td>" + fGuess + "</td>";
                reportsTable += "<td>" + checkUndefined(childSnapshot.val().neozep.firsthints) + "</td>";
                reportsTable += "<td>" + checkUndefined(childSnapshot.val().neozep.firstSeconds) + "</td>";
                reportsTable += "<td>" + checkUndefined(childSnapshot.val().neozep.firstScore) + "</td>";
                reportsTable += "<td>" + checkUndefined(childSnapshot.val().neozep.guessRightOnAttempt) + "</td>";
                reportsTable += "<td>" + checkUndefined(childSnapshot.val().neozep.avgGuess) + "%</td>";
                reportsTable += "<td>" + checkUndefined(childSnapshot.val().neozep.avgHints) + "</td>";
                reportsTable += "<td>" + checkUndefined(childSnapshot.val().neozep.avgSeconds) + "</td>";
                reportsTable += "<td>" + checkUndefined(childSnapshot.val().neozep.avgScore) + "</td>";
                reportsTable += "<td>" + checkUndefined(childSnapshot.val().neozep.guessRightCount) + "</td>";
                reportsTable += "</tr>";
            }
            if(childSnapshot.hasChild('phcare')){
                reportsTable += "<tr><td>pH Care</td>";
                reportsTable += "<td>" + checkUndefined(childSnapshot.val().phcare.attempt) + "</td>";
                firstGuess = checkUndefined(childSnapshot.val().phcare.firstGuess)
                fGuess = firstGuess == true ? "Yes" : "No";
                reportsTable += "<td>" + fGuess + "</td>";
                reportsTable += "<td>" + checkUndefined(childSnapshot.val().phcare.firsthints) + "</td>";
                reportsTable += "<td>" + checkUndefined(childSnapshot.val().phcare.firstSeconds) + "</td>";
                reportsTable += "<td>" + checkUndefined(childSnapshot.val().phcare.firstScore) + "</td>";
                reportsTable += "<td>" + checkUndefined(childSnapshot.val().phcare.guessRightOnAttempt) + "</td>";
                reportsTable += "<td>" + checkUndefined(childSnapshot.val().phcare.avgGuess) + "%</td>";
                reportsTable += "<td>" + checkUndefined(childSnapshot.val().phcare.avgHints) + "</td>";
                reportsTable += "<td>" + checkUndefined(childSnapshot.val().phcare.avgSeconds) + "</td>";
                reportsTable += "<td>" + checkUndefined(childSnapshot.val().phcare.avgScore) + "</td>";
                reportsTable += "<td>" + checkUndefined(childSnapshot.val().phcare.guessRightCount) + "</td>";
                reportsTable += "</tr>";
            }
            if(childSnapshot.hasChild('rexidol')){
                reportsTable += "<tr><td>Rexidol</td>";
                reportsTable += "<td>" + checkUndefined(childSnapshot.val().rexidol.attempt) + "</td>";
                firstGuess = checkUndefined(childSnapshot.val().rexidol.firstGuess)
                fGuess = firstGuess == true ? "Yes" : "No";
                reportsTable += "<td>" + fGuess + "</td>";
                reportsTable += "<td>" + checkUndefined(childSnapshot.val().rexidol.firsthints) + "</td>";
                reportsTable += "<td>" + checkUndefined(childSnapshot.val().rexidol.firstSeconds) + "</td>";
                reportsTable += "<td>" + checkUndefined(childSnapshot.val().rexidol.firstScore) + "</td>";
                reportsTable += "<td>" + checkUndefined(childSnapshot.val().rexidol.guessRightOnAttempt) + "</td>";
                reportsTable += "<td>" + checkUndefined(childSnapshot.val().rexidol.avgGuess) + "%</td>";
                reportsTable += "<td>" + checkUndefined(childSnapshot.val().rexidol.avgHints) + "</td>";
                reportsTable += "<td>" + checkUndefined(childSnapshot.val().rexidol.avgSeconds) + "</td>";
                reportsTable += "<td>" + checkUndefined(childSnapshot.val().rexidol.avgScore) + "</td>";
                reportsTable += "<td>" + checkUndefined(childSnapshot.val().rexidol.guessRightCount) + "</td>";
                reportsTable += "</tr>";
            }
            if(childSnapshot.hasChild('ritemed')){
                reportsTable += "<tr><td>Ritemed</td>";
                reportsTable += "<td>" + checkUndefined(childSnapshot.val().ritemed.attempt) + "</td>";
                firstGuess = checkUndefined(childSnapshot.val().ritemed.firstGuess)
                fGuess = firstGuess == true ? "Yes" : "No";
                reportsTable += "<td>" + fGuess + "</td>";
                reportsTable += "<td>" + checkUndefined(childSnapshot.val().ritemed.firsthints) + "</td>";
                reportsTable += "<td>" + checkUndefined(childSnapshot.val().ritemed.firstSeconds) + "</td>";
                reportsTable += "<td>" + checkUndefined(childSnapshot.val().ritemed.firstScore) + "</td>";
                reportsTable += "<td>" + checkUndefined(childSnapshot.val().ritemed.guessRightOnAttempt) + "</td>";
                reportsTable += "<td>" + checkUndefined(childSnapshot.val().ritemed.avgGuess) + "%</td>";
                reportsTable += "<td>" + checkUndefined(childSnapshot.val().ritemed.avgHints) + "</td>";
                reportsTable += "<td>" + checkUndefined(childSnapshot.val().ritemed.avgSeconds) + "</td>";
                reportsTable += "<td>" + checkUndefined(childSnapshot.val().ritemed.avgScore) + "</td>";
                reportsTable += "<td>" + checkUndefined(childSnapshot.val().ritemed.guessRightCount) + "</td>";
                reportsTable += "</tr>";
            }
            if(childSnapshot.hasChild('robitussin')){
                reportsTable += "<tr><td>Robitussin</td>";
                reportsTable += "<td>" + checkUndefined(childSnapshot.val().robitussin.attempt) + "</td>";
                firstGuess = checkUndefined(childSnapshot.val().robitussin.firstGuess)
                fGuess = firstGuess == true ? "Yes" : "No";
                reportsTable += "<td>" + fGuess + "</td>";
                reportsTable += "<td>" + checkUndefined(childSnapshot.val().robitussin.firsthints) + "</td>";
                reportsTable += "<td>" + checkUndefined(childSnapshot.val().robitussin.firstSeconds) + "</td>";
                reportsTable += "<td>" + checkUndefined(childSnapshot.val().robitussin.firstScore) + "</td>";
                reportsTable += "<td>" + checkUndefined(childSnapshot.val().robitussin.guessRightOnAttempt) + "</td>";
                reportsTable += "<td>" + checkUndefined(childSnapshot.val().robitussin.avgGuess) + "%</td>";
                reportsTable += "<td>" + checkUndefined(childSnapshot.val().robitussin.avgHints) + "</td>";
                reportsTable += "<td>" + checkUndefined(childSnapshot.val().robitussin.avgSeconds) + "</td>";
                reportsTable += "<td>" + checkUndefined(childSnapshot.val().robitussin.avgScore) + "</td>";
                reportsTable += "<td>" + checkUndefined(childSnapshot.val().robitussin.guessRightCount) + "</td>";
                reportsTable += "</tr>";
            }
            if(childSnapshot.hasChild('skelan')){
                reportsTable += "<tr><td>Skelan</td>";
                reportsTable += "<td>" + checkUndefined(childSnapshot.val().skelan.attempt) + "</td>";
                firstGuess = checkUndefined(childSnapshot.val().skelan.firstGuess)
                fGuess = firstGuess == true ? "Yes" : "No";
                reportsTable += "<td>" + fGuess + "</td>";
                reportsTable += "<td>" + checkUndefined(childSnapshot.val().skelan.firsthints) + "</td>";
                reportsTable += "<td>" + checkUndefined(childSnapshot.val().skelan.firstSeconds) + "</td>";
                reportsTable += "<td>" + checkUndefined(childSnapshot.val().skelan.firstScore) + "</td>";
                reportsTable += "<td>" + checkUndefined(childSnapshot.val().skelan.guessRightOnAttempt) + "</td>";
                reportsTable += "<td>" + checkUndefined(childSnapshot.val().skelan.avgGuess) + "%</td>";
                reportsTable += "<td>" + checkUndefined(childSnapshot.val().skelan.avgHints) + "</td>";
                reportsTable += "<td>" + checkUndefined(childSnapshot.val().skelan.avgSeconds) + "</td>";
                reportsTable += "<td>" + checkUndefined(childSnapshot.val().skelan.avgScore) + "</td>";
                reportsTable += "<td>" + checkUndefined(childSnapshot.val().skelan.guessRightCount) + "</td>";
                reportsTable += "</tr>";
            }
            if(childSnapshot.hasChild('solmux')){
                reportsTable += "<tr><td>Solmux</td>";
                reportsTable += "<td>" + checkUndefined(childSnapshot.val().solmux.attempt) + "</td>";
                firstGuess = checkUndefined(childSnapshot.val().solmux.firstGuess)
                fGuess = firstGuess == true ? "Yes" : "No";
                reportsTable += "<td>" + fGuess + "</td>";
                reportsTable += "<td>" + checkUndefined(childSnapshot.val().solmux.firsthints) + "</td>";
                reportsTable += "<td>" + checkUndefined(childSnapshot.val().solmux.firstSeconds) + "</td>";
                reportsTable += "<td>" + checkUndefined(childSnapshot.val().solmux.firstScore) + "</td>";
                reportsTable += "<td>" + checkUndefined(childSnapshot.val().solmux.guessRightOnAttempt) + "</td>";
                reportsTable += "<td>" + checkUndefined(childSnapshot.val().solmux.avgGuess) + "%</td>";
                reportsTable += "<td>" + checkUndefined(childSnapshot.val().solmux.avgHints) + "</td>";
                reportsTable += "<td>" + checkUndefined(childSnapshot.val().solmux.avgSeconds) + "</td>";
                reportsTable += "<td>" + checkUndefined(childSnapshot.val().solmux.avgScore) + "</td>";
                reportsTable += "<td>" + checkUndefined(childSnapshot.val().solmux.guessRightCount) + "</td>";
                reportsTable += "</tr>";
            }
            if(childSnapshot.hasChild('tgp')){
                reportsTable += "<tr><td>TGP</td>";
                reportsTable += "<td>" + checkUndefined(childSnapshot.val().tgp.attempt) + "</td>";
                firstGuess = checkUndefined(childSnapshot.val().tgp.firstGuess)
                fGuess = firstGuess == true ? "Yes" : "No";
                reportsTable += "<td>" + fGuess + "</td>";
                reportsTable += "<td>" + checkUndefined(childSnapshot.val().tgp.firsthints) + "</td>";
                reportsTable += "<td>" + checkUndefined(childSnapshot.val().tgp.firstSeconds) + "</td>";
                reportsTable += "<td>" + checkUndefined(childSnapshot.val().tgp.firstScore) + "</td>";
                reportsTable += "<td>" + checkUndefined(childSnapshot.val().tgp.guessRightOnAttempt) + "</td>";
                reportsTable += "<td>" + checkUndefined(childSnapshot.val().tgp.avgGuess) + "%</td>";
                reportsTable += "<td>" + checkUndefined(childSnapshot.val().tgp.avgHints) + "</td>";
                reportsTable += "<td>" + checkUndefined(childSnapshot.val().tgp.avgSeconds) + "</td>";
                reportsTable += "<td>" + checkUndefined(childSnapshot.val().tgp.avgScore) + "</td>";
                reportsTable += "<td>" + checkUndefined(childSnapshot.val().tgp.guessRightCount) + "</td>";
                reportsTable += "</tr>";
            }
            if(childSnapshot.hasChild('uhp')){
                reportsTable += "<tr><td>UHP</td>";
                reportsTable += "<td>" + checkUndefined(childSnapshot.val().uhp.attempt) + "</td>";
                firstGuess = checkUndefined(childSnapshot.val().uhp.firstGuess)
                fGuess = firstGuess == true ? "Yes" : "No";
                reportsTable += "<td>" + fGuess + "</td>";
                reportsTable += "<td>" + checkUndefined(childSnapshot.val().uhp.firsthints) + "</td>";
                reportsTable += "<td>" + checkUndefined(childSnapshot.val().uhp.firstSeconds) + "</td>";
                reportsTable += "<td>" + checkUndefined(childSnapshot.val().uhp.firstScore) + "</td>";
                reportsTable += "<td>" + checkUndefined(childSnapshot.val().uhp.guessRightOnAttempt) + "</td>";
                reportsTable += "<td>" + checkUndefined(childSnapshot.val().uhp.avgGuess) + "%</td>";
                reportsTable += "<td>" + checkUndefined(childSnapshot.val().uhp.avgHints) + "</td>";
                reportsTable += "<td>" + checkUndefined(childSnapshot.val().uhp.avgSeconds) + "</td>";
                reportsTable += "<td>" + checkUndefined(childSnapshot.val().uhp.avgScore) + "</td>";
                reportsTable += "<td>" + checkUndefined(childSnapshot.val().uhp.guessRightCount) + "</td>";
                reportsTable += "</tr>";
            }
            if(childSnapshot.hasChild('unilab')){
                reportsTable += "<tr><td>Unilab</td>";
                reportsTable += "<td>" + checkUndefined(childSnapshot.val().unilab.attempt) + "</td>";
                firstGuess = checkUndefined(childSnapshot.val().unilab.firstGuess)
                fGuess = firstGuess == true ? "Yes" : "No";
                reportsTable += "<td>" + fGuess + "</td>";
                reportsTable += "<td>" + checkUndefined(childSnapshot.val().unilab.firsthints) + "</td>";
                reportsTable += "<td>" + checkUndefined(childSnapshot.val().unilab.firstSeconds) + "</td>";
                reportsTable += "<td>" + checkUndefined(childSnapshot.val().unilab.firstScore) + "</td>";
                reportsTable += "<td>" + checkUndefined(childSnapshot.val().unilab.guessRightOnAttempt) + "</td>";
                reportsTable += "<td>" + checkUndefined(childSnapshot.val().unilab.avgGuess) + "%</td>";
                reportsTable += "<td>" + checkUndefined(childSnapshot.val().unilab.avgHints) + "</td>";
                reportsTable += "<td>" + checkUndefined(childSnapshot.val().unilab.avgSeconds) + "</td>";
                reportsTable += "<td>" + checkUndefined(childSnapshot.val().unilab.avgScore) + "</td>";
                reportsTable += "<td>" + checkUndefined(childSnapshot.val().unilab.guessRightCount) + "</td>";
                reportsTable += "</tr>";
            }
            if(childSnapshot.hasChild('vicks')){
                reportsTable += "<tr><td>Vicks</td>";
                reportsTable += "<td>" + checkUndefined(childSnapshot.val().vicks.attempt) + "</td>";
                firstGuess = checkUndefined(childSnapshot.val().vicks.firstGuess)
                fGuess = firstGuess == true ? "Yes" : "No";
                reportsTable += "<td>" + fGuess + "</td>";
                reportsTable += "<td>" + checkUndefined(childSnapshot.val().vicks.firsthints) + "</td>";
                reportsTable += "<td>" + checkUndefined(childSnapshot.val().vicks.firstSeconds) + "</td>";
                reportsTable += "<td>" + checkUndefined(childSnapshot.val().vicks.firstScore) + "</td>";
                reportsTable += "<td>" + checkUndefined(childSnapshot.val().vicks.guessRightOnAttempt) + "</td>";
                reportsTable += "<td>" + checkUndefined(childSnapshot.val().vicks.avgGuess) + "%</td>";
                reportsTable += "<td>" + checkUndefined(childSnapshot.val().vicks.avgHints) + "</td>";
                reportsTable += "<td>" + checkUndefined(childSnapshot.val().vicks.avgSeconds) + "</td>";
                reportsTable += "<td>" + checkUndefined(childSnapshot.val().vicks.avgScore) + "</td>";
                reportsTable += "<td>" + checkUndefined(childSnapshot.val().vicks.guessRightCount) + "</td>";
                reportsTable += "</tr>";
            }

            reportsTable += "<tr><td colspan='12> </td></tr>";
            
            ccount++;
        });
        reportsTable += "</table>";

        document.getElementById('userDvData').innerHTML = reportsTable;
    });

}

function replaceQ(strAnswers, chars) {
    var i = 0;
    for (i = 0; i < strAnswers.length; i++) {
        strAnswers[i] = strAnswers[i].toString().replace(chars, '');
    }
    return strAnswers;
}


function checkUndefined(val) {
    if (val != undefined)
        return val;
    else return 0;
}

function download(strData, strFileName, strMimeType) {
    var D = document,
        A = arguments,
        a = D.createElement("a"),
        d = A[0],
        n = A[1],
        t = A[2] || "text/plain";

    //build download link:
    a.href = "data:" + strMimeType + "charset=utf-8," + escape(strData);


    if (window.MSBlobBuilder) { // IE10
        var bb = new MSBlobBuilder();
        bb.append(strData);
        return navigator.msSaveBlob(bb, strFileName);
    } /* end if(window.MSBlobBuilder) */



    if ('download' in a) { //FF20, CH19
        a.setAttribute("download", n);
        a.innerHTML = "downloading...";
        D.body.appendChild(a);
        setTimeout(function() {
            var e = D.createEvent("MouseEvents");
            e.initMouseEvent("click", true, false, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null);
            a.dispatchEvent(e);
            D.body.removeChild(a);
        }, 66);
        return true;
    }; /* end if('download' in a) */



    //do iframe dataURL download: (older W3)
    var f = D.createElement("iframe");
    D.body.appendChild(f);
    f.src = "data:" + (A[2] ? A[2] : "application/octet-stream") + (window.btoa ? ";base64" : "") + "," + (window.btoa ? window.btoa : escape)(strData);
    setTimeout(function() {
        D.body.removeChild(f);
    }, 333);
    return true;
}
