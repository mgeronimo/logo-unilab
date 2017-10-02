window.onload = function() {
    var ref = firebase.database().ref().child("users");
    ref.once("value").then(function(snapshot) {
        var ccount = 0;
        var reportsTable = "";
        snapshot.forEach(function(childSnapshot) {
            if(checkUndefined(childSnapshot.val().alaxan)==undefined)
                return;
            else{
                reportsTable += "<tr>";
                reportsTable += "<td>" + checkUndefined(childSnapshot.val().name) + "</td>";
                reportsTable += "<td>" + checkUndefined(childSnapshot.val().sex) + "</td>";
                reportsTable += "<td>" + checkUndefined(childSnapshot.val().age) + "</td>";
                reportsTable += "<td>" + "0" + "</td>";
                reportsTable += "<td>" + "0" + "</td>";
                reportsTable += "<td>" + (childSnapshot.hasChild('alaxan') ? checkUndefined(childSnapshot.val().alaxan.attempt) : "0" + "</td>";
                reportsTable += "<td>" + (childSnapshot.hasChild('alaxan') ? checkUndefined(childSnapshot.val().alaxan.firstGuess) : "0" + "</td>";
                reportsTable += "<td>" + (childSnapshot.hasChild('alaxan') ? checkUndefined(childSnapshot.val().alaxan.firstHints) : "0" + "</td>";
                reportsTable += "<td>" + (childSnapshot.hasChild('alaxan') ? checkUndefined(childSnapshot.val().alaxan.firstSeconds) : "0" + "</td>";
                reportsTable += "<td>" + (childSnapshot.hasChild('alaxan') ? checkUndefined(childSnapshot.val().alaxan.firstScore) : "0" + "</td>";
                reportsTable += "<td>" + (childSnapshot.hasChild('alaxan') ? checkUndefined(childSnapshot.val().alaxan.guessRightOnAttempt) : "0" + "</td>";
                reportsTable += "<td>" + (childSnapshot.hasChild('alaxan') ? checkUndefined(childSnapshot.val().alaxan.avgGuess) : "0" + "%</td>";
                reportsTable += "<td>" + (childSnapshot.hasChild('alaxan') ? checkUndefined(childSnapshot.val().alaxan.avgHints) : "0" + "</td>";
                reportsTable += "<td>" + (childSnapshot.hasChild('alaxan') ? checkUndefined(childSnapshot.val().alaxan.avgSeconds).toFixed(2) : "0" + "</td>";
                reportsTable += "<td>" + (childSnapshot.hasChild('alaxan') ? checkUndefined(childSnapshot.val().alaxan.avgScore).toFixed(2) : "0" + "</td>";
                reportsTable += "<td>" + (childSnapshot.hasChild('alaxan') ? checkUndefined(childSnapshot.val().alaxan.guessRightCount) : "0" + "</td>";
    
    
                reportsTable += "</tr>";
                ccount++;
            }
        });
        document.getElementById('ccount').innerHTML = ccount;
        document.getElementById('alaxan').innerHTML = reportsTable;
        $('#mainTable').DataTable();
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
    // var v = val;
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
