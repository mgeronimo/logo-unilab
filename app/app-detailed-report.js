window.onload = function() {
    var ref = firebase.database().ref().child("users");
    ref.once("value").then(function(snapshot) {
        console.log(snapshot);
        var ccount = 0;
        var reportsTable = "";
        snapshot.forEach(function(childSnapshot) {
            reportsTable += "<tr>";
            reportsTable += "<td>" + checkUndefined(childSnapshot.key) + "</td>";
            reportsTable += "<td>" + checkUndefined(childSnapshot.val().advil.attempt) + "</td>";
            reportsTable += "<td>" + checkUndefined(childSnapshot.val().advil.firstGuess) + "</td>";
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
            ccount++;
        });
        document.getElementById('ccount').innerHTML = ccount;
        document.getElementById('advil').innerHTML = reportsTable;
    });

    ref.once("value").then(function(snapshot) {
        var ccount = 0;
        var reportsTable = "";
        snapshot.forEach(function(childSnapshot) {
            reportsTable += "<tr>";
            reportsTable += "<td>" + checkUndefined(childSnapshot.key) + "</td>";
            reportsTable += "<td>" + checkUndefined(childSnapshot.val().alaxan.attempt) + "</td>";
            reportsTable += "<td>" + checkUndefined(childSnapshot.val().alaxan.firstGuess) + "</td>";
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
            ccount++;
        });
        document.getElementById('ccount').innerHTML = ccount;
        document.getElementById('alaxan').innerHTML = reportsTable;
    });

    ref.once("value").then(function(snapshot) {
        var ccount = 0;
        var reportsTable = "";
        snapshot.forEach(function(childSnapshot) {
            reportsTable += "<tr>";
            reportsTable += "<td>" + checkUndefined(childSnapshot.key) + "</td>";
            reportsTable += "<td>" + checkUndefined(childSnapshot.val().allerta.attempt) + "</td>";
            reportsTable += "<td>" + checkUndefined(childSnapshot.val().allerta.firstGuess) + "</td>";
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
            ccount++;
        });
        document.getElementById('ccount').innerHTML = ccount;
        document.getElementById('allerta').innerHTML = reportsTable;
    });

    ref.once("value").then(function(snapshot) {
        var ccount = 0;
        var reportsTable = "";
        snapshot.forEach(function(childSnapshot) {
            reportsTable += "<tr>";
            reportsTable += "<td>" + checkUndefined(childSnapshot.key) + "</td>";
            reportsTable += "<td>" + checkUndefined(childSnapshot.val().ascof.attempt) + "</td>";
            reportsTable += "<td>" + checkUndefined(childSnapshot.val().ascof.firstGuess) + "</td>";
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
            ccount++;
        });
        document.getElementById('ccount').innerHTML = ccount;
        document.getElementById('ascof').innerHTML = reportsTable;
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
