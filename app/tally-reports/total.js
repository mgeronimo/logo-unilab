window.onload = function() {

    var advilCorrectCounter = 0, 
        advilIncorrectCounter = 0, 
        advilSkipCounter = 0;
        advilTotalAttempt=0;
        advilTotalRespondentOnFirstAttempt=0;
        advilScoreArray = [];
        advilHintsArray = [];
        advilSecondsArray = [];

    var alaxanCorrectCounter = 0, 
        alaxanIncorrectCounter = 0, 
        alaxanSkipCounter = 0;

    var allertaCorrectCounter = 0, 
        allertaIncorrectCounter = 0, 
        allertaSkipCounter = 0;

    var ascofCorrectCounter = 0, 
        ascofIncorrectCounter = 0, 
        ascofSkipCounter = 0;

    var biofluCorrectCounter = 0, 
        biofluIncorrectCounter = 0, 
        biofluSkipCounter = 0;

    var biogesicCorrectCounter = 0, 
        biogesicIncorrectCounter = 0, 
        biogesicSkipCounter = 0;

    var celetequeCorrectCounter = 0, 
        celetequeIncorrectCounter = 0, 
        celetequeSkipCounter = 0;

    var centrumCorrectCounter = 0, 
        centrumIncorrectCounter = 0, 
        centrumSkipCounter = 0;

    var cetaphilCorrectCounter = 0, 
        cetaphilIncorrectCounter = 0, 
        cetaphilSkipCounter = 0;

    var conzaceCorrectCounter = 0, 
        conzaceIncorrectCounter = 0, 
        conzaceSkipCounter = 0;

    var decolgenCorrectCounter = 0, 
        decolgenIncorrectCounter = 0, 
        decolgenSkipCounter = 0;

    var diatabsCorrectCounter = 0, 
        diatabsIncorrectCounter = 0, 
        diatabsSkipCounter = 0;

    var efficascentCorrectCounter = 0, 
        efficascentIncorrectCounter = 0, 
        efficascentSkipCounter = 0;

    var enervonCorrectCounter = 0, 
        enervonIncorrectCounter = 0, 
        enervonSkipCounter = 0;

    var gatoradeCorrectCounter = 0, 
        gatoradeIncorrectCounter = 0, 
        gatoradeSkipCounter = 0;

    var gyneproCorrectCounter = 0, 
        gyneproIncorrectCounter = 0, 
        gyneproSkipCounter = 0;

    var kremilsCorrectCounter = 0, 
        kremilsIncorrectCounter = 0, 
        kremilsSkipCounter = 0;

    var lactacydCorrectCounter = 0, 
        lactacydIncorrectCounter = 0, 
        lactacydSkipCounter = 0;

    var mcdoCorrectCounter = 0, 
        mcdoIncorrectCounter = 0, 
        mcdoSkipCounter = 0;

    var myraCorrectCounter = 0, 
        myraIncorrectCounter = 0, 
        myraSkipCounter = 0;

    var neozepCorrectCounter = 0, 
        neozepIncorrectCounter = 0, 
        neozepSkipCounter = 0;

    var phcareCorrectCounter = 0, 
        phcareIncorrectCounter = 0, 
        phcareSkipCounter = 0;

    var rexidolCorrectCounter = 0, 
        rexidolIncorrectCounter = 0, 
        rexidolSkipCounter = 0;

    var ritemedCorrectCounter = 0, 
        ritemedIncorrectCounter = 0, 
        ritemedSkipCounter = 0;

    var robitussinCorrectCounter = 0, 
        robitussinIncorrectCounter = 0, 
        robitussinSkipCounter = 0;

    var skelanCorrectCounter = 0, 
        skelanIncorrectCounter = 0, 
        skelanSkipCounter = 0;

    var solmuxCorrectCounter = 0, 
        solmuxIncorrectCounter = 0, 
        solmuxSkipCounter = 0;

    var tgpCorrectCounter = 0, 
        tgpIncorrectCounter = 0, 
        tgpSkipCounter = 0;

    var uhpCorrectCounter = 0, 
        uhpIncorrectCounter = 0, 
        uhpSkipCounter = 0;

    var unilabCorrectCounter = 0, 
        unilabIncorrectCounter = 0, 
        unilabSkipCounter = 0;

    var vicksCorrectCounter = 0, 
        vicksIncorrectCounter = 0, 
        vicksSkipCounter = 0;

    var totalRespondents = 0;
    var score = 0;


    var respondent = firebase.database().ref().child("users");

    respondent.once("value").then(function(snapshot) {
        //console.log(snapshot.val());
        snapshot.forEach(function(childSnapshot) {
            
            if(childSnapshot.hasChild('advil')) {
                advilCorrectCounter = (advilCorrectCounter + childSnapshot.val().advil.guessRightCount);
                advilIncorrectCounter = (advilIncorrectCounter + (childSnapshot.val().advil.attempt - childSnapshot.val().advil.guessRightCount));
                score = score + childSnapshot.val().advil.firstScore;
                advilScoreArray.push(childSnapshot.val().advil.sumScore);
                advilHintsArray.push(childSnapshot.val().advil.sumHints);
                advilSecondsArray.push(childSnapshot.val().advil.sumSeconds);
                advilTotalRespondentOnFirstAttempt = advilTotalRespondentOnFirstAttempt + (childSnapshot.val().advil.attempt == 1 ? 1 : 0);
                advilTotalAttempt = advilTotalAttempt + childSnapshot.val().advil.attempt;
            }else{
                advilSkipCounter++;
            }

            if(childSnapshot.hasChild('alaxan')) {
                alaxanCorrectCounter = (alaxanCorrectCounter + childSnapshot.val().alaxan.guessRightCount);
                alaxanIncorrectCounter = (alaxanIncorrectCounter + (childSnapshot.val().alaxan.attempt - childSnapshot.val().alaxan.guessRightCount));
                score = score + childSnapshot.val().alaxan.firstScore;                
            }else{
                unilabSkipCounter++;
            }

            if(childSnapshot.hasChild('allerta')) {
                allertaCorrectCounter = (allertaCorrectCounter + childSnapshot.val().allerta.guessRightCount);
                allertaIncorrectCounter = (allertaIncorrectCounter + (childSnapshot.val().allerta.attempt - childSnapshot.val().allerta.guessRightCount));
                score = score + childSnapshot.val().allerta.firstScore;
            }else{
                allertaSkipCounter++;
            }

            if(childSnapshot.hasChild('ascof')) {
                ascofCorrectCounter = (ascofCorrectCounter + childSnapshot.val().ascof.guessRightCount);
                ascofIncorrectCounter = (ascofIncorrectCounter + (childSnapshot.val().ascof.attempt - childSnapshot.val().ascof.guessRightCount));
                score = score + childSnapshot.val().ascof.firstScore;
            }else{
                ascofSkipCounter++;
            }

            if(childSnapshot.hasChild('bioflu')) {
                biofluCorrectCounter = (biofluCorrectCounter + childSnapshot.val().bioflu.guessRightCount);
                biofluIncorrectCounter = (biofluIncorrectCounter + (childSnapshot.val().bioflu.attempt - childSnapshot.val().bioflu.guessRightCount));
                score = score + childSnapshot.val().bioflu.firstScore;
            }else{
                biofluSkipCounter++;
            }

            if(childSnapshot.hasChild('biogesic')) {
                biogesicCorrectCounter = (biogesicCorrectCounter + childSnapshot.val().biogesic.guessRightCount);
                biogesicIncorrectCounter = (biogesicIncorrectCounter + (childSnapshot.val().biogesic.attempt - childSnapshot.val().biogesic.guessRightCount));
                score = score + childSnapshot.val().biogesic.firstScore;
            }else{
                biogesicSkipCounter++;
            }

            if(childSnapshot.hasChild('celeteque')) {
                celetequeCorrectCounter = (celetequeCorrectCounter + childSnapshot.val().celeteque.guessRightCount);
                celetequeIncorrectCounter = (celetequeIncorrectCounter + (childSnapshot.val().celeteque.attempt - childSnapshot.val().celeteque.guessRightCount));
                score = score + childSnapshot.val().celeteque.firstScore;
            }else{
                celetequeSkipCounter++;
            }

            if(childSnapshot.hasChild('centrum')) {
                centrumCorrectCounter = (centrumCorrectCounter + childSnapshot.val().centrum.guessRightCount);
                centrumIncorrectCounter = (centrumIncorrectCounter + ((childSnapshot.val().centrum.attempt == null ? 0 : childSnapshot.val().centrum.attempt) - (childSnapshot.val().centrum.guessRightCount == null ? 0 : childSnapshot.val().centrum.guessRightCount)));
                score = score + childSnapshot.val().centrum.firstScore;
            }else{
                centrumSkipCounter++;
            }

            if(childSnapshot.hasChild('cetaphil')) {
                cetaphilCorrectCounter = (cetaphilCorrectCounter + childSnapshot.val().cetaphil.guessRightCount);
                cetaphilIncorrectCounter = (cetaphilIncorrectCounter + (childSnapshot.val().cetaphil.attempt - childSnapshot.val().cetaphil.guessRightCount));
                score = score + childSnapshot.val().cetaphil.firstScore;
            }else{
                cetaphilSkipCounter++;
            }

            if(childSnapshot.hasChild('conzace')) {
                conzaceCorrectCounter = (conzaceCorrectCounter + childSnapshot.val().conzace.guessRightCount);
                conzaceIncorrectCounter = (conzaceIncorrectCounter + (childSnapshot.val().conzace.attempt - childSnapshot.val().conzace.guessRightCount));
                score = score + childSnapshot.val().conzace.firstScore;
            }else{
                conzaceSkipCounter++;
            }

            if(childSnapshot.hasChild('decolgen')) {
                decolgenCorrectCounter = (decolgenCorrectCounter + childSnapshot.val().decolgen.guessRightCount);
                decolgenIncorrectCounter = (decolgenIncorrectCounter + (childSnapshot.val().decolgen.attempt - childSnapshot.val().decolgen.guessRightCount));
                score = score + childSnapshot.val().decolgen.firstScore;
            }else{
                decolgenSkipCounter++;
            }

            if(childSnapshot.hasChild('diatabs')) {
                diatabsCorrectCounter = (diatabsCorrectCounter + childSnapshot.val().diatabs.guessRightCount);
                diatabsIncorrectCounter = (diatabsIncorrectCounter + ((childSnapshot.val().diatabs.attempt == null ? 0 : childSnapshot.val().diatabs.attempt) - (childSnapshot.val().diatabs.guessRightCount == null ? 0 : childSnapshot.val().diatabs.guessRightCount)));
                score = score + childSnapshot.val().diatabs.firstScore;
            }else{
                diatabsSkipCounter++;
            }

            if(childSnapshot.hasChild('efficascent')) {
                efficascentCorrectCounter = (efficascentCorrectCounter + (childSnapshot.val().efficascent.guessRightCount == null ? 0 : childSnapshot.val().efficascent.guessRightCount));
                efficascentIncorrectCounter = (efficascentIncorrectCounter + ((childSnapshot.val().efficascent.attempt == null ? 0 : childSnapshot.val().efficascent.attempt) - (childSnapshot.val().efficascent.guessRightCount == null ? 0 : childSnapshot.val().efficascent.guessRightCount)));
                score = score + childSnapshot.val().efficascent.firstScore;
            }else{
                efficascentSkipCounter++;
            }

            if(childSnapshot.hasChild('enervon')) {
                enervonCorrectCounter = (enervonCorrectCounter + childSnapshot.val().enervon.guessRightCount);
                enervonIncorrectCounter = (enervonIncorrectCounter + (childSnapshot.val().enervon.attempt - childSnapshot.val().enervon.guessRightCount));
                score = score + childSnapshot.val().enervon.firstScore;
            }else{
                enervonSkipCounter++;
            }

            if(childSnapshot.hasChild('gatorade')) {
                gatoradeCorrectCounter = (gatoradeCorrectCounter + childSnapshot.val().gatorade.guessRightCount);
                gatoradeIncorrectCounter = (gatoradeIncorrectCounter + (childSnapshot.val().gatorade.attempt - childSnapshot.val().gatorade.guessRightCount));
                score = score + childSnapshot.val().gatorade.firstScore;
            }else{
                gatoradeSkipCounter++;
            }

            if(childSnapshot.hasChild('gynepro')) {
                gyneproCorrectCounter = (gyneproCorrectCounter + childSnapshot.val().gynepro.guessRightCount);
                gyneproIncorrectCounter = (gyneproIncorrectCounter + (childSnapshot.val().gynepro.attempt - childSnapshot.val().gynepro.guessRightCount));
                score = score + childSnapshot.val().gynepro.firstScore;
            }else{
                gyneproSkipCounter++;
            }

            if(childSnapshot.hasChild('kremils')) {
                kremilsCorrectCounter = (kremilsCorrectCounter + childSnapshot.val().kremils.guessRightCount);
                kremilsIncorrectCounter = (kremilsIncorrectCounter + (childSnapshot.val().kremils.attempt - childSnapshot.val().kremils.guessRightCount));
                score = score + childSnapshot.val().kremils.firstScore;
            }else{
                kremilsSkipCounter++;
            }

            if(childSnapshot.hasChild('lactacyd')) {
                lactacydCorrectCounter = (lactacydCorrectCounter + childSnapshot.val().lactacyd.guessRightCount);
                lactacydIncorrectCounter = (lactacydIncorrectCounter + (childSnapshot.val().lactacyd.attempt - childSnapshot.val().lactacyd.guessRightCount));
                score = score + childSnapshot.val().lactacyd.firstScore;
            }else{
                lactacydSkipCounter++;
            }

            if(childSnapshot.hasChild('mcdo')) {
                mcdoCorrectCounter = (mcdoCorrectCounter + (childSnapshot.val().mcdo.guessRightCount == null ? 0 : childSnapshot.val().mcdo.guessRightCount));
                mcdoIncorrectCounter = (mcdoIncorrectCounter + ((childSnapshot.val().mcdo.attempt == null ? 0 : childSnapshot.val().mcdo.attempt) - (childSnapshot.val().mcdo.guessRightCount == null ? 0 : childSnapshot.val().mcdo.guessRightCount)));
                score = score + childSnapshot.val().mcdo.firstScore;
            }else{
                mcdoSkipCounter++;
            }

            if(childSnapshot.hasChild('myra')) {
                myraCorrectCounter = (myraCorrectCounter + childSnapshot.val().myra.guessRightCount);
                myraIncorrectCounter = (myraIncorrectCounter + (childSnapshot.val().myra.attempt - childSnapshot.val().myra.guessRightCount));
                score = score + childSnapshot.val().myra.firstScore;
            }else{
                myraSkipCounter++;
            }

            if(childSnapshot.hasChild('neozep')) {
                neozepCorrectCounter = (neozepCorrectCounter + childSnapshot.val().neozep.guessRightCount);
                neozepIncorrectCounter = (neozepIncorrectCounter + (childSnapshot.val().neozep.attempt - childSnapshot.val().neozep.guessRightCount));
                score = score + childSnapshot.val().neozep.firstScore;
            }else{
                neozepSkipCounter++;
            }

            if(childSnapshot.hasChild('phcare')) {
                phcareCorrectCounter = (phcareCorrectCounter + childSnapshot.val().phcare.guessRightCount);
                phcareIncorrectCounter = (phcareIncorrectCounter + (childSnapshot.val().phcare.attempt - childSnapshot.val().phcare.guessRightCount));
                score = score + childSnapshot.val().phcare.firstScore;
            }else{
                phcareSkipCounter++;
            }

            if(childSnapshot.hasChild('rexidol')) {
                rexidolCorrectCounter = (rexidolCorrectCounter + childSnapshot.val().rexidol.guessRightCount);
                rexidolIncorrectCounter = (rexidolIncorrectCounter + (childSnapshot.val().rexidol.attempt - childSnapshot.val().rexidol.guessRightCount));
                score = score + childSnapshot.val().rexidol.firstScore;
            }else{
                rexidolSkipCounter++;
            }

            if(childSnapshot.hasChild('ritemed')) {
                ritemedCorrectCounter = (ritemedCorrectCounter + childSnapshot.val().ritemed.guessRightCount);
                ritemedIncorrectCounter = (ritemedIncorrectCounter + (childSnapshot.val().ritemed.attempt - childSnapshot.val().ritemed.guessRightCount));
                score = score + childSnapshot.val().ritemed.firstScore;
            }else{
                ritemedSkipCounter++;
            }

            if(childSnapshot.hasChild('robitussin')) {
                robitussinCorrectCounter = (robitussinCorrectCounter + childSnapshot.val().robitussin.guessRightCount);
                robitussinIncorrectCounter = (robitussinIncorrectCounter + (childSnapshot.val().robitussin.attempt - childSnapshot.val().robitussin.guessRightCount));
                score = score + childSnapshot.val().robitussin.firstScore;
            }else{
                robitussinSkipCounter++;
            }

            if(childSnapshot.hasChild('skelan')) {
                skelanCorrectCounter = (skelanCorrectCounter + (childSnapshot.val().skelan.guessRightCount == null ? 0 : childSnapshot.val().skelan.guessRightCount));
                skelanIncorrectCounter = (skelanIncorrectCounter + ((childSnapshot.val().skelan.attempt == null ? 0 : childSnapshot.val().skelan.attempt) - (childSnapshot.val().skelan.guessRightCount == null ? 0 : childSnapshot.val().skelan.guessRightCount)));
                score = score + childSnapshot.val().skelan.firstScore;
            }else{
                skelanSkipCounter++;
            }

            if(childSnapshot.hasChild('solmux')) {
                solmuxCorrectCounter = (solmuxCorrectCounter + childSnapshot.val().solmux.guessRightCount);
                solmuxIncorrectCounter = (solmuxIncorrectCounter + (childSnapshot.val().solmux.attempt - childSnapshot.val().solmux.guessRightCount));
                score = score + childSnapshot.val().solmux.firstScore;
            }else{
                solmuxSkipCounter++;
            }

            if(childSnapshot.hasChild('tgp')) {
                tgpCorrectCounter = (tgpCorrectCounter + childSnapshot.val().tgp.guessRightCount);
                tgpIncorrectCounter = (tgpIncorrectCounter + (childSnapshot.val().tgp.attempt - childSnapshot.val().tgp.guessRightCount));
                score = score + childSnapshot.val().tgp.firstScore;
            }else{
                tgpSkipCounter++;
            }

            if(childSnapshot.hasChild('uhp')) {
                uhpCorrectCounter = (uhpCorrectCounter + childSnapshot.val().uhp.guessRightCount);
                uhpIncorrectCounter = (uhpIncorrectCounter + (childSnapshot.val().uhp.attempt - childSnapshot.val().uhp.guessRightCount));
                score = score + childSnapshot.val().uhp.firstScore;
            }else{
                uhpSkipCounter++;
            }

            if(childSnapshot.hasChild('unilab')) {
                unilabCorrectCounter = (unilabCorrectCounter + childSnapshot.val().unilab.guessRightCount);
                unilabIncorrectCounter = (unilabIncorrectCounter + (childSnapshot.val().unilab.attempt - childSnapshot.val().unilab.guessRightCount));
                score = score + childSnapshot.val().unilab.firstScore;
            }else{
                unilabSkipCounter++;
            }

            if(childSnapshot.hasChild('vicks')) { 
                vicksCorrectCounter = (vicksCorrectCounter + childSnapshot.val().vicks.guessRightCount);
                vicksIncorrectCounter = (vicksIncorrectCounter + (childSnapshot.val().vicks.attempt - childSnapshot.val().vicks.guessRightCount));
                score = score + childSnapshot.val().vicks.firstScore;
            } else {
                vicksSkipCounter++;
            }

            if(
                childSnapshot.val().name != "Alexandre Gerona" 
                && childSnapshot.val().name != "Romel Almarinez" 
                && childSnapshot.val().name != "Madi Geronimo" 
                && childSnapshot.val().name != "Joanne Carla Blanco Almarinez"
                && childSnapshot.val().name != "Bes Gaviola Chua"
                && childSnapshot.val().name != "Khamylle Castillo"
                && childSnapshot.val().name != "Grace Connexion"
            ) {

                totalRespondents++;

                $('#respondentsTable tbody').append('<tr>\
                    <td>'+totalRespondents+'</td>\
                    <td>'+childSnapshot.val().name +'</td>\
                    <td>'+childSnapshot.val().age +'</td>\
                    <td>'+childSnapshot.val().sex +'</td>\
                    <td>'+score+'</td>\
                    <td>'+childSnapshot.val().attempt +'</td></tr>');
            }

            score = 0;

        });
    });

    console.log(advilScoreArray);
    
    var ref = firebase.database().ref().child("tally/");
    var newArray = [];
    var indexArray = [];
    ref.once("value").then(function(snapshot) {

        var i = 0;
        
        document.getElementById("advilScore").innerHTML = snapshot.hasChild('advil') && snapshot.val().advil.total != null ? snapshot.val().advil.total.avgScore.toFixed(2) : 0;
        document.getElementById("advilHighestScore").innerHTML = Math.max(advilScoreArray);
        document.getElementById("advilLowestScore").innerHTML = Math.min(advilScoreArray);
        document.getElementById("advilHints").innerHTML = snapshot.hasChild('advil') && snapshot.val().advil.total != null ? snapshot.val().advil.total.avgHints.toFixed(2) : 0;
        document.getElementById("advilHighestHints").innerHTML = Math.max(advilHintsArray);
        document.getElementById("advilLowestHints").innerHTML = Math.min(advilHintsArray);
        document.getElementById("advilSeconds").innerHTML = snapshot.hasChild('advil') && snapshot.val().advil.total != null ? snapshot.val().advil.total.avgSeconds.toFixed(2) : 0;
        document.getElementById("advilHighestSeconds").innerHTML = Math.max(advilSecondsArray);
        document.getElementById("advilLowestSeconds").innerHTML = Math.min(advilSecondsArray);
        document.getElementById("advilCorrect").innerHTML = advilCorrectCounter;
        document.getElementById("advilIncorrect").innerHTML = advilIncorrectCounter;
        document.getElementById("advilSkip").innerHTML = advilSkipCounter;
        document.getElementById("advilTotalRespondentOnFirstAttempt").innerHTML = advilTotalRespondentOnFirstAttempt;
        document.getElementById("advilTotalAttempt").innerHTML = advilTotalAttempt;

        document.getElementById("alaxanScore").innerHTML = snapshot.hasChild('alaxan') && snapshot.val().alaxan.total != null ? snapshot.val().alaxan.total.avgScore.toFixed(2) : 0;
        document.getElementById("alaxanHints").innerHTML = snapshot.hasChild('alaxan') && snapshot.val().alaxan.total != null ? snapshot.val().alaxan.total.avgHints.toFixed(2) : 0;
        document.getElementById("alaxanSeconds").innerHTML = snapshot.hasChild('alaxan') && snapshot.val().alaxan.total != null ? snapshot.val().alaxan.total.avgSeconds.toFixed(2) : 0;
        document.getElementById("alaxanCorrect").innerHTML = alaxanCorrectCounter
        document.getElementById("alaxanIncorrect").innerHTML = alaxanIncorrectCounter
        document.getElementById("alaxanSkip").innerHTML = alaxanSkipCounter;

        document.getElementById("allertaScore").innerHTML = snapshot.hasChild('allerta') && snapshot.val().allerta.total != null ? snapshot.val().allerta.total.avgScore.toFixed(2) : 0;
        document.getElementById("allertaHints").innerHTML = snapshot.hasChild('allerta') && snapshot.val().allerta.total != null ? snapshot.val().allerta.total.avgHints.toFixed(2) : 0;
        document.getElementById("allertaSeconds").innerHTML = snapshot.hasChild('allerta') && snapshot.val().allerta.total != null ? snapshot.val().allerta.total.avgSeconds.toFixed(2) : 0;
        document.getElementById("allertaCorrect").innerHTML = allertaCorrectCounter;
        document.getElementById("allertaIncorrect").innerHTML = allertaIncorrectCounter;
        document.getElementById("allertaSkip").innerHTML = allertaSkipCounter;

        document.getElementById("ascofScore").innerHTML = snapshot.hasChild('ascof') && snapshot.val().ascof.total != null ? snapshot.val().ascof.total.avgScore.toFixed(2) : 0;
        document.getElementById("ascofHints").innerHTML = snapshot.hasChild('ascof') && snapshot.val().ascof.total != null ? snapshot.val().ascof.total.avgHints.toFixed(2) : 0;
        document.getElementById("ascofSeconds").innerHTML = snapshot.hasChild('ascof') && snapshot.val().ascof.total != null ? snapshot.val().ascof.total.avgSeconds.toFixed(2) : 0;
        document.getElementById("ascofCorrect").innerHTML = ascofCorrectCounter;
        document.getElementById("ascofIncorrect").innerHTML = ascofIncorrectCounter;
        document.getElementById("ascofSkip").innerHTML = ascofSkipCounter;

        document.getElementById("biofluScore").innerHTML = snapshot.hasChild('bioflu') && snapshot.val().bioflu.total != null ? snapshot.val().bioflu.total.avgScore.toFixed(2) : 0;
        document.getElementById("biofluHints").innerHTML = snapshot.hasChild('bioflu') && snapshot.val().bioflu.total != null ? snapshot.val().bioflu.total.avgHints.toFixed(2) : 0;
        document.getElementById("biofluSeconds").innerHTML = snapshot.hasChild('bioflu') && snapshot.val().bioflu.total != null ? snapshot.val().bioflu.total.avgSeconds.toFixed(2) : 0;
        document.getElementById("biofluCorrect").innerHTML = biofluCorrectCounter;
        document.getElementById("biofluIncorrect").innerHTML = biofluIncorrectCounter;
        document.getElementById("biofluSkip").innerHTML = biofluSkipCounter;

        document.getElementById("biogesicScore").innerHTML = snapshot.hasChild('biogesic') && snapshot.val().biogesic.total != null ? snapshot.val().biogesic.total.avgScore.toFixed(2) : 0;
        document.getElementById("biogesicHints").innerHTML = snapshot.hasChild('biogesic') && snapshot.val().biogesic.total != null ? snapshot.val().biogesic.total.avgHints.toFixed(2) : 0;
        document.getElementById("biogesicSeconds").innerHTML = snapshot.hasChild('biogesic') && snapshot.val().biogesic.total != null ? snapshot.val().biogesic.total.avgSeconds.toFixed(2) : 0;
        document.getElementById("biogesicCorrect").innerHTML = biogesicCorrectCounter;
        document.getElementById("biogesicIncorrect").innerHTML = biogesicIncorrectCounter;
        document.getElementById("biogesicSkip").innerHTML = biogesicSkipCounter;

        document.getElementById("celetequeScore").innerHTML = snapshot.hasChild('celeteque') && snapshot.val().celeteque.total != null ? snapshot.val().celeteque.total.avgScore.toFixed(2) : 0;
        document.getElementById("celetequeHints").innerHTML = snapshot.hasChild('celeteque') && snapshot.val().celeteque.total != null ? snapshot.val().celeteque.total.avgHints.toFixed(2) : 0;
        document.getElementById("celetequeSeconds").innerHTML = snapshot.hasChild('celeteque') && snapshot.val().celeteque.total != null ? snapshot.val().celeteque.total.avgSeconds.toFixed(2) : 0;
        document.getElementById("celetequeCorrect").innerHTML = celetequeCorrectCounter;
        document.getElementById("celetequeIncorrect").innerHTML = celetequeIncorrectCounter;
        document.getElementById("celetequeSkip").innerHTML = celetequeSkipCounter;

        document.getElementById("centrumScore").innerHTML = snapshot.hasChild('centrum') && snapshot.val().centrum.total != null ? snapshot.val().centrum.total.avgScore.toFixed(2) : 0;
        document.getElementById("centrumHints").innerHTML = snapshot.hasChild('centrum') && snapshot.val().centrum.total != null ? snapshot.val().centrum.total.avgHints.toFixed(2) : 0;
        document.getElementById("centrumSeconds").innerHTML = snapshot.hasChild('centrum') && snapshot.val().centrum.total != null ? snapshot.val().centrum.total.avgSeconds.toFixed(2) : 0;
        document.getElementById("centrumCorrect").innerHTML = centrumCorrectCounter;
        document.getElementById("centrumIncorrect").innerHTML = centrumIncorrectCounter;
        document.getElementById("centrumSkip").innerHTML = centrumSkipCounter;

        document.getElementById("cetaphilScore").innerHTML = snapshot.hasChild('cetaphil') && snapshot.val().cetaphil.total != null ? snapshot.val().cetaphil.total.avgScore.toFixed(2) : 0;
        document.getElementById("cetaphilHints").innerHTML = snapshot.hasChild('cetaphil') && snapshot.val().cetaphil.total != null ? snapshot.val().cetaphil.total.avgHints.toFixed(2) : 0;
        document.getElementById("cetaphilSeconds").innerHTML = snapshot.hasChild('cetaphil') && snapshot.val().cetaphil.total != null ? snapshot.val().cetaphil.total.avgSeconds.toFixed(2) : 0;
        document.getElementById("cetaphilCorrect").innerHTML = cetaphilCorrectCounter;
        document.getElementById("cetaphilIncorrect").innerHTML = cetaphilIncorrectCounter;
        document.getElementById("cetaphilSkip").innerHTML = cetaphilSkipCounter;

        document.getElementById("conzaceScore").innerHTML = snapshot.hasChild('conzace') && snapshot.val().conzace.total != null ? snapshot.val().conzace.total.avgScore.toFixed(2) : 0;
        document.getElementById("conzaceHints").innerHTML = snapshot.hasChild('conzace') && snapshot.val().conzace.total != null ? snapshot.val().conzace.total.avgHints.toFixed(2) : 0;
        document.getElementById("conzaceSeconds").innerHTML = snapshot.hasChild('conzace') && snapshot.val().conzace.total != null ? snapshot.val().conzace.total.avgSeconds.toFixed(2) : 0;
        document.getElementById("conzaceCorrect").innerHTML = conzaceCorrectCounter;
        document.getElementById("conzaceIncorrect").innerHTML = conzaceIncorrectCounter;
        document.getElementById("conzaceSkip").innerHTML = conzaceSkipCounter;

        document.getElementById("decolgenScore").innerHTML = snapshot.hasChild('decolgen') && snapshot.val().decolgen.total != null ? snapshot.val().decolgen.total.avgScore.toFixed(2) : 0;
        document.getElementById("decolgenHints").innerHTML = snapshot.hasChild('decolgen') && snapshot.val().decolgen.total != null ? snapshot.val().decolgen.total.avgHints.toFixed(2) : 0;
        document.getElementById("decolgenSeconds").innerHTML = snapshot.hasChild('decolgen') && snapshot.val().decolgen.total != null ? snapshot.val().decolgen.total.avgSeconds.toFixed(2) : 0;
        document.getElementById("decolgenCorrect").innerHTML = decolgenCorrectCounter;
        document.getElementById("decolgenIncorrect").innerHTML = decolgenIncorrectCounter;
        document.getElementById("decolgenSkip").innerHTML = decolgenSkipCounter;

        document.getElementById("diatabsScore").innerHTML = snapshot.hasChild('diatabs') && snapshot.val().diatabs.total != null ? snapshot.val().diatabs.total.avgScore.toFixed(2) : 0;
        document.getElementById("diatabsHints").innerHTML = snapshot.hasChild('diatabs') && snapshot.val().diatabs.total != null ? snapshot.val().diatabs.total.avgHints.toFixed(2) : 0;
        document.getElementById("diatabsSeconds").innerHTML = snapshot.hasChild('diatabs') && snapshot.val().diatabs.total != null ? snapshot.val().diatabs.total.avgSeconds.toFixed(2) : 0;
        document.getElementById("diatabsCorrect").innerHTML = diatabsCorrectCounter;
        document.getElementById("diatabsIncorrect").innerHTML = diatabsIncorrectCounter;
        document.getElementById("diatabsSkip").innerHTML = diatabsSkipCounter;

        document.getElementById("efficascentScore").innerHTML = snapshot.hasChild('efficascent') && snapshot.val().efficascent.total != null ? snapshot.val().efficascent.total.avgScore.toFixed(2) : 0;
        document.getElementById("efficascentHints").innerHTML = snapshot.hasChild('efficascent') && snapshot.val().efficascent.total != null ? snapshot.val().efficascent.total.avgHints.toFixed(2) : 0;
        document.getElementById("efficascentSeconds").innerHTML = snapshot.hasChild('efficascent') && snapshot.val().efficascent.total != null ? snapshot.val().efficascent.total.avgSeconds.toFixed(2) : 0;
        document.getElementById("efficascentCorrect").innerHTML = efficascentCorrectCounter;
        document.getElementById("efficascentIncorrect").innerHTML = efficascentIncorrectCounter;
        document.getElementById("efficascentSkip").innerHTML = efficascentSkipCounter;

        document.getElementById("enervonScore").innerHTML = snapshot.hasChild('enervon') && snapshot.val().enervon.total != null ? snapshot.val().enervon.total.avgScore.toFixed(2) : 0;
        document.getElementById("enervonHints").innerHTML = snapshot.hasChild('enervon') && snapshot.val().enervon.total != null ? snapshot.val().enervon.total.avgHints.toFixed(2) : 0;
        document.getElementById("enervonSeconds").innerHTML = snapshot.hasChild('enervon') && snapshot.val().enervon.total != null ? snapshot.val().enervon.total.avgSeconds.toFixed(2) : 0;
        document.getElementById("enervonCorrect").innerHTML = enervonCorrectCounter;
        document.getElementById("enervonIncorrect").innerHTML = enervonIncorrectCounter;
        document.getElementById("enervonSkip").innerHTML = enervonSkipCounter;

        document.getElementById("gatoradeScore").innerHTML = snapshot.hasChild('gatorade') && snapshot.val().gatorade.total != null ? snapshot.val().gatorade.total.avgScore.toFixed(2) : 0;
        document.getElementById("gatoradeHints").innerHTML = snapshot.hasChild('gatorade') && snapshot.val().gatorade.total != null ? snapshot.val().gatorade.total.avgHints.toFixed(2) : 0;
        document.getElementById("gatoradeSeconds").innerHTML = snapshot.hasChild('gatorade') && snapshot.val().gatorade.total != null ? snapshot.val().gatorade.total.avgSeconds.toFixed(2) : 0;
        document.getElementById("gatoradeCorrect").innerHTML = gatoradeCorrectCounter;
        document.getElementById("gatoradeIncorrect").innerHTML = gatoradeIncorrectCounter;
        document.getElementById("gatoradeSkip").innerHTML = gatoradeSkipCounter;

        document.getElementById("gyneproScore").innerHTML = snapshot.hasChild('gynepro') && snapshot.val().gynepro.total != null ? snapshot.val().gynepro.total.avgScore.toFixed(2) : 0;
        document.getElementById("gyneproHints").innerHTML = snapshot.hasChild('gynepro') && snapshot.val().gynepro.total != null ? snapshot.val().gynepro.total.avgHints.toFixed(2) : 0;
        document.getElementById("gyneproSeconds").innerHTML = snapshot.hasChild('gynepro') && snapshot.val().gynepro.total != null ? snapshot.val().gynepro.total.avgSeconds.toFixed(2) : 0;
        document.getElementById("gyneproCorrect").innerHTML = gyneproCorrectCounter;
        document.getElementById("gyneproIncorrect").innerHTML = gyneproIncorrectCounter;
        document.getElementById("gyneproSkip").innerHTML = gyneproSkipCounter;

        document.getElementById("kremilsScore").innerHTML = snapshot.hasChild('kremils') && snapshot.val().kremils.total != null ? snapshot.val().kremils.total.avgScore.toFixed(2) : 0;
        document.getElementById("kremilsHints").innerHTML = snapshot.hasChild('kremils') && snapshot.val().kremils.total != null ? snapshot.val().kremils.total.avgHints.toFixed(2) : 0;
        document.getElementById("kremilsSeconds").innerHTML = snapshot.hasChild('kremils') && snapshot.val().kremils.total != null ? snapshot.val().kremils.total.avgSeconds.toFixed(2) : 0;
        document.getElementById("kremilsCorrect").innerHTML = kremilsCorrectCounter;
        document.getElementById("kremilsIncorrect").innerHTML = kremilsIncorrectCounter;
        document.getElementById("kremilsSkip").innerHTML = kremilsSkipCounter;

        document.getElementById("lactacydScore").innerHTML = snapshot.hasChild('lactacyd') && snapshot.val().lactacyd.total != null ? snapshot.val().lactacyd.total.avgScore.toFixed(2) : 0;
        document.getElementById("lactacydHints").innerHTML = snapshot.hasChild('lactacyd') && snapshot.val().lactacyd.total != null ? snapshot.val().lactacyd.total.avgHints.toFixed(2) : 0;
        document.getElementById("lactacydSeconds").innerHTML = snapshot.hasChild('lactacyd') && snapshot.val().lactacyd.total != null ? snapshot.val().lactacyd.total.avgSeconds.toFixed(2) : 0;
        document.getElementById("lactacydCorrect").innerHTML = lactacydCorrectCounter;
        document.getElementById("lactacydIncorrect").innerHTML = lactacydIncorrectCounter;
        document.getElementById("lactacydSkip").innerHTML = lactacydSkipCounter;

        document.getElementById("mcdoScore").innerHTML = snapshot.hasChild('mcdo') && snapshot.val().mcdo.total != null ? snapshot.val().mcdo.total.avgScore.toFixed(2) : 0;
        document.getElementById("mcdoHints").innerHTML = snapshot.hasChild('mcdo') && snapshot.val().mcdo.total != null ? snapshot.val().mcdo.total.avgHints.toFixed(2) : 0;
        document.getElementById("mcdoSeconds").innerHTML = snapshot.hasChild('mcdo') && snapshot.val().mcdo.total != null ? snapshot.val().mcdo.total.avgSeconds.toFixed(2) : 0;
        document.getElementById("mcdoCorrect").innerHTML = mcdoCorrectCounter;
        document.getElementById("mcdoIncorrect").innerHTML = mcdoIncorrectCounter;
        document.getElementById("mcdoSkip").innerHTML = mcdoSkipCounter;

        document.getElementById("myraScore").innerHTML = snapshot.hasChild('myra') && snapshot.val().myra.total != null ? snapshot.val().myra.total.avgScore.toFixed(2) : 0;
        document.getElementById("myraHints").innerHTML = snapshot.hasChild('myra') && snapshot.val().myra.total != null ? snapshot.val().myra.total.avgHints.toFixed(2) : 0;
        document.getElementById("myraSeconds").innerHTML = snapshot.hasChild('myra') && snapshot.val().myra.total != null ? snapshot.val().myra.total.avgSeconds.toFixed(2) : 0;
        document.getElementById("myraCorrect").innerHTML = myraCorrectCounter;
        document.getElementById("myraIncorrect").innerHTML = myraIncorrectCounter;
        document.getElementById("myraSkip").innerHTML = myraSkipCounter;

        document.getElementById("neozepScore").innerHTML = snapshot.hasChild('neozep') && snapshot.val().neozep.total != null ? snapshot.val().neozep.total.avgScore.toFixed(2) : 0;
        document.getElementById("neozepHints").innerHTML = snapshot.hasChild('neozep') && snapshot.val().neozep.total != null ? snapshot.val().neozep.total.avgHints.toFixed(2) : 0;
        document.getElementById("neozepSeconds").innerHTML = snapshot.hasChild('neozep') && snapshot.val().neozep.total != null ? snapshot.val().neozep.total.avgSeconds.toFixed(2) : 0;
        document.getElementById("neozepCorrect").innerHTML = neozepCorrectCounter;
        document.getElementById("neozepIncorrect").innerHTML = neozepIncorrectCounter;
        document.getElementById("neozepSkip").innerHTML = neozepSkipCounter;

        document.getElementById("phcareScore").innerHTML = snapshot.hasChild('phcare') && snapshot.val().phcare.total != null ? snapshot.val().phcare.total.avgScore.toFixed(2) : 0;
        document.getElementById("phcareHints").innerHTML = snapshot.hasChild('phcare') && snapshot.val().phcare.total != null ? snapshot.val().phcare.total.avgHints.toFixed(2) : 0;
        document.getElementById("phcareSeconds").innerHTML = snapshot.hasChild('phcare') && snapshot.val().phcare.total != null ? snapshot.val().phcare.total.avgSeconds.toFixed(2) : 0;
        document.getElementById("phcareCorrect").innerHTML = phcareCorrectCounter;
        document.getElementById("phcareIncorrect").innerHTML = phcareIncorrectCounter;
        document.getElementById("phcareSkip").innerHTML = phcareSkipCounter;

        document.getElementById("rexidolScore").innerHTML = snapshot.hasChild('rexidol') && snapshot.val().rexidol.total != null ? snapshot.val().rexidol.total.avgScore.toFixed(2) : 0;
        document.getElementById("rexidolHints").innerHTML = snapshot.hasChild('rexidol') && snapshot.val().rexidol.total != null ? snapshot.val().rexidol.total.avgHints.toFixed(2) : 0;
        document.getElementById("rexidolSeconds").innerHTML = snapshot.hasChild('rexidol') && snapshot.val().rexidol.total != null ? snapshot.val().rexidol.total.avgSeconds.toFixed(2) : 0;
        document.getElementById("rexidolCorrect").innerHTML = rexidolCorrectCounter;
        document.getElementById("rexidolIncorrect").innerHTML = rexidolIncorrectCounter;
        document.getElementById("rexidolSkip").innerHTML = rexidolSkipCounter;

        document.getElementById("ritemedScore").innerHTML = snapshot.hasChild('ritemed') && snapshot.val().ritemed.total != null ? snapshot.val().ritemed.total.avgScore.toFixed(2) : 0;
        document.getElementById("ritemedHints").innerHTML = snapshot.hasChild('ritemed') && snapshot.val().ritemed.total != null ? snapshot.val().ritemed.total.avgHints.toFixed(2) : 0;
        document.getElementById("ritemedSeconds").innerHTML = snapshot.hasChild('ritemed') && snapshot.val().ritemed.total != null ? snapshot.val().ritemed.total.avgSeconds.toFixed(2) : 0;
        document.getElementById("ritemedCorrect").innerHTML = ritemedCorrectCounter;
        document.getElementById("ritemedIncorrect").innerHTML = ritemedIncorrectCounter;
        document.getElementById("ritemedSkip").innerHTML = ritemedSkipCounter;

        document.getElementById("robitussinScore").innerHTML = snapshot.hasChild('robitussin') && snapshot.val().robitussin.total != null ? snapshot.val().robitussin.total.avgScore.toFixed(2) : 0;
        document.getElementById("robitussinHints").innerHTML = snapshot.hasChild('robitussin') && snapshot.val().robitussin.total != null ? snapshot.val().robitussin.total.avgHints.toFixed(2) : 0;
        document.getElementById("robitussinSeconds").innerHTML = snapshot.hasChild('robitussin') && snapshot.val().robitussin.total != null ? snapshot.val().robitussin.total.avgSeconds.toFixed(2) : 0;
        document.getElementById("robitussinCorrect").innerHTML = robitussinCorrectCounter;
        document.getElementById("robitussinIncorrect").innerHTML = robitussinIncorrectCounter;
        document.getElementById("robitussinSkip").innerHTML = robitussinSkipCounter;

        document.getElementById("skelanScore").innerHTML = snapshot.hasChild('skelan') && snapshot.val().skelan.total != null ? snapshot.val().skelan.total.avgScore.toFixed(2) : 0;
        document.getElementById("skelanHints").innerHTML = snapshot.hasChild('skelan') && snapshot.val().skelan.total != null ? snapshot.val().skelan.total.avgHints.toFixed(2) : 0;
        document.getElementById("skelanSeconds").innerHTML = snapshot.hasChild('skelan') && snapshot.val().skelan.total != null ? snapshot.val().skelan.total.avgSeconds.toFixed(2) : 0;
        document.getElementById("skelanCorrect").innerHTML = skelanCorrectCounter;
        document.getElementById("skelanIncorrect").innerHTML = skelanIncorrectCounter;
        document.getElementById("skelanSkip").innerHTML = skelanSkipCounter;

        document.getElementById("solmuxScore").innerHTML = snapshot.hasChild('solmux') && snapshot.val().solmux.total != null ? snapshot.val().solmux.total.avgScore.toFixed(2) : 0;
        document.getElementById("solmuxHints").innerHTML = snapshot.hasChild('solmux') && snapshot.val().solmux.total != null ? snapshot.val().solmux.total.avgHints.toFixed(2) : 0;
        document.getElementById("solmuxSeconds").innerHTML = snapshot.hasChild('solmux') && snapshot.val().solmux.total != null ? snapshot.val().solmux.total.avgSeconds.toFixed(2) : 0;
        document.getElementById("solmuxCorrect").innerHTML = solmuxCorrectCounter;
        document.getElementById("solmuxIncorrect").innerHTML = solmuxIncorrectCounter;
        document.getElementById("solmuxSkip").innerHTML = solmuxSkipCounter;

        document.getElementById("tgpScore").innerHTML = snapshot.hasChild('tgp') && snapshot.val().tgp.total != null ? snapshot.val().tgp.total.avgScore.toFixed(2) : 0;
        document.getElementById("tgpHints").innerHTML = snapshot.hasChild('tgp') && snapshot.val().tgp.total != null ? snapshot.val().tgp.total.avgHints.toFixed(2) : 0;
        document.getElementById("tgpSeconds").innerHTML = snapshot.hasChild('tgp') && snapshot.val().tgp.total != null ? snapshot.val().tgp.total.avgSeconds.toFixed(2) : 0;
        document.getElementById("tgpCorrect").innerHTML = tgpCorrectCounter;
        document.getElementById("tgpIncorrect").innerHTML = tgpIncorrectCounter;
        document.getElementById("tgpSkip").innerHTML = tgpSkipCounter;

        document.getElementById("uhpScore").innerHTML = snapshot.hasChild('uhp') && snapshot.val().uhp.total != null ? snapshot.val().uhp.total.avgScore.toFixed(2) : 0;
        document.getElementById("uhpHints").innerHTML = snapshot.hasChild('uhp') && snapshot.val().uhp.total != null ? snapshot.val().uhp.total.avgHints.toFixed(2) : 0;
        document.getElementById("uhpSeconds").innerHTML = snapshot.hasChild('uhp') && snapshot.val().uhp.total != null ? snapshot.val().uhp.total.avgSeconds.toFixed(2) : 0;
        document.getElementById("uhpCorrect").innerHTML = uhpCorrectCounter;
        document.getElementById("uhpIncorrect").innerHTML = uhpIncorrectCounter;
        document.getElementById("uhpSkip").innerHTML = uhpSkipCounter;

        document.getElementById("unilabScore").innerHTML = snapshot.hasChild('unilab') && snapshot.val().unilab.total != null ? snapshot.val().unilab.total.avgScore.toFixed(2) : 0;
        document.getElementById("unilabHints").innerHTML = snapshot.hasChild('unilab') && snapshot.val().unilab.total != null ? snapshot.val().unilab.total.avgHints.toFixed(2) : 0;
        document.getElementById("unilabSeconds").innerHTML = snapshot.hasChild('unilab') && snapshot.val().unilab.total != null ? snapshot.val().unilab.total.avgSeconds.toFixed(2) : 0;
        document.getElementById("unilabCorrect").innerHTML = unilabCorrectCounter;
        document.getElementById("unilabIncorrect").innerHTML = unilabIncorrectCounter;
        document.getElementById("unilabSkip").innerHTML = unilabSkipCounter;

        document.getElementById("vicksScore").innerHTML = snapshot.hasChild('vicks') && snapshot.val().vicks.total != null ? snapshot.val().vicks.total.avgScore.toFixed(2) : 0;
        document.getElementById("vicksHints").innerHTML = snapshot.hasChild('vicks') && snapshot.val().vicks.total != null ? snapshot.val().vicks.total.avgHints.toFixed(2) : 0;
        document.getElementById("vicksSeconds").innerHTML = snapshot.hasChild('vicks') && snapshot.val().vicks.total != null ? snapshot.val().vicks.total.avgSeconds.toFixed(2) : 0;
        document.getElementById("vicksCorrect").innerHTML = vicksCorrectCounter;
        document.getElementById("vicksIncorrect").innerHTML = vicksIncorrectCounter;
        document.getElementById("vicksSkip").innerHTML = vicksSkipCounter;

        var totalAvgScore = parseInt($('#advilScore').text()) + parseInt($('#alaxanScore').text()) + parseInt($('#ascofScore').text()) + parseInt($('#biofluScore').text()) +
            parseInt($('#biogesicScore').text()) + parseInt($('#celetequeScore').text()) + parseInt($('#centrumScore').text()) + parseInt($('#cetaphilScore').text()) + 
            parseInt($('#conzaceScore').text()) + parseInt($('#decolgenScore').text()) + parseInt($('#diatabsScore').text()) + parseInt($('#efficascentScore').text()) +
            parseInt($('#enervonScore').text()) + parseInt($('#gatoradeScore').text()) + parseInt($('#gyneproScore').text()) + parseInt($('#kremilsScore').text()) +
            parseInt($('#lactacydScore').text()) + parseInt($('#mcdoScore').text()) + parseInt($('#myraScore').text()) + parseInt($('#neozepScore').text()) +
            parseInt($('#phcareScore').text()) + parseInt($('#rexidolScore').text()) + parseInt($('#ritemedScore').text()) + parseInt($('#robitussinScore').text()) +
            parseInt($('#skelanScore').text()) + parseInt($('#solmuxScore').text()) + parseInt($('#tgpScore').text()) + parseInt($('#uhpScore').text()) +
            parseInt($('#unilabScore').text()) + parseInt($('#vicksScore').text()) + parseInt($('#allertaScore').text());

        var totalAvgHint = parseInt($('#advilHints').text()) + parseInt($('#alaxanHints').text()) + parseInt($('#ascofHints').text()) + parseInt($('#biofluHints').text()) +
            parseInt($('#biogesicHints').text()) + parseInt($('#celetequeHints').text()) + parseInt($('#centrumHints').text()) + parseInt($('#cetaphilHints').text()) + 
            parseInt($('#conzaceHints').text()) + parseInt($('#decolgenHints').text()) + parseInt($('#diatabsHints').text()) + parseInt($('#efficascentHints').text()) +
            parseInt($('#enervonHints').text()) + parseInt($('#gatoradeHints').text()) + parseInt($('#gyneproHints').text()) + parseInt($('#kremilsHints').text()) +
            parseInt($('#lactacydHints').text()) + parseInt($('#mcdoHints').text()) + parseInt($('#myraHints').text()) + parseInt($('#neozepHints').text()) +
            parseInt($('#phcareHints').text()) + parseInt($('#rexidolHints').text()) + parseInt($('#ritemedHints').text()) + parseInt($('#robitussinHints').text()) +
            parseInt($('#skelanHints').text()) + parseInt($('#solmuxHints').text()) + parseInt($('#tgpHints').text()) + parseInt($('#uhpHints').text()) +
            parseInt($('#unilabHints').text()) + parseInt($('#vicksHints').text()) + parseInt($('#allertaHints').text());

        var totalAvgSecond = parseInt($('#advilSeconds').text()) + parseInt($('#alaxanSeconds').text()) + parseInt($('#ascofSeconds').text()) + parseInt($('#biofluSeconds').text()) +
            parseInt($('#biogesicSeconds').text()) + parseInt($('#celetequeSeconds').text()) + parseInt($('#centrumSeconds').text()) + parseInt($('#cetaphilSeconds').text()) + 
            parseInt($('#conzaceSeconds').text()) + parseInt($('#decolgenSeconds').text()) + parseInt($('#diatabsSeconds').text()) + parseInt($('#efficascentSeconds').text()) +
            parseInt($('#enervonSeconds').text()) + parseInt($('#gatoradeSeconds').text()) + parseInt($('#gyneproSeconds').text()) + parseInt($('#kremilsSeconds').text()) +
            parseInt($('#lactacydSeconds').text()) + parseInt($('#mcdoSeconds').text()) + parseInt($('#myraSeconds').text()) + parseInt($('#neozepSeconds').text()) +
            parseInt($('#phcareSeconds').text()) + parseInt($('#rexidolSeconds').text()) + parseInt($('#ritemedSeconds').text()) + parseInt($('#robitussinSeconds').text()) +
            parseInt($('#skelanSeconds').text()) + parseInt($('#solmuxSeconds').text()) + parseInt($('#tgpSeconds').text()) + parseInt($('#uhpSeconds').text()) +
            parseInt($('#unilabSeconds').text()) + parseInt($('#vicksSeconds').text()) + parseInt($('#allertaSeconds').text());

        totalAvgScore = totalAvgScore / 31;
        totalAvgHint  = totalAvgHint / 31;
        totalAvgSecond  = totalAvgSecond / 31;

        document.getElementById("totalRespondentsOnFirstAttempt").innerHTML = totalRespondents;
        document.getElementById("totalAvgScore").innerHTML = totalAvgScore.toFixed(2);
        document.getElementById("totalAvgHint").innerHTML = totalAvgHint.toFixed(2);
        document.getElementById("totalAvgSecond").innerHTML = totalAvgSecond.toFixed(2);
        //$('#total2').text(totalRespondents);

        //$('td:contains("NaN")').text(0);


        $('.sk-cube-grid').hide();
        $('#exportButton').show();
        $('#exportButton2').show();
        $('#mainTable').show();
        //$('#mainTable').DataTable();


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
