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

    $scope.showHint = function() {
        if (revealCount == 4) {
            Materialize.toast('You already have the whole picture!', 3000)
            return;
        }

        $('.quadrant' + revealArray[revealCount]).css('opacity', 1);
        revealCount++;

    }

    $scope.startGame = function() {
        console.log("started game");
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

    $scope.next = function() {
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
            $scope.next();

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

        $scope.next();
    }
});
var array = [];
var itemCount = 27;
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
