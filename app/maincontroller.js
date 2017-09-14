angular.module('myApp').controller("MainController", function($scope, $firebaseObject, $firebaseArray) {
    var ref = firebase.database().ref().child("images");
    $scope.part1 = "images/speed-logo-1.png";
    $scope.part2 = "images/speed-logo-2.png";
    $scope.part3 = "images/speed-logo-3.png";
    $scope.part4 = "images/speed-logo-4.png";
    $scope.imageSrc = $firebaseArray(ref);
    $scope.imageSrc.$loaded().then(function() {
        console.log($scope.imageSrc[0].part1.src);

        console.log($scope.imageSrc.length);
        $scope.itemCount = $scope.imageSrc.length;
        $('#wholeGame').show();
        $('.sk-cube-grid').hide();
    });

    $scope.hide = false;
    $scope.remaining = 5;
    $scope.time = 30;
    $scope.animate = true;
    $scope.playButtonsHide = true;
    $scope.part1Hide = false;
    $scope.part2Hide = false;
    $scope.part3Hide = false;
    $scope.part4Hide = false;
    $scope.finalScore = 0;
    $scope.itemLeft = 1;

    //Initialize array of scores
    $scope.scoreArray = new Map();

    //Initialize Facebook provider object;
    var provider = new firebase.auth.FacebookAuthProvider();

    $scope.showHint = function() {
        if (revealCount == 4) {
            Materialize.toast('You already have the whole picture!', 3000)
            return;
        }

        $('.quadrant' + revealArray[revealCount]).css('opacity', 1);
        revealCount++;

    }

    $scope.fbLogin = function() {
        firebase.auth().signInWithPopup(provider).then(function(result) {
            // This gives you a Facebook Access Token. You can use it to access the Facebook API.
            var token = result.credential.accessToken;
            // The signed-in user info.
            var user = result.user;
            console.log(user);
            $scope.user = user;
            console.log(result.additionalUserInfo.profile);
            $scope.profile = result.additionalUserInfo.profile;
            //Add user profile to database
            var ref = firebase.database().ref('/users/' + $scope.user.uid);
            ref.once("value").then(function(snapshot) {
                ref.child('name').set($scope.profile.name);
                ref.child('age').set($scope.profile.age_range.min);
                ref.child('sex').set($scope.profile.gender);
            });


        }).catch(function(error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            console.log(errorMessage);
            // The email of the user's account used.
            var email = error.email;
            // The firebase.auth.AuthCredential type that was used.
            var credential = error.credential;
        });
    }

    $scope.fbLogout = function() {
        firebase.auth().signOut().then(function() {
            // Sign-out successful.
            console.log("Sign out successful");
        }).catch(function(error) {
            // An error happened.
            console.log(error);
        });
    }

    $scope.startGame = function() {
        console.log("started game");

        //Record attempt
        recordAttempt();

        $('.start-button').addClass('animated zoomOut');

        $('.quadrant').removeClass('shake-slow shake-constant');
        $('.quadrant').css('padding', 0);
        setTimeout(function() {
            $('.board').addClass('animated zoomOut');
            $('.quadrant').css('opacity', 0);
        }, 500);

        //Logo disappears
        $('.board').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {
            if ($scope.animate) {
                console.log(array);
                $scope.$apply(function() {
                    //Change the logo to the first picture in the set
                    $scope.part1 = $scope.imageSrc[array[arrayCount]].part1.src;
                    $scope.part2 = $scope.imageSrc[array[arrayCount]].part2.src;
                    $scope.part3 = $scope.imageSrc[array[arrayCount]].part3.src;
                    $scope.part4 = $scope.imageSrc[array[arrayCount]].part4.src;
                    //Show random first tile
                    $('.quadrant' + revealArray[revealCount]).css('opacity', 1);
                    revealCount++;
                })
                $('.board').removeClass('animated zoomOut');
                $('.board').addClass('animated zoomIn');
            }

            //Switch flag to avoid repeating this function call
            $scope.animate = false;
        });

        //Start button disappears
        $('.start-button').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {
            $scope.hide = true;
            $scope.playButtonsHide = false;
            $('.play-buttons').addClass('animated fadeInUp');
        });

        //Play buttons finish their entrance
        $('.play-buttons').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {
            $scope.$broadcast('timer-start');
        });
    }
    $scope.$on('timer-tick', function(event, args) {
        $scope.currentTime = 30 - args.seconds;
        bar.animate(args.seconds / 30);
        if (args.seconds < 15 && args.seconds > 5) $('.answer').addClass('shake-little shake-constant');
        if (args.seconds == 0) {
            $('.answer').removeClass('shake-little shake-hard shake-constant');
            $scope.skip();
        }
    });

    $scope.end = function() {
        $scope.playButtonsHide = true;
        Materialize.toast('Congratulations!', 3000, 'successToast');
        $scope.$broadcast('timer-stop');
    }

    $scope.calcScore = function() {
        var avg = 0;
        var sum = 0;
        for (var [brand, score] of $scope.scoreArray) {
            console.log(brand + ' = ' + score);
            sum += score;
        }
        avg = sum / $scope.scoreArray.size;
        return Math.round(avg);
    }

    $scope.next = function(guess) {
        //Record if failed to guess
        if (!guess) {
            var user = firebase.auth().currentUser;
            var currentTime = $scope.currentTime;
            var rightAnswer = $scope.imageSrc[array[arrayCount]].$id;
            rightAnswer = rightAnswer.replace(/\s+/g, '');
            rightAnswer = rightAnswer.toLowerCase();
            var brandRef = firebase.database().ref('/users/' + user.uid + '/' + rightAnswer);
            brandRef.once('value').then(function(snapshot) {
                if (!snapshot.exists()) {
                    brandRef.child('firstScore').set(0);
                    brandRef.child('firstHints').set(revealCount);
                    brandRef.child('firstSeconds').set(currentTime);
                    brandRef.child('firstGuess').set(false);
                    brandRef.child('avgScore').set(0);
                    brandRef.child('avgHints').set(revealCount);
                    brandRef.child('avgSeconds').set(currentTime);
                    brandRef.child('avgGuess').set(0);
                    brandRef.child('sumScore').set(0);
                    brandRef.child('sumHints').set(revealCount);
                    brandRef.child('sumSeconds').set(currentTime);
                    brandRef.child('sumGuess').set(0);
                    brandRef.child('guessRightCount').set(0);
                    brandRef.child('attempt').set(1);
                    brandRef.child('guessRightOnAttempt').set(0);
                } else {
                    var sumScore = snapshot.val().sumScore + 0;
                    var sumHints = snapshot.val().sumHints + revealCount;
                    var sumSeconds = snapshot.val().sumSeconds + currentTime;
                    var sumGuess = snapshot.val().sumGuess + 0;
                    var attempt = snapshot.val().attempt + 1;
                    brandRef.child('avgScore').set((sumScore) / attempt);
                    brandRef.child('avgHints').set((sumHints) / attempt);
                    brandRef.child('avgSeconds').set((sumSeconds) / attempt);
                    brandRef.child('avgGuess').set(Math.round((sumGuess) / attempt));
                    brandRef.child('sumScore').set(sumScore);
                    brandRef.child('sumHints').set(sumHints);
                    brandRef.child('sumSeconds').set(sumSeconds);
                    brandRef.child('sumGuess').set(sumGuess);
                    brandRef.child('guessRightCount').set(snapshot.val().guessRightCount + 0);
                    brandRef.child('attempt').set(snapshot.val().attempt + 1);
                }
                
                reportTally(rightAnswer);

            });
        }

        //Show score
        $scope.finalScore = $scope.calcScore();

        //Increment pic count
        $scope.itemLeft++;

        //Clear the input box
        console.log($('.answer').val());
        $('.answer').val('');
        $('.answer').removeClass('shake-little shake-constant shake-hard');

        //Hide all and show a random tile.
        revealCount = 0;
        revealArray = shuffle(revealArray);
        $('.quadrant').css('opacity', 0);
        $scope.showHint();

        //Change photos
        if (arrayCount == itemCount - 1) $scope.end();
        else arrayCount++;

        $scope.part1 = $scope.imageSrc[array[arrayCount]].part1.src;
        $scope.part2 = $scope.imageSrc[array[arrayCount]].part2.src;
        $scope.part3 = $scope.imageSrc[array[arrayCount]].part3.src;
        $scope.part4 = $scope.imageSrc[array[arrayCount]].part4.src;
        //Reset time
        $scope.$broadcast('timer-reset');
        $scope.$broadcast('timer-start');
    }

    $scope.guess = function() {
        var userAnswer = $('.answer').val();
        var rightAnswer = $scope.imageSrc[array[arrayCount]].$id;
        //Remove spaces and make all the characters lowercase
        userAnswer = userAnswer.replace(/\s+/g, '');
        userAnswer = userAnswer.toLowerCase();

        rightAnswer = rightAnswer.replace(/\s+/g, '');
        rightAnswer = rightAnswer.toLowerCase();

        if (userAnswer === rightAnswer) {
            var hintScore;
            var timeScore;
            var currentTime = $scope.currentTime;
            var totalScore;
            //Calculate score
            console.log(revealCount);
            $scope.revealCount = revealCount;
            console.log($scope.currentTime);
            switch (revealCount) {
                case 1:
                    hintScore = 50;
                    break;
                case 2:
                    hintScore = 40;
                    break;
                case 3:
                    hintScore = 30;
                    break;
                case 4:
                    hintScore = 20;
                    break;
                default:
                    hintScore = 0;
            }

            if (currentTime < 8) timeScore = 50;
            else if (currentTime < 16) timeScore = 40;
            else if (currentTime < 23) timeScore = 30;
            else if (currentTime < 30) timeScore = 20;

            totalScore = hintScore + timeScore;
            console.log("Your total score is: " + totalScore);

            //Log score for current guess
            $scope.scoreArray.set(rightAnswer, totalScore);
            console.log($scope.scoreArray);


            //Toast
            Materialize.toast('Correct!', 3000, 'successToast');

            //Record
            var user = firebase.auth().currentUser;

            var brandRef = firebase.database().ref('/users/' + user.uid + '/' + rightAnswer);
            brandRef.once('value').then(function(snapshot) {
                if (!snapshot.exists()) {
                    brandRef.child('firstScore').set(totalScore);
                    brandRef.child('firstHints').set($scope.revealCount);
                    brandRef.child('firstSeconds').set(currentTime);
                    brandRef.child('firstGuess').set(true);
                    brandRef.child('avgScore').set(totalScore);
                    brandRef.child('avgHints').set($scope.revealCount);
                    brandRef.child('avgSeconds').set(currentTime);
                    brandRef.child('avgGuess').set(100);
                    brandRef.child('sumScore').set(totalScore);
                    brandRef.child('sumHints').set($scope.revealCount);
                    brandRef.child('sumSeconds').set(currentTime);
                    brandRef.child('sumGuess').set(100);
                    brandRef.child('guessRightCount').set(1);
                    brandRef.child('attempt').set(1);
                    brandRef.child('guessRightOnAttempt').set(1);
                } else {
                    var sumScore = snapshot.val().sumScore + totalScore;
                    var sumHints = snapshot.val().sumHints + $scope.revealCount;
                    var sumSeconds = snapshot.val().sumSeconds + currentTime;
                    var sumGuess = snapshot.val().sumGuess + 100;
                    var attempt = snapshot.val().attempt + 1;
                    brandRef.child('avgScore').set((sumScore) / attempt);
                    brandRef.child('avgHints').set((sumHints) / attempt);
                    brandRef.child('avgSeconds').set((sumSeconds) / attempt);
                    brandRef.child('avgGuess').set(Math.round((sumGuess) / attempt));
                    brandRef.child('sumScore').set(sumScore);
                    brandRef.child('sumHints').set(sumHints);
                    brandRef.child('sumSeconds').set(sumSeconds);
                    brandRef.child('sumGuess').set(sumGuess);
                    brandRef.child('guessRightCount').set(snapshot.val().guessRightCount + 1);
                    brandRef.child('attempt').set(snapshot.val().attempt + 1);
                    if (snapshot.val().guessRightOnAttempt == 0) {
                        brandRef.child('guessRightOnAttempt').set(attempt);
                    }
                }
                //Tally everything
                reportTally(rightAnswer);

                

            });




            $scope.next(true);

        } else {
            Materialize.toast('Try again!', 3000);
        }

    }

    $scope.skip = function() {
        //Log score for current guess
        var rightAnswer = $scope.imageSrc[array[arrayCount]].$id;
        rightAnswer = rightAnswer.replace(/\s+/g, '');
        rightAnswer = rightAnswer.toLowerCase();
        $scope.scoreArray.set(rightAnswer, 0);
        console.log($scope.scoreArray);

        $scope.next(false);
    }
});
var array = [];
var itemCount = 31;
//Initialize array
for (var i = 0; i < itemCount; i++) {
    array.push(i);
}

