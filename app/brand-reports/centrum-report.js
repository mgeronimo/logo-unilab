window.onload = function() {
    var ref = firebase.database().ref().child("users");

    ref.once("value").then(function(snapshot) {
        var ccount = 0;
        var reportsTable = "";
        snapshot.forEach(function(childSnapshot) {
            reportsTable += "<tr>";
            reportsTable += "<td>" + checkUndefined(childSnapshot.val().name) + "</td>";
            reportsTable += "<td>" + (childSnapshot.hasChild('centrum') ? checkUndefined(childSnapshot.val().centrum.attempt) : "0") + "</td>";
            reportsTable += "<td>" + (childSnapshot.hasChild('centrum') ? checkUndefined(childSnapshot.val().centrum.firstGuess) : "0") + "</td>";
            reportsTable += "<td>" + (childSnapshot.hasChild('centrum') ? checkUndefined(childSnapshot.val().centrum.firsthints) : "0") + "</td>";
            reportsTable += "<td>" + (childSnapshot.hasChild('centrum') ? checkUndefined(childSnapshot.val().centrum.firstSeconds) : "0") + "</td>";
            reportsTable += "<td>" + (childSnapshot.hasChild('centrum') ? checkUndefined(childSnapshot.val().centrum.firstScore) : "0") + "</td>";
            reportsTable += "<td>" + (childSnapshot.hasChild('centrum') ? checkUndefined(childSnapshot.val().centrum.guessRightOnAttempt) : "0") + "</td>";
            reportsTable += "<td>" + (childSnapshot.hasChild('centrum') ? checkUndefined(childSnapshot.val().centrum.avgGuess) : "0") + "%</td>";
            reportsTable += "<td>" + (childSnapshot.hasChild('centrum') ? checkUndefined(childSnapshot.val().centrum.avgHints) : "0") + "</td>";
            reportsTable += "<td>" + (childSnapshot.hasChild('centrum') ? checkUndefined(childSnapshot.val().centrum.avgSeconds) : "0") + "</td>";
            reportsTable += "<td>" + (childSnapshot.hasChild('centrum') ? checkUndefined(childSnapshot.val().centrum.avgScore) : "0") + "</td>";
            reportsTable += "<td>" + (childSnapshot.hasChild('centrum') ? checkUndefined(childSnapshot.val().centrum.guessRightCount) : "0") + "</td>";

            reportsTable += "</tr>";
            ccount++;
        });
        document.getElementById('ccount').innerHTML = ccount;
        document.getElementById('centrum').innerHTML = reportsTable;
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
