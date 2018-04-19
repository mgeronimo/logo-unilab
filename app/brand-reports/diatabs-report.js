window.onload = function() {
    var ref = firebase.database().ref().child("users");

    ref.once("value").then(function(snapshot) {
        var ccount = 0;
        var reportsTable = "";
        var footer = "";
        var attempt = 0;
        var firstGuess = 0;
        var firstHints = 0;
        var firstSeconds = 0;
        var firstScore = 0;
        var guessRightOnAttempt = 0;
        var avgGuess = 0;
        var avgHints = 0;
        var avgSeconds = 0;
        var avgScore = 0;
        var guessRightCount = 0;
        var sumScore = 0;

        snapshot.forEach(function(childSnapshot) {

            if(
                childSnapshot.val().name != "Alexandre Gerona" 
                && childSnapshot.val().name != "Romel Almarinez" 
                && childSnapshot.val().name != "Madi Geronimo" 
                && childSnapshot.val().name != "Joanne Carla Blanco Almarinez"
                && childSnapshot.val().name != "Bes Gaviola Chua"
                && childSnapshot.val().name != "Khamylle Castillo"
                && childSnapshot.val().name != "Grace Connexion"
            ) {

                reportsTable += "<tr>";
                reportsTable += "<td>" + checkUndefined(childSnapshot.val().name) + "</td>";
                reportsTable += "<td class='attempt'>" + (childSnapshot.hasChild('diatabs') ? checkUndefined(childSnapshot.val().diatabs.attempt) : "0")  + "</td>";
                reportsTable += "<td class='firstGuess'>" + (childSnapshot.hasChild('diatabs') ? checkUndefined(childSnapshot.val().diatabs.firstGuess) : "0")  + "</td>";
                reportsTable += "<td class='firstHints'>" + (childSnapshot.hasChild('diatabs') ? checkUndefined(childSnapshot.val().diatabs.firstHints) : "0")  + "</td>";
                reportsTable += "<td class='firstSeconds'>" + (childSnapshot.hasChild('diatabs') ? checkUndefined(childSnapshot.val().diatabs.firstSeconds) : "0")  + "</td>";
                reportsTable += "<td class='firstScore'>" + (childSnapshot.hasChild('diatabs') ? checkUndefined(childSnapshot.val().diatabs.firstScore) : "0") + "</td>";
                reportsTable += "<td class='guessRightOnAttempt'>" + (childSnapshot.hasChild('diatabs') ? checkUndefined(childSnapshot.val().diatabs.guessRightOnAttempt) : "0") + "</td>";
                reportsTable += "<td class='avgGuess'>" + (childSnapshot.hasChild('diatabs') ? checkUndefined(childSnapshot.val().diatabs.avgGuess) : "0") + "%</td>";
                reportsTable += "<td class='avgHints'>" + (childSnapshot.hasChild('diatabs') ? checkUndefined(childSnapshot.val().diatabs.avgHints) : "0") + "</td>";
                reportsTable += "<td class='avgSeconds'>" + (childSnapshot.hasChild('diatabs') ? checkUndefined(childSnapshot.val().diatabs.avgSeconds) : "0") + "</td>";
                reportsTable += "<td class='avgScore'>" + (childSnapshot.hasChild('diatabs') ? checkUndefined(childSnapshot.val().diatabs.avgScore) : "0") + "</td>";
                reportsTable += "<td class='guessRightCount'>" + (childSnapshot.hasChild('diatabs') ? checkUndefined(childSnapshot.val().diatabs.guessRightCount) : "0") + "</td>";
                reportsTable += "<td class='sumScore'>" + (childSnapshot.hasChild('diatabs') ? checkUndefined(childSnapshot.val().diatabs.sumScore) : "0") + "</td>";


                reportsTable += "</tr>";
                ccount++;

                attempt = attempt + (childSnapshot.hasChild('diatabs') ? checkUndefined(childSnapshot.val().diatabs.attempt) : 0);
                firstGuess += (childSnapshot.hasChild('diatabs') ? checkUndefined(childSnapshot.val().diatabs.firstGuess) : 0);
                firstHints += (childSnapshot.hasChild('diatabs') ? checkUndefined(childSnapshot.val().diatabs.firstHints) : 0);
                firstSeconds += (childSnapshot.hasChild('diatabs') ? checkUndefined(childSnapshot.val().diatabs.firstSeconds) : 0);
                firstScore += (childSnapshot.hasChild('diatabs') ? checkUndefined(childSnapshot.val().diatabs.firstScore) : 0);
                guessRightOnAttempt += (childSnapshot.hasChild('diatabs') ? checkUndefined(childSnapshot.val().diatabs.guessRightOnAttempt) : 0);
                avgGuess += (childSnapshot.hasChild('diatabs') ? checkUndefined(childSnapshot.val().diatabs.avgGuess) : 0);
                avgHints += (childSnapshot.hasChild('diatabs') ? checkUndefined(childSnapshot.val().diatabs.avgHints) : 0);
                avgSeconds += (childSnapshot.hasChild('diatabs') ? checkUndefined(childSnapshot.val().diatabs.avgSeconds) : 0);
                avgScore += (childSnapshot.hasChild('diatabs') ? checkUndefined(childSnapshot.val().diatabs.avgScore) : 0);
                guessRightCount += (childSnapshot.hasChild('diatabs') ? checkUndefined(childSnapshot.val().diatabs.guessRightCount) : 0);
                sumScore += (childSnapshot.hasChild('diatabs') ? checkUndefined(childSnapshot.val().diatabs.sumScore) : 0);

            }
        });
        document.getElementById('ccount').innerHTML = ccount;
        document.getElementById('diatabs').innerHTML = reportsTable;
        
        attempt = attempt / ccount;
        firstGuess = firstGuess / ccount;
        firstHints = firstHints / ccount;
        firstSeconds = firstSeconds / ccount;
        firstScore = firstScore / ccount;
        guessRightOnAttempt = guessRightOnAttempt / ccount;
        avgGuess = avgGuess / ccount;
        avgHints = avgHints / ccount;
        avgSeconds = avgSeconds / ccount;
        avgScore = avgScore / ccount;
        guessRightCount = guessRightCount / ccount;
        sumScore = sumScore / ccount;

        footer += "<tr>";
        footer += "<td>TOTAL AVERAGE</td>";        
        footer += "<td>"+ attempt.toFixed(2) +"</td>";        
        footer += "<td></td>";        
        footer += "<td>"+ firstHints.toFixed(2) +"</td>";        
        footer += "<td>"+ firstSeconds.toFixed(2) +"</td>";        
        footer += "<td>"+ firstScore.toFixed(2) +"</td>";        
        footer += "<td>"+ guessRightOnAttempt.toFixed(2) +"</td>";        
        footer += "<td>"+ avgGuess.toFixed(2) +"</td>";        
        footer += "<td>"+ avgHints.toFixed(2) +"</td>";        
        footer += "<td>"+ avgSeconds.toFixed(2) +"</td>";        
        footer += "<td>"+ avgScore.toFixed(2) +"</td>";        
        footer += "<td>"+ guessRightCount.toFixed(2) +"</td>";        
        footer += "<td>"+ sumScore.toFixed(2) +"</td>";           
        footer += "</tr>";

        document.getElementById('footer').innerHTML = footer;

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
    var v = val;
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
