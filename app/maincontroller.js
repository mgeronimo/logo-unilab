angular.module('myApp').controller("MainController", function($scope, $firebaseObject, $firebaseArray) {
    var ref = firebase.database().ref().child("images");

    $scope.imageSrc = $firebaseArray(ref);
    $scope.imageSrc.$loaded().then(function() {
        console.log($scope.imageSrc[0].part1.src);
        $scope.part1 = $scope.imageSrc[0].part1.src;
        $scope.part2 = $scope.imageSrc[0].part2.src;
        $scope.part3 = $scope.imageSrc[0].part3.src;
        $scope.part4 = $scope.imageSrc[0].part4.src;
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
        bar.animate(args.seconds / 30);
        if (args.seconds < 15 && args.seconds > 5) $('.answer').addClass('shake-little shake-constant');
        if (args.seconds < 5 && args.seconds < 15) $('.answer').addClass('shake-hard shake-constant');
        if (args.seconds == 0) $('.answer').removeClass('shake-little shake-hard shake-constant');
    });

    $scope.guess = function() {
        var userAnswer = $('.answer')[0].value;
	var rightAnswer = $scope.imageSrc[array[arrayCount]].$id;
	//Remove spaces and make all the characters lowercase
	userAnswer = userAnswer.replace(/\s+/g, '');
	userAnswer = userAnswer.toLowerCase();

	rightAnswer = rightAnswer.replace(/\s+/g, '');
	rightAnswer = rightAnswer.toLowerCase();

	if (userAnswer === rightAnswer) {
	}
	else {
            Materialize.toast('Incorrect guess. Try again!', 3000)
	}
	
    }
});
var array = [0, 1, 2, 3, 4];
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

var bar = new ProgressBar.SemiCircle(progressBar, {
    strokeWidth: 6,
    color: '#FFEA82',
    trailColor: '#eee',
    trailWidth: 1,
    easing: 'easeInOut',
    duration: 1400,
    svgStyle: null,
    text: {
        value: '',
        alignToBottom: false
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
