window.onload = function() {
    var ref = firebase.database().ref().child("tally/");
    var newArray = [];
    var indexArray = [];
    ref.once("value").then(function(snapshot) {
        console.log(snapshot.val().advil);
        var i = 0;
        document.getElementById("advilScore").innerHTML = snapshot.hasChild('advil') && snapshot.val().advil.total != null ? snapshot.val().advil.total.avgScore.toFixed(2) : 0;
        document.getElementById("advilHints").innerHTML = snapshot.hasChild('advil') && snapshot.val().advil.total != null ? snapshot.val().advil.total.avgHints.toFixed(2) : 0;
        document.getElementById("advilSeconds").innerHTML = snapshot.hasChild('advil') && snapshot.val().advil.total != null ? snapshot.val().advil.total.avgSeconds.toFixed(2) : 0;

        document.getElementById("alaxanScore").innerHTML = snapshot.hasChild('alaxan') && snapshot.val().alaxan.total != null ? snapshot.val().alaxan.total.avgScore.toFixed(2) : 0;
        document.getElementById("alaxanHints").innerHTML = snapshot.hasChild('alaxan') && snapshot.val().alaxan.total != null ? snapshot.val().alaxan.total.avgHints.toFixed(2) : 0;
        document.getElementById("alaxanSeconds").innerHTML = snapshot.hasChild('alaxan') && snapshot.val().alaxan.total != null ? snapshot.val().alaxan.total.avgSeconds.toFixed(2) : 0;

        document.getElementById("allertaScore").innerHTML = snapshot.hasChild('allerta') && snapshot.val().allerta.total != null ? snapshot.val().allerta.total.avgScore.toFixed(2) : 0;
        document.getElementById("allertaHints").innerHTML = snapshot.hasChild('allerta') && snapshot.val().allerta.total != null ? snapshot.val().allerta.total.avgHints.toFixed(2) : 0;
        document.getElementById("allertaSeconds").innerHTML = snapshot.hasChild('allerta') && snapshot.val().allerta.total != null ? snapshot.val().allerta.total.avgSeconds.toFixed(2) : 0;

        document.getElementById("ascofScore").innerHTML = snapshot.hasChild('ascof') && snapshot.val().ascof.total != null ? snapshot.val().ascof.total.avgScore.toFixed(2) : 0;
        document.getElementById("ascofHints").innerHTML = snapshot.hasChild('ascof') && snapshot.val().ascof.total != null ? snapshot.val().ascof.total.avgHints.toFixed(2) : 0;
        document.getElementById("ascofSeconds").innerHTML = snapshot.hasChild('ascof') && snapshot.val().ascof.total != null ? snapshot.val().ascof.total.avgSeconds.toFixed(2) : 0;

        document.getElementById("biofluScore").innerHTML = snapshot.hasChild('bioflu') && snapshot.val().bioflu.total != null ? snapshot.val().bioflu.total.avgScore.toFixed(2) : 0;
        document.getElementById("biofluHints").innerHTML = snapshot.hasChild('bioflu') && snapshot.val().bioflu.total != null ? snapshot.val().bioflu.total.avgHints.toFixed(2) : 0;
        document.getElementById("biofluSeconds").innerHTML = snapshot.hasChild('bioflu') && snapshot.val().bioflu.total != null ? snapshot.val().bioflu.total.avgSeconds.toFixed(2) : 0;

        document.getElementById("biogesicScore").innerHTML = snapshot.hasChild('biogesic') && snapshot.val().biogesic.total != null ? snapshot.val().biogesic.total.avgScore.toFixed(2) : 0;
        document.getElementById("biogesicHints").innerHTML = snapshot.hasChild('biogesic') && snapshot.val().biogesic.total != null ? snapshot.val().biogesic.total.avgHints.toFixed(2) : 0;
        document.getElementById("biogesicSeconds").innerHTML = snapshot.hasChild('biogesic') && snapshot.val().biogesic.total != null ? snapshot.val().biogesic.total.avgSeconds.toFixed(2) : 0;

        document.getElementById("celetequeScore").innerHTML = snapshot.hasChild('celeteque') && snapshot.val().celeteque.total != null ? snapshot.val().celeteque.total.avgScore.toFixed(2) : 0;
        document.getElementById("celetequeHints").innerHTML = snapshot.hasChild('celeteque') && snapshot.val().celeteque.total != null ? snapshot.val().celeteque.total.avgHints.toFixed(2) : 0;
        document.getElementById("celetequeSeconds").innerHTML = snapshot.hasChild('celeteque') && snapshot.val().celeteque.total != null ? snapshot.val().celeteque.total.avgSeconds.toFixed(2) : 0;

        document.getElementById("centrumScore").innerHTML = snapshot.hasChild('centrum') && snapshot.val().centrum.total != null ? snapshot.val().centrum.total.avgScore.toFixed(2) : 0;
        document.getElementById("centrumHints").innerHTML = snapshot.hasChild('centrum') && snapshot.val().centrum.total != null ? snapshot.val().centrum.total.avgHints.toFixed(2) : 0;
        document.getElementById("centrumSeconds").innerHTML = snapshot.hasChild('centrum') && snapshot.val().centrum.total != null ? snapshot.val().centrum.total.avgSeconds.toFixed(2) : 0;

        document.getElementById("cetaphilScore").innerHTML = snapshot.hasChild('cetaphil') && snapshot.val().cetaphil.total != null ? snapshot.val().cetaphil.total.avgScore.toFixed(2) : 0;
        document.getElementById("cetaphilHints").innerHTML = snapshot.hasChild('cetaphil') && snapshot.val().cetaphil.total != null ? snapshot.val().cetaphil.total.avgHints.toFixed(2) : 0;
        document.getElementById("cetaphilSeconds").innerHTML = snapshot.hasChild('cetaphil') && snapshot.val().cetaphil.total != null ? snapshot.val().cetaphil.total.avgSeconds.toFixed(2) : 0;

        document.getElementById("conzaceScore").innerHTML = snapshot.hasChild('conzace') && snapshot.val().conzace.total != null ? snapshot.val().conzace.total.avgScore.toFixed(2) : 0;
        document.getElementById("conzaceHints").innerHTML = snapshot.hasChild('conzace') && snapshot.val().conzace.total != null ? snapshot.val().conzace.total.avgHints.toFixed(2) : 0;
        document.getElementById("conzaceSeconds").innerHTML = snapshot.hasChild('conzace') && snapshot.val().conzace.total != null ? snapshot.val().conzace.total.avgSeconds.toFixed(2) : 0;

        document.getElementById("decolgenScore").innerHTML = snapshot.hasChild('decolgen') && snapshot.val().decolgen.total != null ? snapshot.val().decolgen.total.avgScore.toFixed(2) : 0;
        document.getElementById("decolgenHints").innerHTML = snapshot.hasChild('decolgen') && snapshot.val().decolgen.total != null ? snapshot.val().decolgen.total.avgHints.toFixed(2) : 0;
        document.getElementById("decolgenSeconds").innerHTML = snapshot.hasChild('decolgen') && snapshot.val().decolgen.total != null ? snapshot.val().decolgen.total.avgSeconds.toFixed(2) : 0;

        document.getElementById("diatabsScore").innerHTML = snapshot.hasChild('diatabs') && snapshot.val().diatabs.total != null ? snapshot.val().diatabs.total.avgScore.toFixed(2) : 0;
        document.getElementById("diatabsHints").innerHTML = snapshot.hasChild('diatabs') && snapshot.val().diatabs.total != null ? snapshot.val().diatabs.total.avgHints.toFixed(2) : 0;
        document.getElementById("diatabsSeconds").innerHTML = snapshot.hasChild('diatabs') && snapshot.val().diatabs.total != null ? snapshot.val().diatabs.total.avgSeconds.toFixed(2) : 0;

        document.getElementById("efficascentScore").innerHTML = snapshot.hasChild('efficascent') && snapshot.val().efficascent.total != null ? snapshot.val().efficascent.total.avgScore.toFixed(2) : 0;
        document.getElementById("efficascentHints").innerHTML = snapshot.hasChild('efficascent') && snapshot.val().efficascent.total != null ? snapshot.val().efficascent.total.avgHints.toFixed(2) : 0;
        document.getElementById("efficascentSeconds").innerHTML = snapshot.hasChild('efficascent') && snapshot.val().efficascent.total != null ? snapshot.val().efficascent.total.avgSeconds.toFixed(2) : 0;

        document.getElementById("enervonScore").innerHTML = snapshot.hasChild('enervon') && snapshot.val().enervon.total != null ? snapshot.val().enervon.total.avgScore.toFixed(2) : 0;
        document.getElementById("enervonHints").innerHTML = snapshot.hasChild('enervon') && snapshot.val().enervon.total != null ? snapshot.val().enervon.total.avgHints.toFixed(2) : 0;
        document.getElementById("enervonSeconds").innerHTML = snapshot.hasChild('enervon') && snapshot.val().enervon.total != null ? snapshot.val().enervon.total.avgSeconds.toFixed(2) : 0;

        document.getElementById("gatoradeScore").innerHTML = snapshot.hasChild('gatorade') && snapshot.val().gatorade.total != null ? snapshot.val().gatorade.total.avgScore.toFixed(2) : 0;
        document.getElementById("gatoradeHints").innerHTML = snapshot.hasChild('gatorade') && snapshot.val().gatorade.total != null ? snapshot.val().gatorade.total.avgHints.toFixed(2) : 0;
        document.getElementById("gatoradeSeconds").innerHTML = snapshot.hasChild('gatorade') && snapshot.val().gatorade.total != null ? snapshot.val().gatorade.total.avgSeconds.toFixed(2) : 0;

        document.getElementById("gyneproScore").innerHTML = snapshot.hasChild('gynepro') && snapshot.val().gynepro.total != null ? snapshot.val().gynepro.total.avgScore.toFixed(2) : 0;
        document.getElementById("gyneproHints").innerHTML = snapshot.hasChild('gynepro') && snapshot.val().gynepro.total != null ? snapshot.val().gynepro.total.avgHints.toFixed(2) : 0;
        document.getElementById("gyneproSeconds").innerHTML = snapshot.hasChild('gynepro') && snapshot.val().gynepro.total != null ? snapshot.val().gynepro.total.avgSeconds.toFixed(2) : 0;

        document.getElementById("kremilsScore").innerHTML = snapshot.hasChild('kremils') && snapshot.val().kremils.total != null ? snapshot.val().kremils.total.avgScore.toFixed(2) : 0;
        document.getElementById("kremilsHints").innerHTML = snapshot.hasChild('kremils') && snapshot.val().kremils.total != null ? snapshot.val().kremils.total.avgHints.toFixed(2) : 0;
        document.getElementById("kremilsSeconds").innerHTML = snapshot.hasChild('kremils') && snapshot.val().kremils.total != null ? snapshot.val().kremils.total.avgSeconds.toFixed(2) : 0;

        document.getElementById("lactacydScore").innerHTML = snapshot.hasChild('lactacyd') && snapshot.val().lactacyd.total != null ? snapshot.val().lactacyd.total.avgScore.toFixed(2) : 0;
        document.getElementById("lactacydHints").innerHTML = snapshot.hasChild('lactacyd') && snapshot.val().lactacyd.total != null ? snapshot.val().lactacyd.total.avgHints.toFixed(2) : 0;
        document.getElementById("lactacydSeconds").innerHTML = snapshot.hasChild('lactacyd') && snapshot.val().lactacyd.total != null ? snapshot.val().lactacyd.total.avgSeconds.toFixed(2) : 0;

        document.getElementById("mcdoScore").innerHTML = snapshot.hasChild('mcdo') && snapshot.val().mcdo.total != null ? snapshot.val().mcdo.total.avgScore.toFixed(2) : 0;
        document.getElementById("mcdoHints").innerHTML = snapshot.hasChild('mcdo') && snapshot.val().mcdo.total != null ? snapshot.val().mcdo.total.avgHints.toFixed(2) : 0;
        document.getElementById("mcdoSeconds").innerHTML = snapshot.hasChild('mcdo') && snapshot.val().mcdo.total != null ? snapshot.val().mcdo.total.avgSeconds.toFixed(2) : 0;

        document.getElementById("myraScore").innerHTML = snapshot.hasChild('myra') && snapshot.val().myra.total != null ? snapshot.val().myra.total.avgScore.toFixed(2) : 0;
        document.getElementById("myraHints").innerHTML = snapshot.hasChild('myra') && snapshot.val().myra.total != null ? snapshot.val().myra.total.avgHints.toFixed(2) : 0;
        document.getElementById("myraSeconds").innerHTML = snapshot.hasChild('myra') && snapshot.val().myra.total != null ? snapshot.val().myra.total.avgSeconds.toFixed(2) : 0;

        document.getElementById("neozepScore").innerHTML = snapshot.hasChild('neozep') && snapshot.val().neozep.total != null ? snapshot.val().neozep.total.avgScore.toFixed(2) : 0;
        document.getElementById("neozepHints").innerHTML = snapshot.hasChild('neozep') && snapshot.val().neozep.total != null ? snapshot.val().neozep.total.avgHints.toFixed(2) : 0;
        document.getElementById("neozepSeconds").innerHTML = snapshot.hasChild('neozep') && snapshot.val().neozep.total != null ? snapshot.val().neozep.total.avgSeconds.toFixed(2) : 0;

        document.getElementById("phcareScore").innerHTML = snapshot.hasChild('phcare') && snapshot.val().phcare.total != null ? snapshot.val().phcare.total.avgScore.toFixed(2) : 0;
        document.getElementById("phcareHints").innerHTML = snapshot.hasChild('phcare') && snapshot.val().phcare.total != null ? snapshot.val().phcare.total.avgHints.toFixed(2) : 0;
        document.getElementById("phcareSeconds").innerHTML = snapshot.hasChild('phcare') && snapshot.val().phcare.total != null ? snapshot.val().phcare.total.avgSeconds.toFixed(2) : 0;

        document.getElementById("rexidolScore").innerHTML = snapshot.hasChild('rexidol') && snapshot.val().rexidol.total != null ? snapshot.val().rexidol.total.avgScore.toFixed(2) : 0;
        document.getElementById("rexidolHints").innerHTML = snapshot.hasChild('rexidol') && snapshot.val().rexidol.total != null ? snapshot.val().rexidol.total.avgHints.toFixed(2) : 0;
        document.getElementById("rexidolSeconds").innerHTML = snapshot.hasChild('rexidol') && snapshot.val().rexidol.total != null ? snapshot.val().rexidol.total.avgSeconds.toFixed(2) : 0;

        document.getElementById("ritemedScore").innerHTML = snapshot.hasChild('ritemed') && snapshot.val().ritemed.total != null ? snapshot.val().ritemed.total.avgScore.toFixed(2) : 0;
        document.getElementById("ritemedHints").innerHTML = snapshot.hasChild('ritemed') && snapshot.val().ritemed.total != null ? snapshot.val().ritemed.total.avgHints.toFixed(2) : 0;
        document.getElementById("ritemedSeconds").innerHTML = snapshot.hasChild('ritemed') && snapshot.val().ritemed.total != null ? snapshot.val().ritemed.total.avgSeconds.toFixed(2) : 0;

        document.getElementById("robitussinScore").innerHTML = snapshot.hasChild('robitussin') && snapshot.val().robitussin.total != null ? snapshot.val().robitussin.total.avgScore.toFixed(2) : 0;
        document.getElementById("robitussinHints").innerHTML = snapshot.hasChild('robitussin') && snapshot.val().robitussin.total != null ? snapshot.val().robitussin.total.avgHints.toFixed(2) : 0;
        document.getElementById("robitussinSeconds").innerHTML = snapshot.hasChild('robitussin') && snapshot.val().robitussin.total != null ? snapshot.val().robitussin.total.avgSeconds.toFixed(2) : 0;

        document.getElementById("skelanScore").innerHTML = snapshot.hasChild('skelan') && snapshot.val().skelan.total != null ? snapshot.val().skelan.total.avgScore.toFixed(2) : 0;
        document.getElementById("skelanHints").innerHTML = snapshot.hasChild('skelan') && snapshot.val().skelan.total != null ? snapshot.val().skelan.total.avgHints.toFixed(2) : 0;
        document.getElementById("skelanSeconds").innerHTML = snapshot.hasChild('skelan') && snapshot.val().skelan.total != null ? snapshot.val().skelan.total.avgSeconds.toFixed(2) : 0;

        document.getElementById("solmuxScore").innerHTML = snapshot.hasChild('solmux') && snapshot.val().solmux.total != null ? snapshot.val().solmux.total.avgScore.toFixed(2) : 0;
        document.getElementById("solmuxHints").innerHTML = snapshot.hasChild('solmux') && snapshot.val().solmux.total != null ? snapshot.val().solmux.total.avgHints.toFixed(2) : 0;
        document.getElementById("solmuxSeconds").innerHTML = snapshot.hasChild('solmux') && snapshot.val().solmux.total != null ? snapshot.val().solmux.total.avgSeconds.toFixed(2) : 0;

        document.getElementById("tgpScore").innerHTML = snapshot.hasChild('tgp') && snapshot.val().tgp.total != null ? snapshot.val().tgp.total.avgScore.toFixed(2) : 0;
        document.getElementById("tgpHints").innerHTML = snapshot.hasChild('tgp') && snapshot.val().tgp.total != null ? snapshot.val().tgp.total.avgHints.toFixed(2) : 0;
        document.getElementById("tgpSeconds").innerHTML = snapshot.hasChild('tgp') && snapshot.val().tgp.total != null ? snapshot.val().tgp.total.avgSeconds.toFixed(2) : 0;

        document.getElementById("uhpScore").innerHTML = snapshot.hasChild('uhp') && snapshot.val().uhp.total != null ? snapshot.val().uhp.total.avgScore.toFixed(2) : 0;
        document.getElementById("uhpHints").innerHTML = snapshot.hasChild('uhp') && snapshot.val().uhp.total != null ? snapshot.val().uhp.total.avgHints.toFixed(2) : 0;
        document.getElementById("uhpSeconds").innerHTML = snapshot.hasChild('uhp') && snapshot.val().uhp.total != null ? snapshot.val().uhp.total.avgSeconds.toFixed(2) : 0;

        document.getElementById("unilabScore").innerHTML = snapshot.hasChild('unilab') && snapshot.val().unilab.total != null ? snapshot.val().unilab.total.avgScore.toFixed(2) : 0;
        document.getElementById("unilabHints").innerHTML = snapshot.hasChild('unilab') && snapshot.val().unilab.total != null ? snapshot.val().unilab.total.avgHints.toFixed(2) : 0;
        document.getElementById("unilabSeconds").innerHTML = snapshot.hasChild('unilab') && snapshot.val().unilab.total != null ? snapshot.val().unilab.total.avgSeconds.toFixed(2) : 0;

        document.getElementById("vicksScore").innerHTML = snapshot.hasChild('vicks') && snapshot.val().vicks.total != null ? snapshot.val().vicks.total.avgScore.toFixed(2) : 0;
        document.getElementById("vicksHints").innerHTML = snapshot.hasChild('vicks') && snapshot.val().vicks.total != null ? snapshot.val().vicks.total.avgHints.toFixed(2) : 0;
        document.getElementById("vicksSeconds").innerHTML = snapshot.hasChild('vicks') && snapshot.val().vicks.total != null ? snapshot.val().vicks.total.avgSeconds.toFixed(2) : 0;

        $('.sk-cube-grid').hide();
        $('#exportButton').show();
        $('#mainTable').show();
        $('#mainTable').DataTable();


    }).catch(function(error) {
        console.log(error)
    });

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
    f.src = "data:" + (A[2] && snapshot.val().alaxan.total != null ? A[2] : "application/octet-stream") + (window.btoa && snapshot.val().alaxan.total != null ? ";base64" : "") + "," + (window.btoa && snapshot.val().alaxan.total != null ? window.btoa : escape)(strData);
    setTimeout(function() {
        D.body.removeChild(f);
    }, 333);
    return true;
}
