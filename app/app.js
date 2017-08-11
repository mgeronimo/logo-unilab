'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
    'ngRoute',
    'myApp.view1',
    'myApp.view2',
    'myApp.version',
    'firebase',
    'timer'
]).
config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
    //$locationProvider.hashPrefix('!');
    //Remove #! from URL
    $locationProvider.html5Mode({
        enabled: true,
        requireBase: false
    });

    $routeProvider.otherwise({
        redirectTo: '/'
    });
}]);

function beginShake(quadrant) {
    $("." + quadrant).addClass("shake-slow shake-constant");
}

testJS();

function testJS() {
    var language = {
        english: {
            q1: {
                spiel: "I have here a description of a product that I would like to ask you to read. Please read it and I will ask for your opinion regarding it right after. There are no right or wrong answers, your honest opinion will greatly help us. Please feel free to share your honest opinion whether this is positive or negative. <br> Please read this [HAND CONCEPT TO RESPONDENT]. Please tell me if you are done reading. Take your time in reading. <br> [AFTER RESPONDENT FINISHES READING THE CONCEPT] <br> Let’s read it together before we start with the interview. [READ THE CONCEPT OUT LOUD]",
                question: "Q1. LIKES. MA <br> [SHOW SCREEN TO RESPONDENT, SHOWING THE CONCEPT] <br/> Here is the concept that you read earlier. Please choose the phrases or words that you liked. Just highlight the phrases or words that you choose will have a green highlight. This means that these are the phrases or words that you liked about the concept. Let’s start, please choose the phrases or words that you liked. What else? Anything else?",
                text: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"
            }
        },
        filipino: {}
    }
    console.log(language.english.q1.spiel);
}

//setTimeout(function(){ beginShake("quadrant1") }, 300);
//setTimeout(function(){ beginShake("quadrant3") }, 600);
//setTimeout(function(){ beginShake("quadrant4") }, 900);
//setTimeout(function(){ beginShake("quadrant2") }, 1200);
