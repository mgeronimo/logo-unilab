window.onload = function() {

    var advilCorrectCounter = 0, 
        advilIncorrectCounter = 0, 
        advilSkipCounter = 0,
        advilTotalAttempt=0,
        advilTotalScore=0,
        advilTotalRespondentOnFirstAttempt=0,
        advilScoreArray = [],
        advilHintsArray = [],
        advilSecondsArray = [];

    var alaxanCorrectCounter = 0, 
        alaxanIncorrectCounter = 0, 
        alaxanSkipCounter = 0;
        alaxanTotalAttempt=0,
        alaxanTotalScore=0,
        alaxanTotalRespondentOnFirstAttempt=0,
        alaxanScoreArray = [],
        alaxanHintsArray = [],
        alaxanSecondsArray = [];

    var allertaCorrectCounter = 0, 
        allertaIncorrectCounter = 0, 
        allertaSkipCounter = 0;
        allertaTotalAttempt=0,
        allertaTotalScore=0,
        allertaTotalRespondentOnFirstAttempt=0,
        allertaScoreArray = [],
        allertaHintsArray = [],
        allertaSecondsArray = [];

    var ascofCorrectCounter = 0, 
        ascofIncorrectCounter = 0, 
        ascofSkipCounter = 0;
        ascofTotalAttempt=0,
        ascofTotalScore=0,
        ascofTotalRespondentOnFirstAttempt=0,
        ascofScoreArray = [],
        ascofHintsArray = [],
        ascofSecondsArray = [];

    var biofluCorrectCounter = 0, 
        biofluIncorrectCounter = 0, 
        biofluSkipCounter = 0;
        biofluTotalAttempt=0,
        biofluTotalScore=0,
        biofluTotalRespondentOnFirstAttempt=0,
        biofluScoreArray = [],
        biofluHintsArray = [],
        biofluSecondsArray = [];

    var biogesicCorrectCounter = 0, 
        biogesicIncorrectCounter = 0, 
        biogesicSkipCounter = 0;
        biogesicTotalAttempt=0,
        biogesicTotalScore=0,
        biogesicTotalRespondentOnFirstAttempt=0,
        biogesicScoreArray = [],
        biogesicHintsArray = [],
        biogesicSecondsArray = [];

    var celetequeCorrectCounter = 0, 
        celetequeIncorrectCounter = 0, 
        celetequeSkipCounter = 0;
        celetequeTotalAttempt=0,
        celetequeTotalScore=0,
        celetequeTotalRespondentOnFirstAttempt=0,
        celetequeScoreArray = [],
        celetequeHintsArray = [],
        celetequeSecondsArray = [];

    var centrumCorrectCounter = 0, 
        centrumIncorrectCounter = 0, 
        centrumSkipCounter = 0;
        centrumTotalAttempt=0,
        centrumTotalScore=0,
        centrumTotalRespondentOnFirstAttempt=0,
        centrumScoreArray = [],
        centrumHintsArray = [],
        centrumSecondsArray = [];

    var cetaphilCorrectCounter = 0, 
        cetaphilIncorrectCounter = 0, 
        cetaphilSkipCounter = 0;
        cetaphilTotalAttempt=0,
        cetaphilTotalScore=0,
        cetaphilTotalRespondentOnFirstAttempt=0,
        cetaphilScoreArray = [],
        cetaphilHintsArray = [],
        cetaphilSecondsArray = [];

    var conzaceCorrectCounter = 0, 
        conzaceIncorrectCounter = 0, 
        conzaceSkipCounter = 0;
        conzaceTotalAttempt=0,
        conzaceTotalScore=0,
        conzaceTotalRespondentOnFirstAttempt=0,
        conzaceScoreArray = [],
        conzaceHintsArray = [],
        conzaceSecondsArray = [];

    var decolgenCorrectCounter = 0, 
        decolgenIncorrectCounter = 0, 
        decolgenSkipCounter = 0;
        decolgenTotalAttempt=0,
        decolgenTotalScore=0,
        decolgenTotalRespondentOnFirstAttempt=0,
        decolgenScoreArray = [],
        decolgenHintsArray = [],
        decolgenSecondsArray = [];

    var diatabsCorrectCounter = 0, 
        diatabsIncorrectCounter = 0, 
        diatabsSkipCounter = 0;
        diatabsTotalAttempt=0,
        diatabsTotalScore=0,
        diatabsTotalRespondentOnFirstAttempt=0,
        diatabsScoreArray = [],
        diatabsHintsArray = [],
        diatabsSecondsArray = [];

    var efficascentCorrectCounter = 0, 
        efficascentIncorrectCounter = 0, 
        efficascentSkipCounter = 0;
        efficascentTotalAttempt=0,
        efficascentTotalScore=0,
        efficascentTotalRespondentOnFirstAttempt=0,
        efficascentScoreArray = [],
        efficascentHintsArray = [],
        efficascentSecondsArray = [];

    var enervonCorrectCounter = 0, 
        enervonIncorrectCounter = 0, 
        enervonSkipCounter = 0;
        enervonTotalAttempt=0,
        enervonTotalScore=0,
        enervonTotalRespondentOnFirstAttempt=0,
        enervonScoreArray = [],
        enervonHintsArray = [],
        enervonSecondsArray = [];

    var gatoradeCorrectCounter = 0, 
        gatoradeIncorrectCounter = 0, 
        gatoradeSkipCounter = 0;
        gatoradeTotalAttempt=0,
        gatoradeTotalScore=0,
        gatoradeTotalRespondentOnFirstAttempt=0,
        gatoradeScoreArray = [],
        gatoradeHintsArray = [],
        gatoradeSecondsArray = [];

    var gyneproCorrectCounter = 0, 
        gyneproIncorrectCounter = 0, 
        gyneproSkipCounter = 0;
        gyneproTotalAttempt=0,
        gyneproTotalScore=0,
        gyneproTotalRespondentOnFirstAttempt=0,
        gyneproScoreArray = [],
        gyneproHintsArray = [],
        gyneproSecondsArray = [];

    var kremilsCorrectCounter = 0, 
        kremilsIncorrectCounter = 0, 
        kremilsSkipCounter = 0;
        kremilsTotalAttempt=0,
        kremilsTotalScore=0,
        kremilsTotalRespondentOnFirstAttempt=0,
        kremilsScoreArray = [],
        kremilsHintsArray = [],
        kremilsSecondsArray = [];

    var lactacydCorrectCounter = 0, 
        lactacydIncorrectCounter = 0, 
        lactacydSkipCounter = 0;
        lactacydTotalAttempt=0,
        lactacydTotalScore=0,
        lactacydTotalRespondentOnFirstAttempt=0,
        lactacydScoreArray = [],
        lactacydHintsArray = [],
        lactacydSecondsArray = [];

    var mcdoCorrectCounter = 0, 
        mcdoIncorrectCounter = 0, 
        mcdoSkipCounter = 0;
        mcdoTotalAttempt=0,
        mcdoTotalScore=0,
        mcdoTotalRespondentOnFirstAttempt=0,
        mcdoScoreArray = [],
        mcdoHintsArray = [],
        mcdoSecondsArray = [];

    var myraCorrectCounter = 0, 
        myraIncorrectCounter = 0, 
        myraSkipCounter = 0;
        myraTotalAttempt=0,
        myraTotalScore=0,
        myraTotalRespondentOnFirstAttempt=0,
        myraScoreArray = [],
        myraHintsArray = [],
        myraSecondsArray = [];

    var neozepCorrectCounter = 0, 
        neozepIncorrectCounter = 0, 
        neozepSkipCounter = 0;
        neozepTotalAttempt=0,
        neozepTotalScore=0,
        neozepTotalRespondentOnFirstAttempt=0,
        neozepScoreArray = [],
        neozepHintsArray = [],
        neozepSecondsArray = [];

    var phcareCorrectCounter = 0, 
        phcareIncorrectCounter = 0, 
        phcareSkipCounter = 0;
        phcareTotalAttempt=0,
        phcareTotalScore=0,
        phcareTotalRespondentOnFirstAttempt=0,
        phcareScoreArray = [],
        phcareHintsArray = [],
        phcareSecondsArray = [];

    var rexidolCorrectCounter = 0, 
        rexidolIncorrectCounter = 0, 
        rexidolSkipCounter = 0;
        rexidolTotalAttempt=0,
        rexidolTotalScore=0,
        rexidolTotalRespondentOnFirstAttempt=0,
        rexidolScoreArray = [],
        rexidolHintsArray = [],
        rexidolSecondsArray = [];

    var ritemedCorrectCounter = 0, 
        ritemedIncorrectCounter = 0, 
        ritemedSkipCounter = 0;
        ritemedTotalAttempt=0,
        ritemedTotalScore=0,
        ritemedTotalRespondentOnFirstAttempt=0,
        ritemedScoreArray = [],
        ritemedHintsArray = [],
        ritemedSecondsArray = [];

    var robitussinCorrectCounter = 0, 
        robitussinIncorrectCounter = 0, 
        robitussinSkipCounter = 0;
        robitussinTotalAttempt=0,
        robitussinTotalScore=0,
        robitussinTotalRespondentOnFirstAttempt=0,
        robitussinScoreArray = [],
        robitussinHintsArray = [],
        robitussinSecondsArray = [];

    var skelanCorrectCounter = 0, 
        skelanIncorrectCounter = 0, 
        skelanSkipCounter = 0;
        skelanTotalAttempt=0,
        skelanTotalScore=0,
        skelanTotalRespondentOnFirstAttempt=0,
        skelanScoreArray = [],
        skelanHintsArray = [],
        skelanSecondsArray = [];

    var solmuxCorrectCounter = 0, 
        solmuxIncorrectCounter = 0, 
        solmuxSkipCounter = 0;
        solmuxTotalAttempt=0,
        solmuxTotalScore=0,
        solmuxTotalRespondentOnFirstAttempt=0,
        solmuxScoreArray = [],
        solmuxHintsArray = [],
        solmuxSecondsArray = [];

    var tgpCorrectCounter = 0, 
        tgpIncorrectCounter = 0, 
        tgpSkipCounter = 0;
        tgpTotalAttempt=0,
        tgpTotalScore=0,
        tgpTotalRespondentOnFirstAttempt=0,
        tgpScoreArray = [],
        tgpHintsArray = [],
        tgpSecondsArray = [];

    var uhpCorrectCounter = 0, 
        uhpIncorrectCounter = 0, 
        uhpSkipCounter = 0;
        uhpTotalAttempt=0,
        uhpTotalScore=0,
        uhpTotalRespondentOnFirstAttempt=0,
        uhpScoreArray = [],
        uhpHintsArray = [],
        uhpSecondsArray = [];

    var unilabCorrectCounter = 0, 
        unilabIncorrectCounter = 0, 
        unilabSkipCounter = 0;
        unilabTotalAttempt=0,
        unilabTotalScore=0,
        unilabTotalRespondentOnFirstAttempt=0,
        unilabScoreArray = [],
        unilabHintsArray = [],
        unilabSecondsArray = [];

    var vicksCorrectCounter = 0, 
        vicksIncorrectCounter = 0, 
        vicksSkipCounter = 0;
        vicksTotalAttempt=0,
        vicksTotalScore=0,
        vicksTotalRespondentOnFirstAttempt=0,
        vicksScoreArray = [],
        vicksHintsArray = [],
        vicksSecondsArray = [];

    var totalRespondents = 0;
    var score = 0;
    var totalScore = 0;


    var respondent = firebase.database().ref().child("users");

    respondent.once("value").then(function(snapshot) {
        //console.log(snapshot.val());
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

                if(childSnapshot.hasChild('advil')) {
                    advilCorrectCounter = (advilCorrectCounter + (childSnapshot.val().advil.firstGuess == true ? 1 : 0));
                    advilIncorrectCounter = (advilIncorrectCounter + (childSnapshot.val().advil.firstGuess == false ? 1 : 0));
                    score = score + childSnapshot.val().advil.firstScore;
                    totalScore = totalScore + childSnapshot.val().advil.firstScore;
                    advilTotalScore = advilTotalScore + childSnapshot.val().advil.firstScore;
                    childSnapshot.val().advil.firstScore > 0 ? advilScoreArray.push(childSnapshot.val().advil.firstScore) : '';
                    childSnapshot.val().advil.firstHints > 0 ? advilHintsArray.push(childSnapshot.val().advil.firstHints) : '';
                    childSnapshot.val().advil.firstSeconds > 0 ? advilSecondsArray.push(childSnapshot.val().advil.firstSeconds) : '';
                    advilTotalRespondentOnFirstAttempt = advilTotalRespondentOnFirstAttempt + (childSnapshot.val().advil.attempt == 1 ? 1 : 0);
                    advilTotalAttempt = advilTotalAttempt + childSnapshot.val().advil.attempt;
                }else{
                    advilSkipCounter++;
                }

                if(childSnapshot.hasChild('alaxan')) {
                    alaxanCorrectCounter = (alaxanCorrectCounter + (childSnapshot.val().alaxan.firstGuess == true ? 1 : 0));
                    alaxanIncorrectCounter = (alaxanIncorrectCounter + (childSnapshot.val().alaxan.firstGuess == false ? 1 : 0));
                    score = score + childSnapshot.val().alaxan.firstScore;    
                    totalScore = totalScore + childSnapshot.val().alaxan.firstScore;
                    alaxanTotalScore = alaxanTotalScore + childSnapshot.val().alaxan.firstScore;
                    childSnapshot.val().alaxan.firstScore > 0 ? alaxanScoreArray.push(childSnapshot.val().alaxan.firstScore) : '';
                    childSnapshot.val().alaxan.firstHints > 0 ? alaxanHintsArray.push(childSnapshot.val().alaxan.firstHints) : '';
                    childSnapshot.val().alaxan.firstSeconds > 0 ? alaxanSecondsArray.push(childSnapshot.val().alaxan.firstSeconds) : '';
                    alaxanTotalRespondentOnFirstAttempt = alaxanTotalRespondentOnFirstAttempt + (childSnapshot.val().alaxan.attempt == 1 ? 1 : 0);
                    alaxanTotalAttempt = alaxanTotalAttempt + childSnapshot.val().alaxan.attempt;            
                }else{
                    unilabSkipCounter++;
                }

                if(childSnapshot.hasChild('allerta')) {
                    allertaCorrectCounter = (allertaCorrectCounter + (childSnapshot.val().allerta.firstGuess == true ? 1 : 0));
                    allertaIncorrectCounter = (allertaIncorrectCounter + (childSnapshot.val().allerta.firstGuess == false ? 1 : 0));
                    score = score + childSnapshot.val().allerta.firstScore;
                    totalScore = totalScore + childSnapshot.val().allerta.firstScore;
                    allertaTotalScore = allertaTotalScore + childSnapshot.val().allerta.firstScore;
                    childSnapshot.val().allerta.firstScore > 0 ? allertaScoreArray.push(childSnapshot.val().allerta.firstScore) : '';
                    childSnapshot.val().allerta.firstHints > 0 ? allertaHintsArray.push(childSnapshot.val().allerta.firstHints) : '';
                    childSnapshot.val().allerta.firstSeconds > 0 ? allertaSecondsArray.push(childSnapshot.val().allerta.firstSeconds) : '';
                    allertaTotalRespondentOnFirstAttempt = allertaTotalRespondentOnFirstAttempt + (childSnapshot.val().allerta.attempt == 1 ? 1 : 0);
                    allertaTotalAttempt = allertaTotalAttempt + childSnapshot.val().allerta.attempt; 
                }else{
                    allertaSkipCounter++;
                }

                if(childSnapshot.hasChild('ascof')) {
                    ascofCorrectCounter = (ascofCorrectCounter + (childSnapshot.val().ascof.firstGuess == true ? 1 : 0));
                    ascofIncorrectCounter = (ascofIncorrectCounter + (childSnapshot.val().ascof.firstGuess == false ? 1 : 0));
                    score = score + childSnapshot.val().ascof.firstScore;
                    totalScore = totalScore + childSnapshot.val().ascof.firstScore;
                    ascofTotalScore = ascofTotalScore + childSnapshot.val().ascof.firstScore;
                    childSnapshot.val().ascof.firstScore > 0 ? ascofScoreArray.push(childSnapshot.val().ascof.firstScore) : '';
                    childSnapshot.val().ascof.firstHints > 0 ? ascofHintsArray.push(childSnapshot.val().ascof.firstHints) : '';
                    childSnapshot.val().ascof.firstSeconds > 0 ? ascofSecondsArray.push(childSnapshot.val().ascof.firstSeconds) : '';
                    ascofTotalRespondentOnFirstAttempt = ascofTotalRespondentOnFirstAttempt + (childSnapshot.val().ascof.attempt == 1 ? 1 : 0);
                    ascofTotalAttempt = ascofTotalAttempt + childSnapshot.val().ascof.attempt; 
                }else{
                    ascofSkipCounter++;
                }

                if(childSnapshot.hasChild('bioflu')) {
                    biofluCorrectCounter = (biofluCorrectCounter + (childSnapshot.val().bioflu.firstGuess == true ? 1 : 0));
                    biofluIncorrectCounter = (biofluIncorrectCounter + (childSnapshot.val().bioflu.firstGuess == false ? 1 : 0));
                    score = score + childSnapshot.val().bioflu.firstScore;
                    totalScore = totalScore + childSnapshot.val().bioflu.firstScore;
                    biofluTotalScore = biofluTotalScore + childSnapshot.val().bioflu.firstScore;
                    childSnapshot.val().bioflu.firstScore > 0 ? biofluScoreArray.push(childSnapshot.val().bioflu.firstScore) : '';
                    childSnapshot.val().bioflu.firstHints > 0 ? biofluHintsArray.push(childSnapshot.val().bioflu.firstHints) : '';
                    childSnapshot.val().bioflu.firstSeconds > 0 ? biofluSecondsArray.push(childSnapshot.val().bioflu.firstSeconds) : '';
                    biofluTotalRespondentOnFirstAttempt = biofluTotalRespondentOnFirstAttempt + (childSnapshot.val().bioflu.attempt == 1 ? 1 : 0);
                    biofluTotalAttempt = biofluTotalAttempt + childSnapshot.val().bioflu.attempt; 
                }else{
                    biofluSkipCounter++;
                }

                if(childSnapshot.hasChild('biogesic')) {
                    biogesicCorrectCounter = (biogesicCorrectCounter + (childSnapshot.val().biogesic.firstGuess == true ? 1 : 0));
                    biogesicIncorrectCounter = (biogesicIncorrectCounter + (childSnapshot.val().biogesic.firstGuess == false ? 1 : 0));
                    score = score + childSnapshot.val().biogesic.firstScore;
                    totalScore = totalScore + childSnapshot.val().biogesic.firstScore;
                    biogesicTotalScore = biogesicTotalScore + childSnapshot.val().biogesic.firstScore;
                    childSnapshot.val().biogesic.firstScore > 0 ? biogesicScoreArray.push(childSnapshot.val().biogesic.firstScore) : '';
                    childSnapshot.val().biogesic.firstHints > 0 ? biogesicHintsArray.push(childSnapshot.val().biogesic.firstHints) : '';
                    childSnapshot.val().biogesic.firstSeconds > 0 ? biogesicSecondsArray.push(childSnapshot.val().biogesic.firstSeconds) : '';
                    biogesicTotalRespondentOnFirstAttempt = biogesicTotalRespondentOnFirstAttempt + (childSnapshot.val().biogesic.attempt == 1 ? 1 : 0);
                    biogesicTotalAttempt = biogesicTotalAttempt + childSnapshot.val().biogesic.attempt; 
                }else{
                    biogesicSkipCounter++;
                }

                if(childSnapshot.hasChild('celeteque')) {
                    celetequeCorrectCounter = (celetequeCorrectCounter + (childSnapshot.val().celeteque.firstGuess == true ? 1 : 0));
                    celetequeIncorrectCounter = (celetequeIncorrectCounter + (childSnapshot.val().celeteque.firstGuess == false ? 1 : 0));
                    score = score + childSnapshot.val().celeteque.firstScore;
                    totalScore = totalScore + childSnapshot.val().celeteque.firstScore;
                    celetequeTotalScore = celetequeTotalScore + childSnapshot.val().celeteque.firstScore;
                    childSnapshot.val().celeteque.firstScore > 0 ? celetequeScoreArray.push(childSnapshot.val().celeteque.firstScore) : '';
                    childSnapshot.val().celeteque.firstHints > 0 ? celetequeHintsArray.push(childSnapshot.val().celeteque.firstHints) : '';
                    childSnapshot.val().celeteque.firstSeconds > 0 ? celetequeSecondsArray.push(childSnapshot.val().celeteque.firstSeconds) : '';
                    celetequeTotalRespondentOnFirstAttempt = celetequeTotalRespondentOnFirstAttempt + (childSnapshot.val().celeteque.attempt == 1 ? 1 : 0);
                    celetequeTotalAttempt = celetequeTotalAttempt + childSnapshot.val().celeteque.attempt; 
                }else{
                    celetequeSkipCounter++;
                }

                if(childSnapshot.hasChild('centrum')) {
                    centrumCorrectCounter = (centrumCorrectCounter + (childSnapshot.val().centrum.firstGuess == true ? 1 : 0));
                    centrumIncorrectCounter = (centrumIncorrectCounter + (childSnapshot.val().centrum.firstGuess == false ? 1 : 0));
                    score = score + childSnapshot.val().centrum.firstScore;
                    totalScore = totalScore + childSnapshot.val().centrum.firstScore;
                    centrumTotalScore = centrumTotalScore + childSnapshot.val().centrum.firstScore;
                    childSnapshot.val().centrum.firstScore > 0 ? centrumScoreArray.push(childSnapshot.val().centrum.firstScore) : '';
                    childSnapshot.val().centrum.firstHints > 0 ? centrumHintsArray.push(childSnapshot.val().centrum.firstHints) : '';
                    childSnapshot.val().centrum.firstSeconds > 0 ? centrumSecondsArray.push(childSnapshot.val().centrum.firstSeconds) : '';
                    centrumTotalRespondentOnFirstAttempt = centrumTotalRespondentOnFirstAttempt + (childSnapshot.val().centrum.attempt == 1 ? 1 : 0);
                    centrumTotalAttempt = centrumTotalAttempt + (childSnapshot.val().centrum.attempt > 0 ? childSnapshot.val().centrum.attempt : 0); 
                }else{
                    centrumSkipCounter++;
                }

                if(childSnapshot.hasChild('cetaphil')) {
                    cetaphilCorrectCounter = (cetaphilCorrectCounter + (childSnapshot.val().cetaphil.firstGuess == true ? 1 : 0));
                    cetaphilIncorrectCounter = (cetaphilIncorrectCounter + (childSnapshot.val().cetaphil.firstGuess == false ? 1 : 0));
                    score = score + childSnapshot.val().cetaphil.firstScore;
                    totalScore = totalScore + childSnapshot.val().cetaphil.firstScore;
                    cetaphilTotalScore = cetaphilTotalScore + childSnapshot.val().cetaphil.firstScore;
                    childSnapshot.val().cetaphil.firstScore > 0 ? cetaphilScoreArray.push(childSnapshot.val().cetaphil.firstScore) : '';
                    childSnapshot.val().cetaphil.firstHints > 0 ? cetaphilHintsArray.push(childSnapshot.val().cetaphil.firstHints) : '';
                    childSnapshot.val().cetaphil.firstSeconds > 0 ? cetaphilSecondsArray.push(childSnapshot.val().cetaphil.firstSeconds) : '';
                    cetaphilTotalRespondentOnFirstAttempt = cetaphilTotalRespondentOnFirstAttempt + (childSnapshot.val().cetaphil.attempt == 1 ? 1 : 0);
                    cetaphilTotalAttempt = cetaphilTotalAttempt + childSnapshot.val().cetaphil.attempt; 
                }else{
                    cetaphilSkipCounter++;
                }

                if(childSnapshot.hasChild('conzace')) {
                    conzaceCorrectCounter = (conzaceCorrectCounter + (childSnapshot.val().conzace.firstGuess == true ? 1 : 0));
                    conzaceIncorrectCounter = (conzaceIncorrectCounter + (childSnapshot.val().conzace.firstGuess == false ? 1 : 0));
                    score = score + childSnapshot.val().conzace.firstScore;
                    totalScore = totalScore + childSnapshot.val().conzace.firstScore;
                    conzaceTotalScore = conzaceTotalScore + childSnapshot.val().conzace.firstScore;
                    childSnapshot.val().conzace.firstScore > 0 ? conzaceScoreArray.push(childSnapshot.val().conzace.firstScore) : '';
                    childSnapshot.val().conzace.firstHints > 0 ? conzaceHintsArray.push(childSnapshot.val().conzace.firstHints) : '';
                    childSnapshot.val().conzace.firstSeconds > 0 ? conzaceSecondsArray.push(childSnapshot.val().conzace.firstSeconds) : '';
                    conzaceTotalRespondentOnFirstAttempt = conzaceTotalRespondentOnFirstAttempt + (childSnapshot.val().conzace.attempt == 1 ? 1 : 0);
                    conzaceTotalAttempt = conzaceTotalAttempt + childSnapshot.val().conzace.attempt; 
                }else{
                    conzaceSkipCounter++;
                }

                if(childSnapshot.hasChild('decolgen')) {
                    decolgenCorrectCounter = (decolgenCorrectCounter + (childSnapshot.val().decolgen.firstGuess == true ? 1 : 0));
                    decolgenIncorrectCounter = (decolgenIncorrectCounter + (childSnapshot.val().decolgen.firstGuess == false ? 1 : 0));
                    score = score + childSnapshot.val().decolgen.firstScore;
                    totalScore = totalScore + childSnapshot.val().decolgen.firstScore;
                    decolgenTotalScore = decolgenTotalScore + childSnapshot.val().decolgen.firstScore;
                    childSnapshot.val().decolgen.firstScore > 0 ? decolgenScoreArray.push(childSnapshot.val().decolgen.firstScore) : '';
                    childSnapshot.val().decolgen.firstHints > 0 ? decolgenHintsArray.push(childSnapshot.val().decolgen.firstHints) : '';
                    childSnapshot.val().decolgen.firstSeconds > 0 ? decolgenSecondsArray.push(childSnapshot.val().decolgen.firstSeconds) : '';
                    decolgenTotalRespondentOnFirstAttempt = decolgenTotalRespondentOnFirstAttempt + (childSnapshot.val().decolgen.attempt == 1 ? 1 : 0);
                    decolgenTotalAttempt = decolgenTotalAttempt + childSnapshot.val().decolgen.attempt; 
                }else{
                    decolgenSkipCounter++;
                }

                if(childSnapshot.hasChild('diatabs')) {
                    diatabsCorrectCounter = (diatabsCorrectCounter + (childSnapshot.val().diatabs.firstGuess == true ? 1 : 0));
                    diatabsIncorrectCounter = (diatabsIncorrectCounter + (childSnapshot.val().diatabs.firstGuess == false ? 1 : 0));
                    score = score + childSnapshot.val().diatabs.firstScore;
                    totalScore = totalScore + childSnapshot.val().diatabs.firstScore;
                    diatabsTotalScore = diatabsTotalScore + childSnapshot.val().diatabs.firstScore;
                    childSnapshot.val().diatabs.firstScore > 0 ? diatabsScoreArray.push(childSnapshot.val().diatabs.firstScore) : '';
                    childSnapshot.val().diatabs.firstHints > 0 ? diatabsHintsArray.push(childSnapshot.val().diatabs.firstHints) : '';
                    childSnapshot.val().diatabs.firstSeconds > 0 ? diatabsSecondsArray.push(childSnapshot.val().diatabs.firstSeconds) : '';
                    diatabsTotalRespondentOnFirstAttempt = diatabsTotalRespondentOnFirstAttempt + (childSnapshot.val().diatabs.attempt == 1 ? 1 : 0);
                    diatabsTotalAttempt = diatabsTotalAttempt + ( childSnapshot.val().diatabs.attempt > 0 ? childSnapshot.val().diatabs.attempt : 0); 
                }else{
                    diatabsSkipCounter++;
                }

                if(childSnapshot.hasChild('efficascent')) {
                    efficascentCorrectCounter = (efficascentCorrectCounter + (childSnapshot.val().efficascent.firstGuess == true ? 1 : 0));
                    efficascentIncorrectCounter = (efficascentIncorrectCounter + (childSnapshot.val().efficascent.firstGuess == false ? 1 : 0));
                    score = score + childSnapshot.val().efficascent.firstScore;
                    totalScore = totalScore + childSnapshot.val().efficascent.firstScore;
                    efficascentTotalScore = efficascentTotalScore + childSnapshot.val().efficascent.firstScore;
                    childSnapshot.val().efficascent.firstScore > 0 ? efficascentScoreArray.push(childSnapshot.val().efficascent.firstScore) : '';
                    childSnapshot.val().efficascent.firstHints > 0 ? efficascentHintsArray.push(childSnapshot.val().efficascent.firstHints) : '';
                    childSnapshot.val().efficascent.firstSeconds > 0 ? efficascentSecondsArray.push(childSnapshot.val().efficascent.firstSeconds) : '';
                    efficascentTotalRespondentOnFirstAttempt = efficascentTotalRespondentOnFirstAttempt + (childSnapshot.val().efficascent.attempt == 1 ? 1 : 0);
                    efficascentTotalAttempt = efficascentTotalAttempt + ( childSnapshot.val().efficascent.attempt > 0 ? childSnapshot.val().efficascent.attempt : 0); 
                }else{
                    efficascentSkipCounter++;
                }

                if(childSnapshot.hasChild('enervon')) {
                    enervonCorrectCounter = (enervonCorrectCounter + (childSnapshot.val().enervon.firstGuess == true ? 1 : 0));
                    enervonIncorrectCounter = (enervonIncorrectCounter + (childSnapshot.val().enervon.firstGuess == false ? 1 : 0));
                    score = score + childSnapshot.val().enervon.firstScore;
                    totalScore = totalScore + childSnapshot.val().enervon.firstScore;
                    enervonTotalScore = enervonTotalScore + childSnapshot.val().enervon.firstScore;
                    childSnapshot.val().enervon.firstScore > 0 ? enervonScoreArray.push(childSnapshot.val().enervon.firstScore) : '';
                    childSnapshot.val().enervon.firstHints > 0 ? enervonHintsArray.push(childSnapshot.val().enervon.firstHints) : '';
                    childSnapshot.val().enervon.firstSeconds > 0 ? enervonSecondsArray.push(childSnapshot.val().enervon.firstSeconds) : '';
                    enervonTotalRespondentOnFirstAttempt = enervonTotalRespondentOnFirstAttempt + (childSnapshot.val().enervon.attempt == 1 ? 1 : 0);
                    enervonTotalAttempt = enervonTotalAttempt + childSnapshot.val().enervon.attempt; 
                }else{
                    enervonSkipCounter++;
                }

                if(childSnapshot.hasChild('gatorade')) {
                    gatoradeCorrectCounter = (gatoradeCorrectCounter + (childSnapshot.val().gatorade.firstGuess == true ? 1 : 0));
                    gatoradeIncorrectCounter = (gatoradeIncorrectCounter + (childSnapshot.val().gatorade.firstGuess == false ? 1 : 0));
                    score = score + childSnapshot.val().gatorade.firstScore;
                    totalScore = totalScore + childSnapshot.val().gatorade.firstScore;
                    gatoradeTotalScore = gatoradeTotalScore + childSnapshot.val().gatorade.firstScore;
                    childSnapshot.val().gatorade.firstScore > 0 ? gatoradeScoreArray.push(childSnapshot.val().gatorade.firstScore) : '';
                    childSnapshot.val().gatorade.firstHints > 0 ? gatoradeHintsArray.push(childSnapshot.val().gatorade.firstHints) : '';
                    childSnapshot.val().gatorade.firstSeconds > 0 ? gatoradeSecondsArray.push(childSnapshot.val().gatorade.firstSeconds) : '';
                    gatoradeTotalRespondentOnFirstAttempt = gatoradeTotalRespondentOnFirstAttempt + (childSnapshot.val().gatorade.attempt == 1 ? 1 : 0);
                    gatoradeTotalAttempt = gatoradeTotalAttempt + childSnapshot.val().gatorade.attempt; 
                }else{
                    gatoradeSkipCounter++;
                }

                if(childSnapshot.hasChild('gynepro')) {
                    gyneproCorrectCounter = (gyneproCorrectCounter + (childSnapshot.val().gynepro.firstGuess == true ? 1 : 0));
                    gyneproIncorrectCounter = (gyneproIncorrectCounter + (childSnapshot.val().gynepro.firstGuess == false ? 1 : 0));
                    score = score + childSnapshot.val().gynepro.firstScore;
                    totalScore = totalScore + childSnapshot.val().gynepro.firstScore;
                    gyneproTotalScore = gyneproTotalScore + childSnapshot.val().gynepro.firstScore;
                    childSnapshot.val().gynepro.firstScore > 0 ? gyneproScoreArray.push(childSnapshot.val().gynepro.firstScore) : '';
                    childSnapshot.val().gynepro.firstHints > 0 ? gyneproHintsArray.push(childSnapshot.val().gynepro.firstHints) : '';
                    childSnapshot.val().gynepro.firstSeconds > 0 ? gyneproSecondsArray.push(childSnapshot.val().gynepro.firstSeconds) : '';
                    gyneproTotalRespondentOnFirstAttempt = gyneproTotalRespondentOnFirstAttempt + (childSnapshot.val().gynepro.attempt == 1 ? 1 : 0);
                    gyneproTotalAttempt = gyneproTotalAttempt + childSnapshot.val().gynepro.attempt; 
                }else{
                    gyneproSkipCounter++;
                }

                if(childSnapshot.hasChild('kremils')) {
                    kremilsCorrectCounter = (kremilsCorrectCounter + (childSnapshot.val().kremils.firstGuess == true ? 1 : 0));
                    kremilsIncorrectCounter = (kremilsIncorrectCounter + (childSnapshot.val().kremils.firstGuess == false ? 1 : 0));
                    score = score + childSnapshot.val().kremils.firstScore;
                    totalScore = totalScore + childSnapshot.val().kremils.firstScore;
                    kremilsTotalScore = kremilsTotalScore + childSnapshot.val().kremils.firstScore;
                    childSnapshot.val().kremils.firstScore > 0 ? kremilsScoreArray.push(childSnapshot.val().kremils.firstScore) : '';
                    childSnapshot.val().kremils.firstHints > 0 ? kremilsHintsArray.push(childSnapshot.val().kremils.firstHints) : '';
                    childSnapshot.val().kremils.firstSeconds > 0 ? kremilsSecondsArray.push(childSnapshot.val().kremils.firstSeconds) : '';
                    kremilsTotalRespondentOnFirstAttempt = kremilsTotalRespondentOnFirstAttempt + (childSnapshot.val().kremils.attempt == 1 ? 1 : 0);
                    kremilsTotalAttempt = kremilsTotalAttempt + childSnapshot.val().kremils.attempt; 
                }else{
                    kremilsSkipCounter++;
                }

                if(childSnapshot.hasChild('lactacyd')) {
                    lactacydCorrectCounter = (lactacydCorrectCounter + (childSnapshot.val().lactacyd.firstGuess == true ? 1 : 0));
                    lactacydIncorrectCounter = (lactacydIncorrectCounter + (childSnapshot.val().lactacyd.firstGuess == false ? 1 : 0));
                    score = score + childSnapshot.val().lactacyd.firstScore;
                    totalScore = totalScore + childSnapshot.val().lactacyd.firstScore;
                    lactacydTotalScore = lactacydTotalScore + childSnapshot.val().lactacyd.firstScore;
                    childSnapshot.val().lactacyd.firstScore > 0 ? lactacydScoreArray.push(childSnapshot.val().lactacyd.firstScore) : '';
                    childSnapshot.val().lactacyd.firstHints > 0 ? lactacydHintsArray.push(childSnapshot.val().lactacyd.firstHints) : '';
                    childSnapshot.val().lactacyd.firstSeconds > 0 ? lactacydSecondsArray.push(childSnapshot.val().lactacyd.firstSeconds) : '';
                    lactacydTotalRespondentOnFirstAttempt = lactacydTotalRespondentOnFirstAttempt + (childSnapshot.val().lactacyd.attempt == 1 ? 1 : 0);
                    lactacydTotalAttempt = lactacydTotalAttempt + childSnapshot.val().lactacyd.attempt; 
                }else{
                    lactacydSkipCounter++;
                }

                if(childSnapshot.hasChild('mcdo')) {
                    mcdoCorrectCounter = (mcdoCorrectCounter + (childSnapshot.val().mcdo.firstGuess == true ? 1 : 0));
                    mcdoIncorrectCounter = (mcdoIncorrectCounter + (childSnapshot.val().mcdo.firstGuess == false ? 1 : 0));
                    score = score + childSnapshot.val().mcdo.firstScore;
                    totalScore = totalScore + childSnapshot.val().mcdo.firstScore;
                    mcdoTotalScore = mcdoTotalScore + childSnapshot.val().mcdo.firstScore;
                    childSnapshot.val().mcdo.firstScore > 0 ? mcdoScoreArray.push(childSnapshot.val().mcdo.firstScore) : '';
                    childSnapshot.val().mcdo.firstHints > 0 ? mcdoHintsArray.push(childSnapshot.val().mcdo.firstHints) : '';
                    childSnapshot.val().mcdo.firstSeconds > 0 ? mcdoSecondsArray.push(childSnapshot.val().mcdo.firstSeconds) : '';
                    mcdoTotalRespondentOnFirstAttempt = mcdoTotalRespondentOnFirstAttempt + (childSnapshot.val().mcdo.attempt == 1 ? 1 : 0);
                    mcdoTotalAttempt = mcdoTotalAttempt + ( childSnapshot.val().mcdo.attempt > 0 ? childSnapshot.val().mcdo.attempt : 0); 
                }else{
                    mcdoSkipCounter++;
                }

                if(childSnapshot.hasChild('myra')) {
                    myraCorrectCounter = (myraCorrectCounter + (childSnapshot.val().myra.firstGuess == true ? 1 : 0));
                    myraIncorrectCounter = (myraIncorrectCounter + (childSnapshot.val().myra.firstGuess == false ? 1 : 0));
                    score = score + childSnapshot.val().myra.firstScore;
                    totalScore = totalScore + childSnapshot.val().myra.firstScore;
                    myraTotalScore = myraTotalScore + childSnapshot.val().myra.firstScore;
                    childSnapshot.val().myra.firstScore > 0 ? myraScoreArray.push(childSnapshot.val().myra.firstScore) : '';
                    childSnapshot.val().myra.firstHints > 0 ? myraHintsArray.push(childSnapshot.val().myra.firstHints) : '';
                    childSnapshot.val().myra.firstSeconds > 0 ? myraSecondsArray.push(childSnapshot.val().myra.firstSeconds) : '';
                    myraTotalRespondentOnFirstAttempt = myraTotalRespondentOnFirstAttempt + (childSnapshot.val().myra.attempt == 1 ? 1 : 0);
                    myraTotalAttempt = myraTotalAttempt + childSnapshot.val().myra.attempt; 
                }else{
                    myraSkipCounter++;
                }

                if(childSnapshot.hasChild('neozep')) {
                    neozepCorrectCounter = (neozepCorrectCounter + (childSnapshot.val().neozep.firstGuess == true ? 1 : 0));
                    neozepIncorrectCounter = (neozepIncorrectCounter + (childSnapshot.val().neozep.firstGuess == false ? 1 : 0));
                    score = score + childSnapshot.val().neozep.firstScore;
                    totalScore = totalScore + childSnapshot.val().neozep.firstScore;
                    neozepTotalScore = neozepTotalScore + childSnapshot.val().neozep.firstScore;
                    childSnapshot.val().neozep.firstScore > 0 ? neozepScoreArray.push(childSnapshot.val().neozep.firstScore) : '';
                    childSnapshot.val().neozep.firstHints > 0 ? neozepHintsArray.push(childSnapshot.val().neozep.firstHints) : '';
                    childSnapshot.val().neozep.firstSeconds > 0 ? neozepSecondsArray.push(childSnapshot.val().neozep.firstSeconds) : '';
                    neozepTotalRespondentOnFirstAttempt = neozepTotalRespondentOnFirstAttempt + (childSnapshot.val().neozep.attempt == 1 ? 1 : 0);
                    neozepTotalAttempt = neozepTotalAttempt + childSnapshot.val().neozep.attempt; 
                }else{
                    neozepSkipCounter++;
                }

                if(childSnapshot.hasChild('phcare')) {
                    phcareCorrectCounter = (phcareCorrectCounter + (childSnapshot.val().phcare.firstGuess == true ? 1 : 0));
                    phcareIncorrectCounter = (phcareIncorrectCounter + (childSnapshot.val().phcare.firstGuess == false ? 1 : 0));
                    score = score + childSnapshot.val().phcare.firstScore;
                    totalScore = totalScore + childSnapshot.val().phcare.firstScore;
                    phcareTotalScore = phcareTotalScore + childSnapshot.val().phcare.firstScore;
                    childSnapshot.val().phcare.firstScore > 0 ? phcareScoreArray.push(childSnapshot.val().phcare.firstScore) : '';
                    childSnapshot.val().phcare.firstHints > 0 ? phcareHintsArray.push(childSnapshot.val().phcare.firstHints) : '';
                    childSnapshot.val().phcare.firstSeconds > 0 ? phcareSecondsArray.push(childSnapshot.val().phcare.firstSeconds) : '';
                    phcareTotalRespondentOnFirstAttempt = phcareTotalRespondentOnFirstAttempt + (childSnapshot.val().phcare.attempt == 1 ? 1 : 0);
                    phcareTotalAttempt = phcareTotalAttempt + childSnapshot.val().phcare.attempt; 
                }else{
                    phcareSkipCounter++;
                }

                if(childSnapshot.hasChild('rexidol')) {
                    rexidolCorrectCounter = (rexidolCorrectCounter + (childSnapshot.val().rexidol.firstGuess == true ? 1 : 0));
                    rexidolIncorrectCounter = (rexidolIncorrectCounter + (childSnapshot.val().rexidol.firstGuess == false ? 1 : 0));
                    score = score + childSnapshot.val().rexidol.firstScore;
                    totalScore = totalScore + childSnapshot.val().rexidol.firstScore;
                    rexidolTotalScore = rexidolTotalScore + childSnapshot.val().rexidol.firstScore;
                    childSnapshot.val().rexidol.firstScore > 0 ? rexidolScoreArray.push(childSnapshot.val().rexidol.firstScore) : '';
                    childSnapshot.val().rexidol.firstHints > 0 ? rexidolHintsArray.push(childSnapshot.val().rexidol.firstHints) : '';
                    childSnapshot.val().rexidol.firstSeconds > 0 ? rexidolSecondsArray.push(childSnapshot.val().rexidol.firstSeconds) : '';
                    rexidolTotalRespondentOnFirstAttempt = rexidolTotalRespondentOnFirstAttempt + (childSnapshot.val().rexidol.attempt == 1 ? 1 : 0);
                    rexidolTotalAttempt = rexidolTotalAttempt + childSnapshot.val().rexidol.attempt; 
                }else{
                    rexidolSkipCounter++;
                }

                if(childSnapshot.hasChild('ritemed')) {
                    ritemedCorrectCounter = (ritemedCorrectCounter + (childSnapshot.val().ritemed.firstGuess == true ? 1 : 0));
                    ritemedIncorrectCounter = (ritemedIncorrectCounter + (childSnapshot.val().ritemed.firstGuess == false ? 1 : 0));
                    score = score + childSnapshot.val().ritemed.firstScore;
                    totalScore = totalScore + childSnapshot.val().ritemed.firstScore;
                    ritemedTotalScore = ritemedTotalScore + childSnapshot.val().ritemed.firstScore;
                    childSnapshot.val().ritemed.firstScore > 0 ? ritemedScoreArray.push(childSnapshot.val().ritemed.firstScore) : '';
                    childSnapshot.val().ritemed.firstHints > 0 ? ritemedHintsArray.push(childSnapshot.val().ritemed.firstHints) : '';
                    childSnapshot.val().ritemed.firstSeconds > 0 ? ritemedSecondsArray.push(childSnapshot.val().ritemed.firstSeconds) : '';
                    ritemedTotalRespondentOnFirstAttempt = ritemedTotalRespondentOnFirstAttempt + (childSnapshot.val().ritemed.attempt == 1 ? 1 : 0);
                    ritemedTotalAttempt = ritemedTotalAttempt + childSnapshot.val().ritemed.attempt; 
                }else{
                    ritemedSkipCounter++;
                }

                if(childSnapshot.hasChild('robitussin')) {
                    robitussinCorrectCounter = (robitussinCorrectCounter + (childSnapshot.val().robitussin.firstGuess == true ? 1 : 0));
                    robitussinIncorrectCounter = (robitussinIncorrectCounter + (childSnapshot.val().robitussin.firstGuess == false ? 1 : 0));
                    score = score + childSnapshot.val().robitussin.firstScore;
                    totalScore = totalScore + childSnapshot.val().robitussin.firstScore;
                    robitussinTotalScore = robitussinTotalScore + childSnapshot.val().robitussin.firstScore;
                    childSnapshot.val().robitussin.firstScore > 0 ? robitussinScoreArray.push(childSnapshot.val().robitussin.firstScore) : '';
                    childSnapshot.val().robitussin.firstHints > 0 ? robitussinHintsArray.push(childSnapshot.val().robitussin.firstHints) : '';
                    childSnapshot.val().robitussin.firstSeconds > 0 ? robitussinSecondsArray.push(childSnapshot.val().robitussin.firstSeconds) : '';
                    robitussinTotalRespondentOnFirstAttempt = robitussinTotalRespondentOnFirstAttempt + (childSnapshot.val().robitussin.attempt == 1 ? 1 : 0);
                    robitussinTotalAttempt = robitussinTotalAttempt + childSnapshot.val().robitussin.attempt; 
                }else{
                    robitussinSkipCounter++;
                }

                if(childSnapshot.hasChild('skelan')) {
                    skelanCorrectCounter = (skelanCorrectCounter + (childSnapshot.val().skelan.firstGuess == true ? 1 : 0));
                    skelanIncorrectCounter = (skelanIncorrectCounter + (childSnapshot.val().skelan.firstGuess == false ? 1 : 0));
                    score = score + childSnapshot.val().skelan.firstScore;
                    totalScore = totalScore + childSnapshot.val().skelan.firstScore;
                    skelanTotalScore = skelanTotalScore + childSnapshot.val().skelan.firstScore;
                    childSnapshot.val().skelan.firstScore > 0 ? skelanScoreArray.push(childSnapshot.val().skelan.firstScore) : '';
                    childSnapshot.val().skelan.firstHints > 0 ? skelanHintsArray.push(childSnapshot.val().skelan.firstHints) : '';
                    childSnapshot.val().skelan.firstSeconds > 0 ? skelanSecondsArray.push(childSnapshot.val().skelan.firstSeconds) : '';
                    skelanTotalRespondentOnFirstAttempt = skelanTotalRespondentOnFirstAttempt + (childSnapshot.val().skelan.attempt == 1 ? 1 : 0);
                    skelanTotalAttempt = skelanTotalAttempt + ( childSnapshot.val().skelan.attempt > 0 ? childSnapshot.val().skelan.attempt : 0);  
                }else{
                    skelanSkipCounter++;
                }

                if(childSnapshot.hasChild('solmux')) {
                    solmuxCorrectCounter = (solmuxCorrectCounter + (childSnapshot.val().solmux.firstGuess == true ? 1 : 0));
                    solmuxIncorrectCounter = (solmuxIncorrectCounter + (childSnapshot.val().solmux.firstGuess == false ? 1 : 0));
                    score = score + childSnapshot.val().solmux.firstScore;
                    totalScore = totalScore + childSnapshot.val().solmux.firstScore;
                    solmuxTotalScore = solmuxTotalScore + childSnapshot.val().solmux.firstScore;
                    childSnapshot.val().solmux.firstScore > 0 ? solmuxScoreArray.push(childSnapshot.val().solmux.firstScore) : '';
                    childSnapshot.val().solmux.firstHints > 0 ? solmuxHintsArray.push(childSnapshot.val().solmux.firstHints) : '';
                    childSnapshot.val().solmux.firstSeconds > 0 ? solmuxSecondsArray.push(childSnapshot.val().solmux.firstSeconds) : '';
                    solmuxTotalRespondentOnFirstAttempt = solmuxTotalRespondentOnFirstAttempt + (childSnapshot.val().solmux.attempt == 1 ? 1 : 0);
                    solmuxTotalAttempt = solmuxTotalAttempt + childSnapshot.val().solmux.attempt; 
                }else{
                    solmuxSkipCounter++;
                }

                if(childSnapshot.hasChild('tgp')) {
                    tgpCorrectCounter = (tgpCorrectCounter + (childSnapshot.val().tgp.firstGuess == true ? 1 : 0));
                    tgpIncorrectCounter = (tgpIncorrectCounter + (childSnapshot.val().tgp.firstGuess == false ? 1 : 0));
                    score = score + childSnapshot.val().tgp.firstScore;
                    totalScore = totalScore + childSnapshot.val().tgp.firstScore;
                    tgpTotalScore = tgpTotalScore + childSnapshot.val().tgp.firstScore;
                    childSnapshot.val().tgp.firstScore > 0 ? tgpScoreArray.push(childSnapshot.val().tgp.firstScore) : '';
                    childSnapshot.val().tgp.firstHints > 0 ? tgpHintsArray.push(childSnapshot.val().tgp.firstHints) : '';
                    childSnapshot.val().tgp.firstSeconds > 0 ? tgpSecondsArray.push(childSnapshot.val().tgp.firstSeconds) : '';
                    tgpTotalRespondentOnFirstAttempt = tgpTotalRespondentOnFirstAttempt + (childSnapshot.val().tgp.attempt == 1 ? 1 : 0);
                    tgpTotalAttempt = tgpTotalAttempt + childSnapshot.val().tgp.attempt; 
                }else{
                    tgpSkipCounter++;
                }

                if(childSnapshot.hasChild('uhp')) {
                    uhpCorrectCounter = (uhpCorrectCounter + (childSnapshot.val().uhp.firstGuess == true ? 1 : 0));
                    uhpIncorrectCounter = (uhpIncorrectCounter + (childSnapshot.val().uhp.firstGuess == false ? 1 : 0));
                    score = score + childSnapshot.val().uhp.firstScore;
                    totalScore = totalScore + childSnapshot.val().uhp.firstScore;
                    uhpTotalScore = uhpTotalScore + childSnapshot.val().uhp.firstScore;
                    childSnapshot.val().uhp.firstScore > 0 ? uhpScoreArray.push(childSnapshot.val().uhp.firstScore) : '';
                    childSnapshot.val().uhp.firstHints > 0 ? uhpHintsArray.push(childSnapshot.val().uhp.firstHints) : '';
                    childSnapshot.val().uhp.firstSeconds > 0 ? uhpSecondsArray.push(childSnapshot.val().uhp.firstSeconds) : '';
                    uhpTotalRespondentOnFirstAttempt = uhpTotalRespondentOnFirstAttempt + (childSnapshot.val().uhp.attempt == 1 ? 1 : 0);
                    uhpTotalAttempt = uhpTotalAttempt + childSnapshot.val().uhp.attempt; 
                }else{
                    uhpSkipCounter++;
                }

                if(childSnapshot.hasChild('unilab')) {
                    unilabCorrectCounter = (unilabCorrectCounter + (childSnapshot.val().unilab.firstGuess == true ? 1 : 0));
                    unilabIncorrectCounter = (unilabIncorrectCounter + (childSnapshot.val().unilab.firstGuess == false ? 1 : 0));
                    score = score + childSnapshot.val().unilab.firstScore;
                    totalScore = totalScore + childSnapshot.val().unilab.firstScore;
                    unilabTotalScore = unilabTotalScore + childSnapshot.val().unilab.firstScore;
                    childSnapshot.val().unilab.firstScore > 0 ? unilabScoreArray.push(childSnapshot.val().unilab.firstScore) : '';
                    childSnapshot.val().unilab.firstHints > 0 ? unilabHintsArray.push(childSnapshot.val().unilab.firstHints) : '';
                    childSnapshot.val().unilab.firstSeconds > 0 ? unilabSecondsArray.push(childSnapshot.val().unilab.firstSeconds) : '';
                    unilabTotalRespondentOnFirstAttempt = unilabTotalRespondentOnFirstAttempt + (childSnapshot.val().unilab.attempt == 1 ? 1 : 0);
                    unilabTotalAttempt = unilabTotalAttempt + childSnapshot.val().unilab.attempt; 
                }else{
                    unilabSkipCounter++;
                }

                if(childSnapshot.hasChild('vicks')) { 
                    vicksCorrectCounter = (vicksCorrectCounter + (childSnapshot.val().vicks.firstGuess == true ? 1 : 0));
                    vicksIncorrectCounter = (vicksIncorrectCounter + (childSnapshot.val().vicks.firstGuess == false ? 1 : 0));
                    score = score + childSnapshot.val().vicks.firstScore;
                    totalScore = totalScore + childSnapshot.val().vicks.firstScore;
                    childSnapshot.val().vicks.firstScore > 0 ? vicksScoreArray.push(childSnapshot.val().vicks.firstScore) : '';
                    childSnapshot.val().vicks.firstHints > 0 ? vicksHintsArray.push(childSnapshot.val().vicks.firstHints) : '';
                    childSnapshot.val().vicks.firstSeconds > 0 ? vicksSecondsArray.push(childSnapshot.val().vicks.firstSeconds) : '';
                    vicksTotalRespondentOnFirstAttempt = vicksTotalRespondentOnFirstAttempt + (childSnapshot.val().vicks.attempt == 1 ? 1 : 0);
                    vicksTotalAttempt = vicksTotalAttempt + childSnapshot.val().vicks.attempt; 
                } else {
                    vicksSkipCounter++;
                }

            

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

        //average highest score
        var gtHighestScore = 0;
        $('.HighestScore').each(function(){
            var stHighestScore = parseFloat($(this).text());
            gtHighestScore += isNaN(stHighestScore) ? 0 : stHighestScore;
        })
        $('#TotalHighestScore').text(gtHighestScore.toFixed(2));
        
    });

    function getSum(total, num) {
        return total + num;
    }

    var ref = firebase.database().ref().child("tally/");
    var newArray = [];
    var indexArray = [];
    ref.once("value").then(function(snapshot) {

        var i = 0;
        
        document.getElementById("advilScore").innerHTML = advilScoreArray.reduce(getSum) / advilCorrectCounter;
        document.getElementById("advilTotalScore").innerHTML = advilScoreArray.reduce(getSum);
        document.getElementById("advilHighestScore").innerHTML = Math.max.apply(null, advilScoreArray);
        document.getElementById("advilLowestScore").innerHTML = Math.min.apply(null, advilScoreArray);
        document.getElementById("advilHints").innerHTML = snapshot.hasChild('advil') && snapshot.val().advil.total != null ? snapshot.val().advil.total.avgHints.toFixed(2) : 0;
        document.getElementById("advilHighestHints").innerHTML = Math.max.apply(null, advilHintsArray);
        document.getElementById("advilLowestHints").innerHTML = Math.min.apply(null, advilHintsArray);
        document.getElementById("advilSeconds").innerHTML = snapshot.hasChild('advil') && snapshot.val().advil.total != null ? snapshot.val().advil.total.avgSeconds.toFixed(2) : 0;
        document.getElementById("advilHighestSeconds").innerHTML = Math.max.apply(null, advilSecondsArray);
        document.getElementById("advilLowestSeconds").innerHTML = Math.min.apply(null, advilSecondsArray);
        document.getElementById("advilCorrect").innerHTML = advilCorrectCounter;
        document.getElementById("advilIncorrect").innerHTML = advilIncorrectCounter;
        document.getElementById("advilSkip").innerHTML = advilSkipCounter;
        document.getElementById("advilTotalRespondentOnFirstAttempt").innerHTML = advilTotalRespondentOnFirstAttempt;
        document.getElementById("advilTotalAttempt").innerHTML = advilTotalAttempt;

        document.getElementById("alaxanScore").innerHTML = snapshot.hasChild('alaxan') && snapshot.val().alaxan.total != null ? snapshot.val().alaxan.total.avgScore.toFixed(2) : 0;
        document.getElementById("alaxanTotalScore").innerHTML = alaxanScoreArray.reduce(getSum);
        document.getElementById("alaxanHighestScore").innerHTML = Math.max.apply(null, alaxanScoreArray);
        document.getElementById("alaxanLowestScore").innerHTML = Math.min.apply(null, alaxanScoreArray);
        document.getElementById("alaxanHints").innerHTML = snapshot.hasChild('alaxan') && snapshot.val().alaxan.total != null ? snapshot.val().alaxan.total.avgHints.toFixed(2) : 0;
        document.getElementById("alaxanHighestHints").innerHTML = Math.max.apply(null, alaxanHintsArray);
        document.getElementById("alaxanLowestHints").innerHTML = Math.min.apply(null, alaxanHintsArray);
        document.getElementById("alaxanSeconds").innerHTML = snapshot.hasChild('alaxan') && snapshot.val().alaxan.total != null ? snapshot.val().alaxan.total.avgSeconds.toFixed(2) : 0;
        document.getElementById("alaxanHighestSeconds").innerHTML = Math.max.apply(null, alaxanSecondsArray);
        document.getElementById("alaxanLowestSeconds").innerHTML = Math.min.apply(null, alaxanSecondsArray);
        document.getElementById("alaxanCorrect").innerHTML = alaxanCorrectCounter;
        document.getElementById("alaxanIncorrect").innerHTML = alaxanIncorrectCounter;
        document.getElementById("alaxanSkip").innerHTML = alaxanSkipCounter;
        document.getElementById("alaxanTotalRespondentOnFirstAttempt").innerHTML = alaxanTotalRespondentOnFirstAttempt;
        document.getElementById("alaxanTotalAttempt").innerHTML = alaxanTotalAttempt;

        document.getElementById("allertaScore").innerHTML = snapshot.hasChild('allerta') && snapshot.val().allerta.total != null ? snapshot.val().allerta.total.avgScore.toFixed(2) : 0;
        document.getElementById("allertaTotalScore").innerHTML = allertaScoreArray.reduce(getSum);
        document.getElementById("allertaHighestScore").innerHTML = Math.max.apply(null, allertaScoreArray);
        document.getElementById("allertaLowestScore").innerHTML = Math.min.apply(null, allertaScoreArray);
        document.getElementById("allertaHints").innerHTML = snapshot.hasChild('allerta') && snapshot.val().allerta.total != null ? snapshot.val().allerta.total.avgHints.toFixed(2) : 0;
        document.getElementById("allertaHighestHints").innerHTML = Math.max.apply(null, allertaHintsArray);
        document.getElementById("allertaLowestHints").innerHTML = Math.min.apply(null, allertaHintsArray);
        document.getElementById("allertaSeconds").innerHTML = snapshot.hasChild('allerta') && snapshot.val().allerta.total != null ? snapshot.val().allerta.total.avgSeconds.toFixed(2) : 0;
        document.getElementById("allertaHighestSeconds").innerHTML = Math.max.apply(null, allertaSecondsArray);
        document.getElementById("allertaLowestSeconds").innerHTML = Math.min.apply(null, allertaSecondsArray);
        document.getElementById("allertaCorrect").innerHTML = allertaCorrectCounter;
        document.getElementById("allertaIncorrect").innerHTML = allertaIncorrectCounter;
        document.getElementById("allertaSkip").innerHTML = allertaSkipCounter;
        document.getElementById("allertaTotalRespondentOnFirstAttempt").innerHTML = allertaTotalRespondentOnFirstAttempt;
        document.getElementById("allertaTotalAttempt").innerHTML = allertaTotalAttempt;

        document.getElementById("ascofScore").innerHTML = snapshot.hasChild('ascof') && snapshot.val().ascof.total != null ? snapshot.val().ascof.total.avgScore.toFixed(2) : 0;
        document.getElementById("ascofTotalScore").innerHTML = ascofScoreArray.reduce(getSum);
        document.getElementById("ascofHighestScore").innerHTML = Math.max.apply(null, ascofScoreArray);
        document.getElementById("ascofLowestScore").innerHTML = Math.min.apply(null, ascofScoreArray);
        document.getElementById("ascofHints").innerHTML = snapshot.hasChild('ascof') && snapshot.val().ascof.total != null ? snapshot.val().ascof.total.avgHints.toFixed(2) : 0;
        document.getElementById("ascofHighestHints").innerHTML = Math.max.apply(null, ascofHintsArray);
        document.getElementById("ascofLowestHints").innerHTML = Math.min.apply(null, ascofHintsArray);
        document.getElementById("ascofSeconds").innerHTML = snapshot.hasChild('ascof') && snapshot.val().ascof.total != null ? snapshot.val().ascof.total.avgSeconds.toFixed(2) : 0;
        document.getElementById("ascofHighestSeconds").innerHTML = Math.max.apply(null, ascofSecondsArray);
        document.getElementById("ascofLowestSeconds").innerHTML = Math.min.apply(null, ascofSecondsArray);
        document.getElementById("ascofCorrect").innerHTML = ascofCorrectCounter;
        document.getElementById("ascofIncorrect").innerHTML = ascofIncorrectCounter;
        document.getElementById("ascofSkip").innerHTML = ascofSkipCounter;
        document.getElementById("ascofTotalRespondentOnFirstAttempt").innerHTML = ascofTotalRespondentOnFirstAttempt;
        document.getElementById("ascofTotalAttempt").innerHTML = ascofTotalAttempt;

        document.getElementById("biofluScore").innerHTML = snapshot.hasChild('bioflu') && snapshot.val().bioflu.total != null ? snapshot.val().bioflu.total.avgScore.toFixed(2) : 0;
        document.getElementById("biofluTotalScore").innerHTML = biofluScoreArray.reduce(getSum);
        document.getElementById("biofluHighestScore").innerHTML = Math.max.apply(null, biofluScoreArray);
        document.getElementById("biofluLowestScore").innerHTML = Math.min.apply(null, biofluScoreArray);
        document.getElementById("biofluHints").innerHTML = snapshot.hasChild('bioflu') && snapshot.val().bioflu.total != null ? snapshot.val().bioflu.total.avgHints.toFixed(2) : 0;
        document.getElementById("biofluHighestHints").innerHTML = Math.max.apply(null, biofluHintsArray);
        document.getElementById("biofluLowestHints").innerHTML = Math.min.apply(null, biofluHintsArray);
        document.getElementById("biofluSeconds").innerHTML = snapshot.hasChild('bioflu') && snapshot.val().bioflu.total != null ? snapshot.val().bioflu.total.avgSeconds.toFixed(2) : 0;
        document.getElementById("biofluHighestSeconds").innerHTML = Math.max.apply(null, biofluSecondsArray);
        document.getElementById("biofluLowestSeconds").innerHTML = Math.min.apply(null, biofluSecondsArray);
        document.getElementById("biofluCorrect").innerHTML = biofluCorrectCounter;
        document.getElementById("biofluIncorrect").innerHTML = biofluIncorrectCounter;
        document.getElementById("biofluSkip").innerHTML = biofluSkipCounter;
        document.getElementById("biofluTotalRespondentOnFirstAttempt").innerHTML = biofluTotalRespondentOnFirstAttempt;
        document.getElementById("biofluTotalAttempt").innerHTML = biofluTotalAttempt;

        document.getElementById("biogesicScore").innerHTML = snapshot.hasChild('biogesic') && snapshot.val().biogesic.total != null ? snapshot.val().biogesic.total.avgScore.toFixed(2) : 0;
        document.getElementById("biogesicTotalScore").innerHTML = biogesicScoreArray.reduce(getSum);
        document.getElementById("biogesicHighestScore").innerHTML = Math.max.apply(null, biogesicScoreArray);
        document.getElementById("biogesicLowestScore").innerHTML = Math.min.apply(null, biogesicScoreArray);
        document.getElementById("biogesicHints").innerHTML = snapshot.hasChild('biogesic') && snapshot.val().biogesic.total != null ? snapshot.val().biogesic.total.avgHints.toFixed(2) : 0;
        document.getElementById("biogesicHighestHints").innerHTML = Math.max.apply(null, biogesicHintsArray);
        document.getElementById("biogesicLowestHints").innerHTML = Math.min.apply(null, biogesicHintsArray);
        document.getElementById("biogesicSeconds").innerHTML = snapshot.hasChild('biogesic') && snapshot.val().biogesic.total != null ? snapshot.val().biogesic.total.avgSeconds.toFixed(2) : 0;
        document.getElementById("biogesicHighestSeconds").innerHTML = Math.max.apply(null, biogesicSecondsArray);
        document.getElementById("biogesicLowestSeconds").innerHTML = Math.min.apply(null, biogesicSecondsArray);
        document.getElementById("biogesicCorrect").innerHTML = biogesicCorrectCounter;
        document.getElementById("biogesicIncorrect").innerHTML = biogesicIncorrectCounter;
        document.getElementById("biogesicSkip").innerHTML = biogesicSkipCounter;
        document.getElementById("biogesicTotalRespondentOnFirstAttempt").innerHTML = biogesicTotalRespondentOnFirstAttempt;
        document.getElementById("biogesicTotalAttempt").innerHTML = biogesicTotalAttempt;

        document.getElementById("celetequeScore").innerHTML = snapshot.hasChild('celeteque') && snapshot.val().celeteque.total != null ? snapshot.val().celeteque.total.avgScore.toFixed(2) : 0;
        document.getElementById("celetequeTotalScore").innerHTML = celetequeScoreArray.reduce(getSum);
        document.getElementById("celetequeHighestScore").innerHTML = Math.max.apply(null, celetequeScoreArray);
        document.getElementById("celetequeLowestScore").innerHTML = Math.min.apply(null, celetequeScoreArray);
        document.getElementById("celetequeHints").innerHTML = snapshot.hasChild('celeteque') && snapshot.val().celeteque.total != null ? snapshot.val().celeteque.total.avgHints.toFixed(2) : 0;
        document.getElementById("celetequeHighestHints").innerHTML = Math.max.apply(null, celetequeHintsArray);
        document.getElementById("celetequeLowestHints").innerHTML = Math.min.apply(null, celetequeHintsArray);
        document.getElementById("celetequeSeconds").innerHTML = snapshot.hasChild('celeteque') && snapshot.val().celeteque.total != null ? snapshot.val().celeteque.total.avgSeconds.toFixed(2) : 0;
        document.getElementById("celetequeHighestSeconds").innerHTML = Math.max.apply(null, celetequeSecondsArray);
        document.getElementById("celetequeLowestSeconds").innerHTML = Math.min.apply(null, celetequeSecondsArray);
        document.getElementById("celetequeCorrect").innerHTML = celetequeCorrectCounter;
        document.getElementById("celetequeIncorrect").innerHTML = celetequeIncorrectCounter;
        document.getElementById("celetequeSkip").innerHTML = celetequeSkipCounter;
        document.getElementById("celetequeTotalRespondentOnFirstAttempt").innerHTML = celetequeTotalRespondentOnFirstAttempt;
        document.getElementById("celetequeTotalAttempt").innerHTML = celetequeTotalAttempt;

        document.getElementById("centrumScore").innerHTML = snapshot.hasChild('centrum') && snapshot.val().centrum.total != null ? snapshot.val().centrum.total.avgScore.toFixed(2) : 0;
        document.getElementById("centrumTotalScore").innerHTML = centrumScoreArray.reduce(getSum);
        document.getElementById("centrumHighestScore").innerHTML = Math.max.apply(null, centrumScoreArray);
        document.getElementById("centrumLowestScore").innerHTML = Math.min.apply(null, centrumScoreArray);
        document.getElementById("centrumHints").innerHTML = snapshot.hasChild('centrum') && snapshot.val().centrum.total != null ? snapshot.val().centrum.total.avgHints.toFixed(2) : 0;
        document.getElementById("centrumHighestHints").innerHTML = Math.max.apply(null, centrumHintsArray);
        document.getElementById("centrumLowestHints").innerHTML = Math.min.apply(null, centrumHintsArray);
        document.getElementById("centrumSeconds").innerHTML = snapshot.hasChild('centrum') && snapshot.val().centrum.total != null ? snapshot.val().centrum.total.avgSeconds.toFixed(2) : 0;
        document.getElementById("centrumHighestSeconds").innerHTML = Math.max.apply(null, centrumSecondsArray);
        document.getElementById("centrumLowestSeconds").innerHTML = Math.min.apply(null, centrumSecondsArray);
        document.getElementById("centrumCorrect").innerHTML = centrumCorrectCounter;
        document.getElementById("centrumIncorrect").innerHTML = centrumIncorrectCounter;
        document.getElementById("centrumSkip").innerHTML = centrumSkipCounter;
        document.getElementById("centrumTotalRespondentOnFirstAttempt").innerHTML = centrumTotalRespondentOnFirstAttempt;
        document.getElementById("centrumTotalAttempt").innerHTML = centrumTotalAttempt;

        document.getElementById("cetaphilScore").innerHTML = snapshot.hasChild('cetaphil') && snapshot.val().cetaphil.total != null ? snapshot.val().cetaphil.total.avgScore.toFixed(2) : 0;
        document.getElementById("cetaphilTotalScore").innerHTML = cetaphilScoreArray.reduce(getSum);
        document.getElementById("cetaphilHighestScore").innerHTML = Math.max.apply(null, cetaphilScoreArray);
        document.getElementById("cetaphilLowestScore").innerHTML = Math.min.apply(null, cetaphilScoreArray);
        document.getElementById("cetaphilHints").innerHTML = snapshot.hasChild('cetaphil') && snapshot.val().cetaphil.total != null ? snapshot.val().cetaphil.total.avgHints.toFixed(2) : 0;
        document.getElementById("cetaphilHighestHints").innerHTML = Math.max.apply(null, cetaphilHintsArray);
        document.getElementById("cetaphilLowestHints").innerHTML = Math.min.apply(null, cetaphilHintsArray);
        document.getElementById("cetaphilSeconds").innerHTML = snapshot.hasChild('cetaphil') && snapshot.val().cetaphil.total != null ? snapshot.val().cetaphil.total.avgSeconds.toFixed(2) : 0;
        document.getElementById("cetaphilHighestSeconds").innerHTML = Math.max.apply(null, cetaphilSecondsArray);
        document.getElementById("cetaphilLowestSeconds").innerHTML = Math.min.apply(null, cetaphilSecondsArray);
        document.getElementById("cetaphilCorrect").innerHTML = cetaphilCorrectCounter;
        document.getElementById("cetaphilIncorrect").innerHTML = cetaphilIncorrectCounter;
        document.getElementById("cetaphilSkip").innerHTML = cetaphilSkipCounter;
        document.getElementById("cetaphilTotalRespondentOnFirstAttempt").innerHTML = cetaphilTotalRespondentOnFirstAttempt;
        document.getElementById("cetaphilTotalAttempt").innerHTML = cetaphilTotalAttempt;

        document.getElementById("conzaceScore").innerHTML = snapshot.hasChild('conzace') && snapshot.val().conzace.total != null ? snapshot.val().conzace.total.avgScore.toFixed(2) : 0;
        document.getElementById("conzaceTotalScore").innerHTML = conzaceScoreArray.reduce(getSum);
        document.getElementById("conzaceHighestScore").innerHTML = Math.max.apply(null, conzaceScoreArray);
        document.getElementById("conzaceLowestScore").innerHTML = Math.min.apply(null, conzaceScoreArray);
        document.getElementById("conzaceHints").innerHTML = snapshot.hasChild('conzace') && snapshot.val().conzace.total != null ? snapshot.val().conzace.total.avgHints.toFixed(2) : 0;
        document.getElementById("conzaceHighestHints").innerHTML = Math.max.apply(null, conzaceHintsArray);
        document.getElementById("conzaceLowestHints").innerHTML = Math.min.apply(null, conzaceHintsArray);
        document.getElementById("conzaceSeconds").innerHTML = snapshot.hasChild('conzace') && snapshot.val().conzace.total != null ? snapshot.val().conzace.total.avgSeconds.toFixed(2) : 0;
        document.getElementById("conzaceHighestSeconds").innerHTML = Math.max.apply(null, conzaceSecondsArray);
        document.getElementById("conzaceLowestSeconds").innerHTML = Math.min.apply(null, conzaceSecondsArray);
        document.getElementById("conzaceCorrect").innerHTML = conzaceCorrectCounter;
        document.getElementById("conzaceIncorrect").innerHTML = conzaceIncorrectCounter;
        document.getElementById("conzaceSkip").innerHTML = conzaceSkipCounter;
        document.getElementById("conzaceTotalRespondentOnFirstAttempt").innerHTML = conzaceTotalRespondentOnFirstAttempt;
        document.getElementById("conzaceTotalAttempt").innerHTML = conzaceTotalAttempt;

        document.getElementById("decolgenScore").innerHTML = snapshot.hasChild('decolgen') && snapshot.val().decolgen.total != null ? snapshot.val().decolgen.total.avgScore.toFixed(2) : 0;
        document.getElementById("decolgenTotalScore").innerHTML = decolgenScoreArray.reduce(getSum);
        document.getElementById("decolgenHighestScore").innerHTML = Math.max.apply(null, decolgenScoreArray);
        document.getElementById("decolgenLowestScore").innerHTML = Math.min.apply(null, decolgenScoreArray);
        document.getElementById("decolgenHints").innerHTML = snapshot.hasChild('decolgen') && snapshot.val().decolgen.total != null ? snapshot.val().decolgen.total.avgHints.toFixed(2) : 0;
        document.getElementById("decolgenHighestHints").innerHTML = Math.max.apply(null, decolgenHintsArray);
        document.getElementById("decolgenLowestHints").innerHTML = Math.min.apply(null, decolgenHintsArray);
        document.getElementById("decolgenSeconds").innerHTML = snapshot.hasChild('decolgen') && snapshot.val().decolgen.total != null ? snapshot.val().decolgen.total.avgSeconds.toFixed(2) : 0;
        document.getElementById("decolgenHighestSeconds").innerHTML = Math.max.apply(null, decolgenSecondsArray);
        document.getElementById("decolgenLowestSeconds").innerHTML = Math.min.apply(null, decolgenSecondsArray);
        document.getElementById("decolgenCorrect").innerHTML = decolgenCorrectCounter;
        document.getElementById("decolgenIncorrect").innerHTML = decolgenIncorrectCounter;
        document.getElementById("decolgenSkip").innerHTML = decolgenSkipCounter;
        document.getElementById("decolgenTotalRespondentOnFirstAttempt").innerHTML = decolgenTotalRespondentOnFirstAttempt;
        document.getElementById("decolgenTotalAttempt").innerHTML = decolgenTotalAttempt;

        document.getElementById("diatabsScore").innerHTML = snapshot.hasChild('diatabs') && snapshot.val().diatabs.total != null ? snapshot.val().diatabs.total.avgScore.toFixed(2) : 0;
        document.getElementById("diatabsTotalScore").innerHTML = diatabsScoreArray.reduce(getSum);
        document.getElementById("diatabsHighestScore").innerHTML = Math.max.apply(null, diatabsScoreArray);
        document.getElementById("diatabsLowestScore").innerHTML = Math.min.apply(null, diatabsScoreArray);
        document.getElementById("diatabsHints").innerHTML = snapshot.hasChild('diatabs') && snapshot.val().diatabs.total != null ? snapshot.val().diatabs.total.avgHints.toFixed(2) : 0;
        document.getElementById("diatabsHighestHints").innerHTML = Math.max.apply(null, diatabsHintsArray);
        document.getElementById("diatabsLowestHints").innerHTML = Math.min.apply(null, diatabsHintsArray);
        document.getElementById("diatabsSeconds").innerHTML = snapshot.hasChild('diatabs') && snapshot.val().diatabs.total != null ? snapshot.val().diatabs.total.avgSeconds.toFixed(2) : 0;
        document.getElementById("diatabsHighestSeconds").innerHTML = Math.max.apply(null, diatabsSecondsArray);
        document.getElementById("diatabsLowestSeconds").innerHTML = Math.min.apply(null, diatabsSecondsArray);
        document.getElementById("diatabsCorrect").innerHTML = diatabsCorrectCounter;
        document.getElementById("diatabsIncorrect").innerHTML = diatabsIncorrectCounter;
        document.getElementById("diatabsSkip").innerHTML = diatabsSkipCounter;
        document.getElementById("diatabsTotalRespondentOnFirstAttempt").innerHTML = diatabsTotalRespondentOnFirstAttempt;
        document.getElementById("diatabsTotalAttempt").innerHTML = diatabsTotalAttempt;

        document.getElementById("efficascentScore").innerHTML = snapshot.hasChild('efficascent') && snapshot.val().efficascent.total != null ? snapshot.val().efficascent.total.avgScore.toFixed(2) : 0;
        document.getElementById("efficascentTotalScore").innerHTML = efficascentScoreArray.reduce(getSum);
        document.getElementById("efficascentHighestScore").innerHTML = Math.max.apply(null, efficascentScoreArray);
        document.getElementById("efficascentLowestScore").innerHTML = Math.min.apply(null, efficascentScoreArray);
        document.getElementById("efficascentHints").innerHTML = snapshot.hasChild('efficascent') && snapshot.val().efficascent.total != null ? snapshot.val().efficascent.total.avgHints.toFixed(2) : 0;
        document.getElementById("efficascentHighestHints").innerHTML = Math.max.apply(null, efficascentHintsArray);
        document.getElementById("efficascentLowestHints").innerHTML = Math.min.apply(null, efficascentHintsArray);
        document.getElementById("efficascentSeconds").innerHTML = snapshot.hasChild('efficascent') && snapshot.val().efficascent.total != null ? snapshot.val().efficascent.total.avgSeconds.toFixed(2) : 0;
        document.getElementById("efficascentHighestSeconds").innerHTML = Math.max.apply(null, efficascentSecondsArray);
        document.getElementById("efficascentLowestSeconds").innerHTML = Math.min.apply(null, efficascentSecondsArray);
        document.getElementById("efficascentCorrect").innerHTML = efficascentCorrectCounter;
        document.getElementById("efficascentIncorrect").innerHTML = efficascentIncorrectCounter;
        document.getElementById("efficascentSkip").innerHTML = efficascentSkipCounter;
        document.getElementById("efficascentTotalRespondentOnFirstAttempt").innerHTML = efficascentTotalRespondentOnFirstAttempt;
        document.getElementById("efficascentTotalAttempt").innerHTML = efficascentTotalAttempt;

        document.getElementById("enervonScore").innerHTML = snapshot.hasChild('enervon') && snapshot.val().enervon.total != null ? snapshot.val().enervon.total.avgScore.toFixed(2) : 0;
        document.getElementById("enervonTotalScore").innerHTML = enervonScoreArray.reduce(getSum);
        document.getElementById("enervonHighestScore").innerHTML = Math.max.apply(null, enervonScoreArray);
        document.getElementById("enervonLowestScore").innerHTML = Math.min.apply(null, enervonScoreArray);
        document.getElementById("enervonHints").innerHTML = snapshot.hasChild('enervon') && snapshot.val().enervon.total != null ? snapshot.val().enervon.total.avgHints.toFixed(2) : 0;
        document.getElementById("enervonHighestHints").innerHTML = Math.max.apply(null, enervonHintsArray);
        document.getElementById("enervonLowestHints").innerHTML = Math.min.apply(null, enervonHintsArray);
        document.getElementById("enervonSeconds").innerHTML = snapshot.hasChild('enervon') && snapshot.val().enervon.total != null ? snapshot.val().enervon.total.avgSeconds.toFixed(2) : 0;
        document.getElementById("enervonHighestSeconds").innerHTML = Math.max.apply(null, enervonSecondsArray);
        document.getElementById("enervonLowestSeconds").innerHTML = Math.min.apply(null, enervonSecondsArray);
        document.getElementById("enervonCorrect").innerHTML = enervonCorrectCounter;
        document.getElementById("enervonIncorrect").innerHTML = enervonIncorrectCounter;
        document.getElementById("enervonSkip").innerHTML = enervonSkipCounter;
        document.getElementById("enervonTotalRespondentOnFirstAttempt").innerHTML = enervonTotalRespondentOnFirstAttempt;
        document.getElementById("enervonTotalAttempt").innerHTML = enervonTotalAttempt;

        document.getElementById("gatoradeScore").innerHTML = snapshot.hasChild('gatorade') && snapshot.val().gatorade.total != null ? snapshot.val().gatorade.total.avgScore.toFixed(2) : 0;
        document.getElementById("gatoradeTotalScore").innerHTML = gatoradeScoreArray.reduce(getSum);
        document.getElementById("gatoradeHighestScore").innerHTML = Math.max.apply(null, gatoradeScoreArray);
        document.getElementById("gatoradeLowestScore").innerHTML = Math.min.apply(null, gatoradeScoreArray);
        document.getElementById("gatoradeHints").innerHTML = snapshot.hasChild('gatorade') && snapshot.val().gatorade.total != null ? snapshot.val().gatorade.total.avgHints.toFixed(2) : 0;
        document.getElementById("gatoradeHighestHints").innerHTML = Math.max.apply(null, gatoradeHintsArray);
        document.getElementById("gatoradeLowestHints").innerHTML = Math.min.apply(null, gatoradeHintsArray);
        document.getElementById("gatoradeSeconds").innerHTML = snapshot.hasChild('gatorade') && snapshot.val().gatorade.total != null ? snapshot.val().gatorade.total.avgSeconds.toFixed(2) : 0;
        document.getElementById("gatoradeHighestSeconds").innerHTML = Math.max.apply(null, gatoradeSecondsArray);
        document.getElementById("gatoradeLowestSeconds").innerHTML = Math.min.apply(null, gatoradeSecondsArray);
        document.getElementById("gatoradeCorrect").innerHTML = gatoradeCorrectCounter;
        document.getElementById("gatoradeIncorrect").innerHTML = gatoradeIncorrectCounter;
        document.getElementById("gatoradeSkip").innerHTML = gatoradeSkipCounter;
        document.getElementById("gatoradeTotalRespondentOnFirstAttempt").innerHTML = gatoradeTotalRespondentOnFirstAttempt;
        document.getElementById("gatoradeTotalAttempt").innerHTML = gatoradeTotalAttempt;

        document.getElementById("gyneproScore").innerHTML = snapshot.hasChild('gynepro') && snapshot.val().gynepro.total != null ? snapshot.val().gynepro.total.avgScore.toFixed(2) : 0;
        document.getElementById("gyneproTotalScore").innerHTML = gyneproScoreArray.reduce(getSum);
        document.getElementById("gyneproHighestScore").innerHTML = Math.max.apply(null, gyneproScoreArray);
        document.getElementById("gyneproLowestScore").innerHTML = Math.min.apply(null, gyneproScoreArray);
        document.getElementById("gyneproHints").innerHTML = snapshot.hasChild('gynepro') && snapshot.val().gynepro.total != null ? snapshot.val().gynepro.total.avgHints.toFixed(2) : 0;
        document.getElementById("gyneproHighestHints").innerHTML = Math.max.apply(null, gyneproHintsArray);
        document.getElementById("gyneproLowestHints").innerHTML = Math.min.apply(null, gyneproHintsArray);
        document.getElementById("gyneproSeconds").innerHTML = snapshot.hasChild('gynepro') && snapshot.val().gynepro.total != null ? snapshot.val().gynepro.total.avgSeconds.toFixed(2) : 0;
        document.getElementById("gyneproHighestSeconds").innerHTML = Math.max.apply(null, gyneproSecondsArray);
        document.getElementById("gyneproLowestSeconds").innerHTML = Math.min.apply(null, gyneproSecondsArray);
        document.getElementById("gyneproCorrect").innerHTML = gyneproCorrectCounter;
        document.getElementById("gyneproIncorrect").innerHTML = gyneproIncorrectCounter;
        document.getElementById("gyneproSkip").innerHTML = gyneproSkipCounter;
        document.getElementById("gyneproTotalRespondentOnFirstAttempt").innerHTML = gyneproTotalRespondentOnFirstAttempt;
        document.getElementById("gyneproTotalAttempt").innerHTML = gyneproTotalAttempt;

        document.getElementById("kremilsScore").innerHTML = snapshot.hasChild('kremils') && snapshot.val().kremils.total != null ? snapshot.val().kremils.total.avgScore.toFixed(2) : 0;
        document.getElementById("kremilsTotalScore").innerHTML = kremilsScoreArray.reduce(getSum);
        document.getElementById("kremilsHighestScore").innerHTML = Math.max.apply(null, kremilsScoreArray);
        document.getElementById("kremilsLowestScore").innerHTML = Math.min.apply(null, kremilsScoreArray);
        document.getElementById("kremilsHints").innerHTML = snapshot.hasChild('kremils') && snapshot.val().kremils.total != null ? snapshot.val().kremils.total.avgHints.toFixed(2) : 0;
        document.getElementById("kremilsHighestHints").innerHTML = Math.max.apply(null, kremilsHintsArray);
        document.getElementById("kremilsLowestHints").innerHTML = Math.min.apply(null, kremilsHintsArray);
        document.getElementById("kremilsSeconds").innerHTML = snapshot.hasChild('kremils') && snapshot.val().kremils.total != null ? snapshot.val().kremils.total.avgSeconds.toFixed(2) : 0;
        document.getElementById("kremilsHighestSeconds").innerHTML = Math.max.apply(null, kremilsSecondsArray);
        document.getElementById("kremilsLowestSeconds").innerHTML = Math.min.apply(null, kremilsSecondsArray);
        document.getElementById("kremilsCorrect").innerHTML = kremilsCorrectCounter;
        document.getElementById("kremilsIncorrect").innerHTML = kremilsIncorrectCounter;
        document.getElementById("kremilsSkip").innerHTML = kremilsSkipCounter;
        document.getElementById("kremilsTotalRespondentOnFirstAttempt").innerHTML = kremilsTotalRespondentOnFirstAttempt;
        document.getElementById("kremilsTotalAttempt").innerHTML = kremilsTotalAttempt;

        document.getElementById("lactacydScore").innerHTML = snapshot.hasChild('lactacyd') && snapshot.val().lactacyd.total != null ? snapshot.val().lactacyd.total.avgScore.toFixed(2) : 0;
        document.getElementById("lactacydTotalScore").innerHTML = lactacydScoreArray.reduce(getSum);
        document.getElementById("lactacydHighestScore").innerHTML = Math.max.apply(null, lactacydScoreArray);
        document.getElementById("lactacydLowestScore").innerHTML = Math.min.apply(null, lactacydScoreArray);
        document.getElementById("lactacydHints").innerHTML = snapshot.hasChild('lactacyd') && snapshot.val().lactacyd.total != null ? snapshot.val().lactacyd.total.avgHints.toFixed(2) : 0;
        document.getElementById("lactacydHighestHints").innerHTML = Math.max.apply(null, lactacydHintsArray);
        document.getElementById("lactacydLowestHints").innerHTML = Math.min.apply(null, lactacydHintsArray);
        document.getElementById("lactacydSeconds").innerHTML = snapshot.hasChild('lactacyd') && snapshot.val().lactacyd.total != null ? snapshot.val().lactacyd.total.avgSeconds.toFixed(2) : 0;
        document.getElementById("lactacydHighestSeconds").innerHTML = Math.max.apply(null, lactacydSecondsArray);
        document.getElementById("lactacydLowestSeconds").innerHTML = Math.min.apply(null, lactacydSecondsArray);
        document.getElementById("lactacydCorrect").innerHTML = lactacydCorrectCounter;
        document.getElementById("lactacydIncorrect").innerHTML = lactacydIncorrectCounter;
        document.getElementById("lactacydSkip").innerHTML = lactacydSkipCounter;
        document.getElementById("lactacydTotalRespondentOnFirstAttempt").innerHTML = lactacydTotalRespondentOnFirstAttempt;
        document.getElementById("lactacydTotalAttempt").innerHTML = lactacydTotalAttempt;

        document.getElementById("mcdoScore").innerHTML = snapshot.hasChild('mcdo') && snapshot.val().mcdo.total != null ? snapshot.val().mcdo.total.avgScore.toFixed(2) : 0;
        document.getElementById("mcdoTotalScore").innerHTML = mcdoScoreArray.reduce(getSum);
        document.getElementById("mcdoHighestScore").innerHTML = Math.max.apply(null, mcdoScoreArray);
        document.getElementById("mcdoLowestScore").innerHTML = Math.min.apply(null, mcdoScoreArray);
        document.getElementById("mcdoHints").innerHTML = snapshot.hasChild('mcdo') && snapshot.val().mcdo.total != null ? snapshot.val().mcdo.total.avgHints.toFixed(2) : 0;
        document.getElementById("mcdoHighestHints").innerHTML = Math.max.apply(null, mcdoHintsArray);
        document.getElementById("mcdoLowestHints").innerHTML = Math.min.apply(null, mcdoHintsArray);
        document.getElementById("mcdoSeconds").innerHTML = snapshot.hasChild('mcdo') && snapshot.val().mcdo.total != null ? snapshot.val().mcdo.total.avgSeconds.toFixed(2) : 0;
        document.getElementById("mcdoHighestSeconds").innerHTML = Math.max.apply(null, mcdoSecondsArray);
        document.getElementById("mcdoLowestSeconds").innerHTML = Math.min.apply(null, mcdoSecondsArray);
        document.getElementById("mcdoCorrect").innerHTML = mcdoCorrectCounter;
        document.getElementById("mcdoIncorrect").innerHTML = mcdoIncorrectCounter;
        document.getElementById("mcdoSkip").innerHTML = mcdoSkipCounter;
        document.getElementById("mcdoTotalRespondentOnFirstAttempt").innerHTML = mcdoTotalRespondentOnFirstAttempt;
        document.getElementById("mcdoTotalAttempt").innerHTML = mcdoTotalAttempt;

        document.getElementById("myraScore").innerHTML = snapshot.hasChild('myra') && snapshot.val().myra.total != null ? snapshot.val().myra.total.avgScore.toFixed(2) : 0;
        document.getElementById("myraTotalScore").innerHTML = myraScoreArray.reduce(getSum);
        document.getElementById("myraHighestScore").innerHTML = Math.max.apply(null, myraScoreArray);
        document.getElementById("myraLowestScore").innerHTML = Math.min.apply(null, myraScoreArray);
        document.getElementById("myraHints").innerHTML = snapshot.hasChild('myra') && snapshot.val().myra.total != null ? snapshot.val().myra.total.avgHints.toFixed(2) : 0;
        document.getElementById("myraHighestHints").innerHTML = Math.max.apply(null, myraHintsArray);
        document.getElementById("myraLowestHints").innerHTML = Math.min.apply(null, myraHintsArray);
        document.getElementById("myraSeconds").innerHTML = snapshot.hasChild('myra') && snapshot.val().myra.total != null ? snapshot.val().myra.total.avgSeconds.toFixed(2) : 0;
        document.getElementById("myraHighestSeconds").innerHTML = Math.max.apply(null, myraSecondsArray);
        document.getElementById("myraLowestSeconds").innerHTML = Math.min.apply(null, myraSecondsArray);
        document.getElementById("myraCorrect").innerHTML = myraCorrectCounter;
        document.getElementById("myraIncorrect").innerHTML = myraIncorrectCounter;
        document.getElementById("myraSkip").innerHTML = myraSkipCounter;
        document.getElementById("myraTotalRespondentOnFirstAttempt").innerHTML = myraTotalRespondentOnFirstAttempt;
        document.getElementById("myraTotalAttempt").innerHTML = myraTotalAttempt;

        document.getElementById("neozepScore").innerHTML = snapshot.hasChild('neozep') && snapshot.val().neozep.total != null ? snapshot.val().neozep.total.avgScore.toFixed(2) : 0;
        document.getElementById("neozepTotalScore").innerHTML = neozepScoreArray.reduce(getSum);
        document.getElementById("neozepHighestScore").innerHTML = Math.max.apply(null, neozepScoreArray);
        document.getElementById("neozepLowestScore").innerHTML = Math.min.apply(null, neozepScoreArray);
        document.getElementById("neozepHints").innerHTML = snapshot.hasChild('neozep') && snapshot.val().neozep.total != null ? snapshot.val().neozep.total.avgHints.toFixed(2) : 0;
        document.getElementById("neozepHighestHints").innerHTML = Math.max.apply(null, neozepHintsArray);
        document.getElementById("neozepLowestHints").innerHTML = Math.min.apply(null, neozepHintsArray);
        document.getElementById("neozepSeconds").innerHTML = snapshot.hasChild('neozep') && snapshot.val().neozep.total != null ? snapshot.val().neozep.total.avgSeconds.toFixed(2) : 0;
        document.getElementById("neozepHighestSeconds").innerHTML = Math.max.apply(null, neozepSecondsArray);
        document.getElementById("neozepLowestSeconds").innerHTML = Math.min.apply(null, neozepSecondsArray);
        document.getElementById("neozepCorrect").innerHTML = neozepCorrectCounter;
        document.getElementById("neozepIncorrect").innerHTML = neozepIncorrectCounter;
        document.getElementById("neozepSkip").innerHTML = neozepSkipCounter;
        document.getElementById("neozepTotalRespondentOnFirstAttempt").innerHTML = neozepTotalRespondentOnFirstAttempt;
        document.getElementById("neozepTotalAttempt").innerHTML = neozepTotalAttempt;

        document.getElementById("phcareScore").innerHTML = snapshot.hasChild('phcare') && snapshot.val().phcare.total != null ? snapshot.val().phcare.total.avgScore.toFixed(2) : 0;
        document.getElementById("phcareTotalScore").innerHTML = phcareScoreArray.reduce(getSum);
        document.getElementById("phcareHighestScore").innerHTML = Math.max.apply(null, phcareScoreArray);
        document.getElementById("phcareLowestScore").innerHTML = Math.min.apply(null, phcareScoreArray);
        document.getElementById("phcareHints").innerHTML = snapshot.hasChild('phcare') && snapshot.val().phcare.total != null ? snapshot.val().phcare.total.avgHints.toFixed(2) : 0;
        document.getElementById("phcareHighestHints").innerHTML = Math.max.apply(null, phcareHintsArray);
        document.getElementById("phcareLowestHints").innerHTML = Math.min.apply(null, phcareHintsArray);
        document.getElementById("phcareSeconds").innerHTML = snapshot.hasChild('phcare') && snapshot.val().phcare.total != null ? snapshot.val().phcare.total.avgSeconds.toFixed(2) : 0;
        document.getElementById("phcareHighestSeconds").innerHTML = Math.max.apply(null, phcareSecondsArray);
        document.getElementById("phcareLowestSeconds").innerHTML = Math.min.apply(null, phcareSecondsArray);
        document.getElementById("phcareCorrect").innerHTML = phcareCorrectCounter;
        document.getElementById("phcareIncorrect").innerHTML = phcareIncorrectCounter;
        document.getElementById("phcareSkip").innerHTML = phcareSkipCounter;
        document.getElementById("phcareTotalRespondentOnFirstAttempt").innerHTML = phcareTotalRespondentOnFirstAttempt;
        document.getElementById("phcareTotalAttempt").innerHTML = phcareTotalAttempt;

        document.getElementById("rexidolScore").innerHTML = snapshot.hasChild('rexidol') && snapshot.val().rexidol.total != null ? snapshot.val().rexidol.total.avgScore.toFixed(2) : 0;
        document.getElementById("rexidolTotalScore").innerHTML = rexidolScoreArray.reduce(getSum);
        document.getElementById("rexidolHighestScore").innerHTML = Math.max.apply(null, rexidolScoreArray);
        document.getElementById("rexidolLowestScore").innerHTML = Math.min.apply(null, rexidolScoreArray);
        document.getElementById("rexidolHints").innerHTML = snapshot.hasChild('rexidol') && snapshot.val().rexidol.total != null ? snapshot.val().rexidol.total.avgHints.toFixed(2) : 0;
        document.getElementById("rexidolHighestHints").innerHTML = Math.max.apply(null, rexidolHintsArray);
        document.getElementById("rexidolLowestHints").innerHTML = Math.min.apply(null, rexidolHintsArray);
        document.getElementById("rexidolSeconds").innerHTML = snapshot.hasChild('rexidol') && snapshot.val().rexidol.total != null ? snapshot.val().rexidol.total.avgSeconds.toFixed(2) : 0;
        document.getElementById("rexidolHighestSeconds").innerHTML = Math.max.apply(null, rexidolSecondsArray);
        document.getElementById("rexidolLowestSeconds").innerHTML = Math.min.apply(null, rexidolSecondsArray);
        document.getElementById("rexidolCorrect").innerHTML = rexidolCorrectCounter;
        document.getElementById("rexidolIncorrect").innerHTML = rexidolIncorrectCounter;
        document.getElementById("rexidolSkip").innerHTML = rexidolSkipCounter;
        document.getElementById("rexidolTotalRespondentOnFirstAttempt").innerHTML = rexidolTotalRespondentOnFirstAttempt;
        document.getElementById("rexidolTotalAttempt").innerHTML = rexidolTotalAttempt;

        document.getElementById("ritemedScore").innerHTML = snapshot.hasChild('ritemed') && snapshot.val().ritemed.total != null ? snapshot.val().ritemed.total.avgScore.toFixed(2) : 0;
        document.getElementById("ritemedTotalScore").innerHTML = ritemedScoreArray.reduce(getSum);
        document.getElementById("ritemedHighestScore").innerHTML = Math.max.apply(null, ritemedScoreArray);
        document.getElementById("ritemedLowestScore").innerHTML = Math.min.apply(null, ritemedScoreArray);
        document.getElementById("ritemedHints").innerHTML = snapshot.hasChild('ritemed') && snapshot.val().ritemed.total != null ? snapshot.val().ritemed.total.avgHints.toFixed(2) : 0;
        document.getElementById("ritemedHighestHints").innerHTML = Math.max.apply(null, ritemedHintsArray);
        document.getElementById("ritemedLowestHints").innerHTML = Math.min.apply(null, ritemedHintsArray);
        document.getElementById("ritemedSeconds").innerHTML = snapshot.hasChild('ritemed') && snapshot.val().ritemed.total != null ? snapshot.val().ritemed.total.avgSeconds.toFixed(2) : 0;
        document.getElementById("ritemedHighestSeconds").innerHTML = Math.max.apply(null, ritemedSecondsArray);
        document.getElementById("ritemedLowestSeconds").innerHTML = Math.min.apply(null, ritemedSecondsArray);
        document.getElementById("ritemedCorrect").innerHTML = ritemedCorrectCounter;
        document.getElementById("ritemedIncorrect").innerHTML = ritemedIncorrectCounter;
        document.getElementById("ritemedSkip").innerHTML = ritemedSkipCounter;
        document.getElementById("ritemedTotalRespondentOnFirstAttempt").innerHTML = ritemedTotalRespondentOnFirstAttempt;
        document.getElementById("ritemedTotalAttempt").innerHTML = ritemedTotalAttempt;

        document.getElementById("robitussinScore").innerHTML = snapshot.hasChild('robitussin') && snapshot.val().robitussin.total != null ? snapshot.val().robitussin.total.avgScore.toFixed(2) : 0;
        document.getElementById("robitussinTotalScore").innerHTML = robitussinScoreArray.reduce(getSum);
        document.getElementById("robitussinHighestScore").innerHTML = Math.max.apply(null, robitussinScoreArray);
        document.getElementById("robitussinLowestScore").innerHTML = Math.min.apply(null, robitussinScoreArray);
        document.getElementById("robitussinHints").innerHTML = snapshot.hasChild('robitussin') && snapshot.val().robitussin.total != null ? snapshot.val().robitussin.total.avgHints.toFixed(2) : 0;
        document.getElementById("robitussinHighestHints").innerHTML = Math.max.apply(null, robitussinHintsArray);
        document.getElementById("robitussinLowestHints").innerHTML = Math.min.apply(null, robitussinHintsArray);
        document.getElementById("robitussinSeconds").innerHTML = snapshot.hasChild('robitussin') && snapshot.val().robitussin.total != null ? snapshot.val().robitussin.total.avgSeconds.toFixed(2) : 0;
        document.getElementById("robitussinHighestSeconds").innerHTML = Math.max.apply(null, robitussinSecondsArray);
        document.getElementById("robitussinLowestSeconds").innerHTML = Math.min.apply(null, robitussinSecondsArray);
        document.getElementById("robitussinCorrect").innerHTML = robitussinCorrectCounter;
        document.getElementById("robitussinIncorrect").innerHTML = robitussinIncorrectCounter;
        document.getElementById("robitussinSkip").innerHTML = robitussinSkipCounter;
        document.getElementById("robitussinTotalRespondentOnFirstAttempt").innerHTML = robitussinTotalRespondentOnFirstAttempt;
        document.getElementById("robitussinTotalAttempt").innerHTML = robitussinTotalAttempt;

        document.getElementById("skelanScore").innerHTML = snapshot.hasChild('skelan') && snapshot.val().skelan.total != null ? snapshot.val().skelan.total.avgScore.toFixed(2) : 0;
        document.getElementById("skelanTotalScore").innerHTML = skelanScoreArray.reduce(getSum);
        document.getElementById("skelanHighestScore").innerHTML = Math.max.apply(null, skelanScoreArray);
        document.getElementById("skelanLowestScore").innerHTML = Math.min.apply(null, skelanScoreArray);
        document.getElementById("skelanHints").innerHTML = snapshot.hasChild('skelan') && snapshot.val().skelan.total != null ? snapshot.val().skelan.total.avgHints.toFixed(2) : 0;
        document.getElementById("skelanHighestHints").innerHTML = Math.max.apply(null, skelanHintsArray);
        document.getElementById("skelanLowestHints").innerHTML = Math.min.apply(null, skelanHintsArray);
        document.getElementById("skelanSeconds").innerHTML = snapshot.hasChild('skelan') && snapshot.val().skelan.total != null ? snapshot.val().skelan.total.avgSeconds.toFixed(2) : 0;
        document.getElementById("skelanHighestSeconds").innerHTML = Math.max.apply(null, skelanSecondsArray);
        document.getElementById("skelanLowestSeconds").innerHTML = Math.min.apply(null, skelanSecondsArray);
        document.getElementById("skelanCorrect").innerHTML = skelanCorrectCounter;
        document.getElementById("skelanIncorrect").innerHTML = skelanIncorrectCounter;
        document.getElementById("skelanSkip").innerHTML = skelanSkipCounter;
        document.getElementById("skelanTotalRespondentOnFirstAttempt").innerHTML = skelanTotalRespondentOnFirstAttempt;
        document.getElementById("skelanTotalAttempt").innerHTML = skelanTotalAttempt;

        document.getElementById("solmuxScore").innerHTML = snapshot.hasChild('solmux') && snapshot.val().solmux.total != null ? snapshot.val().solmux.total.avgScore.toFixed(2) : 0;
        document.getElementById("solmuxTotalScore").innerHTML = solmuxScoreArray.reduce(getSum);
        document.getElementById("solmuxHighestScore").innerHTML = Math.max.apply(null, solmuxScoreArray);
        document.getElementById("solmuxLowestScore").innerHTML = Math.min.apply(null, solmuxScoreArray);
        document.getElementById("solmuxHints").innerHTML = snapshot.hasChild('solmux') && snapshot.val().solmux.total != null ? snapshot.val().solmux.total.avgHints.toFixed(2) : 0;
        document.getElementById("solmuxHighestHints").innerHTML = Math.max.apply(null, solmuxHintsArray);
        document.getElementById("solmuxLowestHints").innerHTML = Math.min.apply(null, solmuxHintsArray);
        document.getElementById("solmuxSeconds").innerHTML = snapshot.hasChild('solmux') && snapshot.val().solmux.total != null ? snapshot.val().solmux.total.avgSeconds.toFixed(2) : 0;
        document.getElementById("solmuxHighestSeconds").innerHTML = Math.max.apply(null, solmuxSecondsArray);
        document.getElementById("solmuxLowestSeconds").innerHTML = Math.min.apply(null, solmuxSecondsArray);
        document.getElementById("solmuxCorrect").innerHTML = solmuxCorrectCounter;
        document.getElementById("solmuxIncorrect").innerHTML = solmuxIncorrectCounter;
        document.getElementById("solmuxSkip").innerHTML = solmuxSkipCounter;
        document.getElementById("solmuxTotalRespondentOnFirstAttempt").innerHTML = solmuxTotalRespondentOnFirstAttempt;
        document.getElementById("solmuxTotalAttempt").innerHTML = solmuxTotalAttempt;

        document.getElementById("tgpScore").innerHTML = snapshot.hasChild('tgp') && snapshot.val().tgp.total != null ? snapshot.val().tgp.total.avgScore.toFixed(2) : 0;
        document.getElementById("tgpTotalScore").innerHTML = tgpScoreArray.reduce(getSum);
        document.getElementById("tgpHighestScore").innerHTML = Math.max.apply(null, tgpScoreArray);
        document.getElementById("tgpLowestScore").innerHTML = Math.min.apply(null, tgpScoreArray);
        document.getElementById("tgpHints").innerHTML = snapshot.hasChild('tgp') && snapshot.val().tgp.total != null ? snapshot.val().tgp.total.avgHints.toFixed(2) : 0;
        document.getElementById("tgpHighestHints").innerHTML = Math.max.apply(null, tgpHintsArray);
        document.getElementById("tgpLowestHints").innerHTML = Math.min.apply(null, tgpHintsArray);
        document.getElementById("tgpSeconds").innerHTML = snapshot.hasChild('tgp') && snapshot.val().tgp.total != null ? snapshot.val().tgp.total.avgSeconds.toFixed(2) : 0;
        document.getElementById("tgpHighestSeconds").innerHTML = Math.max.apply(null, tgpSecondsArray);
        document.getElementById("tgpLowestSeconds").innerHTML = Math.min.apply(null, tgpSecondsArray);
        document.getElementById("tgpCorrect").innerHTML = tgpCorrectCounter;
        document.getElementById("tgpIncorrect").innerHTML = tgpIncorrectCounter;
        document.getElementById("tgpSkip").innerHTML = tgpSkipCounter;
        document.getElementById("tgpTotalRespondentOnFirstAttempt").innerHTML = tgpTotalRespondentOnFirstAttempt;
        document.getElementById("tgpTotalAttempt").innerHTML = tgpTotalAttempt;

        document.getElementById("uhpScore").innerHTML = snapshot.hasChild('uhp') && snapshot.val().uhp.total != null ? snapshot.val().uhp.total.avgScore.toFixed(2) : 0;
        document.getElementById("uhpTotalScore").innerHTML = uhpScoreArray.reduce(getSum);
        document.getElementById("uhpHighestScore").innerHTML = Math.max.apply(null, uhpScoreArray);
        document.getElementById("uhpLowestScore").innerHTML = Math.min.apply(null, uhpScoreArray);
        document.getElementById("uhpHints").innerHTML = snapshot.hasChild('uhp') && snapshot.val().uhp.total != null ? snapshot.val().uhp.total.avgHints.toFixed(2) : 0;
        document.getElementById("uhpHighestHints").innerHTML = Math.max.apply(null, uhpHintsArray);
        document.getElementById("uhpLowestHints").innerHTML = Math.min.apply(null, uhpHintsArray);
        document.getElementById("uhpSeconds").innerHTML = snapshot.hasChild('uhp') && snapshot.val().uhp.total != null ? snapshot.val().uhp.total.avgSeconds.toFixed(2) : 0;
        document.getElementById("uhpHighestSeconds").innerHTML = Math.max.apply(null, uhpSecondsArray);
        document.getElementById("uhpLowestSeconds").innerHTML = Math.min.apply(null, uhpSecondsArray);
        document.getElementById("uhpCorrect").innerHTML = uhpCorrectCounter;
        document.getElementById("uhpIncorrect").innerHTML = uhpIncorrectCounter;
        document.getElementById("uhpSkip").innerHTML = uhpSkipCounter;
        document.getElementById("uhpTotalRespondentOnFirstAttempt").innerHTML = uhpTotalRespondentOnFirstAttempt;
        document.getElementById("uhpTotalAttempt").innerHTML = uhpTotalAttempt;

        document.getElementById("unilabScore").innerHTML = snapshot.hasChild('unilab') && snapshot.val().unilab.total != null ? snapshot.val().unilab.total.avgScore.toFixed(2) : 0;
        document.getElementById("unilabTotalScore").innerHTML = unilabScoreArray.reduce(getSum);
        document.getElementById("unilabHighestScore").innerHTML = Math.max.apply(null, unilabScoreArray);
        document.getElementById("unilabLowestScore").innerHTML = Math.min.apply(null, unilabScoreArray);
        document.getElementById("unilabHints").innerHTML = snapshot.hasChild('unilab') && snapshot.val().unilab.total != null ? snapshot.val().unilab.total.avgHints.toFixed(2) : 0;
        document.getElementById("unilabHighestHints").innerHTML = Math.max.apply(null, unilabHintsArray);
        document.getElementById("unilabLowestHints").innerHTML = Math.min.apply(null, unilabHintsArray);
        document.getElementById("unilabSeconds").innerHTML = snapshot.hasChild('unilab') && snapshot.val().unilab.total != null ? snapshot.val().unilab.total.avgSeconds.toFixed(2) : 0;
        document.getElementById("unilabHighestSeconds").innerHTML = Math.max.apply(null, unilabSecondsArray);
        document.getElementById("unilabLowestSeconds").innerHTML = Math.min.apply(null, unilabSecondsArray);
        document.getElementById("unilabCorrect").innerHTML = unilabCorrectCounter;
        document.getElementById("unilabIncorrect").innerHTML = unilabIncorrectCounter;
        document.getElementById("unilabSkip").innerHTML = unilabSkipCounter;
        document.getElementById("unilabTotalRespondentOnFirstAttempt").innerHTML = unilabTotalRespondentOnFirstAttempt;
        document.getElementById("unilabTotalAttempt").innerHTML = unilabTotalAttempt;

        document.getElementById("vicksScore").innerHTML = snapshot.hasChild('vicks') && snapshot.val().vicks.total != null ? snapshot.val().vicks.total.avgScore.toFixed(2) : 0;
        document.getElementById("vicksTotalScore").innerHTML = vicksScoreArray.reduce(getSum);
        document.getElementById("vicksHighestScore").innerHTML = Math.max.apply(null, vicksScoreArray);
        document.getElementById("vicksLowestScore").innerHTML = Math.min.apply(null, vicksScoreArray);
        document.getElementById("vicksHints").innerHTML = snapshot.hasChild('vicks') && snapshot.val().vicks.total != null ? snapshot.val().vicks.total.avgHints.toFixed(2) : 0;
        document.getElementById("vicksHighestHints").innerHTML = Math.max.apply(null, vicksHintsArray);
        document.getElementById("vicksLowestHints").innerHTML = Math.min.apply(null, vicksHintsArray);
        document.getElementById("vicksSeconds").innerHTML = snapshot.hasChild('vicks') && snapshot.val().vicks.total != null ? snapshot.val().vicks.total.avgSeconds.toFixed(2) : 0;
        document.getElementById("vicksHighestSeconds").innerHTML = Math.max.apply(null, vicksSecondsArray);
        document.getElementById("vicksLowestSeconds").innerHTML = Math.min.apply(null, vicksSecondsArray);
        document.getElementById("vicksCorrect").innerHTML = vicksCorrectCounter;
        document.getElementById("vicksIncorrect").innerHTML = vicksIncorrectCounter;
        document.getElementById("vicksSkip").innerHTML = vicksSkipCounter;
        document.getElementById("vicksTotalRespondentOnFirstAttempt").innerHTML = vicksTotalRespondentOnFirstAttempt;
        document.getElementById("vicksTotalAttempt").innerHTML = vicksTotalAttempt;

        var totalAvgScore = parseFloat($('#advilScore').text()) + parseFloat($('#alaxanScore').text()) + parseFloat($('#ascofScore').text()) + parseFloat($('#biofluScore').text()) +
            parseFloat($('#biogesicScore').text()) + parseFloat($('#celetequeScore').text()) + parseFloat($('#centrumScore').text()) + parseFloat($('#cetaphilScore').text()) + 
            parseFloat($('#conzaceScore').text()) + parseFloat($('#decolgenScore').text()) + parseFloat($('#diatabsScore').text()) + parseFloat($('#efficascentScore').text()) +
            parseFloat($('#enervonScore').text()) + parseFloat($('#gatoradeScore').text()) + parseFloat($('#gyneproScore').text()) + parseFloat($('#kremilsScore').text()) +
            parseFloat($('#lactacydScore').text()) + parseFloat($('#mcdoScore').text()) + parseFloat($('#myraScore').text()) + parseFloat($('#neozepScore').text()) +
            parseFloat($('#phcareScore').text()) + parseFloat($('#rexidolScore').text()) + parseFloat($('#ritemedScore').text()) + parseFloat($('#robitussinScore').text()) +
            parseFloat($('#skelanScore').text()) + parseFloat($('#solmuxScore').text()) + parseFloat($('#tgpScore').text()) + parseFloat($('#uhpScore').text()) +
            parseFloat($('#unilabScore').text()) + parseFloat($('#vicksScore').text()) + parseFloat($('#allertaScore').text());

        var totalAvgHint = parseFloat($('#advilHints').text()) + parseFloat($('#alaxanHints').text()) + parseFloat($('#ascofHints').text()) + parseFloat($('#biofluHints').text()) +
            parseFloat($('#biogesicHints').text()) + parseFloat($('#celetequeHints').text()) + parseFloat($('#centrumHints').text()) + parseFloat($('#cetaphilHints').text()) + 
            parseFloat($('#conzaceHints').text()) + parseFloat($('#decolgenHints').text()) + parseFloat($('#diatabsHints').text()) + parseFloat($('#efficascentHints').text()) +
            parseFloat($('#enervonHints').text()) + parseFloat($('#gatoradeHints').text()) + parseFloat($('#gyneproHints').text()) + parseFloat($('#kremilsHints').text()) +
            parseFloat($('#lactacydHints').text()) + parseFloat($('#mcdoHints').text()) + parseFloat($('#myraHints').text()) + parseFloat($('#neozepHints').text()) +
            parseFloat($('#phcareHints').text()) + parseFloat($('#rexidolHints').text()) + parseFloat($('#ritemedHints').text()) + parseFloat($('#robitussinHints').text()) +
            parseFloat($('#skelanHints').text()) + parseFloat($('#solmuxHints').text()) + parseFloat($('#tgpHints').text()) + parseFloat($('#uhpHints').text()) +
            parseFloat($('#unilabHints').text()) + parseFloat($('#vicksHints').text()) + parseFloat($('#allertaHints').text());

        var totalAvgSecond = parseFloat($('#advilSeconds').text()) + parseFloat($('#alaxanSeconds').text()) + parseFloat($('#ascofSeconds').text()) + parseFloat($('#biofluSeconds').text()) +
            parseFloat($('#biogesicSeconds').text()) + parseFloat($('#celetequeSeconds').text()) + parseFloat($('#centrumSeconds').text()) + parseFloat($('#cetaphilSeconds').text()) + 
            parseFloat($('#conzaceSeconds').text()) + parseFloat($('#decolgenSeconds').text()) + parseFloat($('#diatabsSeconds').text()) + parseFloat($('#efficascentSeconds').text()) +
            parseFloat($('#enervonSeconds').text()) + parseFloat($('#gatoradeSeconds').text()) + parseFloat($('#gyneproSeconds').text()) + parseFloat($('#kremilsSeconds').text()) +
            parseFloat($('#lactacydSeconds').text()) + parseFloat($('#mcdoSeconds').text()) + parseFloat($('#myraSeconds').text()) + parseFloat($('#neozepSeconds').text()) +
            parseFloat($('#phcareSeconds').text()) + parseFloat($('#rexidolSeconds').text()) + parseFloat($('#ritemedSeconds').text()) + parseFloat($('#robitussinSeconds').text()) +
            parseFloat($('#skelanSeconds').text()) + parseFloat($('#solmuxSeconds').text()) + parseFloat($('#tgpSeconds').text()) + parseFloat($('#uhpSeconds').text()) +
            parseFloat($('#unilabSeconds').text()) + parseFloat($('#vicksSeconds').text()) + parseFloat($('#allertaSeconds').text());

        totalAvgScore = totalAvgScore / 31;
        totalAvgHint  = totalAvgHint / 31;
        totalAvgSecond  = totalAvgSecond / 31;
        totalScore  = totalScore / 31;

        document.getElementById("totalRespondentsOnFirstAttempt").innerHTML = totalRespondents;
        document.getElementById("totalAvgScore").innerHTML = totalAvgScore.toFixed(2);
        document.getElementById("totalScore").innerHTML = totalScore.toFixed(2);
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
