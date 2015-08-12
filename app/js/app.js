/**
 * Created by ttf on 15-8-11.
 */
angular.module("myApp", ['workOut', 'ngRoute']);
angular.module("workOut", []);

angular.module("myApp").config(function($routeProvider){

    $routeProvider.when("/start",{

        templateUrl:'partial/start.html'

    }).when("/workout",{
        templateUrl:'partial/workout.html'
    }).when("/finish",{
        templateUrl:'partial/end.html'
    }).otherwise({
        templateUrl:'partial/start.html'
    });

});