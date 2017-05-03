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
    $scope.time = 60;
    $scope.animate = true;

    $scope.startGame = function() {
        console.log("started game");
        //$scope.part1 = $scope.imageSrc[1].part1.src;
        $('.quadrant').removeClass('shake-slow shake-constant');
        $('.quadrant').css('padding', 0);
        setTimeout(function() {
            $('.board').addClass('animated zoomOut');
        }, 500);
        $('.board').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {
            if ($scope.animate) {
                console.log(array);
                $scope.$apply(function() {
                    $scope.part1 = $scope.imageSrc[array[0]].part1.src;
                    $scope.part2 = $scope.imageSrc[array[0]].part1.src;
                    $scope.part3 = $scope.imageSrc[array[0]].part1.src;
                    $scope.part4 = $scope.imageSrc[array[0]].part1.src;
                })
                $('.board').removeClass('animated zoomOut');
                $('.board').addClass('animated zoomIn');
            }

            //Switch flag to avoid repeating this function call
            $scope.animate = false;
        });

    }
});
var array = [0, 1, 2, 3, 4];
array = shuffle(array);

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