var revealArray = [1, 2, 3, 4];
var revealCount = 0;
var arrayCount = 0;
array = shuffle(array);
revealArray = shuffle(revealArray);

function shuffle(array) {
    var currentIndex = array.length,
        temporaryValue, randomIndex;
    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        // And swap it with the current element.
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }
    return array;
}

var bar = new ProgressBar.Line(progressBar, {
    strokeWidth: 6,
    color: '#FFEA82',
    trailColor: '#eee',
    trailWidth: 1,
    easing: 'easeInOut',
    duration: 1400,
    svgStyle: null,
    text: {
        value: '',
        alignToBottom: false,
        style: {
            // Text color.
            // Default: same as stroke color (options.color)
            color: '#999',
            position: 'absolute',
            right: '0',
            top: '30px',
            padding: 0,
            margin: 0,
            transform: null
        },
    },
    from: {
        color: '#F44336'
    },
    to: {
        color: '#1976D2'
    },
    // Set default step function for all animate calls
    step: (state, bar) => {
        bar.path.setAttribute('stroke', state.color);
        var value = Math.round(bar.value() * 30);
        if (value === 0) {
            bar.setText('');
        } else {
            bar.setText(value);
        }

        bar.text.style.color = state.color;
    }
});

bar.text.style.fontSize = '2rem';
